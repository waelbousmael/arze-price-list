const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_PATH = "/arze-price-list";
const BASE_URL = `https://wbstudio.xyz${SITE_PATH}`;
const START_PAGE = "index.html";

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function relative(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function stripQueryAndHash(value) {
  return value.split("#")[0].split("?")[0];
}

function isExternal(reference) {
  return /^(mailto:|tel:|sms:|whatsapp:|data:|blob:|javascript:|#)/i.test(reference);
}

function normalizePagePath(filePath, href) {
  const cleanHref = stripQueryAndHash(href.trim());
  if (!cleanHref || isExternal(cleanHref)) return null;

  let target;
  if (cleanHref.startsWith(BASE_URL)) {
    target = path.join(ROOT, cleanHref.slice(BASE_URL.length));
  } else if (cleanHref.startsWith(SITE_PATH)) {
    target = path.join(ROOT, cleanHref.slice(SITE_PATH.length));
  } else if (cleanHref.startsWith("/")) {
    target = path.join(ROOT, cleanHref.slice(1));
  } else {
    target = path.resolve(path.dirname(filePath), cleanHref);
  }

  if (cleanHref.endsWith("/") || !path.extname(target)) {
    target = path.join(target, "index.html");
  }

  if (path.extname(target) && path.extname(target) !== ".html") return null;
  if (!path.resolve(target).startsWith(ROOT)) return null;

  return target;
}

function anchors(html) {
  return [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => match[1].replace(/&amp;/g, "&"));
}

function crawl() {
  const start = path.join(ROOT, START_PAGE);
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    const key = relative(current);
    if (visited.has(key) || !fs.existsSync(current)) continue;
    visited.add(key);

    const html = fs.readFileSync(current, "utf8");
    anchors(html).forEach((href) => {
      const target = normalizePagePath(current, href);
      if (!target) return;
      const targetKey = relative(target);
      if (!visited.has(targetKey)) queue.push(target);
    });
  }

  return visited;
}

function sitemapHtmlPages() {
  const sitemap = read("sitemap.xml");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(BASE_URL))
    .map((url) => {
      const parsed = new URL(url);
      const localPath = parsed.pathname === SITE_PATH || parsed.pathname === `${SITE_PATH}/`
        ? "index.html"
        : path.posix.join(parsed.pathname.slice(SITE_PATH.length), "index.html").replace(/^\/+/, "");
      return localPath;
    })
    .filter((filePath) => fs.existsSync(path.join(ROOT, filePath)))
    .filter((filePath) => path.extname(filePath) === ".html");
}

function main() {
  const reachable = crawl();
  const sitemapPages = sitemapHtmlPages();
  const missing = sitemapPages.filter((filePath) => !reachable.has(filePath));

  if (missing.length > 0) {
    missing.forEach((filePath) => console.error(`Sitemap page is not reachable from homepage links: ${filePath}`));
    throw new Error(`Found ${missing.length} unreachable sitemap pages.`);
  }

  console.log(`Checked crawl reachability from homepage for ${sitemapPages.length} sitemap HTML pages.`);
}

main();
