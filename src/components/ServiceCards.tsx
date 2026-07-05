import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { ServiceCard } from "@/types";

/**
 * SERVICE cards grid — 3 equal columns (stacked ≤1024px).
 * Source: composite_box01.block_images_16 (docs/research/components/source-css/composite_box01.css).
 */
const SERVICE_CARDS: ServiceCard[] = [
  {
    label: "貸し切り状態で施術を受けていただけます",
    number: "SERVICE 01",
    image: "/images/service-1.webp",
    description:
      "完全予約制のプライベート空間で他のお客様を気にすることなく、日常の慌ただしさや忙しさを忘れリラックスしながらゆっくり施術を受けていただけます。",
  },
  {
    label: "高い技術を持つ実力派のスタイリストが対応",
    number: "SERVICE 02",
    image: "/images/service-2.webp",
    description:
      "数々のコンテストで優勝経験のあるスタイリスト歴30年以上のベテランスタイリストがマンツーマンで丁寧にご対応することでご満足いただけるような仕上がりにしています。",
  },
  {
    label: "何でも相談しやすいプライベートサロン",
    number: "SERVICE 03",
    image: "/images/service-3.webp",
    description:
      "最初のカウンセリングから仕上げまで一人のスタイリストが担当するので待たされることがなく、丁度良い距離感でご希望やお悩みなど何でも気軽にご相談いただけます。",
  },
];

export function ServiceCards() {
  return (
    <Reveal className="bg-white pb-[30px]">
      <div className="mx-auto max-w-[1500px] px-5">
        <p className="mb-[25px] mt-[25px] text-center text-tt-text">
          プロによる確かな技術でお客様のなりたいを実現します
        </p>
        <div className="flex gap-[30px] max-[1024px]:block max-[1024px]:space-y-[40px]">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.number}
              className="group relative h-[22vw] max-h-[50vh] flex-1 max-[1200px]:h-[32vw] max-[1024px]:h-auto"
            >
              <div className="absolute inset-0 overflow-hidden max-[1024px]:relative max-[1024px]:mb-[15px] max-[1024px]:h-[30vw]">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[600ms] min-[1025px]:group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 z-[3] h-[30%] w-full bg-gradient-to-b from-transparent to-black/30 max-[1024px]:h-[20%]" />
              </div>

              <div className="absolute left-0 top-0 z-[3] bg-white px-[15px] py-[10px] text-[13px] text-tt-text">
                {card.label}
              </div>

              <div className="absolute bottom-0 left-0 z-[3] p-[15px] font-bold text-white transition-opacity duration-[400ms] min-[1025px]:group-hover:opacity-0">
                {card.number}
              </div>

              <p className="absolute bottom-[10px] left-[10px] right-[10px] z-[3] bg-white p-[10px] text-[14px] leading-[1.6] text-tt-text opacity-0 transition-opacity duration-[400ms] delay-300 max-[1024px]:static max-[1024px]:bg-transparent max-[1024px]:p-0 max-[1024px]:leading-[1.8] max-[1024px]:opacity-100 min-[1025px]:group-hover:opacity-100">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
