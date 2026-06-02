const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML_ROOTS = ["index.html", "en", "ar"];
const SITE_URL = "https://wbstudio.xyz/arze-price-list";

function walk(target) {
  const fullPath = path.join(ROOT, target);
  if (!fs.existsSync(fullPath)) return [];
  const stat = fs.statSync(fullPath);
  if (stat.isFile()) return [fullPath];

  return fs.readdirSync(fullPath, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) return walk(path.relative(ROOT, entryPath));
    return [entryPath];
  });
}

function htmlFiles() {
  return HTML_ROOTS.flatMap(walk)
    .filter((filePath) => path.extname(filePath) === ".html")
    .sort();
}

function relative(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function attrValue(tag, attrName) {
  const pattern = new RegExp(`${attrName}=["']([^"']+)["']`, "i");
  const match = tag.match(pattern);
  return match ? match[1].trim() : "";
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)];
}

function jsonLdBlocks(html) {
  return matches(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
}

function assertPage(condition, filePath, message, failures) {
  if (!condition) failures.push(`${relative(filePath)}: ${message}`);
}

function verifyJsonLd(filePath, html, failures) {
  const blocks = jsonLdBlocks(html);
  assertPage(blocks.length > 0, filePath, "should include at least one JSON-LD block.", failures);

  blocks.forEach((block, index) => {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      failures.push(`${relative(filePath)}: JSON-LD block ${index + 1} should parse cleanly (${error.message}).`);
    }
  });
}

function verifyImages(filePath, html, failures) {
  matches(html, /<img\b[^>]*>/gi).forEach((match) => {
    const tag = match[0];
    const src = attrValue(tag, "src") || "unknown image";
    const alt = attrValue(tag, "alt");
    assertPage(alt.length >= 5, filePath, `image ${src} should have meaningful alt text.`, failures);
  });
}

function verifyPage(filePath) {
  const failures = [];
  const html = fs.readFileSync(filePath, "utf8");
  const titleMatches = matches(html, /<title>([\s\S]*?)<\/title>/gi);
  const descriptionMatches = matches(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/?>/gi);
  const h1Matches = matches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  const canonicalMatches = matches(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/?>/gi);

  assertPage(titleMatches.length === 1, filePath, "should include exactly one title tag.", failures);
  if (titleMatches.length === 1) {
    const title = stripTags(titleMatches[0][1]);
    assertPage(title.length >= 25 && title.length <= 70, filePath, `title should be 25-70 characters (${title.length}).`, failures);
    assertPage(/Arzé|أرزة/i.test(title), filePath, "title should include the Arzé brand.", failures);
  }

  assertPage(descriptionMatches.length === 1, filePath, "should include exactly one meta description.", failures);
  if (descriptionMatches.length === 1) {
    const description = descriptionMatches[0][1].trim();
    assertPage(description.length >= 70 && description.length <= 180, filePath, `meta description should be 70-180 characters (${description.length}).`, failures);
    assertPage(/Jeddah|جدة/i.test(description), filePath, "meta description should mention Jeddah.", failures);
  }

  assertPage(h1Matches.length === 1, filePath, "should include exactly one H1.", failures);
  if (h1Matches.length === 1) {
    assertPage(stripTags(h1Matches[0][1]).length >= 8, filePath, "H1 should be descriptive.", failures);
  }

  assertPage(canonicalMatches.length === 1, filePath, "should include exactly one canonical link.", failures);
  if (canonicalMatches.length === 1) {
    assertPage(canonicalMatches[0][1].startsWith(SITE_URL), filePath, "canonical should use the production site URL.", failures);
  }

  if (/[/\\](en|ar)[/\\]/.test(filePath)) {
    assertPage(/hreflang=["']en["']/i.test(html), filePath, "should include English hreflang.", failures);
    assertPage(/hreflang=["']ar["']/i.test(html), filePath, "should include Arabic hreflang.", failures);
  }

  verifyJsonLd(filePath, html, failures);
  verifyImages(filePath, html, failures);
  return failures;
}

function main() {
  const files = htmlFiles();
  const failures = files.flatMap(verifyPage);

  if (failures.length > 0) {
    failures.forEach((failure) => console.error(failure));
    throw new Error(`Found ${failures.length} page quality issues.`);
  }

  console.log(`Checked page quality metadata, headings, schema and image alt text across ${files.length} HTML pages.`);
}

main();
