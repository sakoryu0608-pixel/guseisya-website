import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      question: "AIやITの知識がなくても大丈夫ですか?",
      answer:
        "はい、全く問題ありません。私自身も2年前まではAIについて全くの素人でした。お客様の現状のレベルに合わせて、わかりやすく丁寧にサポートいたします。専門用語を使わず、実務に即した形でご説明しますのでご安心ください。",
    },
    {
      question: "どのような業種・業界に対応していますか?",
      answer:
        "飲食店、士業、観光業、コーチング業、SNSコンサル、放課後デイサービス、インバウンド観光業、車部品販売、システム開発など、多岐にわたる業種での支援実績があります。業種を問わず、お客様の業務内容をヒアリングし、最適なソリューションをご提案いたします。",
    },
    {
      question: "料金はどのくらいかかりますか?",
      answer:
        "お客様の課題やご要望によって異なります。まずはお問い合わせにてヒアリングさせていただき、お見積りを作成いたします。予算に合わせた最適なプランをご提案いたしますので、お気軽にご相談ください。",
    },
    {
      question: "導入までにどのくらいの期間がかかりますか?",
      answer:
        "プロジェクトの規模や内容によって異なりますが、小規模なGPTs構築であれば1〜2週間程度、より大規模なシステム開発の場合は1〜3ヶ月程度が目安となります。お急ぎの場合はご相談ください。",
    },
    {
      question: "導入後のサポートはありますか?",
      answer:
        "はい、導入後のサポートも充実しています。契約内容に応じて、チャットサポートや定期的なコンサルティングをご提供いたします。「導入したけど使われない」という事態を防ぐため、継続的にサポートいたします。",
    },
    {
      question: "遠方からでも依頼できますか?",
      answer:
        "はい、全国どこからでもご依頼いただけます。オンラインでのミーティングやチャットでのやり取りが中心となりますので、場所を問わずサポートが可能です。",
    },
    {
      question: "まずは話を聞いてみたいのですが...",
      answer:
        "もちろんです！まずはお気軽にお問い合わせください。お客様の現状の課題や悩みをお聞きし、どのような解決策があるかをご提案いたします。相談したからといって必ず契約しなければならないということはありませんので、ご安心ください。",
    },
    {
      question: "GPTsとは何ですか?",
      answer:
        "GPTsは、ChatGPTをカスタマイズして特定の業務に特化させたAIツールです。例えば、貴社の業務フローや専門知識を学習させることで、より精度の高い回答や作業を行えるようになります。マニュアルやFAQ対応、コンテンツ作成など、様々な用途に活用できます。",
    },
    {
      question: "既存のシステムと連携できますか?",
      answer:
        "はい、可能です。Google スプレッドシート、Lark、LINE、その他のツールとの連携実績があります。既存のシステムを活かしながら、AIを組み込んで効率化を図ることができます。",
    },
    {
      question: "セキュリティは大丈夫ですか?",
      answer:
        "お客様の情報セキュリティには細心の注意を払っています。機密情報の取り扱いについては、契約時に秘密保持契約（NDA）を締結いたします。また、使用するツールやシステムについても、セキュリティ面を考慮した選定を行なっています。",
    },
    {
      question: "社員研修も依頼できますか?",
      answer:
        "はい、可能です。数名から数十名規模のAIセミナーや研修を実施しております。貴社の業務内容に合わせたカスタマイズ研修も可能ですので、ご相談ください。",
    },
    {
      question: "成果が出なかった場合はどうなりますか?",
      answer:
        "お客様と一緒にゴールを設定し、そこに向かって伴走いたします。万が一、期待する成果が出ない場合は、原因を分析し、改善策を講じます。単なるツール導入で終わらせず、実際に成果が出るまでサポートいたしますのでご安心ください。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            よくある質問
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            その他のご質問はございますか？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            上記以外のご質問やご不明な点がございましたら、お気軽にお問い合わせください。
            3営業日以内にご返信いたします。
          </p>
          <a
            href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">お問い合わせはこちら</Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
