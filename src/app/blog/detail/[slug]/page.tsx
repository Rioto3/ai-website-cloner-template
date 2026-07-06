import Image from "next/image";
import { BLOG_POSTS, BLOG_POSTS_BY_DATE, BLOG_TAGS, getBlogPost, getBlogNeighbors } from "@/data/blog";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { BlogSidebar } from "@/components/BlogSidebar";
import { PagerNav } from "@/components/PagerNav";
import { RelatedTags } from "@/components/RelatedTags";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug)!;
  const { prev, next } = getBlogNeighbors(slug);
  return (
    <>
      <PageHeroBanner title={post.title} image="/images/banners/blog.jpg" />
      <Breadcrumb
        items={[
          { label: "仙台市の理容室はHIAR T.T", href: "/" },
          { label: "ブログ", href: "/blog/" },
          { label: post.title },
        ]}
      />
      <Reveal as="section" className="pt-20 pb-[30px]">
        <div className="mx-auto max-w-[1160px] px-5 flex gap-12 items-start max-[1024px]:block">
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">{post.title}</h1>
            <p className="text-[13px] mb-6">{post.date}</p>
            <div className="relative w-full max-w-[500px] aspect-[4/3] mb-8">
              <Image src={post.image} fill className="object-cover" alt={post.title} />
            </div>
            {post.body.map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))}
            <PagerNav
              prevHref={prev ? `/blog/detail/${prev.slug}/` : undefined}
              nextHref={next ? `/blog/detail/${next.slug}/` : undefined}
              backHref="/blog/"
              backLabel="一覧に戻る"
            />
            <RelatedTags tags={post.tags.map((t) => `#${t}`)} className="pt-16 pb-0" />
          </div>
          <BlogSidebar
            recentPosts={BLOG_POSTS_BY_DATE.map((p) => ({
              date: p.date,
              title: p.title,
              image: p.image,
              href: `/blog/detail/${p.slug}/`,
            }))}
            tags={BLOG_TAGS}
          />
        </div>
      </Reveal>
    </>
  );
}
