import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Right-aligned breadcrumb trail with chevron separators.
 * Source: cmn.css #pan — flex justify-end, 12px text, rotated-square chevrons
 * between items (omitted before the first). Hidden below 400px.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="relative z-[2] border-b border-tt-border max-[400px]:hidden">
      <ul className="mx-auto flex max-w-[1200px] justify-end px-5 py-[5px]">
        {items.map((item, i) => (
          <li
            key={item.label}
            className={cn(
              "relative overflow-hidden whitespace-nowrap text-ellipsis py-[3px] pl-[30px] text-[12px]",
              i > 0 &&
                "before:absolute before:left-[-13px] before:top-[calc(50%-15px)] before:h-[30px] before:w-[30px] before:rotate-45 before:border-r before:border-t before:border-tt-border",
            )}
          >
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
