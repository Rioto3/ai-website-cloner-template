# AccessPage Specification

## Overview
- **Target file:** `src/app/access/page.tsx`
- **Screenshot:** `docs/design-references/pages/access-desktop-full.png`
- **Interaction model:** static + inview fade-up. Has RelatedTags only (NO RelatedPosts — confirmed absent).

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `SubHeading`, `Reveal`, `RelatedTags`. Also reuse `ShopInfoSection` (`src/components/ShopInfoSection.tsx`, no props, already renders the full HIAR T.T info table) as-is.
Do NOT reuse `MapSection` — it includes an "アクセスへ" button that doesn't belong on this page. Instead inline just the iframe (same src as in MapSection).

## Structure
```
<PageHeroBanner title="アクセス" image="/images/banners/access.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"アクセス"}]} />
<Reveal className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="ACCESS" ja="駐車場がありお車でも気軽にお越しいただけます" />
    {/* image LEFT ~40% + text RIGHT ~55% */}
    <div className="flex gap-8 items-start mb-16 max-[768px]:block">
      <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full"><Image src="/images/access-1.webp" fill className="object-cover" alt="中野栄駅や陸前高砂駅から徒歩圏内でプライベートサロンを営業" /></div>
      <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
        <SubHeading>中野栄駅や陸前高砂駅から徒歩圏内でプライベートサロンを営業</SubHeading>
        <p>{accessParagraph}</p>
      </div>
    </div>
  </div>
</Reveal>

<Reveal className="pt-10 pb-10">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="SALON" ja="仙台育英学園高等学校の近くにサロンを構え営業しております" />
    <p className="mb-10">{salonParagraph}</p>
    <ShopInfoSection />
  </div>
</Reveal>

{/* Parking photo block */}
<Reveal className="pt-10 pb-10">
  <div className="mx-auto max-w-[1160px] px-5 text-center">
    <p className="text-tt-green font-semibold mb-4">＼ 駐車場はこちら ／</p>
    <p className="mb-4">当店駐車場（一台）</p>
    <div className="flex justify-center gap-4 max-[600px]:block">
      <div className="relative w-[220px] h-[160px] max-[600px]:mx-auto"><Image src="/images/access-parking-map.webp" fill className="object-cover" alt="" /></div>
      <div className="relative w-[220px] h-[160px] max-[600px]:mx-auto max-[600px]:mt-4"><Image src="/images/access-1.webp" fill className="object-cover" alt="当店駐車場" /></div>
    </div>
  </div>
</Reveal>

<Reveal className="pt-10 pb-[30px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="PROFILE" ja="拠点を仙台市に置きプライベートサロンを営業しております" />
    <div className="flex gap-8 items-start max-[768px]:block">
      <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full"><Image src="/images/access-2.webp" fill className="object-cover" alt="中野栄駅や陸前高砂駅から徒歩圏内にあり駐車場も完備" /></div>
      <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
        <SubHeading>中野栄駅や陸前高砂駅から徒歩圏内にあり駐車場も完備</SubHeading>
        <p>{profileParagraph1}</p>
      </div>
    </div>
    <p className="mt-10">{profileParagraph2}</p>
  </div>
</Reveal>
<RelatedTags tags={["仙台市","理容室","アクセス"]} />
```

## Text content (verbatim)

accessParagraph: `レトロなアメリカンスタイルのテイストが漂う理容室を仙台市に構え、サロンは中野栄駅や陸前高砂駅から歩ける距離にあり、駐車場もご用意しておりますのでお気軽にご来店ください。完全予約制の落ち着いた雰囲気のプライベート空間をご用意し、他のお客様を気にすることなく貸し切り状態でリラックスしながらゆっくり施術を受けていただけます。数々のコンテストに優勝した経験のあるスタイリスト歴30年以上の実力派のベテランスタイリストがご対応いたしますのでお任せください。最初のカウンセリングから最後の仕上げまで一人のスタイリストが担当するため待たされることがなく、丁度良い距離感でヘアスタイルのご希望から髪のお悩みまで安心して何でもご相談いただけます。「かっこ良くしてほしい」「おしゃれにしてほしい」「流行りの髪型にしてほしい」「好感度がアップするヘアスタイルにしてほしい」などご要望がございましたら、お客様のなりたいイメージを汲み取りながら似合うヘアスタイルをご提案し、ご満足いただけるような仕上がりにいたします。`

salonParagraph: `クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなインテリアが並び、日常を忘れさせるような落ち着いた雰囲気の中で豊富な実績と経験を持つベテランスタイリストが確かな技術で施術しております。サロンは仙台育英学園高等学校の近くにあり、中野栄駅や陸前高砂駅から歩いてお越しいただけます。`

profileParagraph1: `中野栄駅や陸前高砂駅から歩ける距離にプライベートサロンを構えており、駐車場もございますのでお気軽にお越しください。クラシックなアメリカンスタイルを基調とした店内は落ち着いた雰囲気で、完全予約制の貸し切り状態にしているため他のお客様を気にすることなく、リラックスしながらゆっくり施術を受けていただけます。`

profileParagraph2: `仙台市に拠点を置きながら、中野栄駅や陸前高砂駅から歩けるアクセスしやすい場所にサロンを構え、駐車場もご用意していますのでぜひご来店ください。アメリカンを感じさせるアンティークな店内は落ち着いた雰囲気で、完全予約制のため他のお客様を気にすることなく、貸し切り状態の中でリラックスしながら施術を受けていただけます。豊富な実績を持つベテランスタイリストがお客様に寄り添ったカウンセリングでご希望を詳しく伺い、お客様のなりたいイメージをしっかり把握した上で、ご要望に応じて最新のトレンドを取り入れながら似合う髪型をご提案いたします。数々のコンテストで優勝した経験を持つ実力派のベテランスタイリストが最初のカウンセリングから最後の仕上げまでマンツーマンでご対応するため待たされることがなく、丁度良い距離感でお悩みなど何でも気軽にご相談いただけます。ビジネスシーンに最適な清潔感のあるスタイルやオンもオフもかっこ良く決まる髪型など周囲に差をつけるスタイルに仕上げますのでお任せください。カットやパーマ、カラーといったヘアスタイルからお顔そり、眉カットなどの身だしなみ、頭皮の汚れを落としヘアケアするヘッドスパまで様々なニーズに応えるメニューをご用意しています。`

## Assets
`/images/access-1.webp`, `/images/access-2.webp`, `/images/access-parking-map.webp` (already downloaded).

## Responsive
≤768px: image/text blocks stack; parking photos stack ≤600px.

Verify `npx tsc --noEmit` before finishing.
