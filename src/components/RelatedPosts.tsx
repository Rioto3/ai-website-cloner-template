import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export interface RelatedPost {
  title: string;
  description: string;
  image: string;
  href: string;
}

/**
 * "RELATED POSTS / 関連ページ" grid — bordered cards, thumbnail + title + blurb.
 * Source: contents_related.css — 2-col wrap (49% + 2% gap), 120px square thumb.
 */
export function RelatedPosts({ items }: { items: RelatedPost[] }) {
  return (
    <Reveal className="pt-[30px] pb-[30px]">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading en="RELATED POSTS" ja="関連ページ" />
        <div className="flex flex-wrap max-[600px]:block">
          {items.map((item, i) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              className={`mb-5 flex w-[49%] items-center justify-between border border-tt-border p-[15px] transition-opacity duration-300 hover:bg-tt-beige hover:opacity-80 max-[600px]:w-full max-[600px]:mb-[15px] ${
                i % 2 === 1 ? "ml-[2%] max-[600px]:ml-0" : ""
              }`}
            >
              <div className="relative h-[120px] w-[120px] shrink-0 bg-tt-beige2 max-[1000px]:h-[100px] max-[1000px]:w-[100px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="w-[calc(100%-120px)] pl-5 max-[600px]:pl-[10px]">
                <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[15px]">
                  {item.title}
                </h3>
                <p className="line-clamp-2 pt-[10px] text-[14px] leading-[1.5] max-[600px]:pt-[5px]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
