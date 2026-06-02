const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_PATH = "/arze-price-list";
const HTML_DIRS = ["", "en", "ar"];
const CHECK_EXTENSIONS = new Set([".html", ".css"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

function filesToCheck() {
  const htmlFiles = HTML_DIRS.flatMap((dir) => {
    const fullDir = path.join(ROOT, dir);
    return walk(fullDir).filter((filePath) => path.extname(filePath) === ".html");
  });
  const cssFiles = walk(path.join(ROOT, "css")).filter((filePath) => path.extname(filePath) === ".css");
  return [...new Set([...htmlFiles, ...cssFiles])];
}

function extractReferences(content, extension) {
  const references = [];
  if (extension === ".html") {
    const htmlPattern = /\b(?:href|src)=["']([^"']+)["']/gi;
    let match;
    while ((match = htmlPattern.exec(content))) {
      references.push(match[1]);
    }
  }

  if (extension === ".css" || extension === ".html") {
    const cssPattern = /url\(["']?([^"')]+)["']?\)/gi;
    let match;
    while ((match = cssPattern.exec(content))) {
      references.push(match[1]);
    }
  }

  return references;
}

function isExternal(reference) {
  return /^(https?:|mailto:|tel:|sms:|whatsapp:|data:|blob:|#)/i.test(reference);
}

function withoutQueryOrHash(reference) {
  return reference.split("#")[0].split("?")[0];
}

function localTargetFor(filePath, reference) {
  const cleanReference = withoutQueryOrHash(reference.trim());
  if (!cleanReference || isExternal(cleanReference)) return null;

  let target;
  if (cleanReference.startsWith(SITE_PATH)) {
    target = path.join(ROOT, cleanReference.slice(SITE_PATH.length));
  } else if (cleanReference.startsWith("/")) {
    target = path.join(ROOT, cleanReference.slice(1));
  } else {
    target = path.resolve(path.dirname(filePath), cleanReference);
  }

  if (cleanReference.endsWith("/") || !path.extname(target)) {
    target = path.join(target, "index.html");
  }

  return target;
}

function verifyReference(filePath, reference) {
  const target = localTargetFor(filePath, reference);
  if (!target) return null;
  if (fs.existsSync(target)) return null;

  return {
    file: path.relative(ROOT, filePath),
    reference,
    expected: path.relative(ROOT, target)
  };
}

function main() {
  const failures = [];

  filesToCheck().forEach((filePath) => {
    const extension = path.extname(filePath);
    if (!CHECK_EXTENSIONS.has(extension)) return;

    const content = fs.readFileSync(filePath, "utf8");
    extractReferences(content, extension).forEach((reference) => {
      const failure = verifyReference(filePath, reference);
      if (failure) failures.push(failure);
    });
  });

  if (failures.length > 0) {
    failures.forEach((failure) => {
      console.error(`${failure.file}: missing ${failure.reference} -> ${failure.expected}`);
    });
    throw new Error(`Found ${failures.length} broken local links or assets.`);
  }

  console.log(`Checked local links and assets across ${filesToCheck().length} HTML/CSS files.`);
}

main();
