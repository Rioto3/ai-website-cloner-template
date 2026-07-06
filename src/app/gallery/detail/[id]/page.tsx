import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, getGalleryItem, getGalleryNeighbors } from "@/data/gallery";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SubHeading } from "@/components/SubHeading";
import { PagerNav } from "@/components/PagerNav";

export function generateStaticParams() {
  return GALLERY_ITEMS.map((item) => ({ id: item.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getGalleryItem(id);
  if (!item) return null;
  const { prev, next } = getGalleryNeighbors(id);

  const btn =
    "inline-block w-[160px] border border-tt-green text-center text-[14px] font-semibold text-tt-green transition-colors duration-300 px-5 py-[10px] hover:bg-tt-green hover:text-white";

  return (
    <>
      <PageHeroBanner title="ギャラリー" image="/images/banners/gallery.jpg" />
      <Breadcrumb
        items={[
          { label: "仙台市の理容室はHIAR T.T", href: "/" },
          { label: "ギャラリー", href: "/gallery/" },
          { label: item.title },
        ]}
      />
      <section className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
        <div className="mx-auto max-w-[700px] px-5 text-center">
          <div className="relative mb-10 pt-10">
            <span className="absolute left-1/2 top-0 h-[30px] w-px -translate-x-1/2 bg-tt-text max-[800px]:h-[22px]" />
            <h1 className="mb-2 text-[28px] font-medium leading-[1.4] max-[800px]:text-[22px]">
              {item.title}
            </h1>
            <p className="text-[16px] font-semibold tracking-[2px] text-tt-green max-[800px]:text-[14px]">
              ギャラリー
            </p>
          </div>

          <div className="relative mx-auto mb-4 aspect-[4/3] w-full max-w-[400px]">
            <Image
              src={item.images[0]}
              alt={item.imageLabels[0]}
              fill
              className="object-cover grayscale"
            />
          </div>
          <p className="mb-8 text-[13px] tracking-widest">{item.imageLabels[0]}</p>

          <div className="mb-10 flex justify-center gap-3">
            {item.images.map((src, i) => (
              <div key={src} className="relative h-[70px] w-[90px]">
                <Image
                  src={src}
                  alt={item.imageLabels[i]}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            ))}
          </div>

          <div className="text-left">
            <SubHeading>{item.title}</SubHeading>
            <div className="mb-6">
              <p className="mb-1 font-semibold">■スタイルメニュー</p>
              {item.styleMenu.map((line) => (
                <p key={line}>・{line}</p>
              ))}
            </div>
            <div className="mb-6">
              <p className="mb-1 font-semibold">■スタイリストコメント</p>
              <p>・TOSHIMITSU</p>
              <p>　{item.stylistComment}</p>
            </div>
            <div className="mb-6">
              <p className="mb-1 font-semibold">■スタイルデータ</p>
              <p>・長さ　　：{item.styleData.length}</p>
              <p>・カラー　：{item.styleData.color}</p>
              <p>・イメージ：{item.styleData.image}</p>
            </div>
          </div>

          <div className="mb-4 flex justify-center gap-4">
            <Link href="/gallery/" className={btn}>
              ギャラリートップへ
            </Link>
          </div>
        </div>
      </section>
      <PagerNav
        prevHref={prev ? `/gallery/detail/${prev.id}/` : undefined}
        nextHref={next ? `/gallery/detail/${next.id}/` : undefined}
        backHref="/gallery/"
        backLabel="一覧に戻る"
      />
    </>
  );
}
