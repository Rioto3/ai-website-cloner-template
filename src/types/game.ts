/** Message posted by the game iframe (gamebox.iframe.js protocol). */
export interface GameMessage {
  execute?: "start" | "end" | "save" | "getdata" | "ad" | "rewardad" | "fullscreen" | "exitFullscreen";
  /** The original SDK also sends a misspelled variant. */
  exeucte?: string;
  id?: number;
  score?: number;
  data?: unknown;
}
