import type { BlogPostFull } from "@/types";

/** Chronological order (oldest first) — matches the site's prev/next pager. */
export const BLOG_POSTS: BlogPostFull[] = [
  {
    slug: "20220609171543",
    date: "2022/06/09",
    title: "この度ホームページを新しく立ち上げました！",
    image: "/images/blog-2-full.jpg",
    body: [
      "ブログをご覧いただきありがとうございます。",
      "この度当店ではホームページを新しく立ち上げました！",
      "これから最新情報を発信していきますので、よろしくお願い致します！",
    ],
    tags: ["仙台市", "理容室"],
  },
  {
    slug: "20220609202823",
    date: "2022/06/09",
    title: "【仙台市】女性のお顔そりもおまかせください|HAIR T.T",
    image: "/images/blog-1-full.jpg",
    body: [
      "ブログをご覧いただきありがとうございます。",
      "お化粧のりが良くなり、透明感が増します！",
      "水をも弾く、ピチピチ肌をご体感下さい！",
    ],
    tags: ["理容室", "仙台市"],
  },
];

/** Index listing order (newest first). */
export const BLOG_POSTS_BY_DATE = [...BLOG_POSTS].reverse();

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogNeighbors(slug: string) {
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? BLOG_POSTS[index - 1] : undefined,
    next: index >= 0 && index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : undefined,
  };
}

export const BLOG_TAGS = [
  "仙台市",
  "理容室",
  "コンセプト",
  "お客様の声",
  "メニュー",
  "スタッフ",
  "アクセス",
  "スケジュール",
  "お問い合わせ",
  "プライバシーポリシー",
  "メニュー2",
  "メニュー1",
];
