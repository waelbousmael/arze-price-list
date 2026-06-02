const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OG_IMAGE = "assets/images/arze-spa-price-list-og.jpg";
const IMAGE_ROOT = path.join(ROOT, "assets", "images");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function imageSize(relativePath) {
  const filePath = path.join(ROOT, relativePath);
  const buffer = fs.readFileSync(filePath);

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      const marker = buffer.readUInt16BE(offset);
      offset += 2;
      const length = buffer.readUInt16BE(offset);
      if (marker >= 0xffc0 && marker <= 0xffc3) {
        return {
          width: buffer.readUInt16BE(offset + 5),
          height: buffer.readUInt16BE(offset + 3)
        };
      }
      offset += length;
    }
  }

  if (buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20)
    };
  }

  throw new Error(`Unsupported image format: ${relativePath}`);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

function relative(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function verifyOgImage() {
  const size = imageSize(OG_IMAGE);
  assert(size.width === 1200, `${OG_IMAGE} should be 1200px wide.`);
  assert(size.height === 630, `${OG_IMAGE} should be 630px tall.`);
}

function verifyServiceImages() {
  const images = walk(IMAGE_ROOT)
    .map(relative)
    .filter((filePath) => /\.(jpe?g|png)$/i.test(filePath))
    .filter((filePath) => filePath !== OG_IMAGE);

  images.forEach((filePath) => {
    const size = imageSize(filePath);
    assert(size.width >= 1200, `${filePath} should be at least 1200px wide.`);
    assert(size.height >= 450, `${filePath} should be at least 450px tall.`);
  });

  return images.length;
}

function verifyMetadata() {
  const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  assert(indexHtml.includes(`<meta property="og:image" content="https://wbstudio.xyz/arze-price-list/${OG_IMAGE}" />`), "Homepage should use the canonical OG image.");
  assert(indexHtml.includes('<meta property="og:image:width" content="1200" />'), "Homepage should include OG image width.");
  assert(indexHtml.includes('<meta property="og:image:height" content="630" />'), "Homepage should include OG image height.");
  assert(indexHtml.includes('<meta name="twitter:card" content="summary_large_image" />'), "Homepage should use a large Twitter card.");
}

function main() {
  verifyOgImage();
  const serviceImageCount = verifyServiceImages();
  verifyMetadata();
  console.log(`Checked OG preview image and ${serviceImageCount} service images.`);
}

main();
