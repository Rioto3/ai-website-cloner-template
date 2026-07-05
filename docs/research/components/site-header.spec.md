# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx` (client component)
- **Screenshots:** `docs/design-references/hairtt-desktop-1440-hero.png` (top), `hairtt-mobile-390-full.png` (top)
- **Interaction model:** scroll-driven (hide on scroll down, reveal fixed on scroll up) + mobile burger click
- **Source CSS:** `docs/research/components/source-css/mystyle-header.css` (definitive theme rules)

## DOM Structure (desktop)
```
header (white bg, z-50)
├─ wraper (max-width 1300px, relative, min-height 125px total w/ nav)
│  ├─ h1: 理容室・HIAR T.Tを営業し一人ひとりに合ったかっこいいスタイルをご提案
│  │     absolute top 5px right 25px, 13px, font-weight normal, opacity 0.7, line-height 1.5
│  ├─ logo: absolute left 25px top 0, width 20% max-width 180px, flex items-center, full row height (80px)
│  │     img: /images/logo.png (HAIR T.T wordmark, 347×59 natural)
│  └─ header_contents (margin-left auto, padding-top 30px pb 5px, flex row justify-end items-center, gap ~15px)
│     ├─ tel: green TelIcon 22×22 + "022-352-3957" 26px line-height 1, padding-left 26px, color #463b2e
│     ├─ CTA 1: お問い合わせはこちら → /contact/ (width 181px)
│     ├─ CTA 2: ご予約はこちら → https://beauty.hotpepper.jp/slnH000554712/ target=_blank (width 181px)
│     └─ translate button: bordered square ~45px with TranslateIcon (mock: renders icon only, no dropdown)
└─ nav (flex justify-end, padding-right 25px)
   └─ ul (width 77%, flex, each li flex-grow 1, text center)
      links: ホーム / → コンセプト /concept/ → メニュー /menu/ → ギャラリー /gallery/ →
             お客様の声 /voice/ → スタッフ /staff/ → ブログ /blog/ → アクセス /access/
```

## Computed styles
- header: `font-size: 14px; color: #463b2e; background: #fff; z-index: 50`
- CTA buttons: `display block; text-align center; background #684733; border 1px solid #684733; color #fff; padding 5px 15px 6px; transition 0.4s ease-in-out; font-weight 600; font-size 14px`
  - **Hover:** `background: none; color: #684733` (border stays)
- nav link a: `font-size 15px; padding 0 1vw; white-space nowrap`
- nav link span: `line-height: 3; letter-spacing: 2px; font-weight 600; transition 0.4s ease-in-out`
  - **Hover:** span `color: #80b27f`; underline bar: `a::after — absolute bottom 0 left 10% w-80% h-2px bg #80b27f; transform scaleX(0) origin left top; transition transform .5s` → hover `scaleX(1)`
- tel svg fill `#80b27f`; h1/translate icons fill `#463b2e`

## States & Behaviors

### Scroll hide/reveal (source: cmn.js + cmn.css)
- **State A (scrollY < heroBottom ≈ main top):** header in normal flow (or `position: fixed` at top while page is at 0 — visually identical). Full logo (max-width 180px), full height.
- **State B (scrollY ≥ hero bottom, scrolling DOWN):** header hidden — `position: fixed; top: -200px; opacity: 0`.
- **State C (scrolling UP while scrollY ≥ heroBottom × 1.2):** header revealed — `position: fixed; top: 0; opacity: 1; background: rgba(255,255,255,0.9); box-shadow: 0 0 5px rgba(0,0,0,0.05)`; logo compact: `padding: 20px 0; img max-height 24px`.
- **Transition:** `0.5s ease-in-out` (top + opacity).
- **Implementation:** track lastScrollY in a scroll listener; classes on header. Header must be `fixed` always with a spacer div (height = header height, 125px desktop / ~60px mobile) so the hero below doesn't jump (site does this with border-top on #mv_outer via `.ss`).

### Mobile (≤900px)
- Show logo (max-width 140px, padding 10px 0) left; right side: translate icon + burger (`Menu` label under 3 hamburger lines, lines bg #463b2e).
- nav + header_contents hidden; burger click toggles open panel below header: `background rgba(255,255,255,0.9)`; stacked nav li with `border-bottom 1px solid rgba(0,0,0,0.13)`; then tel + CTA buttons stacked (buttons padding 7px 15px 9px).
- h1 tagline hidden on mobile (fits only ≥ ~1100px; hide below 1100px).

## Text content (verbatim)
- h1: `理容室・HIAR T.Tを営業し一人ひとりに合ったかっこいいスタイルをご提案`
- tel: `022-352-3957`
- buttons: `お問い合わせはこちら`, `ご予約はこちら`
- nav: `ホーム コンセプト メニュー ギャラリー お客様の声 スタッフ ブログ アクセス`

## Assets
- `/images/logo.png`; `TelIcon`, `TranslateIcon` from `@/components/icons`

## Responsive
- Desktop ≥901px: two-row layout as above, total height ~125px.
- ≤900px: single row ~60px, burger menu.
