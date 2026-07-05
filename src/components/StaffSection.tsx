import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionButton } from "@/components/SectionButton";

const PROFILE_ROWS = [
  {
    label: "メッセージ",
    value:
      "お客様のニーズにお答え出来る仕事をさせて頂きますのでよろしくお願いします。",
  },
  { label: "業歴", value: "30年以上" },
  { label: "得意なイメージ", value: "ナチュラル" },
  { label: "趣味", value: "ビール" },
];

/**
 * STAFF section — staff introduction with profile photo and detail table.
 * Source: section-06 — heading, single staff profile row (photo + table), CTA button.
 */
export function StaffSection() {
  return (
    <Reveal className="pt-[30px] pb-[30px]">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading
          en="STAFF"
          ja="ひげや眉のデザインから身だしなみまでプロが承ります"
        />

        <div className="mb-[50px] flex gap-[3%] max-[768px]:block">
          <div className="flex min-h-[220px] w-[30%] items-center justify-center max-[768px]:mx-auto max-[768px]:w-[70%]">
            <Image
              src="/images/staff-toshimitsu.jpg"
              alt="TOSHIMITSU"
              width={676}
              height={507}
              className="h-auto w-full"
            />
          </div>
          <div className="w-[67%] text-left max-[768px]:w-full max-[768px]:pt-[10px]">
            <p className="border-b border-tt-border pb-2 text-[20px] font-bold tracking-[1px] text-tt-btn">
              TOSHIMITSU
            </p>
            {PROFILE_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex border-b border-tt-border py-[10px]"
              >
                <span className="w-[130px] shrink-0 text-[16.5px]">
                  {row.label}
                </span>
                <span className="flex-1 text-[16.5px] leading-[1.9]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <SectionButton href="/staff/">スタッフへ</SectionButton>
      </div>
    </Reveal>
  );
}
