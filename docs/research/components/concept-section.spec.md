# ConceptSection Specification

## Overview
- **Target file:** `src/components/ConceptSection.tsx` (server component)
- **Screenshot:** `docs/design-references/section-00-nbp11926541192654.png`
- **Interaction model:** static + inview fade-up (wrap in shared `<Reveal>`)

## DOM Structure
```
<Reveal as="section" className="...">  (site: contents_box01 block_image_text_4 pt80 pb80 mw1300 w55 valign-center)
└─ content_wrapper (max-width 1300px, margin auto, padding 0 20px)
   ├─ SectionHeading en="CONCEPT" (no ja subtitle — site h2.h is empty)
   └─ wrapper_item (flex row, items-center, gap ~5%)
      ├─ text column (left, ~45%)
      │  ├─ SubHeading: お客様のなりたいスタイルを実現させます
      │  └─ p (text-left, 16.5px lh 1.9)
      └─ image column (right, 55% — class w55 = image side 55%)
         └─ img /images/concept.webp alt="お客様のなりたいスタイルを実現させます" (580×435 natural, w-full h-auto)
```
Note: in DOM the image div comes FIRST but is displayed on the RIGHT (site uses flex-direction row-reverse for block_image_text_4… the rendered layout at 1440 = text left, image right). Match the screenshot: text left ~45%, image right ~55%.

## Computed styles
- section: padding-top 80px, padding-bottom 80px (≤850px: 65px per source spacing scale), white bg
- wrapper_item: display flex, align-items center; column gap ≈ 40px (image 55%, text 45% minus gap)
- p: font-size 16.5px, line-height 1.9, letter-spacing 0.2px, color #463b2e, text-align left

## Text content (verbatim)
- Heading EN: `CONCEPT`
- SubHeading: `お客様のなりたいスタイルを実現させます`
- Paragraph: `レトロなアメリカンスタイルの理容室を仙台市に構えながら、スタイリスト歴30年以上のベテランスタイリストがメンズカットからレディースカット、ビジネスカット、学生に人気の韓国風といったヘアスタイルからひげや眉のデザイン、ノーズケア、ヘアケア、クレンジング、ヘッドスパまで幅広いサービスをご提供しておりますのでぜひお越しください。なりたいスタイルのイメージがございましたらお気軽にご相談いただければ、丁寧なカウンセリングでご希望やお悩みを伺い、髪質や骨格を考慮しながら確かな技術で施術しイメージをしっかり形にいたします。`

## Assets
- `/images/concept.webp`

## Responsive
- ≤768px: stack — image on TOP full width, then subheading + paragraph below (mobile screenshot: image first).
- Padding ≤850px: pt/pb 65px.

## States & Behaviors
- Section entrance: `<Reveal>` (opacity 0 / translateY 60px → visible, 0.8s ease-in-out).
- No hover states (image is not linked in clone).
