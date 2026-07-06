import type { GalleryItem } from "@/types";

export const GALLERY_CATEGORIES = [
  "メンズ ショート",
  "メンズ ベリーショート",
  "メンズ ミディアム",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "266783",
    title: "王道ショート◎ 秋スタイル",
    category: "メンズ ショート",
    images: ["/images/gallery/266783-1.jpg", "/images/gallery/266783-2.jpg"],
    imageLabels: ["FRONT", "BACK"],
    styleMenu: ["ストレートパーマ・縮毛矯正", "王道のショートに仕上げました♪"],
    stylistComment: "王道ショート秋スタイル◎ サイドをツーブロック　トップをふんわり♪",
    styleData: { length: "ショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266782",
    title: "ナチュラルツイスト",
    category: "メンズ ミディアム",
    images: ["/images/gallery/266782-1.jpg", "/images/gallery/266782-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&パーマ"],
    stylistComment: "洗いざらしで決まる、パーマスタイル！！",
    styleData: { length: "ミディアム", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266781",
    title: "フェード",
    category: "メンズ ショート",
    images: ["/images/gallery/266781-1.jpg", "/images/gallery/266781-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&シェービング"],
    stylistComment: "フェード8：2ラインスタイル！！",
    styleData: { length: "ショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266780",
    title: "ナチュラルバック",
    category: "メンズ ミディアム",
    images: ["/images/gallery/266780-1.jpg", "/images/gallery/266780-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&シェービング"],
    stylistComment: "ナチュラルバックスタイル！！",
    styleData: { length: "ミディアム", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266779",
    title: "ナチュラルライト",
    category: "メンズ ショート",
    images: ["/images/gallery/266779-1.jpg", "/images/gallery/266779-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&パーマ"],
    stylistComment: "ナチュラルライトパーマ！！",
    styleData: { length: "ショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266778",
    title: "ベリーショート",
    category: "メンズ ベリーショート",
    images: ["/images/gallery/266778-1.jpg", "/images/gallery/266778-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&シェービング"],
    stylistComment: "ベリーショートスタイル！！",
    styleData: { length: "ベリーショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266777",
    title: "サイドバンク",
    category: "メンズ ショート",
    images: ["/images/gallery/266777-1.jpg", "/images/gallery/266777-2.jpg"],
    imageLabels: ["FRONT", "SIDE"],
    styleMenu: ["カット&シェービング"],
    stylistComment: "サイドバンク・ブロックスタイル！！",
    styleData: { length: "ショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
  {
    id: "266776",
    title: "フェードワンメイク",
    category: "メンズ ショート",
    images: ["/images/gallery/266776-1.jpg", "/images/gallery/266776-2.jpg"],
    imageLabels: ["FRONT", "BACK"],
    styleMenu: ["カット&シェービング"],
    stylistComment: "フェード・ワンメイクバックスタイル！！",
    styleData: { length: "ショート", color: "ブラウン・ベージュ系", image: "メンズカット" },
  },
];

export function getGalleryItem(id: string) {
  return GALLERY_ITEMS.find((item) => item.id === id);
}

export function getGalleryNeighbors(id: string) {
  const index = GALLERY_ITEMS.findIndex((item) => item.id === id);
  return {
    prev: index > 0 ? GALLERY_ITEMS[index - 1] : undefined,
    next: index >= 0 && index < GALLERY_ITEMS.length - 1 ? GALLERY_ITEMS[index + 1] : undefined,
  };
}
