# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Screenshot:** `docs/design-references/section-07-nbp11869721186972.png`
- **Interaction model:** scroll parallax background + link hover + inview fade-up
- **Source CSS:** `docs/research/components/source-css/widget_news01.css` (`block_news_1`), `mystyle-extra_colors.css`

## DOM Structure
```
<ParallaxSection id="parallax" image="/images/parallax-blog.png"
   className="pt-20 pb-20"                    (site: block_news_1 pt80 pb80 parallax, white page bg)
   imageClassName="opacity-20">               (source: #parallax+div .parallax_img — brightness(100%) blur(3px) opacity 0.2 on white)
└─ <Reveal>
   └─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
      ├─ SectionHeading en="BLOG" ja="豊富な実績と経験を持つスタイリストが様々な内容を発信"
      ├─ ul (max-width ~800px, margin auto):
      │  li ×2 — border-top 1px solid rgba(0,0,0,0.13); LAST li also border-bottom
      │  └─ a (flex items-center, padding 10px 0; transition 0.2s ease-in-out; hover: opacity/color shift → title color #80b27f)
      │     ├─ p date: width 110px, padding-left 20px, relative
      │     │   ::before green chevron: 5×5px, border-top+right 1px solid #80b27f, rotate 45°, left 0 top center
      │     └─ div title: width calc(100% - 130px), padding-left 20px, 16.5px
      └─ <SectionButton href="/blog/">ブログへ</SectionButton> (margin-top ~40px)
```

## Posts (verbatim)
1. date `2022/06/09` — title `【仙台市】女性のお顔そりもおまかせください|HAIR T.T` → href `/blog/`
2. date `2022/06/09` — title `この度ホームページを新しく立ち上げました！` → href `/blog/`

## Notes
- The parallax photo is `/images/parallax-blog.png` (hairbrush & bottles photo) rendered at **opacity 0.2 + blur 3px** over the white background → washed-out look per screenshot. ParallaxSection already applies blur-[3px]; pass `imageClassName="opacity-20"`.
- List width: per screenshot the list is ~800px centered (narrower than 1120px content). Border rows ~46px tall.

## Responsive
- ≤768px: parallax static (handled by ParallaxSection); list rows: date and title may wrap — keep flex, title width auto (flex-1).

## States & Behaviors
- `<Reveal>` fade-up; row hover: title color → #80b27f (transition 0.2s); `<SectionButton>` hover.
