"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  objectPosition: string;
}

const SLIDES: Slide[] = [
  { src: "/images/hero-1.png", objectPosition: "50% 5%" },
  { src: "/images/hero-2.jpg", objectPosition: "50% 5%" },
  { src: "/images/hero-3.png", objectPosition: "90% 5%" },
  { src: "/images/hero-4.jpg", objectPosition: "50% 5%" },
];

const AUTO_ADVANCE_MS = 4900;
const ZOOM_ANIMATION_MS = 7000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [zCounter, setZCounter] = useState(0);
  const zIndexMapRef = useRef<Record<number, number>>({ 0: 1 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setZCounter((prevZ) => {
      const nextZ = prevZ + 1;
      zIndexMapRef.current[index] = nextZ + 1;
      return nextZ;
    });
    setCurrent(index);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prevCurrent) => {
        const next = (prevCurrent + 1) % SLIDES.length;
        setZCounter((prevZ) => {
          const nextZ = prevZ + 1;
          zIndexMapRef.current[next] = nextZ + 1;
          return nextZ;
        });
        return next;
      });
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    setMounted(true);
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  const handlePointerClick = useCallback(
    (index: number) => {
      goToSlide(index);
      startInterval();
    },
    [goToSlide, startInterval]
  );

  return (
    <div
      id="mv_outer"
      className="relative min-[901px]:pt-[20px] transition-opacity ease-out"
      style={{
        opacity: mounted ? 1 : 0,
        transitionDuration: "2000ms",
      }}
    >
      <div id="mv" className="relative w-full h-[78vh] min-h-[500px]">
        <ul className="w-[85%] ml-[10%] h-full overflow-hidden relative z-[6] max-[600px]:w-[80%] max-[600px]:ml-[15%]">
          {SLIDES.map((slide, index) => {
            const isActive = index === current;
            const z = zIndexMapRef.current[index] ?? 0;
            return (
              <li
                key={index}
                className="absolute inset-0"
                style={{ zIndex: isActive ? z : 0 }}
              >
                {isActive && (
                  <div
                    key={`${current}-${zCounter}`}
                    className="relative w-full h-full opacity-100"
                    style={{
                      animation: `tt-hero-zoom ${ZOOM_ANIMATION_MS}ms ease-out forwards`,
                    }}
                  >
                    <Image
                      src={slide.src}
                      alt="HAIR T.T"
                      fill
                      sizes="100vw"
                      priority={index === 0}
                      className="object-cover"
                      style={{ objectPosition: slide.objectPosition }}
                    />
                  </div>
                )}
                {!isActive && (
                  <Image
                    src={slide.src}
                    alt="HAIR T.T"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: slide.objectPosition }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div
          className="absolute top-0 h-full w-[85%] ml-[10%] z-[6] pointer-events-none max-[600px]:w-[80%] max-[600px]:ml-[15%] max-[480px]:w-full max-[480px]:ml-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.05) 60%, transparent)",
          }}
        >
          <style>{`
            @media (max-width: 480px) {
              #mv_outer div[data-hero-gradient] {
                background: linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.05) 60%, transparent) !important;
              }
            }
          `}</style>
        </div>

        <div className="absolute left-0 bottom-[10%] w-full z-[7] flex items-end h-[90%] pointer-events-none">
          <div className="w-[90%] mx-auto relative max-[800px]:w-[95%]">
            <h2 className="text-[38px] leading-[1.1] tracking-[3px] font-semibold text-tt-text inline-block relative pt-[85px] max-[800px]:pt-[65px] max-[600px]:text-[6vw] max-[600px]:tracking-[1px] max-[600px]:leading-[1.5] max-[480px]:pt-[52px]">
              <span className="font-roboto text-[65px] absolute top-0 left-0 text-tt-green font-medium tracking-[5px] whitespace-nowrap max-[800px]:text-[48px] max-[480px]:text-[35px]">
                HAIR SALON
              </span>
              似合うスタイルをご提供します
            </h2>
            <p className="pt-[15px] text-[20px] font-semibold tracking-[2px] text-tt-text max-[800px]:text-[17.5px] max-[800px]:tracking-[1px] max-[800px]:pt-[10px]">
              ビジネスカットからメンズカジュアルまで
            </p>
          </div>
        </div>

        <div className="absolute right-[50px] bottom-0 z-[7] max-[1300px]:right-[20px] max-[800px]:hidden">
          <a
            href="#main"
            className="group [writing-mode:vertical-lr] tracking-[0.6em] text-[10px] font-bold text-[#333] pb-[100px] hover:pb-[80px] relative transition-all duration-300 inline-block"
          >
            SCROLL DOWN
            <span className="absolute bottom-0 left-[1px] w-px h-[70px] group-hover:h-[50px] bg-tt-text transition-all duration-300" />
          </a>
        </div>

        <ul className="absolute top-[100px] left-0 z-[7] max-[800px]:top-[60px]">
          {SLIDES.map((_, index) => {
            const isActive = index === current;
            return (
              <li key={index} className="h-[40px] block relative">
                <button
                  type="button"
                  onClick={() => handlePointerClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="w-full h-full block relative cursor-pointer"
                >
                  <span
                    className={`absolute left-[100px] text-[15px] tracking-[2px] transition-opacity duration-[800ms] max-[1300px]:left-[60px] max-[800px]:left-[20px] ${
                      isActive ? "opacity-80" : "opacity-50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`absolute left-0 top-[13px] h-px transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.47,0,0.745,0.715)] max-[1300px]:w-[20px] max-[800px]:w-0 ${
                      isActive
                        ? "w-[80px] bg-[rgb(180,180,180)] max-[1300px]:w-[40px] max-[800px]:w-[10px]"
                        : "w-[40px] bg-transparent"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
