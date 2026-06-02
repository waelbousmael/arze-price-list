const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://wbstudio.xyz/arze-price-list";
const menu = JSON.parse(readRelative("data/menu.json"));

const pages = [
  { lang: "en", slug: "home-spa-jeddah" },
  { lang: "en", slug: "nails-jeddah" },
  { lang: "en", slug: "home-massage-jeddah" },
  { lang: "en", slug: "brows-lashes-jeddah" },
  { lang: "en", slug: "russian-manicure-jeddah" },
  { lang: "en", slug: "gel-extensions-jeddah" },
  { lang: "en", slug: "relaxing-massage-jeddah" },
  { lang: "en", slug: "brow-lamination-jeddah" },
  { lang: "ar", slug: "spa-home-jeddah" },
  { lang: "ar", slug: "nails-jeddah" },
  { lang: "ar", slug: "massage-home-jeddah" },
  { lang: "ar", slug: "brows-lashes-jeddah" },
  { lang: "ar", slug: "russian-manicure-jeddah" },
  { lang: "ar", slug: "gel-extensions-jeddah" },
  { lang: "ar", slug: "relaxing-massage-jeddah" },
  { lang: "ar", slug: "brow-lamination-jeddah" }
];

const articles = [
  { lang: "en", slug: "russian-vs-classic-manicure-jeddah", phrase: "Russian manicure vs classic manicure" },
  { lang: "en", slug: "how-long-gel-extensions-last-jeddah", phrase: "How long do gel extensions last" },
  { lang: "en", slug: "best-massage-for-stress-jeddah", phrase: "Best massage for stress at home in Jeddah" },
  { lang: "en", slug: "brow-lamination-aftercare-jeddah", phrase: "Brow lamination aftercare" },
  { lang: "ar", slug: "russian-vs-classic-manicure-jeddah", phrase: "المانيكير الروسي مقارنة بالكلاسيكي" },
  { lang: "ar", slug: "how-long-gel-extensions-last-jeddah", phrase: "كم تدوم إطالة الجل" },
  { lang: "ar", slug: "best-massage-for-stress-jeddah", phrase: "أفضل مساج للتوتر في المنزل بجدة" },
  { lang: "ar", slug: "brow-lamination-aftercare-jeddah", phrase: "العناية بعد لامينيشن الحواجب" }
];

const hubs = [
  { lang: "en", slug: "services-jeddah", title: "Arzé Spa services in Jeddah" },
  { lang: "ar", slug: "services-jeddah", title: "دليل خدمات أرزة سبا في جدة" }
];

const serviceSlugOverrides = {
  "Russian Manicure": "russian-manicure-jeddah",
  "Gel Extension": "gel-extensions-jeddah",
  "Relaxing Massage": "relaxing-massage-jeddah",
  "Brow Lamination": "brow-lamination-jeddah"
};

const arabicServiceNames = {
  "Classic Manicure": "مانيكير كلاسيكي",
  "Classic Pedicure": "باديكير كلاسيكي",
  "Russian Manicure": "مانيكير روسي",
  "Russian Pedicure": "باديكير روسي",
  "Gel Color Finish": "طلاء جل",
  "Softgel Structure": "تقوية سوفت جل",
  "Refill Maintenance": "إعادة تعبئة وصيانة",
  "Gel Extension": "إطالة جل",
  "Rubber Base Reinforcement": "تقوية بقاعدة مطاطية",
  "Signature Mani-Pedi Experience": "تجربة أرزة المميزة لليدين والقدمين",
  "Nail Art (Per Nail)": "فن الأظافر",
  "Relaxing Massage": "مساج استرخائي",
  "White Wood Therapy with Cedar Oil": "علاج الخشب الأبيض بزيت الأرز",
  "Hot Stone Ritual": "طقس الأحجار الساخنة",
  "Thai Energy Flow": "تدفق الطاقة التايلندي",
  "Brow Lamination": "لامينيشن الحواجب",
  "Lash Lift": "رفع الرموش",
  "Eye Refinement Package": "باقة إبراز العين",
  "Precision Threading": "تنظيف بالخيط بدقة"
};

