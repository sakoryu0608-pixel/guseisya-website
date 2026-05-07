import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* アニメーション定義 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* Larkフォーム URL */
const LARK_FORM_URL =
  "https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc";

/* 支援業種一覧 */
const industries = [
  "飲食", "士業", "観光", "コンサル", "歯科", "注文住宅",
  "SNSコンサル", "Webマーケ", "ネイルサロン", "美容室",
  "ドライヘッドスパ", "整体院", "不動産", "ECサイト",
  "塾", "英会話スクール", "放課後デイサービス", "広告代理店", "リフォーム",
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ==========================================
          ヒーローセクション - フル幅背景画像
          ========================================== */}
      <section className="relative pt-32 pb-24 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/works-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-16 right-[5%]" color="rgba(255,255,255,0.1)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">WORKS</h1>
            <p className="text-lg md:text-xl font-bold text-white mt-4">実績・事例</p>
            <p className="text-sm text-white/70 mt-3 max-w-lg">様々な業種・業界での支援実績をご紹介します</p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          実績数字セクション
          ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale2)] transform skew-x-[-28deg]" />
        <TriangleLarge className="bottom-10 right-[8%]" opacity={0.05} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="section-ttl-en">RESULTS</h2>
              <span className="section-ttl-sub font-bold">数字で見る実績</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
              {[
                { number: "70+", label: "コンサルティング実績", sub: "法人・個人含む" },
                { number: "50+", label: "カスタムAIBOT構築数", sub: "" },
                { number: "100+", label: "AIセミナー受講者数", sub: "オンラインセミナー登壇" },
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <p className="number-accent text-5xl md:text-6xl mb-2">{stat.number}</p>
                  <p className="text-base font-bold mb-1">{stat.label}</p>
                  {stat.sub && <p className="text-xs text-muted-foreground">{stat.sub}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          支援業種一覧 - ピル/タグレイアウト
          ========================================== */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.04} />
        <CircleLine className="bottom-16 left-[5%]" opacity={0.06} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="section-ttl-en text-center">INDUSTRIES</h2>
              <span className="section-ttl-sub font-bold block text-center">支援業種一覧</span>
              <p className="text-sm text-muted-foreground mt-3">
                多岐にわたる業種で支援実績があります
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="px-5 py-2.5 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {industry}
                </motion.span>
              ))}
              <motion.span
                variants={fadeInUp}
                className="px-5 py-2.5 bg-gradient-to-r from-[var(--blue-main)] to-[var(--blue-light)] text-white rounded-full text-sm font-bold shadow-sm"
              >
                ...and more
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          その他の実績
          ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <TriangleLarge className="top-16 left-[3%]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="section-ttl-en">MORE</h2>
              <span className="section-ttl-sub font-bold">その他の実績</span>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "法人向けAI導入・DX支援",
                  desc: "上流工程からの言語化サポート、業務標準化のためのマニュアル作成、Lark構築、DXツールの選定〜導入による業務効率化支援、LINE構築、AI BOT構築、法人向け研修など",
                },
                {
                  title: "セミナー・研修実績",
                  desc: "100名規模のAIオンラインセミナー登壇。元国会議員へのAIコンサル実施。中小企業の社長や副業している個人へのAI導入・活用相談に対応",
                },
                {
                  title: "書籍出版",
                  desc: "2025年4月に『GPTs構築の教科書』を出版。実践的なノウハウを体系化し、広く発信",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="card-elevated border-none">
                    <CardContent className="p-8">
                      <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CTAセクション
          ========================================== */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="section-ttl-en text-center">CONTACT</h2>
            <span className="section-ttl-sub font-bold block text-center">
              あなたの会社でも成果を出しませんか？
            </span>
            <p className="text-sm text-muted-foreground mt-4 mb-10">
              まずはお気軽にご相談ください
            </p>
            <a
              href={LARK_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex py-5 px-12 text-base"
            >
              資料請求・相談はこちら
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
