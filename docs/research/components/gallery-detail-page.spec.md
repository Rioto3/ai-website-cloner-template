# GalleryDetailPage Specification

## Overview
- **Target file:** `src/app/gallery/detail/[id]/page.tsx`
- **Screenshot:** `docs/design-references/pages/gallery-detail-sample-desktop-full.png` (item 266783, "王道ショート◎ 秋スタイル")
- **Interaction model:** static; a small prev/next arrow control cycles through the 2 images of THIS item (not a separate JS carousel — just two images, main + thumbnail strip; arrows swap which is "main". Since only ever 2 images, simplest faithful implementation: client component with `useState` toggling the main image between the 2, arrows at left/right of the main image).

## Data (already written, import directly)
`import { GALLERY_ITEMS, getGalleryItem, getGalleryNeighbors } from "@/data/gallery"`.

## Shared components
`PageHeroBanner`, `Breadcrumb`, `PagerNav` (`{prevHref?, nextHref?, backHref, backLabel}`).

## Route setup
```tsx
export function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({ id: item.id }));
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getGalleryItem(id); // guaranteed to exist for generated params
  const { prev, next } = getGalleryNeighbors(id);
  ...
}
```

## Structure
```
<PageHeroBanner title="ギャラリー" image="/images/banners/gallery.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T",href:"/"},{label:"ギャラリー",href:"/gallery/"},{label:item.title}]} />
<section className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[700px] px-5 text-center">
    <SectionHeading en={item.title} ja="ギャラリー" />  {/* or a simpler custom heading matching screenshot: vertical line + big title + green "ギャラリー" subtitle below, same visual pattern as SectionHeading but title is Japanese not uppercase-English — build a local heading block instead of reusing SectionHeading's uppercase styling: just replicate the visual (line, title 32px, green label 16px) */}

    {/* Main image + arrows — client component "use client" for the toggle */}
    <div className="relative mb-6 flex items-center justify-center gap-4">
      <button aria-label="前の画像" onClick={...}>‹</button>
      <div className="relative aspect-[4/3] w-full max-w-[400px]">
        <Image src={item.images[activeIndex]} alt={item.imageLabels[activeIndex]} fill className="object-cover grayscale" />
      </div>
      <button aria-label="次の画像" onClick={...}>›</button>
    </div>
    <p className="mb-8 text-[13px] tracking-widest">{item.imageLabels[activeIndex]}</p>

    {/* thumbnail strip below, both images side by side, click to select */}
    <div className="mb-10 flex justify-center gap-2">
      {item.images.map((src, i) => (
        <button key={src} onClick={() => setActiveIndex(i)}>
          <div className="relative h-[70px] w-[90px]"><Image src={src} alt="" fill className="object-cover grayscale" /></div>
        </button>
      ))}
    </div>

    <div className="text-left">
      <SubHeading>{item.title}</SubHeading>
      <div className="mb-6">
        <p className="font-semibold">■スタイルメニュー</p>
        {item.styleMenu.map((line) => <p key={line}>・{line}</p>)}
      </div>
      <div className="mb-6">
        <p className="font-semibold">■スタイリストコメント</p>
        <p>・TOSHIMITSU</p>
        <p>　{item.stylistComment}</p>
      </div>
      <div className="mb-6">
        <p className="font-semibold">■スタイルデータ</p>
        <p>・長さ　　：{item.styleData.length}</p>
        <p>・カラー　：{item.styleData.color}</p>
        <p>・イメージ：{item.styleData.image}</p>
      </div>
    </div>
  </div>
</section>
<PagerNav
  prevHref={prev ? `/gallery/detail/${prev.id}/` : undefined}
  nextHref={next ? `/gallery/detail/${next.id}/` : undefined}
  backHref="/gallery/"
  backLabel="一覧に戻る"
/>
```
Note: screenshot also shows a separate "ギャラリートップへ" button alongside the pager (links to `/gallery/`) — add it as an extra pill next to the pager row, same style as PagerNav's buttons, href `/gallery/`.

## Text content note
Item 266783 uniquely has TWO "■スタイルデータ" blocks in the source (first is a freeform styling tip, second is the structured length/color/image). For 266783 only, render an extra line before the structured block: `ブローでしっかりとスタイリング`. For all other 7 items there is only the structured block. (Simplify: just always render the structured block; the one extra tip line for 266783 is optional flavor — include it if straightforward, skip if it complicates the component.)

## Responsive
≤600px: main image full width, thumbnail strip stays 2-across, text sections full width padding.

Verify `npx tsc --noEmit` before finishing. Do not touch `src/app/gallery/page.tsx` or `src/app/gallery/category/` — a separate agent owns those.
