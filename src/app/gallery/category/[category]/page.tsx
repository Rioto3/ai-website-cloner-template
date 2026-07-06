import { Breadcrumb } from "@/components/Breadcrumb";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/gallery";

export function generateStaticParams() {
  return GALLERY_CATEGORIES.map((c) => ({ category: encodeURIComponent(c.replace(/ /g, "+")) }));
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const decoded = decodeURIComponent(category).replace(/\+/g, " ");
  const items = GALLERY_ITEMS.filter((i) => i.category === decoded);

  return (
    <>
      <PageHeroBanner title="ギャラリー" image="/images/banners/gallery.jpg" />
      <Breadcrumb
        items={[
          { label: "仙台市の理容室はHIAR T.T", href: "/" },
          { label: "ギャラリー", href: "/gallery/" },
          { label: decoded },
        ]}
      />
      <main id="main" className="relative z-[1]">
        <Reveal as="section" className="pt-20 pb-[30px]">
          <div className="mx-auto max-w-[1160px] px-5">
            <SectionHeading en="GALLERY" ja="最新トレンドを取り入れながら似合う髪型をご提案" />
            <p className="mb-10 text-center">
              王道のショートカットやベリーショート、ナチュラルツイスト、フェード、ナチュラルバックなどこれまで施術したヘアスタイルを紹介していますのでご参考にしてください。ご希望やお悩みを詳しくお聞きした上で似合う髪型をご提案します。
            </p>
            <GalleryGrid items={items} activeCategory={decoded} />
            <p className="mt-16">
              これまでに施術した様々なヘアスタイルをご紹介していますので、どんな髪型にしようか迷っているときなどにご参考にしてください。アンティーク調の落ち着いた雰囲気のプライベートサロンを仙台市に構えながら、数々のコンテストで優勝した経験のあるスタイリスト歴30年以上のベテランスタイリストが最初のカウンセリングから仕上げまでマンツーマンで丁寧に対応し、ご満足いただけるようなサービスをご提供しております。一人ひとりのライフスタイルに合わせた似合うヘアスタイルをご提案し、ひげや眉などの身だしなみもお任せいただけます。
            </p>
          </div>
        </Reveal>
      </main>
    </>
  );
}