const arabicServiceDescriptions = {
  "Classic Manicure": "ترتيب دقيق للأظافر مع عناية بالجلد المحيط ولمسة نهائية نظيفة ومتوازنة.",
  "Classic Pedicure": "عناية أساسية للقدمين مع تقشير وتشذيب يمنح مظهرا ناعما ومرتبا.",
  "Russian Manicure": "تقنية جافة دقيقة حول الجلد المحيط لتعطي تحديدا نظيفا بإطلالة احترافية.",
  "Russian Pedicure": "تنظيف دقيق للجلد والكالو للحصول على نتيجة منحوتة ومرتبة بالكامل.",
  "Gel Color Finish": "لون جل ثابت يدوم طويلا مع لمعة نهائية زجاجية أنيقة.",
  "Softgel Structure": "تقوية خفيفة تمنح الظفر متانة ومرونة مع مظهر طبيعي راق.",
  "Refill Maintenance": "تعديل النمو وإعادة توازن البنية للحفاظ على شكل متناسق طوال الوقت.",
  "Gel Extension": "إطالة مصممة حسب شكل يدك بتوازن أنيق وثبات يدوم.",
  "Rubber Base Reinforcement": "طبقة مرنة داعمة تعزز ثبات الطلاء وتحافظ على متانة الظفر.",
  "Signature Mani-Pedi Experience": "طقس متكامل لليدين والقدمين يختتم بلمسة خفيفة من زيت الأرز.",
  "Nail Art (Per Nail)": "تصاميم فرنش أو كروم أو أومبري أو كات آي بتنفيذ دقيق ولمسة عصرية.",
  "Relaxing Massage": "جلسة كاملة للجسم بأسلوب أرزة الخاص: ضغط متوازن، انتقالات ناعمة، واسترخاء عميق.",
  "White Wood Therapy with Cedar Oil": "تقنية نحت تجمع بين الخشب الأبيض وزيت الأرز اللبناني الدافئ لتنشيط الدورة وتحسين القوام.",
  "Hot Stone Ritual": "أحجار دافئة بحركات مدروسة لتخفيف الشد العميق، مع لمسة نهائية دافئة من زيت الأرز.",
  "Thai Energy Flow": "تمددات مساعدة وضغط إيقاعي لتحسين المرونة، توازن الوقفة، وتنشيط طاقة الجسم.",
  "Brow Lamination": "إعادة ترتيب دقيقة لشكل الحاجب تمنح امتلاء متناسقا ورفعا أنيقا.",
  "Lash Lift": "تقنية دقيقة تبرز انحناءة الرموش الطبيعية بإطلالة مرتبة وناعمة.",
  "Eye Refinement Package": "دمج مدروس بين لامينيشن الحواجب ورفع الرموش لإطار متوازن وجذاب للعين.",
  "Precision Threading": "تشذيب نظيف للحواجب بتفاصيل دقيقة يمنح شكلا محددا ومظهرا مرتبا."
};

const requiredHomeLinks = [
  "/arze-price-list/en/home-spa-jeddah/",
  "/arze-price-list/en/nails-jeddah/",
  "/arze-price-list/en/home-massage-jeddah/",
  "/arze-price-list/en/brows-lashes-jeddah/",
  "/arze-price-list/ar/spa-home-jeddah/",
  "/arze-price-list/ar/nails-jeddah/",
  "/arze-price-list/ar/massage-home-jeddah/",
  "/arze-price-list/ar/brows-lashes-jeddah/"
];

