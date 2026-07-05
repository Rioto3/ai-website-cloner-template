"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Parallax background band.
 * Source: cmn.js parallaxScroll() — background layer is 2.5× the section
 * height and is translated by `-(1.5 × sectionHeight) × ratio` where
 * ratio = (sectionTop − scrollY + sectionHeight) / (viewportHeight + sectionHeight).
 * The layer is a cover background, blurred, width calc(100% + 20px) at −10px.
 * Disabled ≤768px (static, height 100%).
 */
export function ParallaxSection({
  image,
  imageClassName,
  children,
  className,
  id,
}: {
  image: string;
  /** per-section opacity / blend, e.g. "opacity-40 mix-blend-multiply" */
  imageClassName?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.innerWidth <= 768) {
        img.style.height = "100%";
        img.style.transform = "translateY(0)";
        return;
      }
      const rect = section.getBoundingClientRect();
      const sectionH = rect.height;
      const imgH = sectionH * 2.5;
      const ratio = (rect.top + sectionH) / (window.innerHeight + sectionH);
      img.style.height = `${imgH}px`;
      img.style.transform = `translateY(${(sectionH - imgH) * ratio}px)`;
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
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={imgRef}
        aria-hidden="true"
        className={cn(
          "absolute left-[-10px] top-0 w-[calc(100%+20px)] bg-cover bg-center bg-no-repeat blur-[3px]",
          imageClassName,
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
