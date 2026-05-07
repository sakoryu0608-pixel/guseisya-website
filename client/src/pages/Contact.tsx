import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight, FileText, Mail, MessageSquare, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ヒーローセクション - フル幅背景画像 */}
      <section className="relative pt-32 pb-24 min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/contact-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-10 right-[8%]" color="rgba(255,255,255,0.1)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">CONTACT</h1>
            <p className="text-lg font-bold text-white">お問い合わせ / 資料請求</p>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせ・資料請求カード */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale2)] transform skew-x-[-28deg]" />
        <CircleLine className="top-10 right-[5%]" opacity={0.06} />

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* お問い合わせ */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-none card-elevated bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-[var(--blue-pale)] flex items-center justify-center mb-6">
                    <MessageSquare size={28} className="text-[var(--blue-main)]" />
                  </div>
                  <h2 className="text-xl font-bold mb-4">お問い合わせ</h2>
                  <p className="text-muted-foreground text-sm mb-8 flex-1 leading-relaxed">
                    サービスに関するご質問、無料相談のお申し込みなど、お気軽にお問い合わせください。
                  </p>
                  <a
                    href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-main w-full text-sm">
                      お問い合わせフォームへ
                      <ArrowRight size={16} />
                    </button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* 資料請求 */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-none card-elevated bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-[var(--blue-pale)] flex items-center justify-center mb-6">
                    <FileText size={28} className="text-[var(--blue-main)]" />
                  </div>
                  <h2 className="text-xl font-bold mb-4">資料請求</h2>
                  <p className="text-muted-foreground text-sm mb-8 flex-1 leading-relaxed">
                    サービスの詳細資料をお送りいたします。導入をご検討中の方はぜひご請求ください。
                  </p>
                  <a
                    href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-main w-full text-sm !bg-white !text-[var(--dark)] border border-[var(--dark)] hover:!bg-[var(--dark)] hover:!text-white">
                      資料請求フォームへ
                      <ArrowRight size={16} />
                    </button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 連絡先情報 */}
      <section className="relative py-24 bg-gradient-blue overflow-hidden">
        <TriangleLarge className="top-16 left-[3%]" opacity={0.04} />

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="ttl-line">
                <h2 className="section-ttl-en">INFO</h2>
                <span className="section-ttl-sub font-bold">連絡先情報</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp}>
                <Card className="text-center border-none card-elevated bg-white">
                  <CardContent className="p-6">
                    <Phone size={24} className="text-[var(--blue-main)] mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-2">電話</h3>
                    <p className="text-muted-foreground text-sm">080-2724-9394</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="text-center border-none card-elevated bg-white">
                  <CardContent className="p-6">
                    <Mail size={24} className="text-[var(--blue-main)] mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-2">メール</h3>
                    <p className="text-muted-foreground text-sm break-all">sakoryu0608@gmail.com</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card className="text-center border-none card-elevated bg-white">
                  <CardContent className="p-6">
                    <Clock size={24} className="text-[var(--blue-main)] mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-2">営業時間</h3>
                    <p className="text-muted-foreground text-sm">平日 9:00 - 18:00</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* 無料相談バナー */}
            <motion.div variants={fadeInUp} className="mt-10">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "linear-gradient(145deg, var(--blue-main), var(--blue-light))" }}>
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rotate-45 translate-x-1/3 -translate-y-1/3" />
                <div className="p-8 text-center text-white relative z-10">
                  <h3 className="text-xl font-bold mb-3">無料相談実施中</h3>
                  <p className="text-sm opacity-90 max-w-lg mx-auto">
                    初回のご相談は無料です。お客様の課題やご要望をお聞きし、最適なソリューションをご提案いたします。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
