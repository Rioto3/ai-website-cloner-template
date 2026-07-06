import Image from "next/image";
import { FixedContactBar } from "@/components/FixedContactBar";

const NAV_LINKS = [
  { label: "コンセプト", href: "/concept/" },
  { label: "メニュー", href: "/menu/" },
  { label: "ギャラリー", href: "/gallery/" },
  { label: "お客様の声", href: "/voice/" },
  { label: "スタッフ", href: "/staff/" },
  { label: "ブログ", href: "/blog/" },
  { label: "アクセス", href: "/access/" },
  { label: "お問い合わせ", href: "/contact/" },
  { label: "プライバシーポリシー", href: "/privacy_policy/" },
  { label: "サイトマップ", href: "/sitemap/" },
];

/**
 * Site footer — fixed contact bar slot, nav links, logo, copyright.
 * Source: footer — bg #f1eae2, color #463b2e, font-size 13.5px, centered.
 */
export function SiteFooter() {
  return (
    <footer className="bg-tt-beige2 text-center text-[13.5px] relative z-[15]">
      <FixedContactBar />
      <nav>
        <ul className="flex flex-wrap justify-center gap-x-[28px] py-4 max-w-[1160px] mx-auto px-5 max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:gap-0">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="max-[768px]:border-b max-[768px]:border-tt-border max-[768px]:py-[10px]"
            >
              <a
                href={link.href}
                className="font-semibold tracking-[3px] transition-colors duration-300 hover:text-tt-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Image
        src="/images/logo.png"
        alt="HIAR T.T"
        width={347}
        height={59}
        className="block mx-auto my-[25px] max-w-[180px] h-auto"
      />
      <div className="py-[15px] text-[12px]">
        © 2026 仙台市の理容室はHIAR T.T ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
