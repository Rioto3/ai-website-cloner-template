/**
 * Downloads images used by the interior pages (concept, menu, gallery, voice,
 * staff, blog, access, contact, privacy_policy, sitemap) into public/.
 * Run: node scripts/download-assets-pages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://hairtt.com/common/upload_data/hairttcom/image/";

const assets = [
  // page hero banners
  [`${BASE}20220519102936.jpg`, "public/images/banners/concept.jpg"],
  [`${BASE}20220519102937.jpg`, "public/images/banners/menu.jpg"],
  [`${BASE}20220519102941.jpg`, "public/images/banners/gallery.jpg"],
  [`${BASE}20220519102936_1.jpg`, "public/images/banners/voice.jpg"],
  [`${BASE}20220519102939.jpg`, "public/images/banners/staff.jpg"],
  [`${BASE}20220519102939_1.jpg`, "public/images/banners/blog.jpg"],
  [`${BASE}20220531201821.jpg`, "public/images/banners/access.jpg"],
  [`${BASE}20220519103144.jpg`, "public/images/banners/contact.jpg"],
  [`${BASE}20220519102950.jpg`, "public/images/banners/privacy_policy.jpg"],
  [`${BASE}20220519103152_1.jpg`, "public/images/banners/sitemap.jpg"],

  // concept page
  [`${BASE}20220519103149_1.jpg.webp`, "public/images/concept-1.webp"],
  [`${BASE}20220519102938.jpg.webp`, "public/images/concept-2.webp"],
  [`${BASE}20220519102947.jpg.webp`, "public/images/concept-3.webp"],

  // menu page
  [`${BASE}20220519102942.jpg`, "public/images/menu-headspa.jpg"],
  [`${BASE}20220603153538.jpg`, "public/images/menu-shave.jpg"],
  [`${BASE}20220603153328.jpg`, "public/images/menu-other.jpg"],

  // access page
  [`${BASE}20220519103149.jpg.webp`, "public/images/access-1.webp"],
  [`${BASE}20250513143656.png.webp`, "public/images/access-parking-map.webp"],
  [`${BASE}20220519102943_1.jpg.webp`, "public/images/access-2.webp"],

  // voice page (2 new, others already downloaded to public/images/voice-*)
  [`${BASE}20220608231002.png`, "public/images/voice-4.png"],
  [`${BASE}20220603153552.jpg`, "public/images/voice-5.jpg"],

  // related-posts thumbnails (square crops)
  [`${BASE}square_20220531201821.jpg`, "public/images/related/access-thumb.jpg"],
  [`${BASE}square_20220519102950.jpg`, "public/images/related/privacy-thumb.jpg"],

  // blog
  [`${BASE}square_20220609201711.jpg`, "public/images/related/blog-1-thumb.jpg"],
  [`${BASE}square_20220608231005.jpg`, "public/images/related/blog-2-thumb.jpg"],
  [`${BASE}20220609201711.jpg`, "public/images/blog-1-full.jpg"],
  [`${BASE}20220608231005.jpg`, "public/images/blog-2-full.jpg"],

  // gallery items: [id]-front/side/back pairs
  [`${BASE}20220519150851.jpg`, "public/images/gallery/266783-1.jpg"],
  [`${BASE}20220519150852.jpg`, "public/images/gallery/266783-2.jpg"],
  [`${BASE}20220519150853.jpg`, "public/images/gallery/266782-1.jpg"],
  [`${BASE}20220519150854.jpg`, "public/images/gallery/266782-2.jpg"],
  [`${BASE}20220519150855.jpg`, "public/images/gallery/266781-1.jpg"],
  [`${BASE}20220519150855_1.jpg`, "public/images/gallery/266781-2.jpg"],
  [`${BASE}20220519150856.jpg`, "public/images/gallery/266780-1.jpg"],
  [`${BASE}20220519150857.jpg`, "public/images/gallery/266780-2.jpg"],
  [`${BASE}20220519151117.jpg`, "public/images/gallery/266779-1.jpg"],
  [`${BASE}20220519151118.jpg`, "public/images/gallery/266779-2.jpg"],
  [`${BASE}20220519151118_1.jpg`, "public/images/gallery/266778-1.jpg"],
  [`${BASE}20220519151119.jpg`, "public/images/gallery/266778-2.jpg"],
  [`${BASE}20220519151120.jpg`, "public/images/gallery/266777-1.jpg"],
  [`${BASE}20220519151120_1.jpg`, "public/images/gallery/266777-2.jpg"],
  [`${BASE}20220519151121.jpg`, "public/images/gallery/266776-1.jpg"],
  [`${BASE}20220519151122.jpg`, "public/images/gallery/266776-2.jpg"],
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

for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  const results = await Promise.allSettled(batch.map(download));
  for (const r of results) {
    if (r.status === "rejected") console.error(`FAIL ${r.reason}`);
  }
}
console.log("done");
