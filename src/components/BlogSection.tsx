import { ParallaxSection } from "@/components/ParallaxSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionButton } from "@/components/SectionButton";
import type { BlogPost } from "@/types";

const posts: BlogPost[] = [
  {
    date: "2022/06/09",
    title: "【仙台市】女性のお顔そりもおまかせください|HAIR T.T",
    href: "/blog/",
  },
  {
    date: "2022/06/09",
    title: "この度ホームページを新しく立ち上げました！",
    href: "/blog/",
  },
];

/**
 * Blog teaser section.
 * Blurred parallax photo at 20% opacity behind a two-item post list; each
 * row shows a fixed-width date with a green chevron marker and a title that
 * turns green on hover.
 */
export function BlogSection() {
  return (
    <ParallaxSection
      id="parallax"
      image="/images/parallax-blog.png"
      className="pt-20 pb-20"
      imageClassName="opacity-20"
    >
      <Reveal>
        <div className="mx-auto max-w-[1160px] px-5">
          <SectionHeading
            en="BLOG"
            ja="豊富な実績と経験を持つスタイリストが様々な内容を発信"
          />
          <ul className="mx-auto max-w-[800px]">
            {posts.map((post, index) => (
              <li
                key={post.href + post.date + index}
                className={
                  index === posts.length - 1
                    ? "border-t border-b border-tt-border"
                    : "border-t border-tt-border"
                }
              >
                <a
                  href={post.href}
                  className="group flex items-center py-[10px] transition-colors duration-200"
                >
                  <p className="relative w-[110px] shrink-0 pl-5 before:absolute before:left-0 before:top-1/2 before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rotate-45 before:border-t before:border-r before:border-tt-green">
                    {post.date}
                  </p>
                  <div className="flex-1 pl-5 text-[16.5px] transition-colors duration-200 group-hover:text-tt-green">
                    {post.title}
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <SectionButton href="/blog/" className="mt-10">
            ブログへ
          </SectionButton>
        </div>
      </Reveal>
    </ParallaxSection>
  );
}
