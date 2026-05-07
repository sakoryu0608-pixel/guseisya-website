import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FAQ() {
  const faqs = [
    {
      question: "AIやITの知識がなくても大丈夫ですか？",
      answer:
        "はい、全く問題ありません。代表自身も数年前まではAIについて素人でした。専門用語を使わず、お客様の現状に合わせてわかりやすくサポートいたします。",
    },
    {
      question: "他社のAIサービスで成果が出なかったのですが...",
      answer:
        "ご安心ください。多くのご相談者が同じ経験をお持ちです。私たちはスポット的な研修やツール導入で終わらせず、社内に入り込み、定着するまで長期的に伴走します。",
    },
    {
      question: "なぜ「かかりつけ医」なのですか？",
      answer:
        "AIは一度学んで終わりではなく、毎日少しずつ触り続けることが大切です。体調管理のように、日々の小さな改善を積み重ねるパートナーでありたいという想いから、この言葉を使っています。",
    },
    {
      question: "どのような業種に対応していますか？",
      answer:
        "飲食、士業、観光、歯科、注文住宅、美容室、ネイルサロン、整体院、不動産、ECサイト、塾、英会話スクール、広告代理店など、70件以上の多業種での実績があります。業種を問わずご相談ください。",
    },
    {
      question: "料金はどのくらいかかりますか？",
      answer:
        "サービス内容や企業規模によって異なります。ヒアリングのうえ最適なプランをご提案しますので、まずはお気軽にお問い合わせください。",
    },
    {
      question: "経営者自身がAIに詳しくなくても導入できますか？",
      answer:
        "はい。迫口が社内に入り込み、経営者に代わってAI導入の推進役を担います。ITリテラシーに自信がなくても安心してお任せください。",
    },
    {
      question: "導入までにどのくらいの期間がかかりますか？",
      answer:
        "AIBOT開発であれば1〜2週間程度、伴走型コンサルティングは最短で契約翌月から開始可能です。お急ぎの場合はご相談ください。",
    },
    {
      question: "導入後のサポートはありますか？",
      answer:
        "伴走型コンサルティングでは、月1〜2回の打ち合わせ、AI研修、チャットサポートに加え、システム開発や作業の巻き取りまで対応しています。導入したけど使われない、という事態を防ぐための継続的なサポートが特長です。",
    },
    {
      question: "遠方からでも依頼できますか？",
      answer:
        "はい、全国どこからでもご依頼いただけます。オンラインでのミーティングやチャットが中心ですので、場所を問わず対応可能です。",
    },
    {
      question: "障害者AI人材育成とは何ですか？",
      answer:
        "迫口が発起人を務めるエシカルコミュニティLLPでの取り組みです。障害のある方にAIスキルを教え、実践的な企業案件にも取り組んでいただきます。組合に参加する企業は法定雇用率の達成が可能となり、障害のある方は最終的に企業への転籍を目指します。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ヒーローセクション - フル幅背景画像 */}
      <section className="relative pt-32 pb-24 min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/faq-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-10 right-[8%]" color="rgba(255,255,255,0.1)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">FAQ</h1>
            <p className="text-lg font-bold text-white">よくある質問</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale2)] transform skew-x-[-28deg]" />
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.03} />
        <CircleLine className="bottom-20 left-[3%]" opacity={0.06} />

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl px-6 shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-bold hover:no-underline text-sm md:text-base py-5">
                    <span className="flex items-center gap-4">
                      <span className="number-accent text-xl font-bold flex-shrink-0">
                        Q{String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5 text-sm pl-12">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground mb-8">
              その他のご質問はお気軽にお問い合わせください
            </p>
            <a
              href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta py-8 px-16 text-lg inline-flex"
            >
              <span className="w-6 h-[2px] border-r-2 border-b border-white transform skew-x-[50deg] mr-2" />
              CONTACT
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
