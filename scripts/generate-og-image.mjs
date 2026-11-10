/**
 * Regenerates public/og-image.png (1200x630) in the site's paper/ink/vermilion identity.
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

const PAPER = "#F6F4EE";
const INK = "#15171C";
const SIGNAL = "#FF5B36";
const SIGNAL_TEXT = "#B5381C";
const GOOD = "#18B47B";
const LINE = "#E2DDD1";
const MUTED = "#474C57";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "GenAI"];

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
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" fill="none" stroke="${INK}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0%" stop-color="${SIGNAL}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${SIGNAL}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <circle cx="104" cy="112" r="28" fill="${INK}"/>
  <text x="104" y="121" text-anchor="middle" font-family="${FONT}" font-size="24" font-weight="800" fill="${PAPER}">RN</text>
  <text x="148" y="121" font-family="${FONT}" font-size="22" font-weight="600" letter-spacing="3" fill="${MUTED}">RAVIKUMARNERSU.COM</text>

  <text x="76" y="268" font-family="${FONT}" font-size="96" font-weight="800" letter-spacing="-3" fill="${INK}">Ravi Kumar Nersu<tspan fill="${SIGNAL}">.</tspan></text>

  <rect x="80" y="314" width="14" height="14" rx="3" fill="${SIGNAL}"/>
  <text x="108" y="329" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="2" fill="${SIGNAL_TEXT}">SENIOR FULL-STACK SOFTWARE ENGINEER</text>

  <text x="80" y="398" font-family="${FONT}" font-size="30" font-weight="400" fill="${MUTED}">Fast React &amp; Next.js products, Node.js and Python services,</text>
  <text x="80" y="440" font-family="${FONT}" font-size="30" font-weight="400" fill="${MUTED}">and GenAI features that cite their sources.</text>

  ${chips
      .map(
          (chip) => `
  <rect x="${chip.x}" y="488" width="${chip.width}" height="${CHIP_HEIGHT}" rx="26"
        fill="#FFFDF9" stroke="${LINE}" stroke-width="1.5"/>
  <text x="${chip.x + chip.width / 2}" y="${488 + CHIP_HEIGHT / 2 + 8}" text-anchor="middle"
        font-family="${FONT}" font-size="22" font-weight="600" fill="${INK}">${chip.label}</text>`
      )
      .join("")}

  <rect x="836" y="86" width="284" height="52" rx="26" fill="${INK}"/>
  <circle cx="866" cy="112" r="7" fill="${GOOD}"/>
  <text x="884" y="120" font-family="${FONT}" font-size="21" font-weight="600" fill="${PAPER}">8+ years · Hyderabad</text>
</svg>
`;

const png = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, palette: true, quality: 92 })
    .toBuffer();

await writeFile(OUTPUT, png);

console.log(`og-image.png written: ${(png.length / 1024).toFixed(1)} KB`);
