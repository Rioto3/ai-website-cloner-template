# StaffSection Specification

## Overview
- **Target file:** `src/components/StaffSection.tsx` (server component)
- **Screenshot:** `docs/design-references/section-06-nbp12412461241246.png`
- **Interaction model:** static + inview fade-up
- **Source CSS:** `docs/research/components/source-css/widget_staff01.css` (`add_design2`)

## DOM Structure
```
<Reveal className="pt-[30px] pb-[30px]">  (site: widget_staff01 add_design2 pt30 pb30, white bg)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   ├─ SectionHeading en="STAFF" ja="ひげや眉のデザインから身だしなみまでプロが承ります"
   ├─ inner_item (overflow hidden / flex, margin-bottom 50px)
   │  ├─ image left: width 30%, min-height 220px, flex centered
   │  │  └─ img /images/staff-toshimitsu.jpg alt="TOSHIMITSU" (676×507, w-full)
   │  └─ text right: width 67%, float right, text-left
   │     ├─ name heading: TOSHIMITSU — ~20px w700, color #684733, padding-bottom ~8px,
   │     │  border-bottom 1px solid rgba(0,0,0,0.13), margin-bottom 0
   │     └─ profile table (dl): rows with border-bottom 1px solid rgba(0,0,0,0.13), padding 10px 0
   │        label cell width ~130px (16.5px w500), value cell flex-1
   └─ button: <SectionButton href="/staff/">スタッフへ</SectionButton>
```

## Profile rows (verbatim)
| label | value |
|---|---|
| メッセージ | お客様のニーズにお答え出来る仕事をさせて頂きますのでよろしくお願いします。 |
| 業歴 | 30年以上 |
| 得意なイメージ | ナチュラル |
| 趣味 | ビール |

## Computed styles
- Name: color #684733 (brown), font-weight 700, ~20px, letter-spacing ~1px, with border-bottom row divider.
- Table text: 16.5px lh 1.9; dividers rgba(0,0,0,0.13); label column ~130px fixed.
- Gap between image (30%) and text (67%) = 3%.

## Responsive
- ≤768px: image width 70% centered (no float), text below full width **centered text-align** (per source), then table rows left-aligned values — follow mobile screenshot: rows stack, labels above values (block), all centered container but table text left.

## States & Behaviors
- `<Reveal>` fade-up; `<SectionButton>` hover. No other interactions ("もっと見る" toggle in source is not visible on desktop home — omit).
