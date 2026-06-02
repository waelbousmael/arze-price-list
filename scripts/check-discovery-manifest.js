const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://wbstudio.xyz/arze-price-list";
const REQUIRED_FILES = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "css/styles.css",
  "css/seo-pages.css",
  "js/app.js",
  "js/tracking.js",
  "assets/logo.png",
  "assets/images/arze-spa-price-list-og.jpg"
];
const REQUIRED_DIRS = ["en", "ar", "assets", "assets/images", "assets/icons"];
const MIN_GENERATED_PAGE_COUNT = 56;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

function countGeneratedPages() {
  return ["en", "ar"].reduce((count, dir) => {
    return count + walk(path.join(ROOT, dir)).filter((filePath) => path.basename(filePath) === "index.html").length;
  }, 0);
}

function sitemapUrls() {
  const sitemap = read("sitemap.xml");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function verifyManifest() {
  REQUIRED_FILES.forEach((filePath) => {
    assert(exists(filePath), `Missing required deploy file: ${filePath}`);
  });
  REQUIRED_DIRS.forEach((dirPath) => {
    assert(exists(dirPath), `Missing required deploy directory: ${dirPath}`);
  });
  assert(countGeneratedPages() >= MIN_GENERATED_PAGE_COUNT, `Expected at least ${MIN_GENERATED_PAGE_COUNT} generated SEO pages.`);
}

function verifyRobots() {
  const robots = read("robots.txt");
  assert(robots.includes("User-agent: *"), "robots.txt should allow generic crawlers.");
  assert(robots.includes("Allow: /"), "robots.txt should allow crawling.");
  assert(robots.includes(`Sitemap: ${BASE_URL}/sitemap.xml`), "robots.txt should point to the production sitemap.");
}

function verifySitemapDiscovery() {
  const urls = sitemapUrls();
  assert(urls.includes(`${BASE_URL}/`), "Sitemap should include the homepage.");
  assert(urls.includes(`${BASE_URL}/en/home-spa-jeddah/`), "Sitemap should include the English home spa page.");
  assert(urls.includes(`${BASE_URL}/ar/spa-home-jeddah/`), "Sitemap should include the Arabic home spa page.");
  assert(urls.includes(`${BASE_URL}/en/services-jeddah/`), "Sitemap should include the English service hub.");
  assert(urls.includes(`${BASE_URL}/ar/services-jeddah/`), "Sitemap should include the Arabic service hub.");
  assert(urls.every((url) => url.startsWith(BASE_URL)), "Every sitemap URL should use the production base URL.");
}

function main() {
  verifyManifest();
  verifyRobots();
  verifySitemapDiscovery();
  console.log(`Checked discovery manifest, robots.txt, sitemap URLs, and ${countGeneratedPages()} generated pages.`);
}

main();
