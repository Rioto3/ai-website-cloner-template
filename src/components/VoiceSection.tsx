import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionButton } from "@/components/SectionButton";

interface VoiceItem {
  src: string;
  caption: string;
}

const VOICE_ITEMS: VoiceItem[] = [
  { src: "/images/voice-1.jpg", caption: "（男性/40代/自営業）" },
  { src: "/images/voice-2.jpg", caption: "（男性/40代/自営業）" },
  { src: "/images/voice-3.jpg", caption: "（男性/20代後半/会社員）" },
];

/**
 * VOICE section — customer testimonial photo gallery.
 * Source: widget_gallery01 add_design1 (see docs/research/components/voice-section.spec.md).
 */
export function VoiceSection() {
  return (
    <Reveal className="pt-[30px] pb-20">
      <div className="mx-auto max-w-[1160px] px-5">
        <SectionHeading en="VOICE" ja="お客様からご好評いただいております" />

        <div className="mx-[30px] flex w-[calc(100%-60px)] gap-[30px] max-[768px]:mx-0 max-[768px]:w-full max-[768px]:flex-col">
          {VOICE_ITEMS.map((item) => (
            <div key={item.src} className="flex-1">
              <a
                href="/voice/"
                className="group relative block w-full overflow-hidden pt-[70%]"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover [transition:transform_1s_ease-out,opacity_1s_ease-out] group-hover:scale-110 group-hover:opacity-80"
                />
              </a>
              <p className="mt-[10px] text-center text-[15px] text-tt-text">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <SectionButton href="/voice/" className="mt-10">
          お客様の声へ
        </SectionButton>
      </div>
    </Reveal>
  );
}
