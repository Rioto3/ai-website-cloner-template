"use client";

interface GameStartOverlayProps {
  onPlay: () => void;
}

/** The #adInstream / .c-n-game-start overlay shown before the first play. */
export function GameStartOverlay({ onPlay }: GameStartOverlayProps) {
  return (
    <div id="adInstream" className="c-n-ad-instream">
      <div className="c-n-game-start">
        <div className="c-n-game-start__icon">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/795.png" alt="パズルゲーム｜マジックスライド" />
        </div>
        <h1 className="c-n-game-start__ttl">マジックスライド</h1>
        <div className="c-n-game-start__l-btn">
          <button
            id="playBtn"
            className="c-n-btn-fixed c-n-btn-fixed--w300 c-n-btn-fixed--reward"
            onClick={onPlay}
          >
            ゲームスタート
          </button>
        </div>
        <p className="c-n-game-start__info">
          ゲームをスムーズに楽しむためには広告の表示が必要です。
          <br />
          広告ブロッカーをご利用の場合は一時的に無効にしてください。
        </p>
      </div>
    </div>
  );
}
