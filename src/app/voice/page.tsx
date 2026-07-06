import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SubHeading } from "@/components/SubHeading";

export const metadata: Metadata = {
  title: "お客様の声",
  description: "ヘアスタイルから身だしなみまでプロの技で洗練されたイケメンに。お客様からいただいた声をご紹介します。",
};

export default function VoicePage() {
  return (
    <>
      <PageHeroBanner title="お客様の声" image="/images/banners/voice.jpg" />
      <Breadcrumb
        items={[
          { label: "仙台市の理容室はHIAR T.T", href: "/" },
          { label: "お客様の声" },
        ]}
      />
      <Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
        <div className="mx-auto max-w-[1160px] px-5">
          <SectionHeading
            en="VOICE"
            ja="ヘアスタイルから身だしなみまでプロの技で洗練されたイケメンに"
          />
          <p className="mb-10">
            理容室・HIAR
            T.Tを仙台市に構え、スタイリスト歴30年を超える実力派のスタイリストがマンツーマンで丁寧にご対応しております。ヘアスタイルだけではなくお顔そりや眉カット、ノーズケア、ヘッドスパなどトータルケアします。
          </p>

          <div className="space-y-12 mb-12">
            <div className="flex gap-8 items-start max-[768px]:block">
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/voice-1.jpg"
                  alt="（男性/40代/自営業）"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>（男性/40代/自営業）</SubHeading>
                <p className="whitespace-pre-line">{`とても、丁寧にカットしていただきました。カットの技術もとても上手だと思いました。
また、ブローのやり方などを丁寧に説明していただきとても有り難かったです。
とても気さくで大変話しやすい方です。
ぜひおススメです。定期的にお願いしたいと思います。よろしくお願いします。`}</p>
              </div>
            </div>

            <div className="flex gap-8 items-start max-[768px]:block">
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/voice-2.jpg"
                  alt="（男性/40代/自営業）"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>（男性/40代/自営業）</SubHeading>
                <p className="whitespace-pre-line">{`私、子供達と家族で通っています。
ベテランのスタッフさんは髪型の相談にも親身に乗ってくれます。
毎回、文句のない仕上がりで大満足です。
趣味の話から、仕事の話まで話題が豊富で、年配の方から子供まで安心してお勧め出来ます。
子供のあしらいも上手で格好よく切ってくれますよ。`}</p>
              </div>
            </div>

            <div className="flex gap-8 items-start max-[768px]:block">
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/voice-3.jpg"
                  alt="（男性/20代後半/会社員）"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>（男性/20代後半/会社員）</SubHeading>
                <p>
                  初めて利用させてもらいました。髪の乾かし方や、セットの仕方等も丁寧に教えていただき良かったです。何となくのイメージしか伝えていませんでしたが、カットもとても良かったです。家族からも好評でした。またよろしくお願いします。
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start max-[768px]:block">
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/voice-4.png"
                  alt="（女性/30代前半/主婦）"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>（女性/30代前半/主婦）</SubHeading>
                <p className="whitespace-pre-line">{`明るく気さくなスタッフさんで、こちら側から話題にしない限り個人的なことを質問されることもなく、 美容室の会話が苦手な私でも楽しく気持ちよく座っていられました。
価格設定も良心的で、お値段以上の価値がある時間でした。
ヘッドスパがとっても気持ちよかったです！顔剃り後はツルツル肌に！！理容室は女性だからと数件断られたことがありますが、男女問わず料金も同じでやっているので 女性の皆さんにもオススメです。
また行きたいです！`}</p>
              </div>
            </div>

            <div className="flex gap-8 items-start max-[768px]:block">
              <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full">
                <Image
                  src="/images/voice-5.jpg"
                  alt="（女性/30代前半）"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
                <SubHeading>（女性/30代前半）</SubHeading>
                <p className="whitespace-pre-line">{`息子がお世話になりました!!
髪を切っていただいてあんなに嬉しそうにしているのを初めてみました!!
お店を出てすぐ『俺次もここに来なきゃ！』と言っていました!!
技術・人柄全部か息子好みだな！と見ていて私もわかるくらいで、長いお付き合いになれたらな～！と思っています!!
ありがとうございました!!`}</p>
              </div>
            </div>
          </div>

          <p>
            仙台育英学園高等学校の近くで理容室を営業しており、中野栄駅や陸前高砂駅から歩けるアクセスの良い場所にございますのでお気軽にお越しください。完全予約制のプライベート空間をご用意し、落ち着いた雰囲気の中で他のお客様の目を気にすることなく、日常の慌ただしさを忘れリラックスしながらゆっくり施術を受けていただけます。
          </p>
        </div>
      </Reveal>
    </>
  );
}
