import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight, CheckCircle, Bot, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

/* アニメーション定義 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* Larkフォーム URL */
const LARK_FORM_URL =
  "https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ==========================================
          ヒーローセクション - フル幅背景画像 + オーバーレイ
          ========================================== */}
      <section className="relative pt-32 pb-24 min-h-[50vh] flex items-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/services-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>

        {/* 三角形装飾 */}
        <TriangleLarge className="top-16 right-[5%]" color="rgba(255,255,255,0.1)" opacity={1} />
        <CircleLine className="bottom-10 right-[12%]" color="rgba(255,255,255,0.08)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">SERVICES</h1>
            <p className="text-lg md:text-xl font-bold text-white mt-4">
              サービス内容
            </p>
            <p className="text-sm text-white/70 mt-3 max-w-lg">
              貴社の課題に合わせた最適なソリューションをご提供します
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          サービス1: システム・AIBOT開発
          ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <TriangleLarge className="top-20 right-[3%]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* セクションタイトル */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="section-ttl-en">SERVICE 01</h2>
              <span className="section-ttl-sub font-bold">システム・AIBOT開発</span>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl">
              {/* 左: 画像 */}
              <motion.div variants={fadeInUp}>
                <div
                  className="h-64 md:h-80 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: "url(/service-dev-new.png)" }}
                />
                {/* 料金・契約形態 */}
                <div className="flex gap-8 mt-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">料金</p>
                    <p className="font-bold text-sm">ヒアリング後にお見積り</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">契約形態</p>
                    <span className="ttl-badge text-xs px-3 py-1">単発依頼</span>
                  </div>
                </div>
              </motion.div>

              {/* 右: 詳細 */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {/* こんな課題をお持ちの方に */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <span className="ttl-line mr-0" />
                    こんな課題をお持ちの方に
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "現在行なっている業務をシステム化したい",
                      "AIに仕事を任せたい",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 mt-0.5 text-[var(--blue-main)] flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* サービス内容 */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <span className="ttl-line mr-0" />
                    サービス内容
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "GASでスプレッドシート作業をワンクリックで半自動化",
                      "AIBOT開発によりコンテンツ作成を半自動化（特有業務・SNS・記事作成など）",
                      "Instagram分析シート、請求書作成システム、障害者雇用管理システムなどの開発実績",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 mt-0.5 text-[var(--blue-main)] flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          サービス2: 伴走型AIコンサルティング（背景切り替え）
          ========================================== */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleDots className="top-[-2rem] left-[-3rem]" opacity={0.04} />
        <CircleLine className="bottom-10 left-[5%]" opacity={0.06} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="section-ttl-en">SERVICE 02</h2>
              <span className="section-ttl-sub font-bold">伴走型AIコンサルティング</span>
              <p className="text-sm text-muted-foreground mt-2">経営の「右腕」として伴走</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl">
              {/* 左: 詳細 */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {/* こんな課題をお持ちの方に */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <span className="ttl-line mr-0" />
                    こんな課題をお持ちの方に
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "経営の相談相手が欲しい",
                      "AI活用を始めたいが何から手をつけるべきかわからない",
                      "業務フローが属人化しており整理したい",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 mt-0.5 text-[var(--blue-main)] flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* パッケージ内容 */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <span className="ttl-line mr-0" />
                    パッケージ内容
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "月1〜2回の定例打ち合わせ",
                      "AI研修・教育",
                      "チャットサポート（随時相談可能）",
                      "システム開発・作業の巻き取り",
                      "業務設計・事業プロセス構築支援",
                      "AI活用アドバイザリー",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 mt-0.5 text-[var(--blue-main)] flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 料金 */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">料金</p>
                  <p className="font-bold text-sm">ヒアリング後にお見積り</p>
                  <p className="text-xs text-muted-foreground mt-1">※従業員数等により変動あり</p>
                </div>
              </motion.div>

              {/* 右: 画像 */}
              <motion.div variants={fadeInUp}>
                <div
                  className="h-64 md:h-80 rounded-2xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: "url(/consultation.jpg)" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          サービス3: 障害者AI人材育成
          ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <TriangleLarge className="top-10 left-[2%]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="section-ttl-en">SERVICE 03</h2>
              <span className="section-ttl-sub font-bold">障害者AI人材育成</span>
              <p className="text-sm text-muted-foreground mt-2">エシカルコミュニティLLPとの連携事業</p>
            </motion.div>

            <div className="max-w-4xl">
              <motion.div variants={fadeInUp}>
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* エシカルコミュニティ紹介 */}
                    <div className="bg-[var(--blue-pale)] p-8 md:p-10">
                      <h3 className="text-xl font-bold mb-4">エシカルコミュニティLLPとは</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                        代表の迫口が発起人・AI教育責任者を務める組合です。障害のある方にAIスキルを教え、実践的な企業案件にも取り組んでいただきます。組合に参加する企業は法定雇用率の達成が可能となり、障害のある方は最終的に企業への転籍を目指します。
                      </p>
                      <a
                        href="https://ethical-community.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-line"
                      >
                        VIEW MORE
                      </a>
                    </div>

                    {/* サービス概要・導入メリット */}
                    <div className="p-8 md:p-10 space-y-8">
                      <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                          <span className="ttl-line mr-0" />
                          サービス概要
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "4段階カリキュラム（AIベーシック → 効率化マスター → AIクリエイター → AIインストラクター）",
                            "学習動画50本以上による体系的な教育",
                            "実践的な企業案件の請け負いによる実務経験",
                            "企業へのアピール発表会の実施",
                            "法定雇用率達成のサポート",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="mr-2 mt-0.5 text-[var(--blue-main)] flex-shrink-0" size={16} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                          <span className="ttl-line mr-0" />
                          導入メリット
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { title: "法定雇用率の達成", desc: "組合への加入で法定雇用率をクリア" },
                            { title: "社会貢献", desc: "障害者の自立支援に企業として貢献" },
                            { title: "AI人材の確保", desc: "AIスキルを持つ人材を育成・確保" },
                            { title: "コスト効率", desc: "直接雇用に比べた柔軟な選択肢" },
                          ].map((item, i) => (
                            <Card key={i} className="card-elevated border-none">
                              <CardContent className="p-5">
                                <p className="font-bold text-sm mb-1">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          導入の流れ
          ========================================== */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleDots className="bottom-[-2rem] right-[-3rem]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="section-ttl-en text-center">FLOW</h2>
              <span className="section-ttl-sub font-bold block text-center">導入の流れ</span>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[
                { num: "01", label: "ご相談受付" },
                { num: "02", label: "ヒアリング" },
                { num: "03", label: "お見積もり" },
                { num: "04", label: "ご契約" },
                { num: "05", label: "開発・支援開始" },
                { num: "06", label: "納品・伴走" },
              ].map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <Card className="card-elevated border-none bg-white">
                    <CardContent className="p-6">
                      <span className="number-accent text-3xl block mb-3">{step.num}</span>
                      <p className="text-sm font-bold">{step.label}</p>
                    </CardContent>
                  </Card>
                  {index < 5 && (
                    <ArrowRight className="mx-auto mt-3 text-[var(--blue-main)] hidden lg:block" size={16} />
                  )}
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
              まずはお気軽にお問い合わせください
            </span>
            <p className="text-sm text-muted-foreground mt-4 mb-10">
              3営業日以内にご返信いたします。
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
