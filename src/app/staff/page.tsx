import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedTags } from "@/components/RelatedTags";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function StaffPage() {
  return (
    <>
      <PageHeroBanner title="スタッフ" image="/images/banners/staff.jpg" />
      <Breadcrumb
        items={[
          { label: "仙台市の理容室はHIAR T.T", href: "/" },
          { label: "スタッフ" },
        ]}
      />
      <Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
        <div className="mx-auto max-w-[1160px] px-5">
          <SectionHeading
            en="STAFF"
            ja="ひげや眉をデザインし洗練された仕上がりにいたします"
          />
          <p className="mb-10">
            ヘアスタイルはもちろんのこと、シェービングや眉カット、ヘアケア、ノーズケア、クレンジング、ヘッドスパなど様々なメニューをご用意しておりますのでぜひお試しください。プロが高い技術力で男性の身だしなみをサポートいたします。
          </p>

          <div className="flex gap-10 items-start mb-16 max-[768px]:block">
            <div className="relative h-[226px] w-[226px] shrink-0 max-[768px]:mx-auto max-[768px]:h-[60vw] max-[768px]:w-[60vw]">
              <Image
                src="/images/staff-toshimitsu.jpg"
                alt="TOSHIMITSU"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 max-[768px]:mt-6">
              <h3 className="mb-4 text-[20px] font-bold">TOSHIMITSU</h3>
              <div className="flex border-b border-tt-border py-[14px]">
                <span className="w-[160px] shrink-0">メッセージ</span>
                <span className="flex-1 leading-[1.9]">
                  お客様のニーズにお答え出来る仕事をさせて頂きますのでよろしくお願いします。
                </span>
              </div>
              <div className="flex border-b border-tt-border py-[14px]">
                <span className="w-[160px] shrink-0">業歴</span>
                <span className="flex-1 leading-[1.9]">30年以上</span>
              </div>
              <div className="flex border-b border-tt-border py-[14px]">
                <span className="w-[160px] shrink-0">得意なイメージ</span>
                <span className="flex-1 leading-[1.9]">ナチュラル</span>
              </div>
              <div className="flex border-b border-tt-border py-[14px]">
                <span className="w-[160px] shrink-0">趣味</span>
                <span className="flex-1 leading-[1.9]">ビール</span>
              </div>
            </div>
          </div>

          <p>
            HIAR
            T.Tではメンズカットやレディースカット、ビジネスカットといったヘアスタイルだけではなく、お顔そりや眉カット、ノーズケア、クレンジング、ヘッドスパなど様々なメニューをご用意しトータルケアをご提供しております。お手入れ方法がわからずお困りの方からおしゃれにこだわりのある方まで幅広いご要望にお応えし、豊富な実績と経験を持つプロが丁寧なカウンセリングでご希望を詳しくお聞きした上でご満足いただけるような仕上がりにしますのでお任せください。マンツーマンでご対応しており、お悩みなど何でも気軽にご相談いただけます。
          </p>
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
      <RelatedTags tags={["仙台市", "理容室", "メニュー2"]} />
    </>
  );
}
