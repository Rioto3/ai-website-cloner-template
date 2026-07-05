# hairtt.com — Page Topology (home page)

Desktop page height ≈ 6758px @1440. Content column: `content_wrapper` max-width 1160px centered (wider variants: mw1300, mw1500).

| # | Section | Component | Position/type | Height @1440 | Interaction model |
|---|---------|-----------|---------------|--------------|-------------------|
| 0 | Header `header#pattern2` | `SiteHeader` | in-flow, fixed-on-scroll-up | 125 | scroll-driven (hide/reveal) |
| 1 | Hero `#mv_outer > #mv.slide01` | `HeroSlider` | flow, full-bleed-ish | 847 (incl. header offset) | time-driven crossfade + pointer/arrow click |
| 2 | CONCEPT `.contents_box01.block_image_text_4.mw1300.w55` | `ConceptSection` | flow, white bg | 800 | static + inview fade-up |
| 3 | SERVICE band `.hp.parallax` | `ServiceParallaxBand` | flow, green #80B27F + parallax pattern (img2.png) | 350 | scroll parallax |
| 4 | SERVICE cards `.composite_box01.block_images_16.mw1500` | `ServiceCards` | flow, white bg | 425 | hover-driven overlays (desktop) |
| 5 | VOICE `.widget_gallery01.add_design1` | `VoiceSection` | flow, white | 427 | static + inview |
| 6 | VOICE button `.contents_btn01` | shared `SectionButton` | flow | 138 | hover |
| 7 | MENU `.widget_menu01.add_design3` | `MenuSection` | flow, beige #F6F1EA full-width bg | 808 | static + inview |
| 8 | STAFF `.widget_staff01.add_design2` | `StaffSection` | flow, white | 582 | static + inview |
| 9 | BLOG `.block_news_1.parallax` | `BlogSection` | flow, photo parallax (20220601131346.jpg) + white wash | 508 | scroll parallax + link hover |
| 10 | ACCESS text `.contents_box01.block_text_1` | `AccessSection` | flow, white | 359 | static + inview |
| 11 | Shop info `.widget_shop01.block_map_1.add_design1` | `ShopInfoSection` | flow, white | 494 | static |
| 12 | Map `.widget_map` | `MapSection` | flow | 480 | lazy iframe |
| 13 | ACCESS button `.contents_btn01` | shared `SectionButton` | flow | 118 | hover |
| 14 | Footer message `.contents_box01.parallax` | `FooterMessage` | flow, green #80B27F + parallax (img3.png) | 285 | scroll parallax |
| 15 | Footer `footer.width_fixed` | `SiteFooter` | flow, beige-ish bar + nav + logo + copyright | 288 | link hover |
| — | Fixed bottom bar `#fixbtn` | `FixedContactBar` | fixed bottom, z high | ~66 | scroll-driven appear |
| — | Scroll-top `#scrolltop` | inside FixedContactBar | — | — | click → smooth scroll top |

Anchor jump targets in flow: `a#service_h2`, `a#service`, `a#parallax`, `a#parallax2` (zero height).

## Z-index layers
- header: 50 (fixed when revealed)
- main: 1; parallax_img inside sections: behind content (z inherit), content_wrapper above
- footer: 15; #fixbtn: fixed above content
- Google translate dropdown: 1000 (third-party, mock with simple select)

## Section headings (shared pattern `SectionHeading`)
Vertical 1px line (~30px tall) centered above + big letterspaced heading (Roboto, ~28-32px, color #463B2E, letter-spacing wide) + green subtitle (bold, #80B27F… verify exact green for text vs bg). Used by: CONCEPT, VOICE, MENU, STAFF, BLOG, ACCESS. In MENU/VOICE order: line, heading, subtitle. Subheading with green dot marker (`block_header_2` style) used in CONCEPT ("お客様のなりたいスタイルを実現させます") and MENU category ("カット").

## Assembly order (page.tsx)
SiteHeader → HeroSlider → main: Concept, ServiceParallaxBand, ServiceCards, Voice(+btn), Menu, Staff, Blog, Access, ShopInfo, Map(+btn), FooterMessage → SiteFooter (+FixedContactBar).

## Fonts
- Google Fonts: `Roboto` weights 100/400/900 (Latin headings: CONCEPT, VOICE, HAIR SALON, etc.)
- Japanese: system stack `"游ゴシック", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Meiryo UI", メイリオ, Meiryo, sans-serif` (site lists Noto Sans JP in stack but doesn't load it — use system stack to match rendering).

## Colors (computed)
- Text primary: `rgb(70, 59, 46)` #463B2E (dark brown)
- Text body: `rgb(51, 51, 51)` #333333
- Brown accent (header CTA 1, staff name): `rgb(104, 71, 51)` #684733
- Green accent (subtitles, HAIR SALON, markers, parallax bg): `rgb(128, 178, 127)` #80B27F
- Beige section bg: `rgb(246, 241, 234)` #F6F1EA
- Beige alt (bottom bar): `rgb(241, 234, 226)` #F1EAE2
- Dividers: `rgba(0, 0, 0, 0.13)`
- White overlay (BLOG wash): `rgba(255, 255, 255, 0.8)`
