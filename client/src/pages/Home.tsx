import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { TriangleLarge, TriangleDots, CircleLine, DotPattern } from "@/components/TriangleDecoration";
import { ArrowRight, Bot, ChevronDown, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import HandwrittenText from "@/components/HandwrittenText";

/* アニメーション定義 */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

/* セクションタイトルの先頭文字アクセント表示ヘルパー */
function SectionTitle({ text, className = "" }: { text: string; className?: string }) {
  return (
    <h2 className={`section-ttl-en ${className}`}>
      <span className="accent-letter">{text[0]}</span>
      {text.slice(1)}
    </h2>
  );
}

/* Larkフォーム URL */
const LARK_FORM_URL =
  "https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ==========================================
          ヒーローセクション - 参考サイト準拠
          グラデーション背景 + 大きな英字 + 手書き風日本語
          ========================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* グラデーション背景 */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #7BC4FF 0%, #2B7DE9 35%, #1a5cb8 70%, #2B7DE9 100%)",
          }}
        />

        {/* 大きな英字テキスト - 背景に溶け込む */}
        <div className="absolute inset-0 z-[1] flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 pointer-events-none select-none">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-en text-[clamp(5rem,18vw,16rem)] font-bold leading-[0.85] tracking-[0.08em] text-white block"
          >
            CREATE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-en text-[clamp(5rem,18vw,16rem)] font-bold leading-[0.85] tracking-[0.08em] text-white block"
          >
            FOR
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-en text-[clamp(5rem,18vw,16rem)] font-bold leading-[0.85] tracking-[0.08em] text-white block"
          >
            GROW.
          </motion.span>
        </div>

        {/* 三角形装飾 */}
        <TriangleLarge className="top-20 right-[5%]" color="rgba(255,255,255,0.15)" opacity={1} />
        <TriangleLarge className="bottom-16 left-[-2%]" color="rgba(255,255,255,0.08)" opacity={1} />

        {/* 手書き文字「働くを、働楽へ。」*/}
        <div className="container relative z-10 text-white pt-32 pb-20">
          <HandwrittenText
            className="w-[80%] md:w-[60%] max-w-[700px] absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/3 z-20"
            delay={1000}
            duration={3500}
            color="#FFFFFF"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl relative z-10"
          >
            <h1 className="sr-only">働くを、働楽へ。- 企業のやりたいを共に創る</h1>
          </motion.div>
        </div>

        {/* SCROLLインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-en text-white text-xs tracking-[0.3em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center"
          >
            <ChevronDown size={16} className="text-white/80" />
          </motion.div>
        </motion.div>

        {/* 右サイドSNSエリア */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <span className="font-en text-white/60 text-xs tracking-[0.2em] rotate-90 mb-8">SNS</span>
        </div>
      </section>

      {/* ==========================================
          TOP MESSAGE - 参考サイト準拠
          斜めカット背景 + 左テキスト + 右写真
          ========================================== */}
      <section className="section-block section-block--white relative">
        {/* 斜めカット背景 */}
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale)] transform skew-x-[-28deg]" />

        {/* 装飾 */}
        <TriangleLarge className="top-8 left-[2%]" opacity={0.06} />
        <CircleLine className="top-[-2rem] right-[10%]" opacity={0.08} />
        <DotPattern className="bottom-12 left-[5%]" opacity={0.12} rows={4} cols={8} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* 左: テキスト */}
            <motion.div variants={fadeInLeft}>
              <SectionTitle text="TOP MESSAGE" />
              <span className="section-ttl-sub font-bold block mb-8">代表メッセージ</span>

              {/* 帯付きキャッチコピー - 参考サイトの赤帯風 */}
              <div className="mb-6">
                <span className="ttl-badge text-2xl md:text-3xl font-bold">
                  「働く」を「働楽」へ。
                </span>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  AIと出会い、僕の働き方は大きく変わりました。この体験をもっと多くの方に届けたい——その想いが、この事業の原点です。
                </p>
                <p>
                  社内に入り込み、長期的に伴走しながらAI導入を浸透させていく。それが「AIのかかりつけ医」という僕のスタイルです。
                </p>
              </div>

              <div className="mt-8">
                <Link href="/profile" className="btn-main text-sm">
                  VIEW MORE
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* 右: 写真エリア */}
            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--blue-pale)] to-[var(--blue-pale2)]">
                <img
                  src="/message-img.jpg"
                  alt="代表メッセージ"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><p class="text-center font-en text-lg tracking-widest opacity-30">PHOTO</p></div>';
                  }}
                />
              </div>
              {/* 浮き出す小写真 */}
              <div className="absolute -bottom-6 -left-6 w-40 h-28 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[var(--blue-main)]/20 to-[var(--blue-light)]/20 border-4 border-white">
                <img
                  src="/message-img02.jpg"
                  alt="コンサルティング風景"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              {/* スライダー風ナビ（参考サイト準拠） */}
              <div className="absolute -bottom-6 right-0 flex gap-1 z-10">
                <div className="w-10 h-10 bg-[var(--dark)] flex items-center justify-center text-white text-sm cursor-pointer hover:bg-[var(--blue-main)] transition-colors">
                  &lt;
                </div>
                <div className="w-10 h-10 bg-[var(--dark)] flex items-center justify-center text-white text-sm cursor-pointer hover:bg-[var(--blue-main)] transition-colors">
                  &gt;
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          PROBLEMセクション - インフォグラフィック風
          ========================================== */}
      <section className="section-block relative" style={{ background: "linear-gradient(180deg, #fff 0%, var(--blue-pale) 20%, var(--blue-pale) 80%, #fff 100%)" }}>
        {/* 装飾 */}
        <DotPattern className="top-8 right-[3%]" opacity={0.18} rows={6} cols={10} color="#2B7DE9" />
        <TriangleLarge className="bottom-[-2rem] left-[2%]" opacity={0.05} />
        <CircleLine className="bottom-8 right-[8%]" opacity={0.06} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* タイトル */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <SectionTitle text="PROBLEM" className="text-center" />
              <span className="section-ttl-sub font-bold block">こんなお悩みありませんか？</span>
            </motion.div>

            {/* インフォグラフィック悩みカード - 3カラム */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
              {[
                {
                  text: "社員の仕事をもっと楽にしてあげられないか…",
                  label: "業務負担",
                  icon: (
                    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                      {/* 人物 */}
                      <circle cx="60" cy="32" r="14" fill="#2B7DE9" opacity="0.15" stroke="#2B7DE9" strokeWidth="2" />
                      <path d="M36 90 C36 68 48 56 60 56 C72 56 84 68 84 90" fill="#2B7DE9" opacity="0.1" stroke="#2B7DE9" strokeWidth="2" />
                      {/* 重い荷物（書類の山） */}
                      <rect x="42" y="62" width="36" height="6" rx="1" fill="#2B7DE9" opacity="0.3" />
                      <rect x="45" y="56" width="30" height="6" rx="1" fill="#2B7DE9" opacity="0.25" />
                      <rect x="48" y="50" width="24" height="6" rx="1" fill="#2B7DE9" opacity="0.2" />
                      {/* ため息マーク */}
                      <path d="M82 28 Q90 24 88 18" stroke="#5BA3F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <path d="M86 32 Q94 28 92 22" stroke="#5BA3F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      {/* 下矢印（負担の重さ） */}
                      <path d="M60 96 L54 102 L58 102 L58 110 L62 110 L62 102 L66 102 Z" fill="#2B7DE9" opacity="0.5" />
                    </svg>
                  ),
                },
                {
                  text: "うちにもITに強い人材がいてくれれば…",
                  label: "IT人材不足",
                  icon: (
                    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                      {/* PC/モニター */}
                      <rect x="28" y="30" width="64" height="44" rx="4" fill="#2B7DE9" opacity="0.1" stroke="#2B7DE9" strokeWidth="2" />
                      <rect x="34" y="36" width="52" height="32" rx="2" fill="#2B7DE9" opacity="0.05" />
                      {/* コード風テキスト */}
                      <rect x="40" y="42" width="20" height="3" rx="1" fill="#2B7DE9" opacity="0.3" />
                      <rect x="44" y="49" width="28" height="3" rx="1" fill="#5BA3F5" opacity="0.3" />
                      <rect x="40" y="56" width="16" height="3" rx="1" fill="#2B7DE9" opacity="0.2" />
                      {/* PC台座 */}
                      <rect x="50" y="74" width="20" height="4" rx="1" fill="#2B7DE9" opacity="0.3" />
                      <rect x="44" y="78" width="32" height="3" rx="1" fill="#2B7DE9" opacity="0.2" />
                      {/* ？マーク */}
                      <circle cx="96" cy="24" r="14" fill="#EBF3FE" stroke="#2B7DE9" strokeWidth="1.5" />
                      <text x="96" y="30" textAnchor="middle" fill="#2B7DE9" fontSize="18" fontWeight="bold" fontFamily="Josefin Sans">?</text>
                      {/* 人物（小さく） */}
                      <circle cx="24" cy="100" r="8" fill="#2B7DE9" opacity="0.15" stroke="#2B7DE9" strokeWidth="1.5" />
                      <path d="M14 118 C14 108 18 104 24 104 C30 104 34 108 34 118" fill="#2B7DE9" opacity="0.1" stroke="#2B7DE9" strokeWidth="1.5" />
                    </svg>
                  ),
                },
                {
                  text: "事業展開をもっと早くできれば…",
                  label: "スピード不足",
                  icon: (
                    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                      {/* スピードメーター（半円） */}
                      <path d="M24 80 A42 42 0 0 1 96 80" fill="none" stroke="#2B7DE9" strokeWidth="2.5" opacity="0.2" />
                      <path d="M24 80 A42 42 0 0 1 60 38" fill="none" stroke="#2B7DE9" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
                      {/* 針（遅い方向） */}
                      <line x1="60" y1="80" x2="42" y2="50" stroke="#2B7DE9" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="60" cy="80" r="4" fill="#2B7DE9" />
                      {/* 目盛り */}
                      <line x1="28" y1="78" x2="28" y2="72" stroke="#2B7DE9" strokeWidth="1.5" opacity="0.3" />
                      <line x1="36" y1="58" x2="40" y2="62" stroke="#2B7DE9" strokeWidth="1.5" opacity="0.3" />
                      <line x1="60" y1="40" x2="60" y2="46" stroke="#2B7DE9" strokeWidth="1.5" opacity="0.3" />
                      <line x1="84" y1="58" x2="80" y2="62" stroke="#2B7DE9" strokeWidth="1.5" opacity="0.3" />
                      <line x1="92" y1="78" x2="92" y2="72" stroke="#2B7DE9" strokeWidth="1.5" opacity="0.3" />
                      {/* SLOW / FAST */}
                      <text x="30" y="94" fill="#2B7DE9" fontSize="8" fontFamily="Josefin Sans" opacity="0.5">SLOW</text>
                      <text x="78" y="94" fill="#2B7DE9" fontSize="8" fontFamily="Josefin Sans" opacity="0.5">FAST</text>
                      {/* 右上に矢印（加速したい） */}
                      <path d="M88 28 L100 20 L98 30" stroke="#5BA3F5" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M80 36 L100 20" stroke="#5BA3F5" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 上部アクセントライン */}
                  <div className="h-1 bg-gradient-to-r from-[var(--blue-main)] to-[var(--blue-light)]" />

                  <div className="p-8 text-center">
                    {/* インフォグラフィックアイコン */}
                    <div className="w-28 h-28 mx-auto mb-5">
                      {item.icon}
                    </div>

                    {/* ラベル */}
                    <span className="inline-block px-4 py-1 rounded-full bg-[var(--blue-pale)] text-[var(--blue-main)] text-xs font-bold tracking-wider mb-4">
                      {item.label}
                    </span>

                    {/* テキスト */}
                    <p className="text-sm md:text-base font-medium text-[var(--dark)] leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* 番号 */}
                  <span className="absolute top-4 right-4 font-en text-3xl font-bold text-[var(--blue-main)] opacity-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* 矢印インジケーター */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-10">
              <div className="flex flex-col items-center gap-1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M12 14 L20 26 L28 14" stroke="#2B7DE9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-en text-xs tracking-widest text-[var(--blue-main)] opacity-60">SOLUTION</span>
              </div>
            </motion.div>

            {/* 解決メッセージ */}
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl">
                {/* 背景 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-main)] to-[var(--blue-light)]">
                  <img
                    src="/problem-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                {/* 装飾 */}
                <div className="absolute top-[-20px] right-[-20px] w-[120px] h-[120px]">
                  <svg viewBox="0 0 120 120" fill="none"><polygon points="120,0 120,120 0,0" fill="rgba(255,255,255,0.08)" /></svg>
                </div>
                <div className="absolute bottom-[-10px] left-[-10px] w-[80px] h-[80px]">
                  <svg viewBox="0 0 80 80" fill="none"><polygon points="0,80 0,0 80,80" fill="rgba(255,255,255,0.06)" /></svg>
                </div>

                <div className="relative z-10 p-10 md:p-14 text-white space-y-6 text-sm md:text-base leading-[2]">
                  <p>
                    この悩みは、人材のITリテラシーの底上げを実現し、事業に使用すべきツールを厳選、それらをまとめてリードかつ推し進める人材がいることで解決することができます。
                  </p>
                  <p>
                    ただ、「優れたツール」を外部の人間にスポットで「構築・レクチャー」してもらうだけでは、その場しのぎに過ぎません。
                  </p>
                  <div className="border-t border-white/20 pt-6 mt-2 space-y-4">
                    <p className="font-bold text-base md:text-lg leading-[2]">
                      弊社では多くの中小企業の経営者が抱える、
                    </p>
                    <ul className="space-y-3 text-sm md:text-base leading-[2]">
                      <li className="flex gap-3 items-start">
                        <span className="text-white/60 mt-1 flex-shrink-0">●</span>
                        「言語化できないイメージ通りに事業が進まない」
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-white/60 mt-1 flex-shrink-0">●</span>
                        「システムやAI導入をしたけど、社員が積極的に使ってくれず、無駄なコストを支払ったと思ってしまっている」
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-white/60 mt-1 flex-shrink-0">●</span>
                        「結局うちはITに強い人間がいないから何も進まない」
                      </li>
                    </ul>
                    <p className="font-bold text-base md:text-lg leading-[2]">
                      こんな悩みを私たちは解決するために支援をしています。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          サービス概要 - 参考サイトの COMPANY 風
          フル幅フォトブロック + カード
          ========================================== */}
      <section className="section-block section-block--white relative !py-0">
        {/* 装飾 */}
        <TriangleLarge className="top-[-3rem] right-[2%]" opacity={0.06} />
        <DotPattern className="top-4 left-[2%]" opacity={0.1} rows={3} cols={6} />

        {/* フル幅フォトブロック（COMPANY風） */}
        <div className="photo-block min-h-[450px] md:min-h-[500px]">
          <div className="photo-block__overlay bg-gradient-to-r from-[var(--blue-main)] to-[var(--blue-light)]">
            <img
              src="/service-bg.jpg"
              alt="サービス背景"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="photo-block__content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-en text-5xl md:text-7xl font-bold tracking-[0.15em] mb-2">
                <span className="text-white/80">S</span>ERVICES
              </h2>
              <p className="text-lg md:text-xl font-bold mb-8">主なサービス</p>
              <Link href="/services" className="btn-main text-sm !bg-[var(--dark)]">
                VIEW MORE
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 3つのサービスカード */}
        <div className="bg-gradient-blue py-20 relative">
          <CircleLine className="top-[-4rem] right-[5%]" opacity={0.06} />
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: Bot,
                  num: "01",
                  title: "システム・AIBOT開発",
                  description: "カスタムAIBOT構築、GAS連携による業務自動化。",
                  img: "/service01.jpg",
                },
                {
                  icon: Lightbulb,
                  num: "02",
                  title: "伴走型AIコンサルティング",
                  description: "経営の右腕として、定例打合せからシステム開発まで。",
                  img: "/service02.jpg",
                },
                {
                  icon: Users,
                  num: "03",
                  title: "障害者AI人材育成",
                  description: "障害者へのAI教育と企業の法定雇用率達成を支援。",
                  img: "/service03.jpg",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-none card-elevated bg-white overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-[var(--blue-pale)] to-[var(--blue-pale2)] overflow-hidden relative">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><div class="text-center"><div class="w-16 h-16 rounded-full bg-[var(--blue-pale)] flex items-center justify-center mx-auto mb-2"><span class="number-accent text-2xl font-bold">${service.num}</span></div><p class="text-xs text-muted-foreground font-en tracking-widest">SERVICE ${service.num}</p></div></div>`;
                        }}
                      />
                      {/* カード番号オーバーレイ */}
                      <span className="absolute top-4 left-4 font-en text-4xl font-bold text-white/30">
                        {service.num}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          選ばれる3つの理由 - 左右交互レイアウト
          ========================================== */}
      <section className="section-block section-block--white relative">
        <div className="absolute top-0 right-[-17%] z-0 w-[60%] h-full bg-[var(--blue-pale2)] transform skew-x-[-28deg]" />
        <TriangleDots className="top-[-2rem] right-[-3rem]" opacity={0.04} />
        <DotPattern className="top-20 left-[3%]" opacity={0.1} rows={5} cols={6} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <SectionTitle text="STRENGTHS" />
              <span className="section-ttl-sub font-bold">選ばれる3つの理由</span>
            </motion.div>

            <div className="space-y-20">
              {[
                {
                  num: "01",
                  title: "70社超の多様な業界経験で\n0からの説明が要らない",
                  description:
                    "多業種対応の経験があるため、業界説明が不要。伴走型で事業理解が深まるから、何度も同じ説明をしなくていい。気軽に質問しやすい関係性を築きます。",
                  img: "/strength01.jpg",
                },
                {
                  num: "02",
                  title: "曖昧なモヤモヤを\n言語化する力",
                  description:
                    "50以上の業種でのGPTs構築経験から培った「業務を言語化する力」。経営者が「うまく言えないけど、なんか違う」と感じていることを形にできます。",
                  img: "/strength02.jpg",
                },
                {
                  num: "03",
                  title: "導入で終わらない\nかかりつけ医としての伴走",
                  description:
                    "スポット支援との明確な違い：定着・進化まで一緒に歩む。AIの進化に合わせて常にアップデートし、お客様と共に成長し続けます。",
                  img: "/strength03.jpg",
                },
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`grid md:grid-cols-2 gap-12 items-center`}
                >
                  {/* 写真（偶数:左、奇数:右） */}
                  <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden shadow-lg bg-gradient-to-br from-[var(--blue-pale)] to-white">
                      <img
                        src={strength.img}
                        alt={strength.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="number-accent text-7xl font-bold">${strength.num}</span></div>`;
                        }}
                      />
                    </div>
                    {/* 写真下の番号バー（参考サイト風） */}
                    <div className="absolute -bottom-4 left-8 bg-[var(--dark)] text-white font-en text-sm px-6 py-2 tracking-widest">
                      STRENGTH {strength.num}
                    </div>
                  </div>
                  {/* テキスト */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""} pt-4`}>
                    <span className="font-en text-6xl font-bold text-[var(--blue-main)] opacity-20 block leading-none mb-2">{strength.num}</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-5 whitespace-pre-line leading-relaxed">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-[2]">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          NUMBERS - フル幅フォトブロック（参考サイト準拠）
          ========================================== */}
      <section className="section-block relative !py-0">
        <div className="photo-block min-h-[500px] md:min-h-[600px]">
          <div className="photo-block__overlay bg-gradient-to-r from-[var(--blue-main)] to-[var(--blue-light)]">
            <img
              src="/numbers-bg.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="photo-block__content w-full px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="mb-14 text-center">
                <h2 className="font-en text-5xl md:text-7xl font-bold tracking-[0.15em] text-white mb-2">
                  <span className="text-white/70">N</span>UMBERS
                </h2>
                <span className="text-white text-lg font-bold">数字で見る実績</span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
                {[
                  { number: "70+", label: "コンサルティング実績", sub: "法人・個人含む" },
                  { number: "50+", label: "カスタムAIBOT構築数", sub: "" },
                  { number: "100+", label: "AIセミナー受講者数", sub: "オンラインセミナー登壇" },
                ].map((stat, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <p className="font-en text-6xl md:text-7xl font-bold text-white mb-2">{stat.number}</p>
                    <p className="text-base font-bold text-white/90 mb-1">{stat.label}</p>
                    {stat.sub && <p className="text-xs text-white/60">{stat.sub}</p>}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="text-center mt-12">
                <Link href="/case-studies" className="btn-main text-sm !bg-[var(--dark)]">
                  VIEW MORE
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2カラムリンクセクション（WORKS / OFFICE 風）
          ========================================== */}
      <section className="section-block section-block--white relative !pb-0">
        <TriangleLarge className="top-[-3rem] right-[3%]" opacity={0.06} />
        <DotPattern className="top-4 left-[5%]" opacity={0.08} rows={3} cols={5} />

        <div className="container relative z-10 mb-16">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {/* BOOK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="mb-4">
                <h2 className="section-ttl-en">
                  <span className="accent-letter">B</span>OOK
                </h2>
                <span className="text-base tracking-wider ml-4">書籍出版</span>
              </div>
              <div className="relative group overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--blue-pale)] to-[var(--blue-pale2)]">
                  <img
                    src="/book-cover.png"
                    alt="GPTs構築の教科書"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-8"
                  />
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://amzn.asia/d/elDjFDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line"
                >
                  VIEW MORE
                </a>
              </div>
            </motion.div>

            {/* VOICE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="mb-4">
                <h2 className="section-ttl-en">
                  <span className="accent-letter">V</span>OICE
                </h2>
                <span className="text-base tracking-wider ml-4">お客様の声</span>
              </div>
              <div className="relative group overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--blue-main)]/10 to-[var(--blue-light)]/10">
                  <img
                    src="/voice-bg.jpg"
                    alt="お客様の声"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, var(--blue-pale) 0%, var(--blue-pale2) 100%)';
                    }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Link href="/voice" className="btn-line">
                  VIEW MORE
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CTAセクション - グラデーション帯（参考サイトのフッター上部風）
          ========================================== */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7BC4FF 0%, #2B7DE9 50%, #1a5cb8 100%)" }}
      >
        <TriangleLarge className="top-[-2rem] right-[5%]" color="rgba(255,255,255,0.1)" opacity={1} />
        <TriangleLarge className="bottom-[-2rem] left-[3%]" color="rgba(255,255,255,0.06)" opacity={1} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="font-en text-4xl md:text-5xl font-bold tracking-[0.15em] text-white mb-2">
              <span className="text-white/70">C</span>ONTACT
            </h2>
            <p className="text-lg text-white/80 mb-10">
              まずはお気軽にご相談ください
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href={LARK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main text-sm !bg-[var(--dark)]"
              >
                CONTACT
                <ArrowRight size={16} />
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 py-5 text-base font-semibold tracking-widest text-white border-2 border-white hover:bg-white hover:text-[var(--dark)] transition-all font-en">
                資料請求
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
