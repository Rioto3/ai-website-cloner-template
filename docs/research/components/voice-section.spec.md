# VoiceSection Specification

## Overview
- **Target file:** `src/components/VoiceSection.tsx` (server component)
- **Screenshot:** `docs/design-references/section-03-nbp12429521242952.png` (also visible in section-02 lower half)
- **Interaction model:** static grid + image hover zoom + inview fade-up
- **Source CSS:** `docs/research/components/source-css/widget_gallery01.css` (`add_design1`), `mystyle-widget_gallery01.css`

## DOM Structure
```
<Reveal className="pt-[30px] pb-[30px]">   (site: widget_gallery01 add_design1 pt30 pb30 width_fixed)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   ├─ SectionHeading en="VOICE" ja="お客様からご好評いただいております"
   └─ row (3 columns; site: slick with 3 visible — row is inset 30px each side:
          margin-left/right +30px vs wrapper → width calc(100% - 60px) centered; gap ~30px)
      └─ item ×3
         ├─ a (block, relative, padding-top 70% aspect, overflow hidden) → href="/voice/"
         │  └─ img absolute inset-0 w-full h-full object-cover
         │     transition: 1s ease-out (transform, opacity); hover: scale(1.1) + opacity 0.8
         └─ caption p below image: centered, 16.5px, color #463b2e, margin-top ~10px
```
Then a separate CTA button block after the grid (site block `contents_btn01 pb80`):
```
<div className="pb-20 pt-[30px]"> <SectionButton href="/voice/">お客様の声へ</SectionButton> </div>
```
(Include the button inside VoiceSection at the bottom: padding-bottom 80px total after button, button width 200px centered.)

## Items (verbatim)
1. img `/images/voice-1.jpg` caption `（男性/40代/自営業）`
2. img `/images/voice-2.jpg` caption `（男性/40代/自営業）`
3. img `/images/voice-3.jpg` caption `（男性/20代後半/会社員）`
(alt = caption)

## Computed styles
- Image aspect: 70% padding-top (10:7); object-position 50% 50%.
- Captions: text-align center, font-size ~15px (site 1.5rem), color #463b2e.
- Grid gap ≈ 30px; the 3-column row is ~60px narrower than the 1120px content box (site slick inset), so each image ≈ 333px wide @1440.

## Responsive
- ≤768px: single column, items stacked full width (mobile screenshot), captions below each.

## States & Behaviors
- `<Reveal>` fade-up.
- Image hover: `scale(1.1)` + `opacity: 0.8`, `transition: 1s ease-out` (desktop).
- Button: shared `<SectionButton>` hover fill.
