# hairtt.com — Behavior Bible

Source: live site inspection via Playwright + downloaded source CSS/JS (`3.2/css/*`, `3.2/js/*`).
Tech: jQuery 1.10.2, jquery.inview, slick.js (loaded, unused on home), lozad (map iframe lazy-load), custom `index.js` hero slider, Google Translate widget, YouTube iframe API (unused on home).

## 1. Header scroll behavior (scroll-driven)

Body classes control everything (from `cmn.js` scroll handler):

- Initial: header in flow at top (`position: relative/absolute`), height ~125px desktop (logo row 80px + nav row 45px).
- On first scroll, body gets `.ss` → a transparent `border-top` equal to header height is applied to `#mv_outer` so layout doesn't jump.
- When `scrollY >= main.offset().top` (~846px, bottom of hero): body gets `.scrolled` AND `.hHide` → header becomes `position: fixed; top: -200px; opacity: 0` (hidden).
- When scrolling UP while `scrollY >= (mainTop + headerH) * 1.2`: `.hHide` removed → header slides down into view: `position: fixed; top: 0; opacity: 1; transition: 0.5s ease-in-out`.
- Scrolling back above hero bottom: `.scrolled`/`.hHide` removed → header back in flow.
- Net effect: **header hides when scrolling down, reveals as fixed white bar when scrolling up, and is normal at page top.**

## 2. Hero slider `#mv.slide01` (time-driven + click)

From `index.js`:
- `data-animation-duration="5"` → `mvSpd = 5 * 1000 * 1.4 = 7000ms`.
- Cycle interval: `mvSpd * 0.7 = 4900ms`.
- 4 slides (`ul.mv_img > li`). Active slide = `.show` class + incrementing `z-index` (stacking; old slide stays visible below during crossfade).
- Slide images have CSS zoom animation (Ken Burns), `animation-duration: 7000ms` (set inline), first image gets `.no_animation` initially (removed after first full cycle).
- `.mv_img li`: `opacity: 0; transition: 2s` → `.show`: `opacity: 1` (crossfade). Image `pos_ct` = object-position center, `pos_rt` = right top.
- Pointer nav (`ul.mv_pointer li` = 01–04 on left edge): click switches slide, resets timer; active gets `.current` (shows horizontal line + darker number).
- Arrows `.mv_arrow` prev/next at bottom-right of hero.
- `.mv_scroll` "SCROLL DOWN" vertical text right edge, anchor to `#main`.
- `#mv` fades in on load: `animate({opacity: 1}, 2000, easeInOutCubic)`.

## 3. Section entrance animation (scroll-driven, ALL main sections)

Every content section has class `delay1` and gets `delay1Active` when in view (jquery.inview):
```css
.delay1 > * { opacity: 0; transform: translate(0, 60px); transition: 0.8s ease-in-out; }
.delay1Active > * { opacity: 1; transform: translate(0, 0); }
```
Implement with IntersectionObserver adding a class once (does not re-hide when leaving view — class stays).

## 4. Parallax bands (scroll-driven)

Sections with `.parallax` class (SERVICE band, BLOG, footer message). From `cmn.js`:
- `.parallax_img` = absolutely positioned bg layer, `background-size: cover; background-position: 50% 50%; filter: blur(2px); width: calc(100% + 20px); margin-left: -10px`.
- JS: `spd = 2.5`; `imgHeight = sectionH * 2.5`; on scroll: `ratio = (sectionTop - scrollY + sectionH) / (winH + sectionH)`; `translateY = -imgHeight * ratio + sectionH * ratio`.
- ≤768px: no parallax — `translateY(0)`, `height: 100%`.
- SERVICE band + footer message: solid green `rgb(128,178,127)` bg + pattern/photo parallax image on top, content above.
- BLOG: photo parallax image + content on `rgba(255,255,255,0.8)`-ish white wash (bg photo is dimmed by white overlay on `.content_wrapper` area).

## 5. Fixed bottom contact bar `#fixbtn` (scroll-driven)

Inside `<footer>`, `data-pattern="1"`. Beige bar (`#F6F1EA`) fixed to viewport bottom:
- Hidden at page top; `cmn.js` adds `.scrolled` to `#fixbtn` after scrolling (appears once user scrolls past hero area; slides up via `.fixbtnwrap { transform: translateY() }`).
- Contents: phone icon + `022-352-3957` (large, brown) + `[営業時間] 9:00 〜 19:00 / [定休日] 月`, two CTA buttons (お問い合わせはこちら / ご予約はこちら, dark brown filled), scroll-to-top chevron (`#scrolltop`, anchor to `#top`).
- On mobile: bar shows phone + buttons compactly.

## 6. SERVICE cards hover (hover-driven, desktop ≥1025px)

`.composite_box01.block_images_16 .inner_item`:
- Card = image cover (height 22vw, max 50vh) + bottom gradient `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)` (30% height).
- White label chip top-left (`.heading .h`: white bg, padding 10px 15px, font-size 1.3rem).
- `SERVICE 01` white text bottom-left (padding 15px).
- Hover: image `transform: scale(1.1); transition: 0.6s`; `SERVICE 0n` text fades out (`opacity: 0; transition: 0.4s`); white description box fades in (`opacity: 0→1; transition: 0.4s; transition-delay: 0.3s; background: #fff; padding: 10px; margin: 0 10px; line-height: 1.6`).
- ≤1200px: height 32vw. ≤1024px: static stack — image `position: relative; height: 30vw; margin-bottom: 15px`, description always visible as plain text (no white box), no hover.

## 7. Buttons

- Section CTA buttons (`.contents_btn01 a`): outlined 1px `rgb(70,59,46)`, transparent bg, brown text, width 200px, centered; hover → filled dark brown bg + white text (transition ~0.3s). (In beige MENU section, same style.)
- Header CTA buttons: filled — お問い合わせはこちら `rgb(104,71,51)`, ご予約はこちら darker brown `rgb(70,59,46)`; white text; hover opacity/lighten.
- Nav links: brown text; hover → green underline/color shift (verify per cmn.css `.nav_1st a:hover`).

## 8. Smooth scroll

Anchor clicks (`#main`, `#top`) animate with jQuery `easeInOutCubic`-style scrolling. No Lenis/Locomotive. Native `scroll-behavior: auto` — implement JS-driven smooth scroll for anchors only.

## 9. Map lazy-load

Google Maps embed iframe uses `lozad` (class `lozad`) — loads when scrolled into view. Clone: standard iframe with `loading="lazy"`.

## 10. Responsive breakpoints (from source CSS)

- Global content width: `width_fixed` sections max-width 1160px (content_wrapper); `mw1300`/`mw1500` variants 1300/1500px.
- Major breakpoints seen in CSS: **1200px, 1024px, 900px (header collapses to burger), 768px (parallax off, tablet stack), 640px and below (mobile)**.
- ≤900px: header becomes logo + burger (`.burger` with translate icon + "Menu"); nav hidden in slide-out.
- ≤768px: single column everywhere; CONCEPT image above text; MENU image above list; STAFF image above table; footer nav becomes bordered 2-col grid.

## 11. Hover sweep summary

- Nav links: color/underline transition.
- All CTA buttons: fill/invert transition ~0.3s.
- SERVICE cards: see §6.
- VOICE/gallery images: none significant (verify — plain).
- BLOG list rows: title link color shift on hover.
- Footer links: color shift.
- Tel numbers: click-to-call links.