const requiredArticleLinks = [
  "/arze-price-list/en/russian-vs-classic-manicure-jeddah/",
  "/arze-price-list/en/how-long-gel-extensions-last-jeddah/",
  "/arze-price-list/en/best-massage-for-stress-jeddah/",
  "/arze-price-list/en/brow-lamination-aftercare-jeddah/",
  "/arze-price-list/ar/russian-vs-classic-manicure-jeddah/",
  "/arze-price-list/ar/how-long-gel-extensions-last-jeddah/",
  "/arze-price-list/ar/best-massage-for-stress-jeddah/",
  "/arze-price-list/ar/brow-lamination-aftercare-jeddah/"
];

const requiredHubLinks = [
  "/arze-price-list/en/services-jeddah/",
  "/arze-price-list/ar/services-jeddah/"
];

const requiredPackageScripts = {
  "build:seo": "node scripts/build-seo-pages.js",
  "verify:seo": "node scripts/verify-seo-pages.js",
  "check:links": "node scripts/check-internal-links.js",
  "check:discovery": "node scripts/check-discovery-manifest.js",
  "check:images": "node scripts/check-image-previews.js",
  "check:quality": "node scripts/check-page-quality.js",
  "check:conversion": "node scripts/check-conversion-paths.js",
  "check:crawl": "node scripts/check-crawl-reachability.js",
  "qa:seo": "npm run build:seo && npm run check:discovery && npm run check:images && npm run check:links && npm run check:quality && npm run check:conversion && npm run check:crawl && npm run verify:seo"
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readRelative(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), "utf8");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function menuServicePages() {
  return menu.categories.flatMap((category) =>
    category.services.flatMap((service) => {
      const slug = serviceSlugOverrides[service.name] || `${slugify(service.name)}-jeddah`;
      return [
        { lang: "en", slug, service, category },
        { lang: "ar", slug, service, category }
      ];
    })
  );
}

function pagePath(page) {
  return path.join(ROOT, page.lang, page.slug, "index.html");
}

function urlFor(page) {
  return `${BASE_URL}/${page.lang}/${page.slug}/`;
}

function extractJsonLd(html) {
  const blocks = [];
  const pattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = pattern.exec(html))) {
    blocks.push(JSON.parse(match[1]));
  }
  return blocks;
}

function sitemapUrlBlock(sitemap, loc) {
  const escapedLoc = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = sitemap.match(new RegExp(`<url>[\\s\\S]*?<loc>${escapedLoc}<\\/loc>[\\s\\S]*?<\\/url>`));
  return match ? match[0] : "";
}

function verifyHomePage() {
  const html = readRelative("index.html");
  const appJs = readRelative("js/app.js");
  const trackingJs = readRelative("js/tracking.js");
  const jsonLd = extractJsonLd(html);
  assert(
    html.includes('data-track="whatsapp_click"'),
    "Home page should tag WhatsApp links for conversion tracking."
  );
  assert(
    html.includes('id="stickyCallBtn"') && html.includes('data-track="phone_click"'),
    "Home page should tag phone links for conversion tracking."
  );
  ["instagram", "tiktok", "snapchat"].forEach((platform) => {
    assert(
      html.includes('data-track="social_click"') && html.includes(`data-platform="${platform}"`),
      `Home page should tag ${platform} links for organic social tracking.`
    );
  });
  ["en", "ar"].forEach((lang) => {
    assert(
      html.includes(`data-lang-option="${lang}"`) && html.includes('data-track="language_switch"'),
      `Home page should tag ${lang} language switches for audience tracking.`
    );
  });
  assert(
    appJs.includes("service_detail_open"),
    "Home page app should push a service_detail_open event when visitors expand service details."
  );
  ["platform", "lang"].forEach((property) => {
    assert(
      trackingJs.includes(`${property}: tracked.dataset.`),
      `Tracking script should include the ${property} event property.`
    );
  });
  assert(
    html.includes("seoDirectory"),
    "Home page should include an SEO directory with crawlable links."
  );
  requiredHomeLinks.forEach((link) => {
    assert(html.includes(`href="${link}"`), `Home page should link to ${link}.`);
  });
  requiredArticleLinks.forEach((link) => {
    assert(html.includes(`href="${link}"`), `Home page should link to helpful article ${link}.`);
  });
  requiredHubLinks.forEach((link) => {
    assert(html.includes(`href="${link}"`), `Home page should link to service hub ${link}.`);
  });
  assert(jsonLd.some((entry) => entry["@type"] === "ItemList"), "Home page should include ItemList schema for SEO directory discovery.");
}

