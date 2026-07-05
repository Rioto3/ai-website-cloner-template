import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SubHeading } from "@/components/SubHeading";

/**
 * Concept section — intro copy paired with a framed photo.
 * Source: nbp1192654 "CONCEPT" block — text column (left, ~45%) and image
 * column (right, ~55%) sit side by side on desktop. Below 768px the layout
 * stacks into a single column with the image on top and the text below.
 */
export function ConceptSection() {
  return (
    <Reveal
      as="section"
      className="pt-20 pb-20 max-[850px]:pt-[65px] max-[850px]:pb-[65px]"
    >
      <div className="mx-auto max-w-[1300px] px-5">
        <SectionHeading en="CONCEPT" />
        <div className="flex flex-col-reverse items-center gap-10 max-[850px]:gap-8 md:flex-row md:gap-[40px]">
          <div className="w-full text-left md:w-[45%]">
            <SubHeading>お客様のなりたいスタイルを実現させます</SubHeading>
            <p className="text-tt-text">
              レトロなアメリカンスタイルの理容室を仙台市に構えながら、スタイリスト歴30年以上のベテランスタイリストがメンズカットからレディースカット、ビジネスカット、学生に人気の韓国風といったヘアスタイルからひげや眉のデザイン、ノーズケア、ヘアケア、クレンジング、ヘッドスパまで幅広いサービスをご提供しておりますのでぜひお越しください。なりたいスタイルのイメージがございましたらお気軽にご相談いただければ、丁寧なカウンセリングでご希望やお悩みを伺い、髪質や骨格を考慮しながら確かな技術で施術しイメージをしっかり形にいたします。
            </p>
          </div>
          <div className="w-full md:w-[55%]">
            <Image
              src="/images/concept.webp"
              alt="お客様のなりたいスタイルを実現させます"
              width={580}
              height={435}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
