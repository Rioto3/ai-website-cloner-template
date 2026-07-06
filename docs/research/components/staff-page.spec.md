# StaffPage Specification

## Overview
- **Target file:** `src/app/staff/page.tsx`
- **Screenshot:** `docs/design-references/pages/staff-desktop-full.png`
- **Interaction model:** static + inview fade-up

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `Reveal`, `RelatedPosts`, `RelatedTags`.

## Structure
```
<PageHeroBanner title="スタッフ" image="/images/banners/staff.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"スタッフ"}]} />
<Reveal className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="STAFF" ja="ひげや眉をデザインし洗練された仕上がりにいたします" />
    <p className="mb-10">{intro}</p>
    {/* profile block: image LEFT (fixed ~226px square per screenshot), text/table RIGHT */}
    <div className="flex gap-10 items-start mb-16 max-[768px]:block">
      <div className="relative h-[226px] w-[226px] shrink-0 max-[768px]:mx-auto max-[768px]:h-[60vw] max-[768px]:w-[60vw]">
        <Image src="/images/staff-toshimitsu.jpg" alt="TOSHIMITSU" fill className="object-cover" />
      </div>
      <div className="flex-1 max-[768px]:mt-6">
        <h3 className="mb-4 text-[20px] font-bold">TOSHIMITSU</h3>
        {profileRows.map(row => (
          <div className="flex border-b border-tt-border py-[14px]">
            <span className="w-[160px] shrink-0">{row.label}</span>
            <span className="flex-1 leading-[1.9]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
    <p>{closing}</p>
  </div>
</Reveal>
<RelatedPosts items={[{title:"アクセス", description:"クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…", image:"/images/related/access-thumb.jpg", href:"/access/"}]} />
<RelatedTags tags={["仙台市","理容室","メニュー2"]} />
```

## Text content (verbatim)

Intro: `ヘアスタイルはもちろんのこと、シェービングや眉カット、ヘアケア、ノーズケア、クレンジング、ヘッドスパなど様々なメニューをご用意しておりますのでぜひお試しください。プロが高い技術力で男性の身だしなみをサポートいたします。`

Profile rows:
| label | value |
|---|---|
| メッセージ | お客様のニーズにお答え出来る仕事をさせて頂きますのでよろしくお願いします。 |
| 業歴 | 30年以上 |
| 得意なイメージ | ナチュラル |
| 趣味 | ビール |

Closing: `HIAR T.Tではメンズカットやレディースカット、ビジネスカットといったヘアスタイルだけではなく、お顔そりや眉カット、ノーズケア、クレンジング、ヘッドスパなど様々なメニューをご用意しトータルケアをご提供しております。お手入れ方法がわからずお困りの方からおしゃれにこだわりのある方まで幅広いご要望にお応えし、豊富な実績と経験を持つプロが丁寧なカウンセリングでご希望を詳しくお聞きした上でご満足いただけるような仕上がりにしますのでお任せください。マンツーマンでご対応しており、お悩みなど何でも気軽にご相談いただけます。`

## Responsive
≤768px: image centered above text, table rows stay left-aligned.

Verify `npx tsc --noEmit` before finishing.
