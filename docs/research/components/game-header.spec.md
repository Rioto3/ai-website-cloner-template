# GameHeader Specification

## Overview
- **Target file:** `src/components/GameHeader.tsx`
- **Screenshot:** `docs/design-references/desktop-1440-loaded.png` (top bar)
- **Interaction model:** click-driven (home link, 遊び方 opens howto modal, fullscreen toggle)

## DOM Structure (verbatim from original-page.html:2282-2309)
```
header.l-n-game__head.c-n-game-head
├── div.c-n-game-head__left                 (flex, gap 40px)
│   ├── a.c-n-game-link[href=/easygame]     img(/images/icon-home.png) + "ホームへ戻る"
│   ├── div.c-n-game-head__l-info           img(/images/795.png alt="パズルゲーム｜マジックスライド") + p.c-n-game-head__ttl "マジックスライド"
│   └── div.c-n-game-head__bookmark > span.c-n-ranking__like.c-n-bookmark-btn.c-n-bookmark-btn__count "430"
└── div.c-n-game-head__right
    ├── button.c-n-game-btn.c-n-bookmark-btn[disabled] > span.c-n-bookmark-btn__txt "お気に入り登録"
    ├── button.c-n-game-btn[onClick=open howto modal]  img(/images/icon-controller.png).c-n-game-head__icon + "遊び方"
    └── button.c-n-game-head__expand.js-fullscreen-btn[onClick=toggleFullscreen] img(/images/icon-over-size.png alt="全画面表示に切り替え").c-n-game-head__icon
```

## Computed styles
All from `src/app/shell.css` (ported verbatim): `.c-n-game-head` h-100% (60px via .l-n-game__head), bg #fff, padding 0 32px, shadow 0 1px 2px rgba(0,0,0,.16), flex space-between.
Live-verified: header 1440×60; left group gap 40px; bookmark count fontSize 12px inline-flex (heart ::before 16×16 via .c-n-bookmark-btn::before url(/images/icon-heart-off.png)); disabled bookmark button: color #d6d6d6, border 1px solid #d6d6d6, radius 40px, 160×26, cursor default; expand button: bare 16px icon button, no border/background.

## States & Behaviors
- `.c-n-game-link:hover`, `.c-n-game-btn:hover` — opacity .7 under `@media(hover:hover)` (in shell.css as ported).
- 遊び方 click → show `jsModalGameHowto` (React state lift to page).
- Fullscreen click → `document.documentElement.requestFullscreen()` / `document.exitFullscreen()` toggle.
- お気に入り登録 stays `disabled` (non-logged-in state, matches capture).

## Text content (verbatim)
ホームへ戻る / マジックスライド / 430 / お気に入り登録 / 遊び方

## Assets
/images/icon-home.png, /images/795.png, /images/icon-controller.png, /images/icon-over-size.png, /images/icon-heart-off.png (CSS)

## Responsive
Header persists at all widths (min-width 800 page). No layout change.
