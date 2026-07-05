# Footer Area Specification (3 components)

## Overview
- **Target files:** `src/components/FooterMessage.tsx`, `src/components/SiteFooter.tsx`, `src/components/FixedContactBar.tsx` (bar is client)
- **Screenshots:** `docs/design-references/section-12-nbp11869801186980.png` (message band), bottom of `hairtt-desktop-1440-full.png` (footer), any scrolled section screenshot (fixed bar at viewport bottom)
- **Source CSS:** `docs/research/components/source-css/mystyle-footer.css` (definitive), `mystyle-extra_colors.css`

## 1) FooterMessage — green parallax band with white text
```
<ParallaxSection id="parallax2" image="/images/parallax-footer.jpg"
   className="bg-tt-green pt-20 pb-20"    (site: contents_box01 pt80 pb80 parallax; bg #80b27f; color #fff)
   imageClassName="opacity-20">           (source: #parallax2+section .parallax_img)
└─ <Reveal>
   └─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
      └─ p — color #fff, 16.5px lh 1.9, text-left, font-weight 500
```
Paragraph (verbatim, note the bold spans): `クラシックなアメリカンスタイルを感じさせるインテリアが並ぶ落ち着いた雰囲気の**理容室**・HIAR T.Tを**仙台市**に構え、数々のコンテストで優勝経験のあるスタイリスト歴30年を超えるベテランスタイリストがご対応しております。丁寧なカウンセリングでご希望やお悩みを詳しくお聞きし、髪質や骨格を考慮しながらお客様のなりたいイメージをしっかり形にいたしますのでお任せください。メンズカットやレディースカット、ビジネスカットといったヘアスタイルだけではなく、お顔そりや眉カット、ノーズケア、クレンジング、ヘッドスパなどトータルケアしております。`
(**bold** = `<strong>` — 理容室 and 仙台市 are bold on the site.)

## 2) SiteFooter
```
<footer className="bg-tt-beige2 text-center">   (site: footer — background #f1eae2, color #463b2e, font-size 13.5px)
├─ [FixedContactBar renders here — see 3; it occupies a 60px+30px slot at footer top: in-flow placeholder height 60px + margin-bottom 30px]
├─ content_wrapper (max-width 1160px, margin auto, padding 0 20px)
│  ├─ nav ul — horizontal centered wrap; li padding 5px 0; links 13.5px w600 letter-spacing 3px;
│  │   inline separators: items separated by space (desktop row: ホーム コンセプト メニュー ギャラリー お客様の声 スタッフ ブログ アクセス お問い合わせ プライバシーポリシー サイトマップ)
│  │   hrefs: / /concept/ /menu/ /gallery/ /voice/ /staff/ /blog/ /access/ /contact/ /privacy_policy/ /sitemap/
│  │   hover: color #80b27f (transition ~0.3s)
│  ├─ logo: img /images/logo.png centered, max-width ~180px, margin ~25px auto
└─ #cp copyright: © 2026 仙台市の理容室はHIAR T.T ALL RIGHTS RESERVED. — 13.5px, padding ~15px 0 45px (leave room for fixed bar overlap? No — bar docks above; padding-bottom ~20px)
```
Mobile ≤768px: nav becomes 2-column grid with `border-bottom 1px solid rgba(0,0,0,0.13)` per cell (mobile screenshot).

## 3) FixedContactBar (client)
Beige bar fixed to viewport bottom once scrolled.
```
<div id="fixbtn" className="relative min-h-[60px] mb-[30px]">   (in-flow slot inside footer top)
└─ .fixbtnwrap — width 100%, fixed left 0 bottom 0, transition 0.3s ease-in-out,
     translateY(100%) hidden → translateY(0) shown (class toggle)
     background rgba(246,241,234,0.9); border-top 1px solid rgba(0,0,0,0.13)
   └─ .inner — flex, min-height 60px, justify-between, max-width 1200px, margin auto; children padding 8px 15px, flex items-center
      ├─ tel block (flex-grow, border-right 1px solid rgba(0,0,0,0.13)):
      │    TelIcon 22×22 fill #463b2e + span 022-352-3957 (34px, line-height 1, color #463b2e, mr 10px)
      │    + p [営業時間] 9:00 〜 19:00 / [定休日] 月 (12.5px lh 1.2)
      ├─ buttons block: 2 filled buttons — bg #684733, border 1px #684733, transition 0.4s ease-in-out;
      │    span: white, 15px, lh 1.6, padding 10px 20px 11px (site .contents_btn01 in fixbtn: filled, no slide effect)
      │    hover: bg transparent, text #684733
      │    お問い合わせはこちら → /contact/ ; ご予約はこちら → hotpepper URL (target _blank)
      └─ #scrolltop — a 40×40, chevron ::before 30×30 border-left+top 2px solid #463b2e rotate 45°, at top 17px left 3px;
           hover opacity 0.7 (0.2s); click → smooth scroll to top (href="#top")
```

### Behavior (source: cmn.js funcFixFooter)
- Hidden (`translateY(100%)`) while `scrollY < window.innerHeight`.
- Shown (fixed bottom, translateY(0)) once `scrollY ≥ window.innerHeight`.
- When the page is scrolled to the bar's in-flow slot (`scrollY + innerHeight ≥ slotTop + slotHeight`): bar docks — `position: absolute; top: 0` inside the footer slot (stops floating).
- Mobile ≤600px: tel font 20px, icon 18×18, button span padding 7px 10px 8px, mb 0.

## States & Behaviors summary
- FooterMessage: parallax + reveal.
- Footer links hover → green.
- FixedContactBar: scroll-driven show/dock; button hover invert; scrolltop hover + smooth scroll.
