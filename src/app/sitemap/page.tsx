import type { Metadata } from "next";
import Link from "next/link";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "HIAR T.Tウェブサイトのサイトマップです。",
};

const LINKS = [
  { label: "ホーム", href: "/" },
  { label: "コンセプト", href: "/concept/" },
  { label: "メニュー", href: "/menu/" },
  { label: "ギャラリー", href: "/gallery/" },
  { label: "お客様の声", href: "/voice/" },
  { label: "スタッフ", href: "/staff/" },
  { label: "ブログ", href: "/blog/" },
  { label: "アクセス", href: "/access/" },
  { label: "お問い合わせ", href: "/contact/" },
  { label: "プライバシーポリシー", href: "/privacy_policy/" },
];

export default function Page() {
  return (
    <>
      <PageHeroBanner title="サイトマップ" image="/images/banners/sitemap.jpg" />
      <Breadcrumb items={[{ label: "仙台市の理容室はHIAR T.T", href: "/" }, { label: "サイトマップ" }]} />
      <Reveal as="section" className="pt-20 pb-20 max-[850px]:pt-[65px]">
        <div className="mx-auto max-w-[900px] px-5">
          <SectionHeading en="SITE MAP" ja="サイトマップ" />
          <ul>
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-tt-border">
                <Link
                  href={l.href}
                  className="flex items-center gap-3 py-4 transition-colors duration-300 hover:text-tt-green"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-tt-green text-tt-green text-[11px]">
                    ›
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
