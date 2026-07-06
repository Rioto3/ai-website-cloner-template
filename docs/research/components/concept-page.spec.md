# ConceptPage Specification

## Overview
- **Target file:** `src/app/concept/page.tsx`
- **Screenshot:** `docs/design-references/pages/concept-desktop-full.png`
- **Interaction model:** static + inview fade-up (reuse `<Reveal>`)

## Shared components available (all exist, import as needed)
`PageHeroBanner` (`{title, image}`), `Breadcrumb` (`{items: {label, href?}[]}`), `SectionHeading`, `SubHeading`, `SectionButton`, `Reveal`, `RelatedPosts` (`{items: {title, description, image, href}[]}`), `RelatedTags` (`{tags: string[]}`).

## Structure
```
<PageHeroBanner title="コンセプト" image="/images/banners/concept.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"コンセプト"}]} />
<Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="CONCEPT" ja="プロの技で洗練されたかっこいいスタイルに" />
    <p className="mb-10">{intro paragraph}</p>

    {/* 3 alternating image+text blocks, each: image LEFT (~40%), text RIGHT (~55%), gap ~5% */}
    <div class="flex gap-8 items-center mb-10 max-[768px]:block">
      <img (block 1)/>
      <div><SubHeading>...</SubHeading><p>...</p><SectionButton href="/voice/">お客様の声へ</SectionButton></div>
    </div>
    {/* repeat ×3, each button margin-top ~24px */}
  </div>
</Reveal>
<RelatedPosts items={[{title:"アクセス", description:"クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…", image:"/images/related/access-thumb.jpg", href:"/access/"}]} />
<RelatedTags tags={["仙台市","理容室","コンセプト"]} />
```
Image aspect: use `next/image` with `fill` inside a `relative h-[280px] w-[280px]` (or similar square-ish) container matching screenshot proportions (roughly 300×300 square photos). Images 1,2,3 use next/image with `width={580} height={580}` fallback if not using fill.

## Text content (verbatim)
- Intro paragraph: `レトロなアメリカンスタイルのサロンを構え、丁寧なカウンセリングでご希望やお悩みをお伺いし一人ひとりに合った最適なスタイルをご提案しますのでお任せください。ヘアスタイルからひげや眉のデザイン、身だしなみまでプロが承ります。`

### Block 1 — image `/images/concept-1.webp`
- SubHeading: `確かな技術を持つ実力派のベテランスタイリストが丁寧にご対応`
- Paragraph: `コンテストで優勝経験のある確かな技術を持つベテランスタイリストが最初のカウンセリングから最後の仕上げまでマンツーマンで丁寧にご対応しご満足いただけるような仕上がりにしますので初めての方も安心してお任せいただけます。ご希望やお悩みを詳しくお聞きした上で、一人ひとりのライフスタイルに合わせ似合うスタイルをご提案いたします。`
- Button: `お客様の声へ` → `/voice/`

### Block 2 — image `/images/concept-2.webp`
- SubHeading: `実力派のスタイリストがご満足いただけるような仕上がりにします`
- Paragraph: `清潔感があって好印象なスタイルからワンランク上の大人の雰囲気が出るスタイル、オンもオフも決まるスタイル、韓国風など学生に人気のスタイルまで幅広いヘアスタイルにご対応しますのでなりたいイメージをお聞かせください。数々のコンテンストで優勝した経験のある実力派のスタイリストがご満足いただけるような仕上がりにいたします。`
- Button: `メニューへ` → `/menu/`

### Block 3 — image `/images/concept-3.webp`
- SubHeading: `ひげや眉のデザインから身だしなみまでお任せいただけます`
- Paragraph: `ヘアスタイルはもちろんのこと、ひげや眉のデザインからノーズケア、クレンジング、ヘアケア、ヘッドスパまで豊富なメニューをご用意しておりますので、ぜひお試しください。貸し切り状態の落ち着いた雰囲気の中で他のお客様を気にすることなく、日常の慌ただしさを忘れリラックスしながらゆっくり施術を受けていただけます。`
- Button: `スタッフへ` → `/staff/`

## Responsive
≤768px: each block stacks image above text/button, full width.
