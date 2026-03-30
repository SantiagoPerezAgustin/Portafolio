/**
 * Optimiza imágenes del portafolio (ejecutar: node scripts/optimize-images.mjs)
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assets = path.join(__dirname, "../src/assets");

const jobs = [
  { in: "Brisa.png", out: "Brisa.webp", maxW: 960, quality: 82 },
  { in: "iNICIO.png", out: "iNICIO.webp", maxW: 960, quality: 82 },
  { in: "bichtec.jpg", out: "bichtec.webp", maxW: 960, quality: 82 },
];

for (const job of jobs) {
  const inputPath = path.join(assets, job.in);
  const outputPath = path.join(assets, job.out);
  if (!fs.existsSync(inputPath)) {
    console.warn("Skip (no existe):", job.in);
    continue;
  }
  await sharp(inputPath)
    .resize(job.maxW, null, { withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(outputPath);
  const before = fs.statSync(inputPath).size;
  const after = fs.statSync(outputPath).size;
  console.log(`${job.in} → ${job.out}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`);
}

console.log("Listo.");
