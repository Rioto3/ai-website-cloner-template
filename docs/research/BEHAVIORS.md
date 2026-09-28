# Behaviors — game.hiroba.dpoint.docomo.ne.jp/easygame/game/795 (マジックスライド)

## Page-level

- **Fixed-viewport app shell.** `section.l-n-game` is `100vw × 100vh` flex column (`min-width: 800px`). No page scrolling at desktop; below 800px viewport width the page scrolls horizontally (doc width stays 800). There is NO separate mobile layout for this URL with a desktop UA (the real site serves a different SP page by user-agent, out of scope).
- **Responsive breakpoints (from app.css):**
  - `max-width: 1200px`: both sidebars (`.l-n-game__side`) are hidden; game center takes full width.
  - `max-width: 1300px && min-width: 1200px`: sidebar width reduces.
  - `max-height: 600px`: header shrinks.
  - `hover: hover`: hover styles gated behind pointer support.
- **No smooth-scroll library, no scroll-driven animations.** Everything is click/state driven.
- Font: system stack `-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. No webfonts.

## Interaction model per section

| Section | Model |
|---|---|
| Header | click (home link, 遊び方 modal, fullscreen toggle) |
| Left goal card | static |
| Ad slots (left/right/footer) | third-party ads — cloned as static placeholder slots |
| Game start overlay | click ゲームスタート → (ads, skipped in clone) → overlay removed |
| Game iframe | the actual game (mirrored PixiJS bundle) — touch/drag driven |
| Result panel | shown by shell when game posts `execute:"end"` |
| Modals | click-open/close, `display:none` toggle (`showModal(id)`/`hideModal(id)`) |

## Start flow (observed live)

1. Page load: iframe loads game; game preloads assets ("NowLoading… N%"), then waits.
2. `#playBtn` is `disabled` until ad SDK ready (clone: enable immediately).
3. Click ゲームスタート → `easygame.playGame()` → `playAds()` (IMA instream; watchdog ~ few s if no ad) → `destroyIMA()` → `#adInstream` element **removed from DOM** (overlay + frosted card gone, game revealed).
4. Game shows its own canvas UI: how-to screen (first run) → OK → title screen (witch, START).
5. Tap START in canvas → iframe posts `{execute:"start", id}` to parent.
6. Shell POSTs `start.json` (real site) → replies `postMessage({...data, id})` to iframe. Game proceeds on receiving reply with matching `id`.

## postMessage protocol (shell ⇄ game iframe)

Game → shell (`window.top.postMessage(msg, '*')`):
- `{execute:"start", id}` — reply `{id, status:"success", key:"<any>"}` (game only awaits the reply; doesn't check fields).
- `{execute:"end", id, score, data:{score}}` — shell shows result UI. Reply `{id, ...}` resolves the game's end promise (game returns to title).
- `{execute:"save", id, data:"<json string>"}` — persist (clone: localStorage). Reply `{id}`.
- `{execute:"getdata", id}` — reply `{id, gamedata:"<json string or null>"}`; game does `JSON.parse(e.gamedata || "{}")`.
- `{execute:"rewardad", id}` / `{execute:"ad", id}` — reply `{id}` = success, `{id, status:"fail"}` = fail (fail cancels continue).
- `{execute:"fullscreen"|"exitFullscreen", id}` — viewport change.

Shell → game (unsolicited): `{exeucte:"keydown", keyCode}` (note original's typo "exeucte") for ArrowLeft/Up/Right/Down + a/d/s/w keys.

## End flow (from toolbox-easygame.js)

1. `execute:"end"` received; `lastScore` stored.
2. If logged-in & continuable game: show `#gameContinue` modal first (コンティニュー / ゲームをやめる). Not-logged-in (our clone's state): skip.
3. POST `finish.json` (clone: mock success) → show `#gameResult` panel (score + login promo for non-logged-in users), reply to iframe.
4. `#gameResult` buttons: 「ログインしないでゲームを続ける」 hides panel (real site also shows interstitial ad); 「ホームへ戻る」 navigates to /easygame.

## Hover states (from app.css, under `@media(hover: hover)` where noted)

- `.c-n-game-link:hover` (ホームへ戻る): `opacity: .7`, `transition: opacity .2s` (hover:hover)
- `.c-n-game-btn:hover` (遊び方 etc.): `opacity: .7` (hover:hover)
- `.c-n-game-head__expand:hover`: `opacity: .7`
- `.c-n-hashtag__link:hover`: `background-color: #ffe4e9` (pink tint)
- `.c-n-game-recommend__item a:hover img`: `opacity: .7`
- `.c-n-btn-fixed:hover`: `opacity: .8`
- `.c-n-login-btn:hover`: `opacity: .8`
- `.c-n-close:hover`: `opacity: .7`

Exact values live in `docs/research/page-used.css` (extracted subset of the site's app.css) — treat that file as authoritative.

## Modals

All modals share pattern: `#<id>.c-n-modal-block { display:none }` → shown via jQuery `.show()` (block). Structure: `.c-n-overlay` (dim backdrop) + `.l-n-modal > .c-n-modal` (white rounded card, close button top-right outside card). No enter/exit animation (instant show/hide).

- `#jsModalGameHowto` — ゲーム紹介 (game intro + how-to + notes + requirements), scrollable content.
- `#jsModalReceiveTicket` — 抽選券を受け取る, 3 buttons.
- `#gameContinue` — コンティニュー confirm (uses `.c-n-modal-overlay`, exclamation SVG icon).
- `#errorModal` — error text + OK button.

## Fullscreen toggle

`toggleFullscreen()` — requests browser fullscreen on the page (`document.documentElement.requestFullscreen`), icon in header right. Clone: same via Fullscreen API.

## Game (inside iframe, mirrored bundle — behavior comes for free)

- Loading screen (witch silhouette, "NowLoading…" + %) → how-to (first run, OK button) → title (Magic Slide logo, witch, START, shop 🛒, language 🌐, sound 🔊, coin counter) → gameplay.
- Gameplay: 8-column grid; drag rows of gem blocks horizontally to complete lines; each committed slide adds a new row from below; blocks reaching the top = game over. Jar gauge fills on breaks → diamond blocks. Fire booster button, pause button.
- Canvas is 9:16 portrait, letterboxed with black (`background-color:#000000` on body) inside the 756×619 iframe.
