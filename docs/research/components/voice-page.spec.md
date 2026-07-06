# VoicePage Specification

## Overview
- **Target file:** `src/app/voice/page.tsx`
- **Screenshot:** `docs/design-references/pages/voice-desktop-full.png`
- **Interaction model:** static + inview fade-up. NO RelatedPosts/RelatedTags on this page (confirmed absent from live DOM).

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `Reveal`.

## Structure
```
<PageHeroBanner title="お客様の声" image="/images/banners/voice.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"お客様の声"}]} />
<Reveal className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[1160px] px-5">
    <SectionHeading en="VOICE" ja="ヘアスタイルから身だしなみまでプロの技で洗練されたイケメンに" />
    <p className="mb-10">{intro}</p>
    {/* 5 testimonials, each: image LEFT (~40%, aspect ~4:3), text RIGHT (~55%) with a small heading (customer descriptor, green ring-dot marker like SubHeading) + body paragraph(s) with line breaks preserved */}
    <div className="space-y-12">
      {testimonials.map((t) => (
        <div className="flex gap-8 items-start max-[768px]:block">
          <div className="relative w-2/5 aspect-[4/3] max-[768px]:w-full"><Image src={t.image} fill className="object-cover" alt={t.label} /></div>
          <div className="w-3/5 max-[768px]:w-full max-[768px]:mt-4">
            <SubHeading>{t.label}</SubHeading>
            <p className="whitespace-pre-line">{t.body}</p>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-12">{closing}</p>
  </div>
</Reveal>
```

## Text content (verbatim)

Intro: `理容室・HIAR T.Tを仙台市に構え、スタイリスト歴30年を超える実力派のスタイリストがマンツーマンで丁寧にご対応しております。ヘアスタイルだけではなくお顔そりや眉カット、ノーズケア、ヘッドスパなどトータルケアします。`

### Testimonial 1 — image `/images/voice-1.jpg`
label: `（男性/40代/自営業）`
body:
```
とても、丁寧にカットしていただきました。カットの技術もとても上手だと思いました。
また、ブローのやり方などを丁寧に説明していただきとても有り難かったです。
とても気さくで大変話しやすい方です。
ぜひおススメです。定期的にお願いしたいと思います。よろしくお願いします。
```

### Testimonial 2 — image `/images/voice-2.jpg`
label: `（男性/40代/自営業）`
body:
```
私、子供達と家族で通っています。
ベテランのスタッフさんは髪型の相談にも親身に乗ってくれます。
毎回、文句のない仕上がりで大満足です。
趣味の話から、仕事の話まで話題が豊富で、年配の方から子供まで安心してお勧め出来ます。
子供のあしらいも上手で格好よく切ってくれますよ。
```

### Testimonial 3 — image `/images/voice-3.jpg`
label: `（男性/20代後半/会社員）`
body: `初めて利用させてもらいました。髪の乾かし方や、セットの仕方等も丁寧に教えていただき良かったです。何となくのイメージしか伝えていませんでしたが、カットもとても良かったです。家族からも好評でした。またよろしくお願いします。`

### Testimonial 4 — image `/images/voice-4.png`
label: `（女性/30代前半/主婦）`
body:
```
明るく気さくなスタッフさんで、こちら側から話題にしない限り個人的なことを質問されることもなく、 美容室の会話が苦手な私でも楽しく気持ちよく座っていられました。
価格設定も良心的で、お値段以上の価値がある時間でした。
ヘッドスパがとっても気持ちよかったです！顔剃り後はツルツル肌に！！理容室は女性だからと数件断られたことがありますが、男女問わず料金も同じでやっているので 女性の皆さんにもオススメです。
また行きたいです！
```

### Testimonial 5 — image `/images/voice-5.jpg`
label: `（女性/30代前半）`
body:
```
息子がお世話になりました!!
髪を切っていただいてあんなに嬉しそうにしているのを初めてみました!!
お店を出てすぐ『俺次もここに来なきゃ！』と言っていました!!
技術・人柄全部か息子好みだな！と見ていて私もわかるくらいで、長いお付き合いになれたらな～！と思っています!!
ありがとうございました!!
```

Closing: `仙台育英学園高等学校の近くで理容室を営業しており、中野栄駅や陸前高砂駅から歩けるアクセスの良い場所にございますのでお気軽にお越しください。完全予約制のプライベート空間をご用意し、落ち着いた雰囲気の中で他のお客様の目を気にすることなく、日常の慌ただしさを忘れリラックスしながらゆっくり施術を受けていただけます。`

## Responsive
≤768px: each testimonial stacks image above text.

Verify `npx tsc --noEmit` before finishing.
