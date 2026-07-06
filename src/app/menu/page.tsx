import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedTags } from "@/components/RelatedTags";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SubHeading } from "@/components/SubHeading";
import type { MenuItemData } from "@/types";

export const metadata: Metadata = {
  title: "メニュー",
  description: "周りに差をつけるかっこいいヘアスタイルを実現。カット、ヘッドスパ、シェービングなどメニュー一覧。",
};

const CUT_MENU_ITEMS: MenuItemData[] = [
  {
    name: "カット（トータル）",
    note: "シャンプーブロー、シェービング込み",
    price: "￥3,800 (税込)",
  },
  {
    name: "カット",
    note: "シャンプー込み",
    price: "￥3,000 (税込)",
  },
  {
    name: "カット（高校生）",
    note: "シャンプー込み",
    price: "￥3,000 (税込)",
  },
  {
    name: "カット（中学生）",
    note: "シャンプー込み",
    price: "￥2,500 (税込)",
  },
  {
    name: "カット（小学生）",
    note: "シャンプー込み",
    price: "￥2,000 (税込)",
  },
  {
    name: "クイックカット",
    note: "時間が無い方向け♪ 高品質なカットを短時間でお届け♪",
    price: "￥2,500 (税込)",
  },
];

const HEADSPA_MENU_ITEMS: MenuItemData[] = [
  {
    name: "クレンジングヘッドスパ",
    note: "",
    price: "￥1,000～ (税込)",
  },
];

const SHAVE_MENU_ITEMS: MenuItemData[] = [
  {
    name: "シェービング",
    note: "",
    price: "￥2,000 (税込)",
  },
];

const OTHER_MENU_ITEMS: MenuItemData[] = [
  {
    name: "ノーズケア",
    note: "",
    price: "￥500 (税込)",
  },
  {
    name: "【学割U24】似合わせカット＋シェービング＋眉デザインカット",
    note: "学生の方必見！フェードから今風の韓国風まで幅ひろく対応◎中学生から大学生、専門生まで大絶賛！イケメンになりたいならHAIR T.Tで間違えなし",
    price: "￥3,000 (税込)",
  },
  {
    name: "カット＋シェービング＋眉カット＋ヘッドスパ10分",
    note: "丁寧で的確なカット技術/ 眉カットデザイン相談可/10分のヘッドスパ付で頭皮ケアも◎シャンプー込",
    price: "￥4,800 (税込)",
  },
  {
    name: "カット＋シェービング＋ヘアケア＋ノーズケア＋クレンジング",
    note: "丁寧で的確なカット技術/頭皮ケア、自分では落とせない汚れを直接落とす/気になる鼻毛ケア。希望者のみ施術を行います。シャンプー込",
    price: "￥5,300 (税込)",
  },
  {
    name: "カット＋パーマ＋シェービング＋眉カット",
    note: "丁寧で的確なカット技術/王道パーマ～ツイスト、スパイラルまで幅広く対応/眉カットデザイン相談可。シャンプー込",
    price: "￥7,800～ (税込)",
  },
  {
    name: "カット➕カラーリング➕シェービング➕眉カット",
    note: "",
    price: "6,800～ (税込)",
  },
];

