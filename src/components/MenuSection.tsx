import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { SectionButton } from "@/components/SectionButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SubHeading } from "@/components/SubHeading";
import type { MenuItemData } from "@/types";

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
];

export function MenuSection() {
  return (
    <Reveal className="bg-tt-beige pt-20 pb-[30px] max-[850px]:pt-[65px]">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading en="MENU" ja="手入れのしやすい再現性のあるヘアスタイルに仕上げます" />

        <SubHeading className="mb-[15px]">カット</SubHeading>

        <div className="flex max-[768px]:block">
          <div className="w-1/2 pr-[2vw] max-[768px]:w-full max-[768px]:pr-0">
            <Image
              src="/images/menu-cut.jpg"
              width={800}
              height={530}
              alt="カット"
              className="h-auto w-full"
            />
          </div>

          <div className="w-[calc(50%-2vw)] max-[768px]:mt-4 max-[768px]:w-full">
            <ul>
              {CUT_MENU_ITEMS.map((item) => (
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
                  <p className="pl-[14px] text-[13px] tracking-normal text-tt-text">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SectionButton href="/menu/" className="mt-10">
          メニューへ
        </SectionButton>
      </div>
    </Reveal>
  );
}
