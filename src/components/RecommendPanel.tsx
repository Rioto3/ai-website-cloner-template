import type { HashtagLink, RecommendedGame } from "@/types/game";

const HASHTAGS: HashtagLink[] = [
  { label: "# キャラクター", href: "/easygame/hashtag/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC/popular" },
  { label: "# スライド", href: "/easygame/hashtag/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89/popular" },
  { label: "# ファンタジー", href: "/easygame/hashtag/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC/popular" },
  { label: "# 美しい", href: "/easygame/hashtag/%E7%BE%8E%E3%81%97%E3%81%84/popular" },
  { label: "# シンプル", href: "/easygame/hashtag/%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB/popular" },
];

const RECOMMENDED_GAMES: RecommendedGame[] = [
  { id: 141, title: "二角取りPLAIN", image: "/images/141.png" },
  { id: 497, title: "集めてにゃんこパズル", image: "/images/497.png" },
  { id: 458, title: "カラフルアソート", image: "/images/458.png" },
  { id: 237, title: "二角取り", image: "/images/237.png" },
  { id: 472, title: "海賊バブルパズル", image: "/images/472.png" },
  { id: 507, title: "おきつね様の円結びパズル", image: "/images/507.png" },
  { id: 496, title: "ジュエルロイヤルパズル", image: "/images/496.png" },
  { id: 348, title: "キラキラマジックパズル", image: "/images/348.jpg" },
  { id: 476, title: "スマイルキューブ", image: "/images/476.png" },
  { id: 479, title: "しろくまーじ", image: "/images/479.png" },
  { id: 382, title: "ギョギョッとパズル", image: "/images/382.png" },
  { id: 411, title: "スーパーキャンディパズル", image: "/images/411.png" },
  { id: 453, title: "森の宝石パズル", image: "/images/453.png" },
  { id: 491, title: "マッチマート", image: "/images/491.png" },
  { id: 460, title: "かわいいどうぶつ集め", image: "/images/460.png" },
  { id: 461, title: "たのしいクリスマスパズル", image: "/images/461.png" },
  { id: 452, title: "メルティタイム", image: "/images/452.png" },
  { id: 784, title: "二角取りボーナスマッチ", image: "/images/784.png" },
  { id: 705, title: "バスパーキングパズル", image: "/images/705.png" },
  { id: 294, title: "ドーナツパーティ", image: "/images/294.png" },
  { id: 795, title: "マジックスライド", image: "/images/795.png" },
  { id: 499, title: "ソートマート", image: "/images/499.png" },
  { id: 325, title: "鬼太郎 ようがめ", image: "/images/325.png" },
  { id: 500, title: "かわいいおもちゃパズル", image: "/images/500.png" },
  { id: 407, title: "にゃんたまパズル", image: "/images/407.png" },
];

export function RecommendPanel() {
  return (
    <div className="c-n-game-recommend">
      <div className="c-n-game-recommend__related">
        <h2 className="c-n-game-recommend__ttl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icon-hashtag-similar.png" alt="" width={20} height={20} />
          似ているゲーム
        </h2>
        <div className="c-n-hashtag">
          <ul className="c-n-hashtag__list">
            {HASHTAGS.map((tag) => (
              <li key={tag.label}>
                <a href={tag.href} className="c-n-hashtag__link">
                  {tag.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="c-n-game-recommend__popular">
        <h2 className="c-n-game-recommend__ttl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/icon-fire.png" alt="" width={20} height={20} />
          おすすめのゲーム
        </h2>
        <ul className="c-n-game-recommend__l-item">
          {RECOMMENDED_GAMES.map((game) => (
            <li key={game.id} className="c-n-game-recommend__item">
              <a href={`/easygame/game/${game.id}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={game.image} alt={game.title} width={80} height={80} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
