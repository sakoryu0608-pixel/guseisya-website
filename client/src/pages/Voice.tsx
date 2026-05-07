import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine } from "@/components/TriangleDecoration";
import { ArrowRight, Play } from "lucide-react";
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

/* 動画プレースホルダーデータ */
const videos = [
  {
    id: "placeholder-1",
    title: "導入事例インタビュー #1",
    description: "動画は現在制作中です。完成次第公開予定です。",
  },
  {
    id: "placeholder-2",
    title: "導入事例インタビュー #2",
    description: "動画は現在制作中です。完成次第公開予定です。",
  },
  {
    id: "placeholder-3",
    title: "導入事例インタビュー #3",
    description: "動画は現在制作中です。完成次第公開予定です。",
  },
  {
    id: "placeholder-4",
    title: "導入事例インタビュー #4",
    description: "動画は現在制作中です。完成次第公開予定です。",
  },
];

export default function Voice() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ==========================================
          ヒーローセクション - フル幅背景画像
          ========================================== */}
      <section className="relative pt-32 pb-24 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/voice-hero.jpg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)]/85 to-[var(--blue-light)]/70" />
        </div>
        <TriangleLarge className="top-16 right-[5%]" color="rgba(255,255,255,0.1)" opacity={1} />
        <CircleLine className="bottom-10 right-[12%]" color="rgba(255,255,255,0.08)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-en text-6xl md:text-8xl font-bold tracking-[0.12em] text-white mb-4">INTERVIEW</h1>
            <p className="text-lg md:text-xl font-bold text-white mt-4">お客様の声</p>
            <p className="text-sm text-white/70 mt-3 max-w-lg">実際にサービスをご利用いただいたお客様の生の声をお届けします</p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          動画セクション - 2x2グリッド
          ========================================== */}
      <section className="relative py-24 overflow-hidden">
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.04} />
        <TriangleLarge className="bottom-10 left-[3%]" opacity={0.04} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <h2 className="section-ttl-en text-center">VOICE</h2>
              <span className="section-ttl-sub font-bold block text-center">導入事例インタビュー</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {videos.map((video) => (
                <motion.div key={video.id} variants={fadeInUp}>
                  <Card className="card-elevated overflow-hidden border-none">
                    {/* 動画プレースホルダー */}
                    <div className="aspect-video bg-gradient-to-br from-[var(--blue-pale)] to-[var(--blue-pale2)] flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-white/80 shadow-lg flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform">
                          <Play size={32} className="text-[var(--blue-main)] ml-1" />
                        </div>
                        <p className="text-xs text-muted-foreground tracking-widest uppercase font-en font-semibold">
                          Coming Soon
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
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
              あなたの会社も変わりませんか？
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
