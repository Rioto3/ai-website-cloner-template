import { cn } from "@/lib/utils";

/**
 * Sub heading with green ring dot marker.
 * Source: mystyle.css `.heading.block_header_2 .h` — 20px w600 lh 1.5,
 * padding-left 22px, 6px dot with 3px green border (border-radius 50px)
 * vertically centered. Mobile ≤800px: 19px / padding-left 20px.
 */
export function SubHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-[30px] max-[800px]:mb-5", className)}>
      <h3
        className={cn(
          "relative inline-block pl-[22px] text-[20px] font-semibold leading-[1.5] max-[800px]:pl-5 max-[800px]:text-[19px]",
          "before:absolute before:left-0 before:top-[calc(50%-7px)] before:block before:h-[6px] before:w-[6px] before:rounded-full before:border-[3px] before:border-tt-green",
        )}
      >
        {children}
      </h3>
    </div>
  );
}