function MenuList({ items }: { items: MenuItemData[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name} className="border-b border-tt-border py-[12px]">
          <div className="flex items-baseline justify-between">
            <span className="text-[16.5px] font-semibold text-tt-text">
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-[5px] w-[5px] rotate-[-45deg] border-r border-b border-tt-green align-middle"
              />
              {item.name}
            </span>
            <span className="text-[16.5px] text-tt-text">{item.price}</span>
          </div>
          {item.note ? (
            <p className="pl-[14px] text-[13px] tracking-normal text-tt-text">{item.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageHeroBanner title="メニュー" image="/images/banners/menu.jpg" />
      <Breadcrumb
        items={[{ label: "仙台市の理容室はHIAR T.T", href: "/" }, { label: "メニュー" }]}
      />
      <Reveal as="section" className="pt-20 pb-[30px]">
        <div className="mx-auto max-w-[1160px] px-5">
          <SectionHeading en="MENU" ja="周りに差をつけるかっこいいヘアスタイルを実現" />
          <p className="text-center mb-10">
            「かっこ良くなりたい」「おしゃれな髪形にしたい」「好感度が上がるスタイルにしてほしい」などなりたいイメージがございましたらご相談いただければ、数々のコンテストで優勝経験を持つ実力派のスタイリストがしっかり形にします。
          </p>

          <nav className="flex flex-wrap justify-center gap-3 mb-16">
            <a
              href="#1"
              className="rounded-full border border-tt-border px-6 py-2 text-[14px] transition-colors duration-300 hover:bg-tt-beige"
            >
              カット
            </a>
            <a
              href="#2"
              className="rounded-full border border-tt-border px-6 py-2 text-[14px] transition-colors duration-300 hover:bg-tt-beige"
            >
              ヘッドスパ
            </a>
            <a
              href="#3"
              className="rounded-full border border-tt-border px-6 py-2 text-[14px] transition-colors duration-300 hover:bg-tt-beige"
            >
              シェービング
            </a>
            <a
              href="#4"
              className="rounded-full border border-tt-border px-6 py-2 text-[14px] transition-colors duration-300 hover:bg-tt-beige"
            >
              その他メニュー
            </a>
            <a
              href="#5"
              className="rounded-full border border-tt-border px-6 py-2 text-[14px] transition-colors duration-300 hover:bg-tt-beige"
            >
              割引メニュー
            </a>
          </nav>

          <section id="1" className="mb-16">
            <SubHeading>カット</SubHeading>
            <div className="flex gap-8 max-[768px]:block">
              <div className="relative w-1/2 aspect-[4/3] max-[768px]:w-full">
                <Image src="/images/menu-cut.jpg" alt="カット" fill className="object-cover" />
              </div>
              <div className="w-1/2 max-[768px]:w-full max-[768px]:mt-4">
                <MenuList items={CUT_MENU_ITEMS} />
              </div>
            </div>
          </section>

          <section id="2" className="mb-16">
            <SubHeading>ヘッドスパ</SubHeading>
            <div className="flex flex-row-reverse gap-8 max-[768px]:block max-[768px]:flex-col">
              <div className="relative w-1/2 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/menu-headspa.jpg"
                  alt="ヘッドスパ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/2 max-[768px]:w-full max-[768px]:mt-4">
                <MenuList items={HEADSPA_MENU_ITEMS} />
              </div>
            </div>
          </section>

          <section id="3" className="mb-16">
            <SubHeading>シェービング</SubHeading>
            <div className="flex gap-8 max-[768px]:block">
              <div className="relative w-1/2 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/menu-shave.jpg"
                  alt="シェービング"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/2 max-[768px]:w-full max-[768px]:mt-4">
                <p className="mb-2 text-[13px]">レディースも可</p>
                <MenuList items={SHAVE_MENU_ITEMS} />
              </div>
            </div>
          </section>

          <section id="4" className="mb-16">
            <SubHeading>その他メニュー</SubHeading>
            <div className="flex gap-8 items-end max-[768px]:block">
              <div className="w-3/5 max-[768px]:w-full">
                <MenuList items={OTHER_MENU_ITEMS} />
              </div>
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full max-[768px]:mt-4">
                <Image
                  src="/images/menu-other.jpg"
                  alt="その他メニュー"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section id="5" className="mb-4">
            <SubHeading>割引メニュー</SubHeading>
            <p>
              HIAR
              T.Tでは豊富な実績と経験のあるスタイリストが最初のカウンセリングから仕上げまでマンツーマンで対応しており、お客様のなりたいイメージを汲み取った上で確かな技術で丁寧に施術し、イメージをしっかり形にしますのでお任せください。清潔感があり好感度をアップさせるスタイルやワンランク上の大人を感じさせるスタイル、トレンドを取り入れながら周りと差をつけるおしゃれなスタイルなど、ライフスタイルに合わせオンもオフも決まるヘアスタイルをご提案いたします。落ち着いた雰囲気の中でリラックスしながら施術を受けられるサロンです。
            </p>
          </section>
        </div>
      </Reveal>
      <RelatedPosts
        items={[
          {
            title: "アクセス",
            description:
              "クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…",
            image: "/images/related/access-thumb.jpg",
            href: "/access/",
          },
        ]}
      />
      <RelatedTags tags={["仙台市", "理容室", "メニュー1"]} />
    </>
  );
}
