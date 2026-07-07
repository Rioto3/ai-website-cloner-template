import type { GoalTier } from "@/types/game";

const GOAL_TIERS: GoalTier[] = [
  { score: "37,680", tickets: 20 },
  { score: "21,570", tickets: 5 },
  { score: "12,830", tickets: 3 },
  { score: "8,310", tickets: 1 },
];

export function DailyGoalCard() {
  return (
    <div className="c-n-game-sec c-n-game-sec--border">
      <header className="c-n-game-sec__header">
        <h3 className="c-n-game-sec__ttl">今日の目標</h3>
        <p className="c-n-game-sec__info">毎日 午前0時更新</p>
      </header>
      <div className="c-n-game-sec__body">
        <ul className="c-n-game-goal-score">
          {GOAL_TIERS.map((tier) => (
            <li key={tier.score} className="c-n-game-goal-score__score">
              <div>
                {tier.score}
                <small>点</small>
              </div>
              <span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-ticket.png" alt="抽選券" />× {tier.tickets}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
