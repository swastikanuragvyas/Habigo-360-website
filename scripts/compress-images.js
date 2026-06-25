import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const images = [
  { src: 'src/assets/founder-1.jpg', width: 1200 },
  { src: 'src/assets/founder-2.jpg', width: 1200 },
  { src: 'src/assets/hero-2.jpg', width: 1200 }
];

(async () => {
  for (const { src, width } of images) {
    try {
      const tempPath = src + '.tmp.jpg';
      await sharp(src)
        .resize({ width })
        .jpeg({ quality: 80 })
        .toFile(tempPath);
      await fs.rename(tempPath, src);
      console.log(`Compressed ${src}`);
    } catch (err) {
      console.error(`Error processing ${src}:`, err.message);
    }
  }
})();
