"use client";

import { useState } from "react";
import { GameCenter } from "@/components/GameCenter";
import { GameHeader } from "@/components/GameHeader";
import { HowtoModal } from "@/components/GameModals";

/** Full-page game shell — header + game, with the vendor's ad slots and
    reward/promo panels removed. */
export function GameShell() {
  const [howtoOpen, setHowtoOpen] = useState(false);

  return (
    <>
      <section className="l-n-game l-n-game--radius">
        <GameHeader onOpenHowto={() => setHowtoOpen(true)} />
        <div className="l-n-game__main">
          <GameCenter />
        </div>
      </section>
      <HowtoModal open={howtoOpen} onClose={() => setHowtoOpen(false)} />
    </>
  );
}
