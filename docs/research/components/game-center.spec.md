# GameCenter (start overlay + game iframe + result panel + postMessage host) Specification

## Overview
- **Target files:** `src/components/GameCenter.tsx` (client), `src/components/GameStartOverlay.tsx`, `src/components/GameResultPanel.tsx`
- **Screenshots:** `desktop-1440-loaded.png` (overlay), `game-playing.png` (iframe), `shell-result-panel.png` (result)
- **Interaction model:** click-driven + postMessage protocol (see BEHAVIORS.md)

## DOM Structure (original-page.html:2387-2481)
```
main.l-n-game__center.c-n-game-center.c-n-game-center--radius   (flex-1, bg #000, radius, overflow hidden, pb-100)
├── div#adInstream.c-n-ad-instream          — overlay wrapper, removed after start click
│   └── div.c-n-game-start                  — frosted card (bg rgba(255,255,255,.3), radius 32, z-1)
│       ├── div.c-n-game-start__icon > img(/images/795.png)
│       ├── h1.c-n-game-start__ttl "マジックスライド"
│       ├── div.c-n-game-start__l-btn > button#playBtn.c-n-btn-fixed.c-n-btn-fixed--w300.c-n-btn-fixed--reward "ゲームスタート"
│       └── p.c-n-game-start__info "ゲームをスムーズに楽しむためには広告の表示が必要です。<br/>広告ブロッカーをご利用の場合は一時的に無効にしてください。"
├── iframe.c-n-game-center__game[src=/game/magicslide/game.html]   (w/h 100%)
└── div#gameResult.c-n-game-result.c-n-game-result--low.c-n-game-result--nologin  (hidden until end)
    └── div.c-n-game-result__sec
        ├── div.c-n-game-result-score
        │   ├── header: ribbon(.c-n-game-result-score__ribbon--low) h2 "スコア";
        │   │   p.c-n-game-result-score__score--low > strong#gameScore {score}点
        │   └── div.c-n-login — login promo:
        │       ログインして遊べば<br><strong>最大1,000,000<span>スター</span>獲得のチャンス!!</strong>
        │       note: ※dポイント（期間・用途限定）10,000ポイント＝1,000,000スター相当となります
        │       a.c-n-login-btn[href=https://hiroba.dpoint.docomo.ne.jp/game/redirect/easygame]:
        │         span.c-n-login-btn__txt 会員登録 / span.c-n-login-btn__divider または / span.c-n-login-btn__txt dアカウントIDログイン
        │       info: ※ご利用にはポイント広場への登録が必要です (ポイント広場 links https://hiroba.dpoint.docomo.ne.jp)
        └── div.c-n-game-result__l-btn.c-n-game-result__l-btn--login
            ├── button.c-n-btn-fixed--w300.c-n-btn-fixed--outline "ログインしないでゲームを続ける" → hide panel
            └── a.c-n-btn-requid.c-n-btn-requid--medium.c-n-btn-requid--outline[href=/easygame] img(icon-home) "ホームへ戻る"
```

## Behaviors (from BEHAVIORS.md, authoritative)
- playBtn: enabled immediately in clone (no ad SDK). Click → remove `#adInstream` from DOM (state), matching original `destroyIMA()`.
- GameHost message loop — `window.addEventListener("message")`, respond to `e.source.postMessage(reply, "*")`:
  - `start` → `{id, status:"success", key:"clone"}`
  - `getdata` → `{id, status:"success", gamedata: localStorage["magicslide-gamedata"] ?? null}`
  - `save` → store `msg.data` string → `{id, status:"success"}`
  - `end` → set score state, show result panel → `{id, status:"success"}`
  - `ad`/`rewardad` → `{id, status:"success"}` (instant, no ads)
  - `fullscreen`/`exitFullscreen` → request/exit fullscreen on documentElement
- Keyboard forward: keydown of ArrowLeft/Up/Right/Down + a/d/s/w → `iframe.contentWindow.postMessage({exeucte:"keydown", keyCode}, "*")`.
- Result panel 「ログインしないでゲームを続ける」 → hide panel (game already back at title).

## Styles
All class rules ported in shell.css. Frosted overlay `.c-n-ad-instream` absolute inset; `.c-n-game-start` centered frosted card; `.c-n-btn-fixed--reward` pink gradient pill (#ff2059-ish per CSS); result panel absolute overlay with white card.

## Assets
/images/795.png, /images/icon-home.png, /game/magicslide/game.html (mirrored bundle, 167 files)

## Responsive
Center flex-1 all widths; iframe fills; overlay card margin 16.
