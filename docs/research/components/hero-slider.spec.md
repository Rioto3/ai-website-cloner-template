# HeroSlider Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx` (client component)
- **Screenshot:** `docs/design-references/hairtt-desktop-1440-hero.png`
- **Interaction model:** time-driven crossfade (4.9s interval) + clickable pointer nav
- **Source CSS:** `docs/research/components/source-css/mystyle-mv.css` (definitive theme rules)

## DOM Structure
```
div#mv_outer (relative; padding-top 20px @≥901px; sits below fixed header spacer)
└─ div#mv (relative, width 100%, height 78vh, min-height 500px)
   ├─ ul.mv_img (width 85%, margin-left 10%, height 100%, overflow hidden, relative, z-6)
   │  ├─ li ×4 (absolute inset-0; only active is visible)
   │  │  └─ img (w/h 100%, object-fit cover)
   ├─ ::after gradient overlay (absolute inset-0 z-6, width 85% ml 10%, pointer-events none)
   │     background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.05) 60%, transparent)
   ├─ .mv_text (absolute, width 100%, left 0, bottom 10%, height 90%, flex items-end, z-7)
   │  └─ div (width 90%, margin 0 auto)
   │     ├─ h2 似合うスタイルをご提供します — 38px, lh 1.1, ls 3px, w600, inline-block, padding-top 85px, color #463b2e
   │     │   ::before content "HAIR SALON" — Roboto, 65px, absolute top 0 left 0 right 0, color #80b27f, w500, ls 5px
   │     └─ p ビジネスカットからメンズカジュアルまで — padding-top 15px, 20px, w600, ls 2px, color #463b2e
   └─ .mv_nav
      ├─ .mv_scroll (absolute right 50px bottom 0, z-7): vertical link "SCROLL DOWN"
      └─ ul.mv_pointer (absolute top 100px left 0, z-7): 4 items
```

## Slides (order, with object-position)
1. `/images/hero-1.png` — object-position 50% 5% (pos_ct)
2. `/images/hero-2.jpg` — 50% 5% (pos_ct)
3. `/images/hero-3.png` — 90% 5% (pos_rt)
4. `/images/hero-4.jpg` — 50% 5% (pos_ct)
All alt: "HAIR T.T"

## Behavior (source: index.js #mv.slide01)
- Interval: **4900ms** per slide (mvSpd 7000 × 0.7). Active slide gets `.show` + an incrementing z-index so the new slide fades in **on top** of the previous (previous stays visible below — no gap).
- Slide img animation (only while `.show`): keyframe `tt-hero-zoom` (already in globals.css) — opacity 0→1 at 15%, scale 1→1.12 — duration **7000ms**, ease-out, forwards.
- First slide on initial load: visible immediately (opacity 1, no animation) until first cycle completes.
- Pointer click: switch to that slide immediately, reset interval.
- Implementation hint: keep `order` state + a `zIndexCounter`; render each li with style `{ zIndex }` for shown slides; use `animation: tt-hero-zoom 7000ms ease-out forwards` on the active img.

## Pointer nav (mv_pointer)
- ul at absolute top 100px, left 0. Each li height 40px, block.
- Number label (CSS counter on site — render text "01".."04"): absolute left 100px, font-size ~15px (0.9em), letter-spacing 2px, opacity 0.5 → `.current` opacity 0.8. Color inherits #463b2e.
- Line ::before: width 40px → current 80px, height 1px, bg rgba(180,180,180,0) → current rgba(180,180,180,1), margin-top 13px, at left 0; transition `all 0.8s cubic-bezier(0.47, 0, 0.745, 0.715)`.
- @≤1300px: line 20px→40px, number left 60px. @≤800px: pointer top 60px, line 0→10px, number left 20px.

## SCROLL DOWN (mv_scroll)
- Anchor href="#main". `writing-mode: vertical-lr; letter-spacing 0.6em; font-size 10px; font-weight 700; color #333; padding-bottom 100px; transition all .3s ease-in-out; text-align right`
- ::before line: 1px × 70px, bg #463b2e, absolute bottom 0 left 1px.
- Hover: padding-bottom 80px; line height 50px.
- Hidden ≤800px. At ≤1300px: right 20px.

## Responsive
- ≤800px: h2 padding-top 65px, ::before 48px; p 17.5px ls 1px; text div width 95%.
- ≤600px: h2 font-size 6vw ls 1px lh 1.5; mv_img + overlay width 80% ml 15%.
- ≤480px: overlay becomes bottom-up gradient full width: `linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.05) 60%, transparent)`, width 100% ml 0; ::before 35px, h2 padding-top 52px.

## Text content (verbatim)
- h2: `似合うスタイルをご提供します`
- h2::before: `HAIR SALON`
- p: `ビジネスカットからメンズカジュアルまで`
- scroll: `SCROLL DOWN`
