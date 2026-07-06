import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/types";
import { GALLERY_CATEGORIES } from "@/data/gallery";

/**
 * Category pill nav + photo grid shared by the gallery index and category pages.
 * Pills are real page links (not client-side filtering) — each category is its
 * own server-rendered route. Source: widget_gallery01.css.
 */
export function GalleryGrid({
  items,
  activeCategory,
}: {
  items: GalleryItem[];
  activeCategory?: string;
}) {
  const pillBase = "rounded-full border px-6 py-2 text-[14px] transition-colors duration-300";
  const activeCls = "border-tt-green bg-tt-green text-white";
  const inactiveCls = "border-tt-border text-tt-text hover:bg-tt-beige";

  return (
    <>
      <nav className="mb-10 flex flex-wrap justify-center gap-3">
        <Link href="/gallery/" className={`${pillBase} ${!activeCategory ? activeCls : inactiveCls}`}>
          ギャラリー一覧
        </Link>
        {GALLERY_CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/gallery/category/${encodeURIComponent(cat.replace(/ /g, "+"))}/`}
            className={`${pillBase} ${activeCategory === cat ? activeCls : inactiveCls}`}
          >
            {cat}
          </Link>
        ))}
      </nav>
      <div className="grid grid-cols-3 gap-8 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
        {items.map((item) => (
          <Link key={item.id} href={`/gallery/detail/${item.id}/`}>
            <div className="relative aspect-[4/3]">
              <Image src={item.images[0]} alt={item.title} fill className="object-cover grayscale" />
            </div>
            <p className="mt-3 text-center">{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
