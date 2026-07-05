import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

const title =
  "仙台市の理容室ならマンツーマンで丁寧なHIAR T.T | 実力派｜お客様のなりたいスタイルを実現させます";
const description =
  "クラシックなアメリカンスタイルの理容室・HIAR T.Tを仙台市に構え、数々のコンテストで優勝した経験を持つスタイリスト歴30年以上のベテランスタイリストがお客様のなりたいイメージをしっかり形にしております。";

export const metadata: Metadata = {
  title,
  description,
  keywords: "仙台市,理容室",
  icons: {
    icon: "/seo/favicon.png",
    shortcut: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: title,
    images: ["/seo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" id="top" className={`${roboto.variable} antialiased`}>
      <body className="min-h-full bg-white text-tt-text">{children}</body>
    </html>
  );
}
