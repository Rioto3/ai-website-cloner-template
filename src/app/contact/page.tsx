import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedTags } from "@/components/RelatedTags";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "HIAR T.Tへのお問い合わせはこちら。ご希望やお悩みをお気軽にご相談ください。",
};

export default function Page() {
  return (
    <>
      <PageHeroBanner title="お問い合わせ" image="/images/banners/contact.jpg" />
      <Breadcrumb
        items={[{ label: "仙台市の理容室はHIAR T.T", href: "/" }, { label: "お問い合わせ" }]}
      />
      <Reveal as="section" className="pt-20 pb-[30px] max-[850px]:pt-[65px]">
        <div className="mx-auto max-w-[1000px] px-5">
          <SectionHeading en="CONTACT" ja="お問い合わせ" />
          <div className="border border-tt-border p-8 mb-10 whitespace-pre-line leading-[1.8] text-[14px] max-[600px]:p-5">
            {`＜個人情報の利用目的＞
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
個人情報の開示･訂正･削除・利用停止の具体的手続きにつきましては、お電話でお問合せ下さい。`}
          </div>
          <ContactForm />
        </div>
      </Reveal>
      <RelatedPosts
        items={[
          {
            title: "アクセス",
            description:
              "クラシックなアメリカンスタイルをイメージした店内にはおしゃれなアンティークなイ…",
            image: "/images/related/access-thumb.jpg",
            href: "/access/",
          },
          {
            title: "プライバシーポリシー",
            description: "仙台市の理容室はHIAR T.Tのプライバシーポリシーページです。",
            image: "/images/related/privacy-thumb.jpg",
            href: "/privacy_policy/",
          },
        ]}
      />
      <RelatedTags tags={["仙台市", "理容室", "お問い合わせ"]} />
    </>
  );
}
