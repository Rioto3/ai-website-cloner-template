"use client";

import Link from "next/link";

interface GameResultPanelProps {
  score: number;
  onContinueWithoutLogin: () => void;
}

/** #gameResult overlay, shown after the game posts `end`. */
export function GameResultPanel({ score, onContinueWithoutLogin }: GameResultPanelProps) {
  return (
    <div id="gameResult" className="c-n-game-result c-n-game-result--low">
      <div className="c-n-game-result__sec">
        <div className="c-n-game-result-score">
          <div className="c-n-game-result-score__header">
            <div className="c-n-game-result-score__l-score">
              <div className="c-n-game-result-score__ribbon c-n-game-result-score__ribbon--low">
                <h2>スコア</h2>
              </div>
              <p className="c-n-game-result-score__score c-n-game-result-score__score--low">
                <strong id="gameScore">{score.toLocaleString("ja-JP")}</strong>点
              </p>
            </div>
          </div>
        </div>
        <div className="c-n-game-result__l-btn">
          <button
            className="c-n-btn-fixed c-n-btn-fixed--w300 c-n-btn-fixed--outline"
            onClick={onContinueWithoutLogin}
          >
            もう一度遊ぶ
          </button>
          <Link className="c-n-btn-requid c-n-btn-requid--medium c-n-btn-requid--outline" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icon-home.png" alt="ホームアイコン" />
            ホームへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
