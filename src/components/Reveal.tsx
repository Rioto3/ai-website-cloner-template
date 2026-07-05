"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Section entrance animation wrapper.
 * Source behavior: cmn.css `.delay1` + jquery.inview — direct children start at
 * opacity 0 / translateY(60px) and animate to visible (0.8s ease-in-out) the
 * first time the section enters the viewport. The class stays once added.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-active");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
