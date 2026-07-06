export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroSlide {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "50% 5%" (site classes pos_ct / pos_rt) */
  objectPosition: string;
}

export interface ServiceCard {
  /** White chip label on top-left, e.g. 貸し切り状態で施術を受けていただけます */
  label: string;
  /** e.g. "SERVICE 01" */
  number: string;
  description: string;
  image: string;
}

export interface VoiceItem {
  image: string;
  caption: string;
}

export interface MenuItemData {
  name: string;
  note: string;
  price: string;
}

export interface StaffProfileRow {
  label: string;
  value: string;
}

export interface BlogPost {
  date: string;
  title: string;
  href: string;
}

export interface ShopInfoRow {
  label: string;
  value: string | string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "メンズ ショート" | "メンズ ベリーショート" | "メンズ ミディアム";
  images: string[];
  imageLabels: string[];
  styleMenu: string[];
  stylistComment: string;
  styleData: { length: string; color: string; image: string };
}

export interface BlogPostFull {
  slug: string;
  date: string;
  title: string;
  image: string;
  body: string[];
  tags: string[];
}
