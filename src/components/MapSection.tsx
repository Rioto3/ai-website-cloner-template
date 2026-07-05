import { SectionButton } from "@/components/SectionButton";

/**
 * Google Maps embed + アクセスへ CTA button.
 * Source: widget_map pt0 pb30 (iframe) + contents_btn01 pt0 pb60 (button).
 */
export function MapSection() {
  return (
    <div className="pt-[30px] pb-[30px]">
      <div className="mx-auto max-w-[1160px] px-5">
        <iframe
          className="h-[450px] w-full border-0 max-[768px]:h-[300px]"
          loading="lazy"
          title="GoogleMap"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=%E5%AE%AE%E5%9F%8E%E7%9C%8C%E4%BB%99%E5%8F%B0%E5%B8%82%E5%AE%AE%E5%9F%8E%E9%87%8E%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%AD%97%E5%AF%BA%E5%89%8D46-1%E3%80%80HAIR%20T.T&output=embed"
        />
      </div>
      <div className="pb-[60px] pt-[30px]">
        <SectionButton href="/access/">アクセスへ</SectionButton>
      </div>
    </div>
  );
}
