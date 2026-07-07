"use client";

interface GameResultPanelProps {
  score: number;
  onContinueWithoutLogin: () => void;
}

/** #gameResult overlay — non-logged-in variant, shown after the game posts `end`. */
export function GameResultPanel({ score, onContinueWithoutLogin }: GameResultPanelProps) {
  return (
    <div
      id="gameResult"
      className="c-n-game-result c-n-game-result--low c-n-game-result--nologin"
    >
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
          <div className="c-n-login">
            <p className="c-n-login__title">
              ログインして遊べば
              <br />
              <strong>
                最大1,000,000<span>スター</span>獲得のチャンス!!
              </strong>
            </p>
            <p className="c-n-login__note">
              ※dポイント（期間・用途限定）10,000ポイント＝1,000,000スター相当となります
            </p>
            <div className="c-n-login__l-btn">
              <a
                href="https://hiroba.dpoint.docomo.ne.jp/game/redirect/easygame"
                className="c-n-login-btn"
              >
                <span className="c-n-login-btn__txt">会員登録</span>
                <span className="c-n-login-btn__divider">または</span>
                <span className="c-n-login-btn__txt">dアカウントIDログイン</span>
              </a>
            </div>
            <p className="c-n-login__info">
              ※ご利用には<a href="https://hiroba.dpoint.docomo.ne.jp">ポイント広場</a>
              への登録が必要です
            </p>
          </div>
        </div>
        <div className="c-n-game-result__l-btn c-n-game-result__l-btn--login">
          <button
            className="c-n-btn-fixed c-n-btn-fixed--w300 c-n-btn-fixed--outline"
            onClick={onContinueWithoutLogin}
          >
            ログインしないでゲームを続ける
          </button>
          <a
            className="c-n-btn-requid c-n-btn-requid--medium c-n-btn-requid--outline"
            href="/easygame"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icon-home.png" alt="ホームアイコン" />
            ホームへ戻る
          </a>
        </div>
      </div>
    </div>
  );
}
