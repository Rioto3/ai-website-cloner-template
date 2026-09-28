"use client";

interface HowtoModalProps {
  open: boolean;
  onClose: () => void;
}

/** #jsModalGameHowto — ゲーム紹介 modal. */
export function HowtoModal({ open, onClose }: HowtoModalProps) {
  if (!open) return null;
  return (
    <div id="jsModalGameHowto" className="c-n-modal-block is-active">
      <div className="c-n-overlay" onClick={onClose}></div>
      <div className="l-n-modal">
        <div className="c-n-modal">
          <div className="c-n-modal__l-close">
            <button
              type="button"
              className="c-n-close"
              aria-label="閉じる"
              onClick={onClose}
            ></button>
          </div>
          <div className="c-n-modal__inner">
            <div className="c-n-modal__content">
              <div className="c-n-game-popup__inner">
                <div className="c-n-game-sec c-n-game-sec--border">
                  <header className="c-n-game-sec__header">
                    <h3 className="c-n-game-sec__ttl">ゲーム紹介</h3>
                  </header>
                  <div className="c-n-game-sec__body">
                    <div className="c-n-game-howto">
                      <div className="c-n-game-howto__header">
                        <div className="c-n-game-howto__header-inner">
                          <div className="c-n-game-howto__thumb">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/795.png" alt="マジックスライド" />
                          </div>
                          <div className="c-n-game-howto__container">
                            <h2 className="c-n-game-howto__ttl">マジックスライド</h2>
                            <p className="c-n-game-howto__txt">
                              魔法の世界のブロックパズル
                            </p>
                            <div className="c-n-game-howto__info">#パズル</div>
                          </div>
                        </div>
                      </div>
                      <div className="c-n-game-howto__sec">
                        <h3 className="c-n-game-howto__ttl">遊び方</h3>
                        <p className="c-n-game-howto__txt">
                          ブロックをスライドさせて横のラインを作ろう
                          <br />
                          ブロックをスライドする度に下からブロックが追加されます
                          <br />
                          ブロックが上まで来てしまうとゲーム終了
                          <br />
                          ブロックを壊して壺のゲージを貯めるとダイヤ出現
                          <br />
                          ハイスコアを狙いましょう！
                        </p>
                      </div>
                      <div className="c-n-game-howto__sec">
                        <h3 className="c-n-game-howto__ttl">注意事項</h3>
                        <p className="c-n-game-howto__txt">
                          ・当ゲームはゲーム内データ(アイテムやステージクリアステータス等)をセーブするためにCookieを使用しております。
                          <br />
                          ・
                          <span style={{ color: "#F00" }}>
                            Cookieはブラウザで履歴やキャッシュ(インターネット一時ファイル)を削除するときに、一緒に削除されてしまうことがありますのでご注意ください。
                          </span>
                          Cookieの設定についてはご利用のブラウザのヘルプよりご確認ください。
                          <br />
                          ・ブラウザ等は最新のバージョンをご利用ください。
                          <br />
                          ・プライベートブラウザモードでは正常に遊べない場合があります。
                          <br />
                          ・ご利用の端末の状況、状態によっては正しく表示されない場合があります。
                          <br />
                          ・推奨環境下であっても端末によっては音声が出ない場合があります。
                          <br />
                          ・アドブロック等のプラグインにより正常に表示されない場合があります。
                        </p>
                      </div>
                      <div className="c-n-game-howto__sec">
                        <h3 className="c-n-game-howto__ttl">推奨環境</h3>
                        <p className="c-n-game-howto__txt">
                          ■ OS
                          <br />
                          iOS12.0以降 / Android9.0以降 / Windows10以降 / MacOSX
                          10.9以降
                          <br />
                          <br />
                          ■ ブラウザ
                          <br />
                          Google Chrome最新版 / Safari最新版
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
