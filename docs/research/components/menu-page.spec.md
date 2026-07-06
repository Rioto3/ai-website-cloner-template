# MenuPage Specification

## Overview
- **Target file:** `src/app/menu/page.tsx`
- **Screenshot:** `docs/design-references/pages/menu-desktop-full.png`
- **Interaction model:** static content; category nav buttons are plain in-page anchor links (`#1`..`#5`), NOT click-to-switch tabs — all 5 categories render simultaneously in a long scroll, confirmed via live inspection.

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `SubHeading`, `SectionButton`, `Reveal`, `RelatedPosts`, `RelatedTags`.

## Structure
```
<PageHeroBanner title="メニュー" image="/images/banners/menu.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"メニュー"}]} />
<Reveal className="pt-20 pb-[30px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="MENU" ja="周りに差をつけるかっこいいヘアスタイルを実現" />
    <p className="text-center mb-10">{intro}</p>
    {/* anchor nav row, centered, wraps to 2 lines on desktop per screenshot */}
    <nav className="flex flex-wrap justify-center gap-3 mb-16">
      <a href="#1" className={outlinedPill}>カット</a>
      <a href="#2" className={outlinedPill}>ヘッドスパ</a>
      <a href="#3" className={outlinedPill}>シェービング</a>
      <a href="#4" className={outlinedPill}>その他メニュー</a>
      <a href="#5" className={outlinedPill}>割引メニュー</a>
    </nav>
    {/* outlinedPill: border border-tt-border rounded-full px-6 py-2 text-[14px] hover:bg-tt-beige transition-colors */}

    <section id="1" className="mb-16">
      <SubHeading>カット</SubHeading>
      <div className="flex gap-8 max-[768px]:block">
        <img class="w-1/2" src="/images/menu-cut.jpg" alt="カット" />  {/* reuse existing asset from homepage */}
        <ul className="w-1/2">{5 rows as in MenuSection: name+chevron / price, note below}</ul>
      </div>
    </section>

    <section id="2" className="mb-16">
      <SubHeading>ヘッドスパ</SubHeading>
      {/* NOTE: reversed layout — list LEFT, image RIGHT (opposite of カット) */}
      <div className="flex gap-8 max-[768px]:block flex-row-reverse">
        <img class="w-1/2" src="/images/menu-headspa.jpg" alt="ヘッドスパ" />
        <ul className="w-1/2">{1 row: クレンジングヘッドスパ / ¥1,000～ (税込)}</ul>
      </div>
    </section>

    <section id="3" className="mb-16">
      <SubHeading>シェービング</SubHeading>
      <div className="flex gap-8 max-[768px]:block">
        <img class="w-1/2" src="/images/menu-shave.jpg" alt="シェービング" />
        <ul className="w-1/2">
          <p className="mb-2">レディースも可</p>
          {1 row: シェービング / ¥2,000 (税込)}
        </ul>
      </div>
    </section>

    <section id="4" className="mb-16">
      <SubHeading>その他メニュー</SubHeading>
      {/* list first (full width), image floats/sits alongside the LAST 2 rows on the right per screenshot; simplest faithful approach: list full width on top, image below-right at w-1/2 ml-auto, OR list w-1/2 + image w-1/2 aligned to bottom-right. Use: flex row with list w-3/5 and image w-2/5 self-end (image shorter, aligned near bottom of the list) */}
      <div className="flex gap-8 max-[768px]:block items-end">
        <ul className="w-3/5">{6 rows, see data below}</ul>
        <img class="w-2/5" src="/images/menu-other.jpg" alt="その他メニュー" />
      </div>
    </section>

    <section id="5" className="mb-16">
      <SubHeading>割引メニュー</SubHeading>
      <p>{closing paragraph}</p>
    </section>
  </div>
</Reveal>
<RelatedPosts items={[{title:"アクセス", description:"クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…", image:"/images/related/access-thumb.jpg", href:"/access/"}]} />
<RelatedTags tags={["仙台市","理容室","メニュー1"]} />
```

## Text content (verbatim)

Intro: `「かっこ良くなりたい」「おしゃれな髪形にしたい」「好感度が上がるスタイルにしてほしい」などなりたいイメージがございましたらご相談いただければ、数々のコンテストで優勝経験を持つ実力派のスタイリストがしっかり形にします。`

### カット (id=1) — 5 rows, same data as homepage MenuSection:
| name | note | price |
|---|---|---|
| カット（トータル） | シャンプーブロー、シェービング込み | ￥3,800 (税込) |
| カット | シャンプー込み | ￥3,000 (税込) |
| カット（高校生） | シャンプー込み | ￥3,000 (税込) |
| カット（中学生） | シャンプー込み | ￥2,500 (税込) |
| カット（小学生） | シャンプー込み | ￥2,000 (税込) |
| クイックカット | 時間が無い方向け♪ 高品質なカットを短時間でお届け♪ | ￥2,500 (税込) |

### ヘッドスパ (id=2)
| クレンジングヘッドスパ | — | ￥1,000～ (税込) |

### シェービング (id=3)
| シェービング | レディースも可 | ￥2,000 (税込) |

### その他メニュー (id=4) — 6 rows:
| name | note | price |
|---|---|---|
| ノーズケア | — | ￥500 (税込) |
| 【学割U24】似合わせカット＋シェービング＋眉デザインカット | 学生の方必見！フェードから今風の韓国風まで幅ひろく対応◎中学生から大学生、専門生まで大絶賛！イケメンになりたいならHAIR T.Tで間違えなし | ￥3,000 (税込) |
| カット＋シェービング＋眉カット＋ヘッドスパ10分 | 丁寧で的確なカット技術/ 眉カットデザイン相談可/10分のヘッドスパ付で頭皮ケアも◎シャンプー込 | ￥4,800 (税込) |
| カット＋シェービング＋ヘアケア＋ノーズケア＋クレンジング | 丁寧で的確なカット技術/頭皮ケア、自分では落とせない汚れを直接落とす/気になる鼻毛ケア。希望者のみ施術を行います。シャンプー込 | ￥5,300 (税込) |
| カット＋パーマ＋シェービング＋眉カット | 丁寧で的確なカット技術/王道パーマ～ツイスト、スパイラルまで幅広く対応/眉カットデザイン相談可。シャンプー込 | ￥7,800～ (税込) |
| カット➕カラーリング➕シェービング➕眉カット | — | 6,800～ (税込) |

### 割引メニュー (id=5) — text only, no items:
`HIAR T.Tでは豊富な実績と経験のあるスタイリストが最初のカウンセリングから仕上げまでマンツーマンで対応しており、お客様のなりたいイメージを汲み取った上で確かな技術で丁寧に施術し、イメージをしっかり形にしますのでお任せください。清潔感があり好感度をアップさせるスタイルやワンランク上の大人を感じさせるスタイル、トレンドを取り入れながら周りと差をつけるおしゃれなスタイルなど、ライフスタイルに合わせオンもオフも決まるヘアスタイルをご提案いたします。落ち着いた雰囲気の中でリラックスしながら施術を受けられるサロンです。`

## Row styling
Reuse the row pattern from `src/components/MenuSection.tsx` (chevron marker + name/price line, note below, border-b divider) — read that file for exact classes and replicate for consistency.

## Responsive
≤768px: each category's image/list stacks (image above list), anchor nav pills wrap to multiple rows (already flex-wrap).
