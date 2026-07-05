import { ParallaxSection } from "@/components/ParallaxSection";
import { Reveal } from "@/components/Reveal";

/**
 * Green parallax message band above the footer.
 * Source: #parallax2 — bg #80b27f, white text, background image at 20% opacity.
 */
export function FooterMessage() {
  return (
    <ParallaxSection
      id="parallax2"
      image="/images/parallax-footer.jpg"
      className="bg-tt-green pt-20 pb-20"
      imageClassName="opacity-20"
    >
      <Reveal>
        <div className="max-w-[1160px] mx-auto px-5">
          <p className="text-white text-left text-[16.5px] leading-[1.9] font-medium">
            クラシックなアメリカンスタイルを感じさせるインテリアが並ぶ落ち着いた雰囲気の
            <strong>理容室</strong>・HIAR T.Tを<strong>仙台市</strong>
            に構え、数々のコンテストで優勝経験のあるスタイリスト歴30年を超えるベテランスタイリストがご対応しております。丁寧なカウンセリングでご希望やお悩みを詳しくお聞きし、髪質や骨格を考慮しながらお客様のなりたいイメージをしっかり形にいたしますのでお任せください。メンズカットやレディースカット、ビジネスカットといったヘアスタイルだけではなく、お顔そりや眉カット、ノーズケア、クレンジング、ヘッドスパなどトータルケアしております。
          </p>
        </div>
      </Reveal>
    </ParallaxSection>
  );
}
