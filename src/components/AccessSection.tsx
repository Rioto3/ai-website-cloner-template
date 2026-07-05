import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * ACCESS intro copy section.
 * Source: contents_box01 block_text_1 pt80 pb30 — heading + left-aligned body copy.
 */
export function AccessSection() {
  return (
    <Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading en="ACCESS" ja="中野栄駅や陸前高砂駅から徒歩圏内にサロンを構え営業中" />
        <p className="text-left">
          クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなインテリアが並び、日常を忘れさせるような落ち着いた雰囲気の中で豊富な実績と経験を持つベテランスタイリストが確かな技術で施術しております。サロンは仙台育英学園高等学校の近くにあり、中野栄駅や陸前高砂駅から歩いてお越しいただけます。
        </p>
      </div>
    </Reveal>
  );
}
