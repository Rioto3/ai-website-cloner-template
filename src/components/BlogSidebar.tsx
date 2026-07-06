import Image from "next/image";
import Link from "next/link";

export interface RecentPost {
  date: string;
  title: string;
  image: string;
  href: string;
}

/**
 * Blog sidebar: "最近の投稿 / Recent Posts" list + "タグ / Tags" pill cloud.
 * Source: widget_news02.css — dark brown header bar, thumb+meta rows,
 * green chevron marker before the date.
 */
export function BlogSidebar({
  recentPosts,
  tags,
}: {
  recentPosts: RecentPost[];
  tags: string[];
}) {
  return (
    <aside className="w-full max-w-[300px] max-[1024px]:max-w-none">
      <div className="mb-10">
        <h3 className="bg-tt-btn px-5 py-[10px] text-[14px] font-semibold tracking-[1px] text-white">
          最近の投稿 <span className="opacity-70">/ Recent Posts</span>
        </h3>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.href} className="border-b border-tt-border">
              <Link href={post.href} className="flex items-center gap-[10px] py-[10px]">
                <div className="relative h-[60px] w-[80px] shrink-0 bg-tt-beige2">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="relative pl-[14px] text-[13px] before:absolute before:left-0 before:top-[calc(50%-3px)] before:h-[5px] before:w-[5px] before:rotate-45 before:border-r before:border-t before:border-tt-green">
                    {post.date}
                  </p>
                  <p className="truncate pl-[14px] text-[14px]">{post.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="bg-tt-btn px-5 py-[10px] text-[14px] font-semibold tracking-[1px] text-white">
          タグ <span className="opacity-70">/ Tags</span>
        </h3>
        <div className="flex flex-wrap gap-2 pt-[15px]">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/page/tag/${encodeURIComponent(tag)}/`}
              className="border border-tt-border px-[14px] py-[6px] text-[13px] transition-colors duration-300 hover:bg-tt-beige"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
