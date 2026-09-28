# GameModals (howto / receive-ticket / continue / error) Specification

## Overview
- **Target file:** `src/components/GameModals.tsx`
- **Screenshots:** `modal-howto.png`, `modal-ticket.png`, `modal-continue.png`
- **Interaction model:** click-driven; instant show/hide (`display:none` ↔ block, `.is-active` in clone)

## Shared structure (original-page.html:2695-2823)
```
div.c-n-modal-block(.is-active when open)
├── div.c-n-overlay                    (fixed inset, rgba(0,0,0,.6), z 500000)  — howto & ticket
│   └─ (continue modal uses div.c-n-modal-overlay — transparent)
└── div.l-n-modal > div.c-n-modal      (white card, centered)
    ├── div.c-n-modal__l-close > button.c-n-close[aria-label=閉じる]   — howto & ticket only
    └── div.c-n-modal__inner > div.c-n-modal__content ...
```

## #jsModalGameHowto — ゲーム紹介
Content inside `.c-n-game-popup__inner > .c-n-game-sec--border`:
- header h3 "ゲーム紹介"
- `.c-n-game-howto__header`: thumb img(/images/795.png) + h2 "マジックスライド" + p "魔法の世界のブロックパズル" + info "#パズル"
- sec 遊び方: "ブロックをスライドさせて横のラインを作ろう / ブロックをスライドする度に下からブロックが追加されます / ブロックが上まで来てしまうとゲーム終了 / ブロックを壊して壺のゲージを貯めるとダイヤ出現 / ハイスコアを狙いましょう！" (br-separated)
- sec 注意事項 (verbatim, incl. red span):
  ・当ゲームはゲーム内データ(アイテムやステージクリアステータス等)をセーブするためにCookieを使用しております。
  ・<span style color #F00>Cookieはブラウザで履歴やキャッシュ(インターネット一時ファイル)を削除するときに、一緒に削除されてしまうことがありますのでご注意ください。</span>Cookieの設定についてはご利用のブラウザのヘルプよりご確認ください。
  ・ブラウザ等は最新のバージョンをご利用ください。
  ・プライベートブラウザモードでは正常に遊べない場合があります。
  ・ご利用の端末の状況、状態によっては正しく表示されない場合があります。
  ・推奨環境下であっても端末によっては音声が出ない場合があります。
  ・アドブロック等のプラグインにより正常に表示されない場合があります。
- sec 推奨環境: "■ OS / iOS12.0以降 / Android9.0以降 / Windows10以降 / MacOSX 10.9以降 // ■ ブラウザ / Google Chrome最新版 / Safari最新版"

## #jsModalReceiveTicket — 抽選券を受け取る
h2.c-n-modal__txt "抽選券を受け取る" + 3 buttons (w300):
- #receiveWithAd  .c-n-btn-fixed--reward-ad "広告を視聴して8枚受け取る"
- #receiveWithBooster .c-n-btn-fixed--primary "スコアブースターを使う"
- #receiveWithoutAd .c-n-btn-fixed--outline "5枚受け取る"
(clone: buttons close the modal)

## #gameContinue — コンティニュー
- icon: ExclamationCircleIcon (icons.tsx) in div.c-n-modal__icon
- h2.c-n-modal__ttl "広告を見て<br>コンティニューしますか？"
- p.c-n-modal__txt "コンティニューをすると今回のスコアが<br>次の送信スコアに加算されます。"
- .c-n-continue-score: p.__title "今回のスコア" + p#gameContinueScore.__text {score}
- button#gameContinueYes .c-n-btn-fixed--reward "コンティニュー"
- button#gameContinueNo .c-n-btn-fixed--outline "ゲームをやめる"
- p.c-n-modal__info "※広告を最後まで見終わらなかった場合、コンティニューはキャンセルされます。"
(clone: shown only in logged-in flow — kept for pixel parity, reachable via props; default hidden)

## #errorModal
.c-n-error > h2.c-n-error__ttl "エラー" + p.c-n-error__txt {message} + OK button (hidden by default; kept for parity).

## Styles
All in shell.css (`.c-n-modal*`, `.c-n-close`, `.c-n-continue-score*`, `.c-n-game-howto*`, `.c-n-btn-fixed*`).
Close button hover opacity per shell.css. No open/close animation.
