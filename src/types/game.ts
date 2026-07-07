export interface GoalTier {
  score: string;
  tickets: number;
}

export interface RecommendedGame {
  id: number;
  title: string;
  image: string;
}

export interface HashtagLink {
  label: string;
  href: string;
}

/** Message posted by the game iframe (gamebox.iframe.js protocol). */
export interface GameMessage {
  execute?: "start" | "end" | "save" | "getdata" | "ad" | "rewardad" | "fullscreen" | "exitFullscreen";
  /** The original SDK also sends a misspelled variant. */
  exeucte?: string;
  id?: number;
  score?: number;
  data?: unknown;
}

export type ModalId = "howto" | "ticket" | "continue" | "error";
