# Blog Pages Specification (index + detail)

## Overview
- **Target files:** `src/app/blog/page.tsx`, `src/app/blog/detail/[slug]/page.tsx`
- **Screenshots:** `docs/design-references/pages/blog-desktop-full.png` (index), `docs/design-references/pages/blog-detail-1-desktop-full.png` (detail)
- **Interaction model:** static

## Data (already written, import directly)
`import { BLOG_POSTS, BLOG_POSTS_BY_DATE, BLOG_TAGS, getBlogPost, getBlogNeighbors } from "@/data/blog"` — posts: `{slug, date, title, image, body: string[], tags: string[]}`.

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `Reveal`, `BlogSidebar` (`{recentPosts: {date,title,image,href}[], tags: string[]}`), `PagerNav`, `RelatedTags`.

## /blog/page.tsx (index, 2-column layout: main list + sidebar)
```
<PageHeroBanner title="ブログ" image="/images/banners/blog.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"ブログ"}]} />
<Reveal className="pt-20 pb-[30px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <h2 className="text-[26px] font-semibold mb-2">実力派のベテランスタイリストが様々な内容を発信します</h2>
    <p className="text-tt-green font-semibold mb-8">日常の出来事などサロンの雰囲気がわかるような内容も満載です</p>
    <p className="mb-10">{intro}</p>
    <div className="flex gap-12 items-start max-[1024px]:block">
      <div className="flex-1">
        {BLOG_POSTS_BY_DATE.map(post => (
          <article className="border-t border-tt-border py-6 flex gap-6 max-[600px]:block">
            <div className="relative w-[200px] h-[150px] shrink-0 max-[600px]:w-full max-[600px]:h-[50vw]">
              <Image src={post.image} fill className="object-cover" alt={post.title} />
            </div>
            <div>
              <h3 className="font-semibold mb-1"><Link href={`/blog/detail/${post.slug}/`}>{post.title}</Link></h3>
              <p className="text-[13px] mb-3">{post.date}</p>
              <p>{post.body[0]}</p>
            </div>
          </article>
        ))}
      </div>
      <BlogSidebar recentPosts={BLOG_POSTS_BY_DATE.map(p => ({date:p.date, title:p.title, image:p.image, href:`/blog/detail/${p.slug}/`}))} tags={BLOG_TAGS} />
    </div>
    <p className="mt-12">{closing}</p>
  </div>
</Reveal>
```
Note: last section heading style differs from the SectionHeading component (no vertical-line-above pattern here — screenshot shows a plain left-aligned bold 26px heading directly, with green subtitle below, NO centered vertical line). Do not reuse `<SectionHeading>` for this one — write it inline as shown.

Intro: `実力派のベテランスタイリストが役に立つ情報からお得な情報、トレンド、日頃の出来事まで幅広い内容を発信していますのでご覧ください。落ち着いた雰囲気の理容室を構えながら、ライフスタイルに合ったスタイルをご提案しております。`

Closing: `数々のコンテストで優勝経験を持ちスタイリスト歴30年を超える実力派のベテランスタイリストがサービスに関する内容からお得な情報、役立つ情報、トレンドまで幅広い内容を発信していますのでご覧ください。レトロなアメリカンスタイルで落ち着いた雰囲気のHIAR T.Tは完全予約制のプライベートサロンで、他のお客様を気にすることなくリラックスしながら施術を受けていただけます。丁寧なカウンセリングでご希望やお悩みを詳しくお聞きしながらお客様のなりたいイメージを細かく汲み取り、ご要望に応じて最新のトレンド取り入れ似合う髪型をアドバイスいたします。一人ひとりの髪質や骨格を考慮しながら確かな技術で丁寧に施術することでなりたいイメージをしっかり形にし、ご満足いただけるような仕上がりにしますので初めての方も安心してお任せいただけます。`

## /blog/detail/[slug]/page.tsx
```tsx
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const { prev, next } = getBlogNeighbors(slug);
  ...
}
```
```
<PageHeroBanner title={post.title} image="/images/banners/blog.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T",href:"/"},{label:"ブログ",href:"/blog/"},{label:post.title}]} />
<Reveal className="pt-20 pb-[30px]">
  <div className="mx-auto max-w-[1160px] px-5 flex gap-12 items-start max-[1024px]:block">
    <div className="flex-1">
      <h1 className="text-[22px] font-semibold mb-2">{post.title}</h1>
      <p className="text-[13px] mb-6">{post.date}</p>
      <div className="relative w-full aspect-[4/3] max-w-[500px] mb-8">
        <Image src={post.image} fill className="object-cover" alt={post.title} />
      </div>
      {post.body.map(line => <p key={line} className="mb-2">{line}</p>)}
      <PagerNav
        prevHref={prev && `/blog/detail/${prev.slug}/`}
        nextHref={next && `/blog/detail/${next.slug}/`}
        backHref="/blog/" backLabel="一覧に戻る"
      />
      <RelatedTags tags={post.tags.map(t => "#"+t)} className="pt-16 pb-0" />
    </div>
    <BlogSidebar recentPosts={BLOG_POSTS_BY_DATE.map(p => ({date:p.date, title:p.title, image:p.image, href:`/blog/detail/${p.slug}/`}))} tags={BLOG_TAGS} />
  </div>
</Reveal>
```

## Responsive
≤1024px: sidebar moves below main content, full width. ≤600px: list thumbnails stack above text on index.

Verify `npx tsc --noEmit` before finishing.
