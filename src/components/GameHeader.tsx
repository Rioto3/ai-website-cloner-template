"use client";

interface GameHeaderProps {
  onOpenHowto: () => void;
}

export function GameHeader({ onOpenHowto }: GameHeaderProps) {
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void document.documentElement.requestFullscreen();
    }
  };

  return (
    <header className="l-n-game__head c-n-game-head">
      <div className="c-n-game-head__left">
        <a className="c-n-game-link" href="/easygame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icon-home.png" alt="" />
          ホームへ戻る
        </a>
        <div className="c-n-game-head__l-info">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/795.png" alt="パズルゲーム｜マジックスライド" />
          <p className="c-n-game-head__ttl">マジックスライド</p>
        </div>
        <div className="c-n-game-head__bookmark">
          <span className="c-n-ranking__like c-n-bookmark-btn c-n-bookmark-btn__count">
            430
          </span>
        </div>
      </div>
      <div className="c-n-game-head__right">
        <button className="c-n-game-btn c-n-bookmark-btn" disabled>
          <span className="c-n-bookmark-btn__txt">お気に入り登録</span>
        </button>
        <button type="button" className="c-n-game-btn" onClick={onOpenHowto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-controller.png"
            alt=""
            className="c-n-game-head__icon"
          />
          遊び方
        </button>
        <button
          className="c-n-game-head__expand js-fullscreen-btn"
          onClick={toggleFullscreen}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-over-size.png"
            alt="全画面表示に切り替え"
            className="c-n-game-head__icon"
          />
        </button>
      </div>
    </header>
  );
}
