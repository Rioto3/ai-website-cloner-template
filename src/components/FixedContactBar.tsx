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
  const barRef = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const [docked, setDocked] = useState(false);
  const [barHeight, setBarHeight] = useState(60);

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

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    // The bar switches between a 1-row (desktop) and 2-row (mobile) layout,
    // so its height isn't a fixed constant — measure it directly and keep
    // the in-flow slot's reserved height in sync, otherwise a taller bar
    // overflows its slot when docked and overlaps the footer nav below it.
    const observer = new ResizeObserver(([entry]) => {
      setBarHeight(entry.contentRect.height);
    });
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={slotRef}
      className="relative mb-[30px] max-[600px]:mb-0"
      style={{ minHeight: barHeight }}
    >
      <div
        ref={barRef}
        className={cn(
          "left-0 w-full transition-transform duration-300 ease-in-out z-40",
          "bg-[rgba(246,241,234,0.9)] border-t border-tt-border",
          docked ? "absolute top-0 bottom-auto" : "fixed bottom-0",
          shown ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="flex flex-col max-w-[1200px] mx-auto max-[600px]:py-[10px] min-[601px]:flex-row min-[601px]:justify-between min-[601px]:items-stretch min-[601px]:min-h-[60px]">
          <div className="flex items-center justify-center px-[15px] py-2 min-[601px]:grow min-[601px]:justify-start min-[601px]:border-r min-[601px]:border-tt-border">
            <TelIcon className="w-[22px] h-[22px] mr-[5px] shrink-0 text-tt-text max-[600px]:w-[18px] max-[600px]:h-[18px]" />
            <span className="text-[34px] leading-none text-tt-text mr-[10px] shrink-0 whitespace-nowrap max-[600px]:text-[22px]">
              022-352-3957
            </span>
            <p className="text-[12.5px] leading-[1.2] max-[600px]:hidden">
              [営業時間] 9:00 〜 19:00 / [定休日] 月
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 px-[15px] py-2 max-[600px]:pt-0">
            <a
              href="/contact/"
              className="bg-tt-btn border border-tt-btn transition-colors duration-[400ms] hover:bg-transparent group max-[600px]:flex-1"
            >
              <span className="block whitespace-nowrap text-center text-white text-[15px] leading-[1.6] px-5 pt-[10px] pb-[11px] max-[600px]:px-[10px] max-[600px]:pt-[9px] max-[600px]:pb-[10px] max-[600px]:text-[13px] group-hover:text-tt-btn">
                お問い合わせはこちら
              </span>
            </a>
            <a
              href="https://beauty.hotpepper.jp/slnH000554712/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tt-btn border border-tt-btn transition-colors duration-[400ms] hover:bg-transparent group max-[600px]:flex-1"
            >
              <span className="block whitespace-nowrap text-center text-white text-[15px] leading-[1.6] px-5 pt-[10px] pb-[11px] max-[600px]:px-[10px] max-[600px]:pt-[9px] max-[600px]:pb-[10px] max-[600px]:text-[13px] group-hover:text-tt-btn">
                ご予約はこちら
              </span>
            </a>
          </div>
          <a
            href="#top"
            aria-label="ページトップへ移動"
            className="w-10 h-10 self-center relative mr-[15px] shrink-0 max-[600px]:hidden"
          >
            <span className="absolute top-[17px] left-[3px] w-[30px] h-[30px] border-l-2 border-t-2 border-tt-text rotate-45 transition-opacity duration-200 hover:opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
