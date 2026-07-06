import Link from "next/link";

/**
 * Prev/next/back-to-list pager used on blog detail and gallery detail pages.
 * Source: contents_btn01-style outlined buttons, green border/text variant.
 */
export function PagerNav({
  prevHref,
  nextHref,
  backHref,
  backLabel,
}: {
  prevHref?: string;
  nextHref?: string;
  backHref: string;
  backLabel: string;
}) {
  const btn =
    "inline-block w-[160px] border border-tt-green text-center text-[14px] font-semibold text-tt-green transition-colors duration-300 px-5 py-[10px] hover:bg-tt-green hover:text-white";
  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <div className="flex w-full max-w-[900px] justify-between">
        <div>{prevHref && <Link href={prevHref} className={btn}>{"< 前の記事"}</Link>}</div>
        <div>{nextHref && <Link href={nextHref} className={btn}>{"次の記事 >"}</Link>}</div>
      </div>
      <Link href={backHref} className={btn}>
        {backLabel}
      </Link>
    </div>
  );
}
