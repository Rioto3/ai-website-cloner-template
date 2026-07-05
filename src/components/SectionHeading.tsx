import { cn } from "@/lib/utils";

/**
 * Big section heading with vertical line above.
 * Source: mystyle.css `.heading.block_header_1` — flex column-reverse, centered;
 * EN title (p) 40px uppercase ls 2px above; JP subtitle (h2) 18px w600 green below;
 * 1px × 30px vertical line at top. Mobile ≤800px: 28px / 15px / 22px line.
 */
export function SectionHeading({
  en,
  ja,
  light = false,
  className,
}: {
  en: string;
  ja?: string;
  /** white variant used on colored/parallax backgrounds */
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mb-[30px] flex flex-col-reverse items-center justify-center pt-10 text-center",
        "before:absolute before:left-1/2 before:top-0 before:h-[30px] before:w-px before:-translate-x-1/2",
        "max-[800px]:mb-5 max-[800px]:pt-8 max-[800px]:before:h-[22px]",
        light ? "before:bg-white" : "before:bg-tt-text",
        className,
      )}
    >
      {ja ? (
        <h2
          className={cn(
            "text-[18px] font-semibold tracking-[2px] max-[800px]:text-[15px]",
            light ? "text-white" : "text-tt-green",
          )}
        >
          {ja}
        </h2>
      ) : null}
      <p
        className={cn(
          "text-[40px] font-medium uppercase leading-[1.4] tracking-[2px] max-[800px]:text-[28px]",
          light ? "text-white" : "text-tt-text",
        )}
      >
        {en}
      </p>
    </div>
  );
}
