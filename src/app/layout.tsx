import type { Metadata } from "next";
import "./globals.css";
import "./shell.css";

export const metadata: Metadata = {
  title: "マジックスライド｜ゲーム広場｜ポイント広場",
  description:
    "魔法の世界のブロックパズル「マジックスライド」。ブロックをスライドさせて横のラインを作ろう。無料で遊べるかんたんゲーム。",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
