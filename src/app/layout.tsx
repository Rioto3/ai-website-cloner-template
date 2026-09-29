import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./shell.css";

export const metadata: Metadata = {
  title: "和菓子スライド（仮題）",
  description: "ブロックをスライドさせて横のラインをそろえる、和菓子モチーフのブロックパズル。",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
