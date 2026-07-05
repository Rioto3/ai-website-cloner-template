/**
 * Downloads all assets from hairtt.com used on the home page into public/.
 * Run: node scripts/download-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://hairtt.com/common/upload_data/hairttcom/image/";

const assets = [
  // [source URL, local path]
  [`${BASE}20220607145533.png`, "public/images/logo.png"],
  [`${BASE}20220608231005.png`, "public/images/hero-1.png"],
  [`${BASE}20220608231010.jpg`, "public/images/hero-2.jpg"],
  [`${BASE}20220608231002.png`, "public/images/hero-3.png"],
  [`${BASE}20220729152408.jpg`, "public/images/hero-4.jpg"],
  [`${BASE}20220608231008_1.jpg.webp`, "public/images/concept.webp"],
  [`${BASE}20220729155645.jpg.webp`, "public/images/service-1.webp"],
  [`${BASE}20220729155648.jpg.webp`, "public/images/service-2.webp"],
  [`${BASE}20220729155646.jpg.webp`, "public/images/service-3.webp"],
  [`${BASE}20220603153324.jpg`, "public/images/voice-1.jpg"],
  [`${BASE}20220603153548.jpg`, "public/images/voice-2.jpg"],
  [`${BASE}20220603153535.jpg`, "public/images/voice-3.jpg"],
  [`${BASE}20220519102948_1.jpg`, "public/images/menu-cut.jpg"],
  [`${BASE}20220608231012.jpg`, "public/images/staff-toshimitsu.jpg"],
  [`${BASE}img2.png`, "public/images/parallax-service.png"],
  [`${BASE}img3.png`, "public/images/parallax-blog.png"],
  [`${BASE}20220601131346.jpg`, "public/images/parallax-footer.jpg"],
  [`${BASE}apple-touch-icon.png`, "public/seo/apple-touch-icon.png"],
  [`${BASE}favicon.png`, "public/seo/favicon.png"],
  [`${BASE}20220608231005.png`, "public/seo/og-image.png"],
];

async function download([url, dest]) {
  const abs = path.join(root, dest);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(abs, buf);
  console.log(`ok ${dest} (${(buf.length / 1024).toFixed(0)}KB)`);
}

// batched parallel downloads, 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  const results = await Promise.allSettled(batch.map(download));
  for (const r of results) {
    if (r.status === "rejected") console.error(`FAIL ${r.reason}`);
  }
}
console.log("done");
