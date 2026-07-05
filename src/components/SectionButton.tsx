import { cn } from "@/lib/utils";

/**
 * Outlined CTA button with left-to-right fill on hover.
 * Source: mystyle.css `.contents_btn01 a` — 1px border --i_btn_color (#684733),
 * transparent bg, w600; span 15px lh 1.8 padding 10px 20px 11px; on hover a
 * ::before layer slides in from the left (transition all .3s) filling with
 * #684733 and text turns white. Default width 200px, centered.
 * `light` variant (on colored bg): white border/text; hover border turns green.
 */
export function SectionButton({
  href,
  children,
  external = false,
  light = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "relative z-[2] inline-block w-[200px] overflow-hidden border text-center font-semibold transition-colors duration-300",
          "before:absolute before:-left-full before:top-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all before:duration-300",
          "hover:text-white hover:before:left-0 hover:before:bg-tt-btn",
          light
            ? "border-white text-white hover:border-tt-green"
            : "border-tt-btn text-tt-btn",
        )}
      >
        <span className="block px-5 pb-[11px] pt-[10px] text-[15px] leading-[1.8]">
          {children}
        </span>
      </a>
    </div>
  );
}
