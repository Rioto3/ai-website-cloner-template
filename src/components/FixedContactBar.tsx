"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TelIcon } from "@/components/icons";

/**
 * Fixed contact bar (tel + CTAs + scroll-to-top).
 * Source: cmn.js funcFixFooter / #fixbtn.
 * - Hidden (translateY(100%)) while scrollY < window.innerHeight.
 * - Shown (fixed bottom-0) once scrollY >= window.innerHeight.
 * - Docks (absolute top-0 within its in-flow slot) once the page has
 *   scrolled far enough that the slot itself would be in view.
 */
export function FixedContactBar() {
  const slotRef = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const slot = slotRef.current;
      if (!slot) return;

      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;

      setShown(scrollY >= viewportH);

      // offsetTop is relative to the nearest positioned ancestor, not the
      // document — use the bounding rect (viewport-relative) + scrollY for
      // an absolute document position instead.
      const rect = slot.getBoundingClientRect();
      const slotTop = rect.top + scrollY;
      const slotHeight = rect.height;
      setDocked(scrollY + viewportH >= slotTop + slotHeight);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={slotRef} className="relative min-h-[60px] mb-[30px] max-[600px]:mb-0">
      <div
        className={cn(
          "left-0 w-full transition-transform duration-300 ease-in-out z-40",
          "bg-[rgba(246,241,234,0.9)] border-t border-tt-border",
          docked ? "absolute top-0 bottom-auto" : "fixed bottom-0",
          shown ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="flex justify-between items-stretch min-h-[60px] max-w-[1200px] mx-auto max-[480px]:min-h-[48px]">
          <div className="flex items-center shrink-0 px-[15px] py-2 grow border-r border-tt-border max-[480px]:grow-0 max-[480px]:shrink max-[480px]:px-[8px]">
            <TelIcon className="w-[22px] h-[22px] mr-[5px] shrink-0 text-tt-text max-[600px]:w-[18px] max-[600px]:h-[18px] max-[480px]:w-[14px] max-[480px]:h-[14px] max-[480px]:mr-[3px]" />
            <span className="text-[34px] leading-none text-tt-text mr-[10px] shrink-0 whitespace-nowrap max-[600px]:text-[20px] max-[480px]:mr-0 max-[480px]:text-[13px]">
              022-352-3957
            </span>
            <p className="text-[12.5px] leading-[1.2] max-[480px]:hidden">
              [営業時間] 9:00 〜 19:00 / [定休日] 月
            </p>
          </div>
          <div className="flex items-center shrink-0 gap-2 px-[15px] py-2 max-[480px]:gap-[3px] max-[480px]:px-[4px]">
            <a
              href="/contact/"
              className="bg-tt-btn border border-tt-btn transition-colors duration-[400ms] hover:bg-transparent group"
            >
              <span className="block whitespace-nowrap text-white text-[15px] leading-[1.6] px-5 pt-[10px] pb-[11px] max-[600px]:px-[10px] max-[600px]:pt-[7px] max-[600px]:pb-2 max-[480px]:px-[6px] max-[480px]:py-[5px] max-[480px]:text-[10px] group-hover:text-tt-btn">
                お問い合わせはこちら
              </span>
            </a>
            <a
              href="https://beauty.hotpepper.jp/slnH000554712/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tt-btn border border-tt-btn transition-colors duration-[400ms] hover:bg-transparent group"
            >
              <span className="block whitespace-nowrap text-white text-[15px] leading-[1.6] px-5 pt-[10px] pb-[11px] max-[600px]:px-[10px] max-[600px]:pt-[7px] max-[600px]:pb-2 max-[480px]:px-[6px] max-[480px]:py-[5px] max-[480px]:text-[10px] group-hover:text-tt-btn">
                ご予約はこちら
              </span>
            </a>
          </div>
          <a
            href="#top"
            aria-label="ページトップへ移動"
            className="w-10 h-10 self-center relative mr-[15px] shrink-0 max-[480px]:hidden"
          >
            <span className="absolute top-[17px] left-[3px] w-[30px] h-[30px] border-l-2 border-t-2 border-tt-text rotate-45 transition-opacity duration-200 hover:opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
