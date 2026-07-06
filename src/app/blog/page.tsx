import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS_BY_DATE, BLOG_TAGS } from "@/data/blog";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { BlogSidebar } from "@/components/BlogSidebar";

export const metadata: Metadata = {
  title: "ブログ",
  description: "実力派のベテランスタイリストが様々な内容を発信します。HIAR T.Tのブログ一覧。",
};

export default function Page() {
  return (
    <>
      <PageHeroBanner title="ブログ" image="/images/banners/blog.jpg" />
      <Breadcrumb
        items={[{ label: "仙台市の理容室はHIAR T.T", href: "/" }, { label: "ブログ" }]}
      />
      <Reveal as="section" className="pt-20 pb-[30px]">
        <div className="mx-auto max-w-[1160px] px-5">
          <h2 className="text-[26px] font-semibold mb-2">
            実力派のベテランスタイリストが様々な内容を発信します
          </h2>
          <p className="text-tt-green font-semibold mb-8">
            日常の出来事などサロンの雰囲気がわかるような内容も満載です
          </p>
          <p className="mb-10">
            実力派のベテランスタイリストが役に立つ情報からお得な情報、トレンド、日頃の出来事まで幅広い内容を発信していますのでご覧ください。落ち着いた雰囲気の理容室を構えながら、ライフスタイルに合ったスタイルをご提案しております。
          </p>
          <div className="flex gap-12 items-start max-[1024px]:block">
            <div className="flex-1">
              {BLOG_POSTS_BY_DATE.map((post) => (
                <article
                  key={post.slug}
                  className="border-t border-tt-border py-6 flex gap-6 max-[600px]:block"
                >
                  <div className="relative w-[200px] h-[150px] shrink-0 max-[600px]:w-full max-[600px]:h-[50vw]">
                    <Image src={post.image} fill className="object-cover" alt={post.title} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      <Link href={`/blog/detail/${post.slug}/`}>{post.title}</Link>
                    </h3>
                    <p className="text-[13px] mb-3">{post.date}</p>
                    <p>{post.body[0]}</p>
                  </div>
                </article>
              ))}
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
          <p className="mt-12">
            数々のコンテストで優勝経験を持ちスタイリスト歴30年を超える実力派のベテランスタイリストがサービスに関する内容からお得な情報、役立つ情報、トレンドまで幅広い内容を発信していますのでご覧ください。レトロなアメリカンスタイルで落ち着いた雰囲気のHIAR
            T.Tは完全予約制のプライベートサロンで、他のお客様を気にすることなくリラックスしながら施術を受けていただけます。丁寧なカウンセリングでご希望やお悩みを詳しくお聞きしながらお客様のなりたいイメージを細かく汲み取り、ご要望に応じて最新のトレンド取り入れ似合う髪型をアドバイスいたします。一人ひとりの髪質や骨格を考慮しながら確かな技術で丁寧に施術することでなりたいイメージをしっかり形にし、ご満足いただけるような仕上がりにしますので初めての方も安心してお任せいただけます。
          </p>
        </div>
      </Reveal>
    </>
  );
}
