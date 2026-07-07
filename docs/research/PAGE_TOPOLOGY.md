# Page Topology — マジックスライド game page (easygame/game/795)

Single-page fixed-viewport app shell. Reference: `docs/design-references/desktop-1440-loaded.png`.

```
body (bg #fff, system font, 14px, #333)
└── section.l-n-game.l-n-game--radius        100vw×100vh flex-col, min-width 800px, position:relative
    ├── header.l-n-game__head.c-n-game-head  h-60, white, px-32, flex row space-between  [GameHeader]
    │   ├── left (flex, gap 40): home link | game icon 40×40 + title | ♥count
    │   └── right: お気に入り登録 (disabled pill) | 遊び方 (pill) | fullscreen icon btn
    ├── div.l-n-game__main                   flex-1 flex row, min-height 0
    │   ├── aside.l-n-game__side--left       w-340, px-20, hidden ≤1200px  [GameSidebarLeft]
    │   │   ├── ad slot 300×250 (placeholder in clone)
    │   │   └── 今日の目標 card (.c-n-game-sec--border, red header)  [DailyGoalCard]
    │   ├── main.l-n-game__center.c-n-game-center--radius   flex-1, black bg, rounded-20, overflow hidden, position:relative
    │   │   ├── #adInstream .c-n-ad-instream     absolute inset-0 z-20 overlay  [GameStartOverlay]
    │   │   │   ├── .c-n-game-start              frosted card: icon 80, title, playBtn, info text
    │   │   │   └── #mainContainer               (IMA container — omitted in clone)
    │   │   ├── iframe.c-n-game-center__game     w-100% h-100%, src=/game/magicslide/game.html  [GameFrame]
    │   │   └── #gameResult .c-n-game-result     absolute overlay, hidden until game end  [GameResultPanel]
    │   └── aside.l-n-game__side--right      w-340, hidden ≤1200px  [GameSidebarRight]
    │       ├── ad slot 300×250 (placeholder)
    │       └── .c-n-game-recommend           [RecommendPanel]
    │           ├── 似ているゲーム: hashtag pills ×5
    │           └── おすすめのゲーム: 18 thumbnails 80×80, 3-col grid
    └── footer.l-n-game__footer              ad slot 728×90 (placeholder)  [GameFooter]

Siblings of section (modals, all display:none initially):
├── #errorModal.c-n-modal-block              [ErrorModal]
├── #jsModalGameHowto.c-n-modal-block        ゲーム紹介 modal  [HowtoModal]
├── #jsModalReceiveTicket.c-n-modal-block    抽選券 modal  [ReceiveTicketModal]
└── #gameContinue.c-n-modal-block            コンティニュー modal  [ContinueModal]
```

## Z-layers
1. iframe (game) — base of center area
2. `#gameResult` overlay — above iframe when shown
3. `#adInstream` / `.c-n-game-start` — z-20 above iframe until removed
4. Modals — page-level, above everything (overlay + centered card)

## Build strategy
- The game itself is **mirrored verbatim** into `public/game/magicslide/` (PixiJS bundle + assets, 167 files) and embedded via same-origin iframe. Not re-implemented.
- The shell is rebuilt in React/Tailwind from the captured HTML (`scratchpad/shell-page.html`) + CSS subset (`docs/research/page-used.css`).
- A `GameHost` client component implements the postMessage protocol (see BEHAVIORS.md) with mocked success responses + localStorage persistence.
- Ad slots become neutral placeholder boxes with the original slot dimensions.

## Component → file map
| Component | File |
|---|---|
| GameHeader | src/components/GameHeader.tsx |
| DailyGoalCard | src/components/DailyGoalCard.tsx |
| GameSidebars (left/right + ad slot) | src/components/GameSidebars.tsx |
| RecommendPanel | src/components/RecommendPanel.tsx |
| GameStartOverlay | src/components/GameStartOverlay.tsx |
| GameResultPanel | src/components/GameResultPanel.tsx |
| GameFrame + GameHost logic | src/components/GameCenter.tsx |
| Modals (howto/ticket/continue/error) | src/components/GameModals.tsx |
| Page assembly | src/app/page.tsx |
