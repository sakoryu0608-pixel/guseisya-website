import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight, Heart, Handshake, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Philosophy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ヒーローセクション - 背景画像 + グラデーション */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img src="/philosophy-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-main)]/90 via-[var(--blue-main)]/80 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-20 right-[5%]" color="#fff" opacity={0.06} />
        <CircleLine className="bottom-10 left-[5%]" color="#fff" opacity={0.08} />

        <div className="container relative z-10 text-center text-white py-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-ttl-en !bg-none ![-webkit-text-fill-color:white] mb-4"
            style={{ background: "none", WebkitTextFillColor: "white" }}
          >
            PHILOSOPHY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
          >
            AIのかかりつけ医として、
            <br />
            企業と長く深い関係を築く
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
          >
            私たちは単なるツール提供者ではありません。
            <br className="hidden md:block" />
            お客様の"永遠の相方"であり続けることを目指しています。
          </motion.p>
        </div>
      </section>

      {/* ビジョン */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale)] transform skew-x-[-28deg]" />
        <TriangleLarge className="top-16 left-[3%]" opacity={0.05} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="ttl-line mb-8">
              <h2 className="section-ttl-en">VISION</h2>
              <span className="section-ttl-sub font-bold">ビジョン</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-8">
              <span className="text-[var(--blue-main)]">「働く」</span>を
              <span className="text-[var(--blue-main)]">「働楽」</span>に変える
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              仕事は本来、やりがいや楽しさに溢れているものです。
              <br />
              AIとテクノロジーの力で、単調な作業から解放し、
              <br className="hidden md:block" />
              人が人らしく「楽しく働ける」環境を共に創っていきます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.04} />
        <CircleLine className="bottom-10 left-[3%]" opacity={0.06} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="ttl-line">
                <h2 className="section-ttl-en">OUR BELIEFS</h2>
                <span className="section-ttl-sub font-bold">私たちの信念</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Handshake,
                  title: "信頼を積み上げる",
                  description:
                    "大きな仕事を追うより、1社1社との信頼を積み上げる。それが、長期的な価値を生むと信じています。",
                },
                {
                  icon: Heart,
                  title: "伴走する関係",
                  description:
                    "スポットで終わらない、伴走する関係。導入して終わりではなく、定着・進化まで一緒に歩みます。",
                },
                {
                  icon: Shield,
                  title: "不に寄り添う",
                  description:
                    "お客様の「言えない不満・不安・不便」に寄り添う。表面的な課題の裏にある本質を見つけます。",
                },
              ].map((belief, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-none card-elevated bg-white">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--blue-pale)] flex items-center justify-center mx-auto mb-6">
                        <belief.icon size={28} className="text-[var(--blue-main)]" />
                      </div>
                      <h3 className="text-lg font-bold mb-4">{belief.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {belief.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 私たちの約束 */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale2)] transform skew-x-[-28deg]" />
        <TriangleLarge className="bottom-10 right-[8%]" opacity={0.05} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <div className="ttl-line">
                <h2 className="section-ttl-en">PROMISE</h2>
                <span className="section-ttl-sub font-bold">私たちの約束</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: Star,
                  title: "信頼を積み上げ、LTVを最大化する",
                  description:
                    "短期的な売上ではなく、長期的な信頼関係を築くことでお客様のLTV（顧客生涯価値）を最大化します。",
                },
                {
                  icon: Handshake,
                  title: "長く深い関係を築く",
                  description:
                    "「AIのかかりつけ医」として、一時的な支援ではなく、お客様のビジネスの成長に長期的に寄り添います。",
                },
                {
                  icon: Heart,
                  title: "信頼関係こそが事業の根幹",
                  description:
                    "私たちにとって、お客様との信頼関係は事業の根幹です。技術やツールは手段であり、目的はお客様の成功です。",
                },
              ].map((promise, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-none shadow-md border-l-4 border-l-[var(--blue-main)]">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--blue-pale)] flex items-center justify-center flex-shrink-0">
                        <promise.icon size={22} className="text-[var(--blue-main)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{promise.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {promise.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Value */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <CircleLine className="top-10 right-[5%]" opacity={0.08} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-none card-elevated bg-white">
                  <CardContent className="p-10">
                    <div className="ttl-line mb-6">
                      <h3 className="section-ttl-en text-3xl">MISSION</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                      顧客の"やりたい"を共に創る
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      お客様が思い描く理想を、AIとテクノロジーの力で形にします。「こうしたい」という想いに寄り添い、共に最適な解決策を創り上げていきます。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-none card-elevated bg-white">
                  <CardContent className="p-10">
                    <div className="ttl-line mb-6">
                      <h3 className="section-ttl-en text-3xl">VALUE</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                      絶えず改善、変化に適応し
                      <br />
                      柔軟な思考と行動を
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      AIの世界は日々進化しています。私たちも常に学び、変化に適応し、柔軟な発想でお客様に最善の価値を提供し続けます。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