function verifySeoPages() {
  pages.forEach((page) => {
    const filePath = pagePath(page);
    assert(fs.existsSync(filePath), `Missing page: ${path.relative(ROOT, filePath)}`);

    const html = fs.readFileSync(filePath, "utf8");
    const expectedUrl = urlFor(page);
    const direction = page.lang === "ar" ? "rtl" : "ltr";

    assert(html.includes(`<html lang="${page.lang}" dir="${direction}">`), `${page.slug} has wrong language metadata.`);
    assert(html.includes(`<link rel="canonical" href="${expectedUrl}" />`), `${page.slug} missing canonical.`);
    assert(html.includes('rel="alternate" hreflang="en"'), `${page.slug} missing English hreflang.`);
    assert(html.includes('rel="alternate" hreflang="ar"'), `${page.slug} missing Arabic hreflang.`);
    assert(html.includes('property="og:image"'), `${page.slug} missing social preview image.`);
    assert(html.includes('data-track="whatsapp_click"'), `${page.slug} missing WhatsApp tracking tag.`);
    assert(html.includes('data-track="phone_click"'), `${page.slug} missing phone tracking tag.`);
    assert(html.includes('data-track="social_click"'), `${page.slug} missing social tracking tag.`);
    assert(html.includes("utm_source=organic_seo"), `${page.slug} missing organic SEO booking attribution.`);
    assert(html.includes("/en/") && html.includes("/ar/"), `${page.slug} should cross-link English and Arabic pages.`);
    assert(html.includes("Arzé Spa") || html.includes("أرزة سبا"), `${page.slug} should mention the brand.`);

    const jsonLd = extractJsonLd(html);
    assert(jsonLd.some((entry) => entry["@type"] === "Service"), `${page.slug} missing Service schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "FAQPage"), `${page.slug} missing FAQ schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "BreadcrumbList"), `${page.slug} missing BreadcrumbList schema.`);
    assert(html.includes('class="seoBreadcrumb"'), `${page.slug} missing visible breadcrumb navigation.`);
  });
}

function verifyArticlePages() {
  articles.forEach((article) => {
    const filePath = pagePath(article);
    assert(fs.existsSync(filePath), `Missing article: ${path.relative(ROOT, filePath)}`);

    const html = fs.readFileSync(filePath, "utf8");
    const expectedUrl = urlFor(article);
    const direction = article.lang === "ar" ? "rtl" : "ltr";
    const jsonLd = extractJsonLd(html);

    assert(html.includes(`<html lang="${article.lang}" dir="${direction}">`), `${article.slug} has wrong language metadata.`);
    assert(html.includes(`<link rel="canonical" href="${expectedUrl}" />`), `${article.slug} missing canonical.`);
    assert(html.includes('rel="alternate" hreflang="en"'), `${article.slug} missing English hreflang.`);
    assert(html.includes('rel="alternate" hreflang="ar"'), `${article.slug} missing Arabic hreflang.`);
    assert(html.includes(article.phrase), `${article.slug} should target phrase: ${article.phrase}.`);
    assert(html.includes("data-track=\"whatsapp_click\""), `${article.slug} missing WhatsApp tracking tag.`);
    assert(html.includes("data-track=\"phone_click\""), `${article.slug} missing phone tracking tag.`);
    assert(html.includes("data-track=\"social_click\""), `${article.slug} missing social tracking tag.`);
    assert(html.includes("utm_source=organic_article"), `${article.slug} missing organic article booking attribution.`);
    assert(jsonLd.some((entry) => entry["@type"] === "Article"), `${article.slug} missing Article schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "FAQPage"), `${article.slug} missing FAQ schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "BreadcrumbList"), `${article.slug} missing BreadcrumbList schema.`);
    assert(html.includes('class="seoBreadcrumb"'), `${article.slug} missing visible breadcrumb navigation.`);
  });
}

