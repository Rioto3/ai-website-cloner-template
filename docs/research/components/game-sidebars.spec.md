# GameSidebars (left: DailyGoalCard + ad, right: RecommendPanel + ad) Specification

## Overview
- **Target files:** `src/components/GameSidebars.tsx`, `src/components/DailyGoalCard.tsx`, `src/components/RecommendPanel.tsx`, `src/components/AdSlot.tsx`
- **Screenshot:** `docs/design-references/desktop-1440-loaded.png`
- **Interaction model:** static (links + hover only)

## DOM Structure (original-page.html:2316-2383, 2485-2660)
```
aside.l-n-game__side.l-n-game__side--left.c-n-game-side
├── div > AdSlot (min-width 300, min-height 250 — placeholder box in clone)
└── div.c-n-game-sec.c-n-game-sec--border      「今日の目標」card
    ├── header.c-n-game-sec__header > h3.c-n-game-sec__ttl "今日の目標" + p.c-n-game-sec__info "毎日 午前0時更新"
    └── div.c-n-game-sec__body > ul.c-n-game-goal-score
        └── li.c-n-game-goal-score__score ×4:
            div: {score}<small>点</small> ; span: img(/images/icon-ticket.png alt=抽選券) "× {n}"
            rows: 37,680/20 ; 21,570/5 ; 12,830/3 ; 8,310/1

aside.l-n-game__side.l-n-game__side--right.c-n-game-side
├── div > AdSlot (300×250 placeholder)
└── div.c-n-game-recommend
    ├── div.c-n-game-recommend__related
    │   ├── h2.c-n-game-recommend__ttl  img(/images/icon-hashtag-similar.png 20×20) "似ているゲーム"
    │   └── div.c-n-hashtag > ul.c-n-hashtag__list > li > a.c-n-hashtag__link ×5
    │       "# キャラクター" "# スライド" "# ファンタジー" "# 美しい" "# シンプル" (hrefs /easygame/hashtag/<tag>/popular)
    └── div.c-n-game-recommend__popular
        ├── h2.c-n-game-recommend__ttl  img(/images/icon-fire.png 20×20) "おすすめのゲーム"
        └── ul.c-n-game-recommend__l-item > li.c-n-game-recommend__item ×18
            a[href=/easygame/game/{id}] > img(/images/{id}.png 80×80 alt={title})
```

## Recommended games (verbatim order)
141 二角取りPLAIN, 497 集めてにゃんこパズル, 458 カラフルアソート, 237 二角取り, 472 海賊バブルパズル, 507 おきつね様の円結びパズル, 348 ソリティア, 411 ぷちっとパズル, 382 マッチスリー, 476 ワンストロークパズル, 453 森の宝石パズル, 491 マッチマート, 460 かわいいどうぶつ集め, 461 たのしいクリスマスパズル, 452 メルティタイム, 784 二角取りボーナスマッチ, 705 バスパーキングパズル, 294 ドーナツパーティ, 795 マジックスライド, 499 ソートマート, 325 鬼太郎 ようがめ, 500 かわいいおもちゃパズル, 407 にゃんたまパズル
(NOTE: the original list has 23 items — use all, in DOM order from original-page.html:2532-2657.)

## Styles
All in shell.css: `.l-n-game__side` w-340 p-16/20 hidden ≤1200px; `.c-n-game-sec--border` bordered card; goal rows; `.c-n-hashtag__link` pill (border, radius, red text) with hover bg; `.c-n-game-recommend__l-item` grid; item img 80×80 rounded.

## States & Behaviors
- `.c-n-hashtag__link:hover` — background tint (see shell.css).
- `.c-n-game-recommend__item a:hover img` — opacity (see shell.css).
- Links point at the real portal paths (dead ends in the clone — acceptable, out-of-scope backend).

## Responsive
Both asides `display:none` at ≤1200px (media rule already in shell.css).
