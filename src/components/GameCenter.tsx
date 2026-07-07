"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { GameMessage } from "@/types/game";
import { GameStartOverlay } from "@/components/GameStartOverlay";
import { GameResultPanel } from "@/components/GameResultPanel";

const GAME_SRC = "/game/magicslide/game.html?0000-00-00%2000%3A00%3A00";
const SAVE_KEY = "magicslide-gamedata";
const FORWARDED_KEYS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "a",
  "d",
  "s",
  "w",
];

/**
 * Center game area: start overlay + game iframe + result panel.
 * Implements the parent side of the gamebox.iframe.js postMessage protocol
 * (see docs/research/BEHAVIORS.md) with mocked success responses.
 */
export function GameCenter() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [started, setStarted] = useState(false);
  const [resultScore, setResultScore] = useState<number | null>(null);

  const handleMessage = useCallback((event: MessageEvent) => {
    const msg = (event.data ?? {}) as GameMessage;
    const execute = msg.execute ?? msg.exeucte;
    if (!execute || !event.source) return;

    const reply = (data: Record<string, unknown> = {}) => {
      if (msg.id) data.id = msg.id;
      (event.source as Window).postMessage(data, "*");
    };

    switch (execute) {
      case "start":
        reply({ status: "success", key: "clone" });
        break;
      case "end":
        setResultScore(typeof msg.score === "number" ? msg.score : 0);
        reply({ status: "success" });
        break;
      case "save":
        if (typeof msg.data === "string") {
          localStorage.setItem(SAVE_KEY, msg.data);
        }
        reply({ status: "success" });
        break;
      case "getdata":
        reply({ status: "success", gamedata: localStorage.getItem(SAVE_KEY) });
        break;
      case "ad":
      case "rewardad":
        reply({ status: "success" });
        break;
      case "fullscreen":
        void document.documentElement.requestFullscreen?.();
        reply({ status: "success" });
        break;
      case "exitFullscreen":
        if (document.fullscreenElement) void document.exitFullscreen();
        reply({ status: "success" });
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  useEffect(() => {
    const forwardKeydown = (e: KeyboardEvent) => {
      if (!FORWARDED_KEYS.includes(e.key)) return;
      // The original SDK message key is misspelled "exeucte" — kept for compatibility.
      iframeRef.current?.contentWindow?.postMessage(
        { exeucte: "keydown", keyCode: e.keyCode },
        "*",
      );
    };
    document.addEventListener("keydown", forwardKeydown);
    return () => document.removeEventListener("keydown", forwardKeydown);
  }, []);

  return (
    <main className="l-n-game__center c-n-game-center c-n-game-center--radius">
      {!started && <GameStartOverlay onPlay={() => setStarted(true)} />}
      <iframe
        ref={iframeRef}
        className="c-n-game-center__game"
        src={GAME_SRC}
      />
      {resultScore !== null && (
        <GameResultPanel
          score={resultScore}
          onContinueWithoutLogin={() => setResultScore(null)}
        />
      )}
    </main>
  );
}
