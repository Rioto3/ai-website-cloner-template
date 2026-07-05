# ServiceSection Specification (parallax band + 3 hover cards)

## Overview
- **Target files:** `src/components/ServiceBand.tsx` (band) + `src/components/ServiceCards.tsx`
- **Screenshots:** `docs/design-references/section-01-nbp11869621186962.png` (band), `section-02-nbp11869631186963.png` (cards)
- **Interaction model:** band = scroll parallax; cards = hover-driven (desktop ≥1025px)
- **Source CSS:** `docs/research/components/source-css/composite_box01.css` (search `block_images_16`), `mystyle-extra_colors.css`

## Part 1 — ServiceBand
Green parallax band with big white "SERVICE" heading.
```
<ParallaxSection id="service" image="/images/parallax-service.png"
   className="bg-tt-green pt-20"            (site: .hp pt80 pb0, bg #80b27f, height ~350px total)
   imageClassName="opacity-40 mix-blend-multiply">   (source: #service_h2+section .parallax_img)
└─ content: <SectionHeading en="SERVICE" light />  (white text + white line variant)
```
- Section height ≈ 350px @1440 (padding-top 80px, heading block, padding-bottom ~0; give the band min-height ~270-350px so proportions match screenshot).
- The heading sits top-center; band's lower part overlaps nothing (cards section starts right below but cards' white chips overflow ABOVE into the band — see screenshot section-02: chips stick out over band bottom edge? No — chips sit at top of the image but below band. Follow screenshot: cards begin ~65px below band bottom).

## Part 2 — ServiceCards
```
<Reveal className="...">  (site: composite_box01 block_images_16 pt0 pb30 mw1500 bg white)
└─ content_wrapper (max-width 1500px, margin auto, padding 0 20px)
   ├─ heading p: プロによる確かな技術でお客様のなりたいを実現します (centered, 16.5px w500, mb ~25px)
   └─ wrapper_item (flex row, gap 30px; 3 equal columns)
      └─ .inner_item ×3 (relative, height 22vw, max-height 50vh)
```

### Card anatomy (each `.inner_item`, desktop)
- Image layer: absolute inset 0, overflow hidden; img cover 100%×100%, `transition: 0.6s`
- Bottom gradient: ::before or overlay div — `height 30%; bottom 0; background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%); z-3`
- Label chip: absolute top 0 left 0 z-3 — `background #fff; padding 10px 15px; font-size 13px; color #463b2e` (font-size 1.3rem = 13px)
- Number: absolute bottom-left z-3 — `color #fff; padding 15px; font-weight 700; transition 0.4s` (text e.g. "SERVICE 01")
- Description box (hidden by default): positioned at bottom, `background #fff; padding 10px; margin 0 10px; width calc(100% - 20px); line-height 1.6; opacity 0; transition 0.4s; transition-delay 0.3s; z-3; font-size ~14px`

### Hover (desktop only)
- img → `transform: scale(1.1)` (0.6s)
- number → `opacity: 0` (0.4s)
- description box → `opacity: 1` (0.4s, delay 0.3s)

### Card data (verbatim)
1. label `貸し切り状態で施術を受けていただけます` / number `SERVICE 01` / img `/images/service-1.webp` / desc `完全予約制のプライベート空間で他のお客様を気にすることなく、日常の慌ただしさや忙しさを忘れリラックスしながらゆっくり施術を受けていただけます。`
2. label `高い技術を持つ実力派のスタイリストが対応` / number `SERVICE 02` / img `/images/service-2.webp` / desc `数々のコンテストで優勝経験のあるスタイリスト歴30年以上のベテランスタイリストがマンツーマンで丁寧にご対応することでご満足いただけるような仕上がりにしています。`
3. label `何でも相談しやすいプライベートサロン` / number `SERVICE 03` / img `/images/service-3.webp` / desc `最初のカウンセリングから仕上げまで一人のスタイリストが担当するので待たされることがなく、丁度良い距離感でご希望やお悩みなど何でも気軽にご相談いただけます。`

## Responsive
- ≤1200px: card height 32vw.
- ≤1024px: cards stack vertically (block); image relative height 30vw margin-bottom 15px; gradient 20%; description always visible as plain text below image (no white box, no hover); label chip stays on image top-left; number stays bottom-left.

## Behaviors
- Band: `<ParallaxSection>` handles parallax; wrap heading in `<Reveal>`.
- Cards: `<Reveal>` on the section.