function verifyMenuServicePages() {
  menuServicePages().forEach((page) => {
    const filePath = pagePath(page);
    assert(fs.existsSync(filePath), `Missing menu service page: ${path.relative(ROOT, filePath)}`);

    const html = fs.readFileSync(filePath, "utf8");
    const expectedUrl = urlFor(page);
    const direction = page.lang === "ar" ? "rtl" : "ltr";
    const jsonLd = extractJsonLd(html);

    assert(html.includes(`<html lang="${page.lang}" dir="${direction}">`), `${page.slug} has wrong menu service language metadata.`);
    assert(html.includes(`<link rel="canonical" href="${expectedUrl}" />`), `${page.slug} missing menu service canonical.`);
    const expectedServiceName =
      page.lang === "ar" ? arabicServiceNames[page.service.name] : page.service.name;
    assert(html.toLowerCase().includes(expectedServiceName.toLowerCase()), `${page.slug} should include localized menu service name ${expectedServiceName}.`);
    if (page.lang === "ar") {
      assert(!html.includes(`${page.service.name} في جدة`), `${page.slug} should not use the English service name as the Arabic H1/title.`);
      assert(!html.includes(page.service.description), `${page.slug} should not reuse the English service description on Arabic pages.`);
      if (!Object.values(serviceSlugOverrides).includes(page.slug)) {
        assert(html.includes(arabicServiceDescriptions[page.service.name]), `${page.slug} should include an Arabic service description.`);
      }
    }
    assert(
      html.includes(`${page.service.price} SAR`) || html.includes(`${page.service.price} ريال`),
      `${page.slug} should include service price.`
    );
    assert(html.includes(String(page.service.duration_min)), `${page.slug} should include service duration.`);
    assert(html.includes('data-track="whatsapp_click"'), `${page.slug} missing WhatsApp tracking tag.`);
    assert(html.includes('data-track="phone_click"'), `${page.slug} missing phone tracking tag.`);
    assert(html.includes('data-track="social_click"'), `${page.slug} missing social tracking tag.`);
    assert(html.includes("utm_source=organic_seo"), `${page.slug} missing organic SEO booking attribution.`);
    assert(jsonLd.some((entry) => entry["@type"] === "Service"), `${page.slug} missing menu Service schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "BreadcrumbList"), `${page.slug} missing menu BreadcrumbList schema.`);
  });
}

function verifyHubPages() {
  hubs.forEach((hub) => {
    const filePath = pagePath(hub);
    assert(fs.existsSync(filePath), `Missing service hub page: ${path.relative(ROOT, filePath)}`);

    const html = fs.readFileSync(filePath, "utf8");
    const expectedUrl = urlFor(hub);
    const direction = hub.lang === "ar" ? "rtl" : "ltr";
    const jsonLd = extractJsonLd(html);

    assert(html.includes(`<html lang="${hub.lang}" dir="${direction}">`), `${hub.slug} has wrong hub language metadata.`);
    assert(html.includes(`<link rel="canonical" href="${expectedUrl}" />`), `${hub.slug} missing hub canonical.`);
    assert(html.includes(hub.title), `${hub.slug} should include hub title.`);
    assert(html.includes('data-track="social_click"'), `${hub.slug} missing hub social tracking tag.`);
    assert(jsonLd.some((entry) => entry["@type"] === "ItemList"), `${hub.slug} missing hub ItemList schema.`);
    assert(jsonLd.some((entry) => entry["@type"] === "BreadcrumbList"), `${hub.slug} missing hub BreadcrumbList schema.`);

    menuServicePages()
      .filter((page) => page.lang === hub.lang)
      .forEach((page) => {
        assert(html.includes(`href="/arze-price-list/${page.lang}/${page.slug}/"`), `${hub.slug} should link to ${page.slug}.`);
      });
  });
}

function verifySitemap() {
  const sitemap = readRelative("sitemap.xml");
  assert(
    sitemap.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),
    "Sitemap should declare the Google image sitemap namespace."
  );
  assert(
    sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'),
    "Sitemap should declare the XHTML namespace for hreflang alternates."
  );
  pages.forEach((page) => {
    const block = sitemapUrlBlock(sitemap, urlFor(page));
    assert(block, `Sitemap missing ${urlFor(page)}.`);
    assert(
      block.includes("<image:image>") && block.includes("<image:loc>") && block.includes("<image:title>"),
      `Sitemap should include image metadata for ${urlFor(page)}.`
    );
    assert(block.includes('hreflang="en"') && block.includes('hreflang="ar"'), `Sitemap should include hreflang alternates for ${urlFor(page)}.`);
  });
  articles.forEach((article) => {
    const block = sitemapUrlBlock(sitemap, urlFor(article));
    assert(block, `Sitemap missing ${urlFor(article)}.`);
    assert(
      block.includes("<image:image>") && block.includes("<image:loc>") && block.includes("<image:title>"),
      `Sitemap should include image metadata for ${urlFor(article)}.`
    );
    assert(block.includes('hreflang="en"') && block.includes('hreflang="ar"'), `Sitemap should include hreflang alternates for ${urlFor(article)}.`);
  });
  menuServicePages().forEach((page) => {
    const block = sitemapUrlBlock(sitemap, urlFor(page));
    assert(block, `Sitemap missing menu service ${urlFor(page)}.`);
    assert(
      block.includes("<image:image>") && block.includes("<image:loc>") && block.includes("<image:title>"),
      `Sitemap should include image metadata for menu service ${urlFor(page)}.`
    );
    assert(block.includes('hreflang="en"') && block.includes('hreflang="ar"'), `Sitemap should include hreflang alternates for menu service ${urlFor(page)}.`);
  });
  hubs.forEach((hub) => {
    const block = sitemapUrlBlock(sitemap, urlFor(hub));
    assert(block, `Sitemap missing service hub ${urlFor(hub)}.`);
    assert(block.includes('hreflang="en"') && block.includes('hreflang="ar"'), `Sitemap should include hreflang alternates for hub ${urlFor(hub)}.`);
  });
}

function verifyPackageScripts() {
  const packageJson = JSON.parse(readRelative("package.json"));
  Object.entries(requiredPackageScripts).forEach(([name, command]) => {
    assert(packageJson.scripts && packageJson.scripts[name] === command, `package.json should include ${name}: ${command}.`);
  });
  assert(fs.existsSync(path.join(ROOT, "scripts", "check-discovery-manifest.js")), "Missing discovery manifest checker script.");
  assert(fs.existsSync(path.join(ROOT, "scripts", "check-image-previews.js")), "Missing image preview checker script.");
  assert(fs.existsSync(path.join(ROOT, "scripts", "check-page-quality.js")), "Missing page quality checker script.");
  assert(fs.existsSync(path.join(ROOT, "scripts", "check-conversion-paths.js")), "Missing conversion path checker script.");
  assert(fs.existsSync(path.join(ROOT, "scripts", "check-crawl-reachability.js")), "Missing crawl reachability checker script.");
}

function main() {
  verifyHomePage();
  verifySeoPages();
  verifyArticlePages();
  verifyMenuServicePages();
  verifyHubPages();
  verifySitemap();
  verifyPackageScripts();
  console.log(`Verified ${pages.length} SEO pages, ${articles.length} article pages, ${menuServicePages().length} menu service pages, ${hubs.length} hub pages, sitemap entries, and tracking hooks.`);
}

main();
