"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { TelIcon, TranslateIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "ホーム", href: "/" },
  { label: "コンセプト", href: "/concept/" },
  { label: "メニュー", href: "/menu/" },
  { label: "ギャラリー", href: "/gallery/" },
  { label: "お客様の声", href: "/voice/" },
  { label: "スタッフ", href: "/staff/" },
  { label: "ブログ", href: "/blog/" },
  { label: "アクセス", href: "/access/" },
] as const;

const TAGLINE =
  "理容室・HIAR T.Tを営業し一人ひとりに合ったかっこいいスタイルをご提案";
const TEL_NUMBER = "022-352-3957";
const CONTACT_HREF = "/contact/";
const RESERVE_HREF = "https://beauty.hotpepper.jp/slnH000554712/";

type ScrollState = "top" | "hidden" | "revealed";

const ctaClasses = cn(
  "block w-[181px] text-center bg-tt-btn border border-tt-btn text-white text-[14px]",
  "font-semibold px-[15px] pt-[5px] pb-[6px] transition-all duration-[400ms] ease-in-out",
  "hover:bg-transparent hover:text-tt-btn",
);

const mobileCtaClasses = cn(
  "block w-[181px] mx-auto my-2 text-center bg-tt-btn border border-tt-btn text-white text-[14px]",
  "font-semibold px-[15px] pt-[7px] pb-[9px] transition-all duration-[400ms] ease-in-out",
  "hover:bg-transparent hover:text-tt-btn",
);

export function SiteHeader() {
  const [scrollState, setScrollState] = useState<ScrollState>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const heroBottom = window.innerHeight;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollingDown = scrollY > lastScrollY.current;
        lastScrollY.current = scrollY;

        if (scrollY < heroBottom) {
          setScrollState("top");
        } else if (scrollingDown) {
          setScrollState("hidden");
        } else if (scrollY >= heroBottom * 1.2) {
          setScrollState("revealed");
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isCompact = scrollState === "revealed";
  const isHidden = scrollState === "hidden";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full bg-white transition-all duration-500 ease-in-out",
          isHidden && "top-[-200px] opacity-0",
          isCompact && "bg-[rgba(255,255,255,0.9)] shadow-[0_0_5px_rgba(0,0,0,0.05)]",
        )}
      >
        <div className="relative mx-auto max-w-[1300px]">
          <h1 className="absolute top-[5px] right-[25px] hidden text-[13px] font-normal leading-[1.5] opacity-70 min-[1101px]:block">
            {TAGLINE}
          </h1>

          <div
            className={cn(
              "flex h-[80px] items-center pl-[25px] max-[900px]:h-[60px]",
              isCompact && "py-[20px] max-[900px]:py-[10px]",
            )}
          >
            <Link href="/" className="block max-w-[180px] max-[900px]:max-w-[140px]">
              <Image
                src="/images/logo.png"
                alt="HAIR T.T"
                width={347}
                height={59}
                priority
                className={cn(
                  "h-auto w-full max-w-[180px] max-[900px]:max-w-[140px]",
                  isCompact && "max-h-[24px] w-auto",
                )}
              />
            </Link>
          </div>

          <div className="header_contents absolute top-0 right-0 flex items-center gap-[15px] pt-[30px] pb-[5px] max-[900px]:hidden">
            <div className="tel relative flex items-center gap-[8px] pl-[26px] text-[26px] leading-none text-tt-text">
              <TelIcon className="absolute left-0 h-[22px] w-[22px] text-tt-green" />
              <span>{TEL_NUMBER}</span>
            </div>

            <Link href={CONTACT_HREF} className={ctaClasses}>
              お問い合わせはこちら
            </Link>

            <a
              href={RESERVE_HREF}
              target="_blank"
              rel="noopener"
              className={ctaClasses}
            >
              ご予約はこちら
            </a>

            <a
              href="#"
              className="flex h-[45px] w-[45px] items-center justify-center border border-tt-border transition-opacity duration-300 hover:opacity-80"
            >
              <TranslateIcon className="h-[24px] w-[24px] text-tt-text" />
            </a>
          </div>

          <nav className="flex justify-end pr-[25px] max-[900px]:hidden">
            <ul className="flex w-[77%]">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="flex-1 text-center">
                  <a
                    href={link.href}
                    className="group relative block whitespace-nowrap px-[1vw] text-[15px] after:absolute after:bottom-0 after:left-[10%] after:h-[2px] after:w-[80%] after:origin-top-left after:scale-x-0 after:bg-tt-green after:transition-transform after:duration-500 hover:after:scale-x-100"
                  >
                    <span className="font-semibold leading-[3] tracking-[2px] transition-colors duration-[400ms] group-hover:text-tt-green">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute top-0 right-0 hidden h-[60px] items-center justify-end gap-[15px] pr-[15px] max-[900px]:flex">
            <a
              href="#"
              className="flex h-[36px] w-[36px] items-center justify-center"
            >
              <TranslateIcon className="h-[24px] w-[24px] text-tt-text" />
            </a>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex flex-col items-center justify-center gap-1"
            >
              <span
                className={cn(
                  "block h-[2px] w-[24px] bg-tt-text transition-transform duration-300",
                  menuOpen && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-[24px] bg-tt-text transition-opacity duration-300",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-[2px] w-[24px] bg-tt-text transition-transform duration-300",
                  menuOpen && "translate-y-[-6px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 top-full w-full bg-[rgba(255,255,255,0.9)] min-[901px]:hidden">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-tt-border">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-[20px] py-[12px] text-[15px] font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-[8px] border-b border-tt-border py-[15px] text-[22px] leading-none text-tt-text">
              <TelIcon className="h-[20px] w-[20px] text-tt-green" />
              <span>{TEL_NUMBER}</span>
            </div>

            <div className="py-[10px]">
              <Link href={CONTACT_HREF} className={mobileCtaClasses} onClick={closeMenu}>
                お問い合わせはこちら
              </Link>
              <a
                href={RESERVE_HREF}
                target="_blank"
                rel="noopener"
                className={mobileCtaClasses}
                onClick={closeMenu}
              >
                ご予約はこちら
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="h-[125px] max-[900px]:h-[60px]" aria-hidden="true" />
    </>
  );
}
