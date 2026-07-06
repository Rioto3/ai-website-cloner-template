# ContactPage Specification

## Overview
- **Target file:** `src/app/contact/page.tsx` (client component — form has local state; per project scope, NO real backend, submission is mocked)
- **Screenshot:** `docs/design-references/pages/contact-desktop-full.png`
- **Interaction model:** click-driven — "入力内容を確認する" (Confirm input) button. Since there's no real backend (out of scope per project defaults), implement `onSubmit` as `e.preventDefault()` + a simple client-side mock (e.g. show a confirmation message below the button, or `alert()`-free inline text toggle: "confirmed" state showing "送信内容をご確認ください（デモ）"). Keep it simple — this is a demo form, not a real submission pipeline.

## Shared components
`PageHeroBanner`, `Breadcrumb`, `SectionHeading`, `Reveal`, `RelatedPosts`, `RelatedTags`.

## Structure
```
<PageHeroBanner title="お問い合わせ" image="/images/banners/contact.jpg" />
<Breadcrumb items={[{label:"仙台市の理容室はHIAR T.T", href:"/"}, {label:"お問い合わせ"}]} />
<Reveal className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
  <div className="mx-auto max-w-[1000px] px-5">
    <SectionHeading en="CONTACT" ja="お問い合わせ" />
    <div className="border border-tt-border p-8 mb-10 whitespace-pre-line leading-[1.8] max-[600px]:p-5">
      {privacyNoticeText}
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2">お名前<span className="text-red-600">※</span></label>
        <input required className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div>
        <label className="block mb-2">お電話番号</label>
        <input className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div>
        <label className="block mb-2">メールアドレス<span className="text-red-600">※</span></label>
        <input required type="email" className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div>
        <label className="block mb-2">お問い合わせ内容<span className="text-red-600">※</span></label>
        <textarea required rows={6} className="w-full border border-tt-border bg-tt-beige px-4 py-3" />
      </div>
      <div className="text-center pt-4">
        <button type="submit" className="inline-block w-[220px] border border-tt-btn text-tt-btn px-5 py-3 font-semibold transition-colors duration-300 hover:bg-tt-btn hover:text-white">
          入力内容を確認する
        </button>
      </div>
      {submitted && <p className="text-center text-tt-green pt-4">ご入力ありがとうございます（デモフォームのため送信はされません）</p>}
    </form>
  </div>
</Reveal>
<RelatedPosts items={[
  {title:"アクセス", description:"クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…", image:"/images/related/access-thumb.jpg", href:"/access/"},
  {title:"プライバシーポリシー", description:"仙台市の理容室はHIAR T.Tのプライバシーポリシーページです。", image:"/images/related/privacy-thumb.jpg", href:"/privacy_policy/"},
]} />
<RelatedTags tags={["仙台市","理容室","お問い合わせ"]} />
```

## Privacy notice text (verbatim, render with line breaks preserved — use `whitespace-pre-line` and `\n` between lines)
```
＜個人情報の利用目的＞
お客様よりお預かりした個人情報は、以下の目的に限定し利用させていただきます。
・本サービスに関する顧客管理
・本サービスの運営上必要な事項のご連絡

＜個人情報の提供について＞
当社ではお客様の同意を得た場合または法令に定められた場合を除き、
取得した個人情報を第三者に提供することはいたしません。

＜個人情報の委託について＞
当社では、利用目的の達成に必要な範囲において、個人情報を外部に委託する場合があります。
これらの委託先に対しては個人情報保護契約等の措置をとり、適切な監督を行います。

＜個人情報の安全管理＞
当社では、個人情報の漏洩等がなされないよう、適切に安全管理対策を実施します。

＜個人情報を与えなかった場合に生じる結果＞
必要な情報を頂けない場合は、それに対応した当社のサービスをご提供できない場合がございますので予めご了承ください。

＜個人情報の開示･訂正・削除･利用停止の手続について＞
当社では、お客様の個人情報の開示･訂正･削除・利用停止の手続を定めさせて頂いております。
ご本人である事を確認のうえ、対応させて頂きます。
個人情報の開示･訂正･削除・利用停止の具体的手続きにつきましては、お電話でお問合せ下さい。
```

## Responsive
≤600px: form fields full width, padding reduced.

Verify `npx tsc --noEmit` before finishing.
