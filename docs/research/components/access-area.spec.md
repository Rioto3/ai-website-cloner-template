# Access Area Specification (3 small components)

## Overview
- **Target files:** `src/components/AccessSection.tsx`, `src/components/ShopInfoSection.tsx`, `src/components/MapSection.tsx` (all server components)
- **Screenshots:** `docs/design-references/section-08-nbp11869731186973.png` (ACCESS), `section-09-nbp11869741186974.png` (shop info), `section-10-nbp12347881234788.png` (map + button)
- **Interaction model:** static + inview fade-up; map = lazy iframe
- **Source CSS:** `docs/research/components/source-css/widget_shop01.css`, `mystyle-widget_shop01.css`

## 1) AccessSection
```
<Reveal as="section" className="pt-20 pb-[30px]">   (site: contents_box01 block_text_1 pt80 pb30)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   ├─ SectionHeading en="ACCESS" ja="中野栄駅や陸前高砂駅から徒歩圏内にサロンを構え営業中"
   └─ p (text-left, 16.5px lh 1.9)
```
Paragraph (verbatim): `クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなインテリアが並び、日常を忘れさせるような落ち着いた雰囲気の中で豊富な実績と経験を持つベテランスタイリストが確かな技術で施術しております。サロンは仙台育英学園高等学校の近くにあり、中野栄駅や陸前高砂駅から歩いてお越しいただけます。`

## 2) ShopInfoSection
```
<Reveal className="pt-0 pb-0">   (site: widget_shop01 block_map_1 add_design1 pt0 pb0 width_full)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   ├─ h3 HIAR T.T — ~20px w700 color #684733, padding-bottom 10px, border-bottom 1px solid rgba(0,0,0,0.13)
   └─ table rows (dl) — each row border-bottom 1px solid rgba(0,0,0,0.13), padding ~14px 0, flex:
      label width ~180px (16.5px w500), value flex-1 (16.5px lh 1.9)
```
Rows (verbatim):
| label | value |
|---|---|
| 電話番号 | 022-352-3957 |
| FAX番号 | 022-352-3957 |
| 所在地 | 〒983-0013<br/>宮城県仙台市宮城野区中野字寺前46-1 |
| 営業時間 | 9:00 〜 19:00 |
| 定休日 | 毎週月曜日 / 第一・三 月火連休 |
| 駐車場 | 有 |
| お支払方法 | 現金 / VISA / MasterCard / JCB / American Express / Diners / 交通系電子マネー　iD　Quickpay PayPay 楽天Pay |

## 3) MapSection
```
<div className="pt-[30px] pb-[30px]">   (site: widget_map pt0 pb30)
└─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
   └─ iframe — Google Maps embed, width 100%, height 450px, border 0, loading="lazy"
      src: https://www.google.com/maps?q=%E5%AE%AE%E5%9F%8E%E7%9C%8C%E4%BB%99%E5%8F%B0%E5%B8%82%E5%AE%AE%E5%9F%8E%E9%87%8E%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%AD%97%E5%AF%BA%E5%89%8D46-1%E3%80%80HAIR%20T.T&output=embed
      title="GoogleMap"
      referrerPolicy="no-referrer-when-downgrade"
</div>
```
(The original uses Maps Embed API with an API key; the keyless `output=embed` form renders the same pin view.)

Then the アクセスへ button as part of MapSection bottom (site: separate contents_btn01 pt0 pb60):
```
<div className="pb-[60px]"> <SectionButton href="/access/">アクセスへ</SectionButton> </div>
```

## Responsive
- ≤768px: shop info rows stack (label above value); map height ~300px.

## States & Behaviors
- `<Reveal>` on ACCESS + shop info. Map lazy loads. `<SectionButton>` hover.
