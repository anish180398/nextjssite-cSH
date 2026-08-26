// One-off script: derives favicon/apple-touch-icon/manifest icons from the
// master logo, and renders the site-wide OG/social share image. Run once
// whenever the brand mark or palette changes.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const BG = "#0A0A0C";
const ACCENT = "#F11601";
const FG = "#F2F1ED";

const LOGO = "src/assets/images/Logo.png";
const PUBLIC = "public";

async function makeIcon(size, fileName, { padRatio = 0.72 } = {}) {
  const trimmed = await sharp(LOGO).trim().toBuffer();
  const markSize = Math.round(size * padRatio);
  const mark = await sharp(trimmed).resize(markSize, markSize, { fit: "inside" }).toBuffer();
  const markMeta = await sharp(mark).metadata();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      {
        input: mark,
        left: Math.round((size - (markMeta.width ?? markSize)) / 2),
        top: Math.round((size - (markMeta.height ?? markSize)) / 2),
      },
    ])
    .png()
    .toFile(`${PUBLIC}/${fileName}`);

  console.log(`wrote ${fileName} (${size}x${size})`);
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function makeOgImage() {
  const trimmedLogo = await sharp(LOGO).trim().resize(120, 120, { fit: "inside" }).toBuffer();
  const logoBase64 = trimmedLogo.toString("base64");

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.02 0" />
    </filter>
  </defs>
  <rect width="1200" height="630" fill="${BG}" />
  ${Array.from({ length: 21 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="630" stroke="${FG}" stroke-opacity="0.035" stroke-width="1" />`).join("")}
  ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="1200" y2="${i * 60}" stroke="${FG}" stroke-opacity="0.035" stroke-width="1" />`).join("")}
  <circle cx="1000" cy="150" r="220" fill="${ACCENT}" opacity="0.10" />
  <image x="64" y="64" width="120" height="120" href="data:image/png;base64,${logoBase64}" />
  <text x="64" y="290" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="-1" fill="${FG}">Kryttr</text>
  <text x="64" y="340" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${FG}" opacity="0.7">${escapeXml("Web development, design & digital strategy")}</text>
  <text x="64" y="560" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="2" fill="${ACCENT}" opacity="0.9">${escapeXml("WEB DEVELOPMENT \u00b7 MOBILE APPS \u00b7 UI/UX \u00b7 SEO \u00b7 E-COMMERCE")}</text>
  <text x="64" y="580" font-family="Helvetica, Arial, sans-serif" font-size="16" fill="${FG}" opacity="0.45">kryttr.com</text>
</svg>`;

  await sharp(Buffer.from(svg)).png().toFile(`${PUBLIC}/og-image.png`);
  console.log("wrote og-image.png (1200x630)");
}

async function main() {
  mkdirSync(PUBLIC, { recursive: true });
  await makeIcon(16, "favicon-16x16.png");
  await makeIcon(32, "favicon-32x32.png");
  await makeIcon(180, "apple-touch-icon.png", { padRatio: 0.62 });
  await makeIcon(192, "icon-192.png");
  await makeIcon(512, "icon-512.png");
  await makeOgImage();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
