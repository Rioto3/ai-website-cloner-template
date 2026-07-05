import { Reveal } from "@/components/Reveal";
import type { ShopInfoRow } from "@/types";

/**
 * Shop info table (name + label/value rows).
 * Source: widget_shop01 block_map_1 add_design1 — h3 shop name + dl rows,
 * each row bordered, label 180px fixed / value flex-1. Stacks ≤768px.
 */
const SHOP_INFO_ROWS: ShopInfoRow[] = [
  { label: "電話番号", value: "022-352-3957" },
  { label: "FAX番号", value: "022-352-3957" },
  {
    label: "所在地",
    value: ["〒983-0013", "宮城県仙台市宮城野区中野字寺前46-1"],
  },
  { label: "営業時間", value: "9:00 〜 19:00" },
  { label: "定休日", value: "毎週月曜日 / 第一・三 月火連休" },
  { label: "駐車場", value: "有" },
  {
    label: "お支払方法",
    value:
      "現金 / VISA / MasterCard / JCB / American Express / Diners / 交通系電子マネー　iD　Quickpay PayPay 楽天Pay",
  },
];

export function ShopInfoSection() {
  return (
    <Reveal>
      <div className="mx-auto max-w-[1160px] px-5">
        <h3 className="border-b border-tt-border pb-[10px] text-[20px] font-bold text-tt-btn">
          HIAR T.T
        </h3>
        {SHOP_INFO_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex border-b border-tt-border py-[14px] max-[768px]:block"
          >
            <span className="w-[180px] shrink-0">{row.label}</span>
            <span className="flex-1 leading-[1.9]">
              {Array.isArray(row.value)
                ? row.value.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))
                : row.value}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
