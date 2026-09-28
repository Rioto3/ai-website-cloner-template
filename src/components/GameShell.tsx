import { GameCenter } from "@/components/GameCenter";

/** Full-page game shell — just the game, no portal chrome (header, ad
    slots, reward/promo panels) around it. */
export function GameShell() {
  return (
    <section className="l-n-game l-n-game--radius">
      <div className="l-n-game__main">
        <GameCenter />
      </div>
    </section>
  );
}
