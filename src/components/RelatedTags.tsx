import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * "RELATED TAGS / 関連タグ" pill list, centered, bordered pills.
 * Source: contents_related_tags.css + mystyle.css border/hover overrides.
 */
export function RelatedTags({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <Reveal className={className ?? "pt-[30px] pb-[30px]"}>
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading en="RELATED TAGS" ja="関連タグ" />
        <div className="text-center">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/page/tag/${encodeURIComponent(tag)}/`}
              className="mx-1 mb-[5px] inline-block border border-tt-border px-[16px] py-[6px] text-[13px] transition-colors duration-300 hover:bg-tt-beige"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
