"use client";

import { useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import { DailyGoalCard } from "@/components/DailyGoalCard";
import { GameCenter } from "@/components/GameCenter";
import { GameHeader } from "@/components/GameHeader";
import {
  ContinueModal,
  HowtoModal,
  ReceiveTicketModal,
} from "@/components/GameModals";
import { RecommendPanel } from "@/components/RecommendPanel";

/** Full-page game shell replicating section.l-n-game and its sibling modals. */
export function GameShell() {
  const [howtoOpen, setHowtoOpen] = useState(false);

  return (
    <>
      <section className="l-n-game l-n-game--radius">
        <GameHeader onOpenHowto={() => setHowtoOpen(true)} />
        <div className="l-n-game__main">
          <aside className="l-n-game__side l-n-game__side--left c-n-game-side">
            <div>
              <AdSlot minWidth={300} minHeight={250} />
            </div>
            <DailyGoalCard />
          </aside>
          <GameCenter />
          <aside className="l-n-game__side l-n-game__side--right c-n-game-side">
            <div>
              <AdSlot minWidth={300} minHeight={250} />
            </div>
            <RecommendPanel />
          </aside>
        </div>
        <footer className="l-n-game__footer c-n-game-footer">
          <div>
            <AdSlot minWidth={728} minHeight={90} />
          </div>
        </footer>
      </section>
      <HowtoModal open={howtoOpen} onClose={() => setHowtoOpen(false)} />
      <ReceiveTicketModal />
      <ContinueModal />
    </>
  );
}
