import Image from "next/image";

/**
 * Interior-page hero banner: 300px band (200px mobile), dark brown bg with a
 * photo at 30% opacity, centered white title.
 * Source: mystyle.css #lv / #lv div{opacity:.3} / #lv p span.
 */
export function PageHeroBanner({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative flex h-[300px] items-center overflow-hidden bg-tt-text max-[800px]:h-[200px]">
      <div className="absolute inset-0 opacity-30">
        <Image src={image} alt="" fill className="object-cover" priority />
      </div>
      <p className="relative z-[3] w-full px-[10px] text-center">
        <span className="inline-block text-[37px] font-semibold leading-[1.2] tracking-[2px] text-white max-[800px]:text-[27px]">
          {title}
        </span>
      </p>
    </div>
  );
}
