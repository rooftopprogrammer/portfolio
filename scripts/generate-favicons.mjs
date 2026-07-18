import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Read the SVG file
const svgBuffer = readFileSync(join(publicDir, 'favicon.svg'));

async function generateFavicons() {
    console.log('🎨 Generating favicons from SVG...\n');

    // Generate 32x32 favicon
    await sharp(svgBuffer)
        .resize(32, 32)
        .png()
        .toFile(join(publicDir, 'favicon-32.png'));
    console.log('✅ Generated favicon-32.png');

    // Generate 16x16 favicon
    await sharp(svgBuffer)
        .resize(16, 16)
        .png()
        .toFile(join(publicDir, 'favicon-16.png'));
    console.log('✅ Generated favicon-16.png');

    // Generate 192x192 icon for PWA
    await sharp(svgBuffer)
        .resize(192, 192)
        .png()
        .toFile(join(publicDir, 'icon-192.png'));
    console.log('✅ Generated icon-192.png');

    // Generate 512x512 icon for PWA
    await sharp(svgBuffer)
        .resize(512, 512)
        .png()
        .toFile(join(publicDir, 'icon-512.png'));
    console.log('✅ Generated icon-512.png');

    // Generate Apple Touch Icon (180x180)
    await sharp(svgBuffer)
        .resize(180, 180)
        .png()
        .toFile(join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Generated apple-touch-icon.png');

    // Generate ICO file (multiple sizes bundled)
    // Sharp doesn't support ICO directly, so we'll use the 32x32 as the main one
    // The PNG copy serves as favicon.ico alternative
    await sharp(svgBuffer)
        .resize(32, 32)
        .toFormat('png')
        .toFile(join(publicDir, 'favicon.png'));
    console.log('✅ Generated favicon.png');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n💡 Note: The SVG favicon is already set in layout.tsx and will be used by modern browsers.');
    console.log('   PNG fallbacks are available for older browsers.');
}

generateFavicons().catch(console.error);
