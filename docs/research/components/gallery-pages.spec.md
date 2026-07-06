# Gallery Pages Specification (index + category filter)

## Overview
- **Target files:** `src/components/GalleryGrid.tsx` (shared client component with category-pill nav), `src/app/gallery/page.tsx`, `src/app/gallery/category/[category]/page.tsx`
- **Screenshots:** `docs/design-references/pages/gallery-desktop-full.png` (index, "ギャラリー一覧" active), `docs/design-references/pages/gallery-category-sample-desktop-full.png` (a category active, "メンズ ショート")
- **Interaction model:** click-driven, but each pill is a REAL PAGE LINK (not JS state) — confirmed via live inspection: pills are `<a href="/gallery/category/...">`. Each category is its own server-rendered route.

## Data (already written, import directly)
`import { GALLERY_ITEMS, GALLERY_CATEGORIES, GALLERY_CATEGORIES } from "@/data/gallery"` — each item: `{id, title, category, images, imageLabels, styleMenu, stylistComment, styleData}`. Full list already populated with real content — do not invent data.

## GalleryGrid component (shared, receives filtered items)
```tsx
// src/components/GalleryGrid.tsx — server component is fine (no interactivity needed beyond links)
export function GalleryGrid({ items, activeCategory }: { items: GalleryItem[]; activeCategory?: string }) {
  // Pills row: "ギャラリー一覧" (href /gallery/) + 3 categories (href /gallery/category/<encoded>/)
  // Active pill: bg-tt-green text-white border-tt-green (filled, rounded-full)
  // Inactive pill: border border-tt-border text-tt-text rounded-full, hover:bg-tt-beige
  // Grid: 3 columns desktop (gap-8), each item: <Link href={`/gallery/detail/${id}/`}>
  //   <div className="relative aspect-[4/3]"><Image fill className="object-cover grayscale" /></div>
  //   <p className="text-center mt-3">{title}</p>
  // Grid: max-[768px]: 2 columns; max-[480px]: 1 column
}
```
Note: gallery photos in the original are black & white (grayscale) — apply `grayscale` class to thumbnails (confirmed via screenshot, all 8 photos are monochrome).

## /gallery/page.tsx (index — shows ALL 8 items, "ギャラリー一覧" pill active)
```
<PageHeroBanner title="ギャラリー" image="/images/banners/gallery.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"ギャラリー"}]} />
<Reveal className="pt-20 pb-[30px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="GALLERY" ja="最新トレンドを取り入れながら似合う髪型をご提案" />
    <p className="text-center mb-10">{intro}</p>
    <GalleryGrid items={GALLERY_ITEMS} />
    <p className="mt-16">{closing paragraph}</p>
  </div>
</Reveal>
```
No RelatedPosts/RelatedTags on this page (confirmed absent).

Intro: `王道のショートカットやベリーショート、ナチュラルツイスト、フェード、ナチュラルバックなどこれまで施術したヘアスタイルを紹介していますのでご参考にしてください。ご希望やお悩みを詳しくお聞きした上で似合う髪型をご提案します。`

Closing: `これまでに施術した様々なヘアスタイルをご紹介していますので、どんな髪型にしようか迷っているときなどにご参考にしてください。アンティーク調の落ち着いた雰囲気のプライベートサロンを仙台市に構えながら、数々のコンテストで優勝した経験のあるスタイリスト歴30年以上のベテランスタイリストが最初のカウンセリングから仕上げまでマンツーマンで丁寧に対応し、ご満足いただけるようなサービスをご提供しております。一人ひとりのライフスタイルに合わせた似合うヘアスタイルをご提案し、ひげや眉などの身だしなみもお任せいただけます。`

## /gallery/category/[category]/page.tsx (dynamic route, 3 static params)
```tsx
export function generateStaticParams() {
  return GALLERY_CATEGORIES.map((c) => ({ category: c.replace(/ /g, "+") }));
}
export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const decoded = decodeURIComponent(category).replace(/\+/g, " ");
  const items = GALLERY_ITEMS.filter((i) => i.category === decoded);
  // same layout as index but: SectionHeading unchanged, GalleryGrid items={items} activeCategory={decoded},
  // intro/closing paragraphs identical to index (reused), breadcrumb 3rd crumb = decoded category name
}
```
The 3 category values (URL-encode spaces as `+`): `メンズ ショート` (4 items: 266783, 266781, 266779, 266777), `メンズ ベリーショート` (1 item: 266778), `メンズ ミディアム` (2 items: 266782, 266780).

## Responsive
Desktop 3-col grid → ≤768px 2-col → ≤480px 1-col. Pills wrap on narrow screens.

Verify `npx tsc --noEmit` before finishing. Do not touch `src/app/gallery/detail/[id]/page.tsx` — a separate agent owns that file.
