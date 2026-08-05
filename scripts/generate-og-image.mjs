/**
 * Regenerates public/og-image.png (1200x630) in the site's cream/orange identity.
 *
 * Run with: node scripts/generate-og-image.mjs
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const CREAM = "#FFFBF8";
const CREAM_DEEP = "#FFF2EE";
const INK = "#1A1A2E";
const ACCENT = "#C2410C";
const BRAND = "#FF6B35";
const MUTED = "#4B5563";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "AWS"];

// Lay the stack chips out manually — libvips has no text measurement API.
const CHIP_HEIGHT = 52;
const CHIP_PAD = 26;
const CHIP_GAP = 14;
const CHAR_WIDTH = 12.4; // approximate advance width at 22px in this family

let chipX = 80;
const chips = stack.map((label) => {
    const width = Math.round(label.length * CHAR_WIDTH + CHIP_PAD * 2);
    const chip = { label, x: chipX, width };
    chipX += width + CHIP_GAP;
    return chip;
});

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${CREAM}"/>
      <stop offset="100%" stop-color="${CREAM_DEEP}"/>
    </linearGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BRAND}"/>
      <stop offset="100%" stop-color="${ACCENT}"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="10" fill="url(#rule)"/>

  <circle cx="1085" cy="150" r="190" fill="${BRAND}" opacity="0.07"/>
  <circle cx="1160" cy="520" r="140" fill="${ACCENT}" opacity="0.06"/>

  <text x="80" y="140" font-family="${FONT}" font-size="24" font-weight="700"
        letter-spacing="4.5" fill="${ACCENT}">RAVIKUMARNERSU.COM</text>

  <text x="80" y="268" font-family="${FONT}" font-size="82" font-weight="700"
        letter-spacing="-1.5" fill="${INK}">Ravi Kumar Nersu</text>

  <text x="80" y="344" font-family="${FONT}" font-size="44" font-weight="600"
        fill="${ACCENT}">Senior Software Engineer</text>

  <text x="80" y="404" font-family="${FONT}" font-size="26" font-weight="400"
        fill="${MUTED}">8+ years building accessible, production-grade web platforms</text>

  ${chips
      .map(
          (chip) => `
  <rect x="${chip.x}" y="468" width="${chip.width}" height="${CHIP_HEIGHT}" rx="26"
        fill="#FFFFFF" stroke="#FFDDD1" stroke-width="1.5"/>
  <text x="${chip.x + chip.width / 2}" y="${468 + CHIP_HEIGHT / 2 + 8}" text-anchor="middle"
        font-family="${FONT}" font-size="22" font-weight="600" fill="${ACCENT}">${chip.label}</text>`
      )
      .join("")}

  <text x="80" y="586" font-family="${FONT}" font-size="22" font-weight="500"
        fill="${MUTED}">Hyderabad, India  ·  Frontend architecture, BFF services and web performance</text>
</svg>
`;

const png = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, palette: true, quality: 92 })
    .toBuffer();

await writeFile(OUTPUT, png);

console.log(`og-image.png written: ${(png.length / 1024).toFixed(1)} KB`);
