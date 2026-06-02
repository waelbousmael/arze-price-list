const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HTML_ROOTS = ["index.html", "en", "ar"];
const PHONE_NUMBER = "966598256743";
const SOCIAL_PLATFORMS = ["instagram", "tiktok", "snapchat"];

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

function attrValue(tag, attrName) {
  const pattern = new RegExp(`${attrName}=["']([^"']+)["']`, "i");
  const match = tag.match(pattern);
  return match ? match[1].replace(/&amp;/g, "&").trim() : "";
}

function anchors(html) {
  return [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => match[0]);
}

function isGeneratedSeoPage(filePath) {
  return /[/\\](en|ar)[/\\]/.test(filePath);
}

function assertPage(condition, filePath, message, failures) {
  if (!condition) failures.push(`${relative(filePath)}: ${message}`);
}

function whatsAppMessage(href) {
  try {
    return new URL(href).searchParams.get("text") || "";
  } catch (error) {
    return "";
  }
}

function verifyWhatsApp(filePath, pageAnchors, failures) {
  const whatsAppAnchors = pageAnchors.filter((tag) => attrValue(tag, "href").includes("wa.me"));
  assertPage(whatsAppAnchors.length >= 1, filePath, "should include at least one WhatsApp booking link.", failures);

  whatsAppAnchors.forEach((tag) => {
    const href = attrValue(tag, "href");
    assertPage(href.includes(PHONE_NUMBER), filePath, "WhatsApp link should use the canonical Arzé phone number.", failures);
    assertPage(attrValue(tag, "data-track") === "whatsapp_click", filePath, "WhatsApp link should fire whatsapp_click.", failures);
    assertPage(attrValue(tag, "data-page").length > 0, filePath, "WhatsApp link should include data-page context.", failures);
    if (isGeneratedSeoPage(filePath)) {
      assertPage(/utm_source=organic_(seo|article)/.test(href), filePath, "generated page WhatsApp link should preserve organic booking attribution.", failures);
      assertPage(/utm_medium=website/.test(href), filePath, "generated page WhatsApp link should use utm_medium=website.", failures);
      assertPage(/utm_campaign=[a-z0-9-]+/.test(href), filePath, "generated page WhatsApp link should include a campaign slug.", failures);
      const message = whatsAppMessage(href);
      assertPage(message.includes("Source:") || message.includes("المصدر:"), filePath, "generated page WhatsApp message should include the source page.", failures);
    }
  });
}

function verifyPhone(filePath, pageAnchors, failures) {
  const phoneAnchors = pageAnchors.filter((tag) => attrValue(tag, "href").startsWith("tel:"));
  assertPage(phoneAnchors.length >= 1, filePath, "should include at least one phone link.", failures);

  phoneAnchors.forEach((tag) => {
    const href = attrValue(tag, "href").replace(/\D/g, "");
    assertPage(href === PHONE_NUMBER, filePath, "phone link should use the canonical Arzé phone number.", failures);
    assertPage(attrValue(tag, "data-track") === "phone_click", filePath, "phone link should fire phone_click.", failures);
    assertPage(attrValue(tag, "data-page").length > 0, filePath, "phone link should include data-page context.", failures);
  });
}

function verifySocial(filePath, pageAnchors, failures) {
  SOCIAL_PLATFORMS.forEach((platform) => {
    const matchingAnchors = pageAnchors.filter((tag) => attrValue(tag, "data-platform") === platform);
    assertPage(matchingAnchors.length >= 1, filePath, `should include a ${platform} link.`, failures);
    matchingAnchors.forEach((tag) => {
      assertPage(attrValue(tag, "data-track") === "social_click", filePath, `${platform} link should fire social_click.`, failures);
      assertPage(attrValue(tag, "data-page").length > 0, filePath, `${platform} link should include data-page context.`, failures);
    });
  });
}

function verifyPage(filePath) {
  const failures = [];
  const html = fs.readFileSync(filePath, "utf8");
  const pageAnchors = anchors(html);

  verifyWhatsApp(filePath, pageAnchors, failures);
  verifyPhone(filePath, pageAnchors, failures);
  verifySocial(filePath, pageAnchors, failures);

  return failures;
}

function main() {
  const files = htmlFiles();
  const failures = files.flatMap(verifyPage);

  if (failures.length > 0) {
    failures.forEach((failure) => console.error(failure));
    throw new Error(`Found ${failures.length} conversion path issues.`);
  }

  console.log(`Checked WhatsApp, phone and social conversion paths across ${files.length} HTML pages.`);
}

main();
