# MenuSection Specification

## Overview
- **Target file:** `src/components/MenuSection.tsx` (server component)
- **Screenshot:** `docs/design-references/section-05-nbp11869701186970.png`
- **Interaction model:** static + inview fade-up
- **Source CSS:** `docs/research/components/source-css/widget_menu01.css` (`add_design3`), `mystyle-widget_menu01.css`

## DOM Structure
```
<Reveal className="bg-tt-beige pt-20 pb-[30px]">  (site: widget_menu01 add_design3 pt80 pb30, bg #F6F1EA full width)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   ├─ SectionHeading en="MENU" ja="手入れのしやすい再現性のあるヘアスタイルに仕上げます"
   ├─ SubHeading: カット     (green ring-dot marker, 20px w600 — h3 17px per widget override; use 17px ls 1px mb 15px)
   ├─ inner_item (clearfix / flex)
   │  ├─ image left: 50% width, padding-right 2vw → img /images/menu-cut.jpg alt="カット" (800×530, w-full)
   │  └─ list right: width calc(50% - 2vw)
   │     └─ 5 menu rows (dl/li): each row `border-bottom: 1px solid rgba(0,0,0,0.13)`, padding ~12px 0
   │        row layout: name line = flex justify-between:
   │          left: green chevron (5×5px border rotate 45°, like ›) + name 16.5px w600
   │          right: price 16.5px
   │        note line below name: 13px, letter-spacing 0, color #463b2e opacity ~0.9, padding-left ~14px
   └─ button: <SectionButton href="/menu/">メニューへ</SectionButton> (margin-top ~40px, centered)
```

## Menu data (verbatim)
| name | note | price |
|---|---|---|
| カット（トータル） | シャンプーブロー、シェービング込み | ￥3,800 (税込) |
| カット | シャンプー込み | ￥3,000 (税込) |
| カット（高校生） | シャンプー込み | ￥3,000 (税込) |
| カット（中学生） | シャンプー込み | ￥2,500 (税込) |
| カット（小学生） | シャンプー込み | ￥2,000 (税込) |

## Computed styles
- Section bg `#F6F1EA`; pt 80px pb 30px (≤850px: pt 65px).
- Category label (カット): 17px, letter-spacing 1px, margin-bottom 15px, w600, with SubHeading green dot marker.
- Rows: name w600; note font-size 13px; price regular; divider `rgba(0,0,0,0.13)`.
- Chevron before name: use a small `›`-style CSS chevron, border color #80b27f (site nav_2nd pattern: 5×5px, border-right+bottom 1px, rotate -45°). Vertical center of name line.

## Responsive
- ≤768px: stack — image full width on top, list below full width (mobile screenshot).

## States & Behaviors
- `<Reveal>` fade-up; `<SectionButton>` hover.
- No other interactions (single category, no tabs on home page).
