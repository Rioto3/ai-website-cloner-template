import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedTags } from "@/components/RelatedTags";
import { Reveal } from "@/components/Reveal";
import { SectionButton } from "@/components/SectionButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SubHeading } from "@/components/SubHeading";

export const metadata: Metadata = {
  title: "コンセプト",
  description: "プロの技で洗練されたかっこいいスタイルに。HIAR T.Tのコンセプトをご紹介します。",
};

export default function ConceptPage() {
  return (
    <>
      <main id="main" className="relative z-[1]">
        <PageHeroBanner title="コンセプト" image="/images/banners/concept.jpg" />
        <Breadcrumb
          items={[
            { label: "仙台市の理容室はHIAR T.T", href: "/" },
            { label: "コンセプト" },
          ]}
        />
        <Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
          <div className="mx-auto max-w-[1160px] px-5">
            <SectionHeading en="CONCEPT" ja="プロの技で洗練されたかっこいいスタイルに" />
            <p className="mb-10">
              レトロなアメリカンスタイルのサロンを構え、丁寧なカウンセリングでご希望やお悩みをお伺いし一人ひとりに合った最適なスタイルをご提案しますのでお任せください。ヘアスタイルからひげや眉のデザイン、身だしなみまでプロが承ります。
            </p>

            <div className="flex gap-8 items-center mb-16 max-[768px]:block">
              <div className="relative w-2/5 aspect-square max-[768px]:w-full">
                <Image
                  src="/images/concept-1.webp"
                  alt="確かな技術を持つ実力派のベテランスタイリストが丁寧にご対応"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>確かな技術を持つ実力派のベテランスタイリストが丁寧にご対応</SubHeading>
                <p className="mb-6">
                  コンテストで優勝経験のある確かな技術を持つベテランスタイリストが最初のカウンセリングから最後の仕上げまでマンツーマンで丁寧にご対応しご満足いただけるような仕上がりにしますので初めての方も安心してお任せいただけます。ご希望やお悩みを詳しくお聞きした上で、一人ひとりのライフスタイルに合わせ似合うスタイルをご提案いたします。
                </p>
                <SectionButton href="/voice/">お客様の声へ</SectionButton>
              </div>
            </div>

            <div className="flex gap-8 items-center mb-16 max-[768px]:block">
              <div className="relative w-2/5 aspect-square max-[768px]:w-full">
                <Image
                  src="/images/concept-2.webp"
                  alt="実力派のスタイリストがご満足いただけるような仕上がりにします"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>実力派のスタイリストがご満足いただけるような仕上がりにします</SubHeading>
                <p className="mb-6">
                  清潔感があって好印象なスタイルからワンランク上の大人の雰囲気が出るスタイル、オンもオフも決まるスタイル、韓国風など学生に人気のスタイルまで幅広いヘアスタイルにご対応しますのでなりたいイメージをお聞かせください。数々のコンテンストで優勝した経験のある実力派のスタイリストがご満足いただけるような仕上がりにいたします。
                </p>
                <SectionButton href="/menu/">メニューへ</SectionButton>
              </div>
            </div>

            <div className="flex gap-8 items-center mb-4 max-[768px]:block">
              <div className="relative w-2/5 aspect-square max-[768px]:w-full">
                <Image
                  src="/images/concept-3.webp"
                  alt="ひげや眉のデザインから身だしなみまでお任せいただけます"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>ひげや眉のデザインから身だしなみまでお任せいただけます</SubHeading>
                <p className="mb-6">
                  ヘアスタイルはもちろんのこと、ひげや眉のデザインからノーズケア、クレンジング、ヘアケア、ヘッドスパまで豊富なメニューをご用意しておりますので、ぜひお試しください。貸し切り状態の落ち着いた雰囲気の中で他のお客様を気にすることなく、日常の慌ただしさを忘れリラックスしながらゆっくり施術を受けていただけます。
                </p>
                <SectionButton href="/staff/">スタッフへ</SectionButton>
              </div>
            </div>
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
        <RelatedTags tags={["仙台市", "理容室", "コンセプト"]} />
      </main>
    </>
  );
}
