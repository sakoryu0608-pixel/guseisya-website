import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ヒーローセクション - フル幅背景画像 */}
      <section className="relative pt-32 pb-24 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/about-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-10 right-[8%]" color="rgba(255,255,255,0.1)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">ABOUT</h1>
            <p className="text-lg font-bold text-white">代表について</p>
          </motion.div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-24 relative overflow-hidden">
        <CircleLine className="top-10 right-[3%]" opacity={0.06} />

        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-12 gap-12 items-start"
          >
            <motion.div variants={fadeInLeft} className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-56 h-56 rounded-2xl bg-muted flex items-center justify-center overflow-hidden mb-6 shadow-xl">
                <img
                  src="/profile.png"
                  alt="迫口竜士"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">迫口 竜士</h2>
              <p className="text-muted-foreground text-sm">代表取締役</p>
            </motion.div>

            <motion.div variants={fadeInRight} className="md:col-span-8">
              <div className="ttl-line mb-6">
                <h2 className="section-ttl-en text-3xl">MESSAGE</h2>
              </div>
              <h3 className="text-xl font-bold mb-6 text-[var(--blue-main)]">「AIで変わった、僕自身の働き方。その体験を、あなたにも。」</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  AIと出会い、僕の働き方は大きく変わりました。
                </p>
                <p>
                  業務を効率化することで、同じ時間の中でこなせる仕事の量が圧倒的に増え、仕事の質も向上しました。売上は拡大し、何より自分自身の思考に余裕が生まれました。この体験をもっと多くの方に届けたい——その想いが、この事業の原点です。
                </p>
                <p>
                  しかし、現在のAI業界を見渡すと、高額な法人研修やシステム開発、AI顧問サービスが主流となっています。実際に僕のもとへ相談に来られる方の多くは、すでに他社のAIサービスを受けた経験をお持ちでした。そして皆さんが口を揃えておっしゃるのは、「高額な費用を払ったのに、結局何も変わらなかった」という声でした。
                </p>
                <p>
                  これは、AIというトレンドに乗じて「売ること」に特化したサービスが溢れてしまった結果だと、僕は考えています。
                </p>
                <p>
                  僕自身も過去に法人研修を提供していました。しかし正直に言えば、研修だけでは企業への定着にはなかなかつながりませんでした。なぜなら、社員一人ひとりに「学ぶ積極性」が求められてしまうからです。
                </p>
                <p>
                  一方で、AI導入がうまくいった事例には共通点がありました。それは、学ぶ姿勢の高い経営者がまず自ら学び、そこから社員に落とし込んでいくパターンです。ただ、すべての経営者がITリテラシーが高いわけではありません。
                </p>
                <p>
                  だからこそ、迫口自身が社内に入り込み、その役割を担うことを決めました。長期的に伴走しながら、コツコツとAI導入を浸透させていく。それが「AIのかかりつけ医」という僕のスタイルです。
                </p>
                <p>
                  AIは、スポット的に学んでも意味がありません。1日10分でも、30分でも、毎日触ること。これが最も大切です。これは僕自身の経験から、間違いなく言い切れることです。
                </p>
                <p>
                  この考え方に共感していただける方と、ぜひ一緒に歩んでいきたいと思っています。
                </p>
                <p className="text-right font-bold text-foreground mt-6">
                  株式会社偶成舎<br />
                  代表取締役　迫口 竜士
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 経歴 */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.04} />
        <TriangleLarge className="bottom-10 left-[3%]" opacity={0.04} />

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="ttl-line">
                <h2 className="section-ttl-en">CAREER</h2>
                <span className="section-ttl-sub font-bold">経歴</span>
              </div>
            </motion.div>

            <div className="relative border-l-2 border-[var(--blue-main)]/30 ml-4 space-y-10">
              {[
                { title: "映像クリエイター", desc: "2年近く企業のPVや広告、SNS動画の編集を実施。" },
                { title: "SNS運用代行時代", desc: "約3年間、飲食店・工務店・車ディーラーなど実店舗に特化したInstagram・TikTokの運用、セミナー開催を行い、集客とブランディングを支援。" },
                { title: "AIコンサルタントへの転身", desc: "2022年11月のChatGPT公開を機にAI分野へ注力。「初心者目線」での導入支援を強みとし、以来毎日ChatGPTを使用し続ける。" },
                { title: "エシカルコミュニティLLP 発起人・AI教育責任者", desc: "2026年2月からエシカルコミュニティLLPをスタート。障害のある方にAIスキルを教え、実践的な企業案件にも取り組む組合を立ち上げ。" },
                { title: "現在", desc: "株式会社偶成舎の代表として、中小企業から個人事業主まで幅広いクライアントにAI導入・DX支援・人材育成を展開。2025年4月に書籍『GPTs構築の教科書』を出版。" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--blue-main)] border-4 border-[var(--blue-pale)]" />
                  <h3 className="text-base font-bold text-[var(--blue-main)] mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 専門分野 */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale)] transform skew-x-[-28deg]" />
        <CircleLine className="top-[-2rem] right-[10%]" opacity={0.08} />

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="ttl-line">
                <h2 className="section-ttl-en">EXPERTISE</h2>
                <span className="section-ttl-sub font-bold">専門分野</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "生成AI導入・システム開発",
                  items: ["カスタムAIBOT構築（50件以上）", "プロンプトエンジニアリング（5,000回以上の試行錯誤）", "GASによる業務効率化システム構築"],
                },
                {
                  num: "02",
                  title: "業務DX・効率化コンサルティング",
                  items: ["業務や課題、経営の「言語化」支援", "ツール導入・業務フロー全体の最適化"],
                },
                {
                  num: "03",
                  title: "AI人材育成・教育研修",
                  items: ["企業研修・セミナー多数開催", "60名以上へのAI活用・導入指導"],
                },
                {
                  num: "04",
                  title: "デジタルマーケティング",
                  items: ["SNS運用で培った「魅せる」ノウハウ", "AIを活用したマーケティング戦略立案"],
                },
              ].map((field, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full border-none card-elevated bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="number-accent text-3xl mr-3">{field.num}</span>
                        <h3 className="text-base font-bold">{field.title}</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {field.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <span className="mr-2 text-[var(--blue-main)] mt-0.5">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 書籍 */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleLarge className="top-16 left-[3%]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="max-w-4xl mx-auto overflow-hidden border-none card-elevated bg-white">
              <div className="grid md:grid-cols-2 gap-0 items-center">
                <div className="p-8 md:p-12">
                  <div className="ttl-line mb-6">
                    <h2 className="section-ttl-en text-3xl">BOOK</h2>
                    <span className="section-ttl-sub font-bold">書籍出版</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-[var(--blue-main)]">『GPTs構築の教科書』</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    2025年4月出版。GPTsを基礎から応用までステップ形式で学べる実践的ノウハウを凝縮。
                  </p>
                  <a href="https://amzn.asia/d/elDjFDJ" target="_blank" rel="noopener noreferrer">
                    <span className="btn-line">VIEW MORE</span>
                  </a>
                </div>
                <div className="bg-muted h-64 md:h-80 flex items-center justify-center overflow-hidden">
                  <img src="/book-cover.png" alt="GPTs構築の教科書" className="w-full h-full object-contain" />
                </div>
              </div>
            </Card>
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
