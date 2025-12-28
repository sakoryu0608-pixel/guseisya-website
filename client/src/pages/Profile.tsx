import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowRight, BookOpen, Briefcase, Calendar, ChevronRight, GraduationCap, Heart, Lightbulb, Target } from "lucide-react";
import { Link } from "wouter";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            プロフィール
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            代表挨拶と経歴
          </p>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-64 h-64 rounded-full bg-muted flex items-center justify-center overflow-hidden mb-6 shadow-xl border-4 border-white">
                <img
                  src="/profile.png"
                  alt="迫口竜士"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">迫口 竜士</h2>
              <p className="text-muted-foreground mb-4">代表取締役</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>080-2724-9394</p>
                <p>sakoryu0608@gmail.com</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl font-bold mb-8 border-b pb-4 inline-block">代表挨拶</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  株式会社偶成舎の代表を務めております、迫口竜士と申します。
                </p>
                <p>
                  私は元々、3年ほどSNS運用代行を行なっていました。ChatGPTが世に公開された2022年11月以来、毎日ChatGPTを使用し続けています。AIに関する勉強を開始したのは約2年前（2022年12月ごろ）で、それ以前はAIについて全くの素人でした。
                </p>
                <p>
                  現在は、GPTs構築（カスタムChatGPT）を提供しており、法人へのAI導入やGPTs納品を行なっています。GASシステム構築受注もあります。また、AI導入支援、クライアントの業務の言語化などをサポートしています。
                </p>
                <p>
                  toC向けのサービスも展開しており、GPTsの構築方法やAIを活用した業務効率化、コンサルなども行なっています。プロンプトに対する出力パターンを感覚的に把握しており、理想の回答を出力させるために合計で5000回以上のトライアンドエラーを実施した経験があります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">経歴と専門分野</h2>
          
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
                  <span className="text-primary font-bold text-lg">SNS運用時代</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold mb-2">SNS運用からAIコンサルへ</h3>
                  <p className="text-muted-foreground">
                    約3年間のSNS運用代行の経験を経て、2022年11月のChatGPT公開を機にAI分野へ転身。それ以前はAIの知識がゼロでしたが、毎日の実践を通じて専門性を構築しました。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
                  <span className="text-primary font-bold text-lg">AI専門家として</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold mb-2">GPTs構築の専門家</h3>
                  <p className="text-muted-foreground">
                    50以上のGPTs構築実績を持ち、依頼者様専用のGPTs構築（カスタムChatGPT）を提供。ルーティンとなっているクライアントワーク業務や事務的なルーティン業務を代行する専門のGPTsを構築し、質の担保と作業時短を実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
                  <span className="text-primary font-bold text-lg">現在</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold mb-2">幅広い支援実績</h3>
                  <p className="text-muted-foreground">
                    法人へのAI導入支援、クライアントの業務の言語化などをサポート。toC向けサービスも展開しており、GPTsの構築方法やAIを活用した業務効率化、コンサルなども行なっています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission/Value Section - Blue Sky Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 to-blue-400">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Mission */}
            <div className="md:pl-12 border-l-4 border-white/30 pl-6 mb-8 md:mb-0">
              <div className="flex items-baseline mb-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mr-4">MISSION</h2>
                <span className="text-white/80 text-sm tracking-widest">私たちの使命</span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                私たちは、未だ光の当てられていない社会課題に果敢に挑み、<br className="hidden md:block" />
                革新的な解決アクションを実行することで、誰もが希望を持てる社会の実現に貢献します。
              </p>
            </div>

            {/* Vision */}
            <div className="md:pl-12 border-l-4 border-white/30 pl-6 mb-8 md:mb-0">
              <div className="flex items-baseline mb-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mr-4">VISION</h2>
                <span className="text-white/80 text-sm tracking-widest">私たちの目指す未来</span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                社会の「頂」を目指し、あらゆる課題が解決され、<br className="hidden md:block" />
                全ての人がその可能性を最大限に発揮できる、持続可能で希望に満ちた未来を創造する。
              </p>
            </div>

            {/* Value & Slogan Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-4">
                  <BookOpen className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">VALUE</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  言えない「不」に寄り添う永遠の相方。<br />
                  絶えず改善し続ける、変化に適応し柔軟な思考と行動を促進する。
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-4">
                  <Lightbulb className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">SLOGAN</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  デジタルの困った解決します！
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            書籍出版
          </h2>
          <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  2025年4月出版
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  『GPTs構築の教科書』
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  GPTsを基礎から応用までステップ形式で学べる内容です。業務を全てGPTs化し、セルフブラック企業を1ヶ月で卒業した実践的ノウハウを凝縮。
                </p>
                <a
                  href="https://amzn.asia/d/elDjFDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full md:w-auto">
                    Amazonで詳細を見る
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </a>
              </div>
              <div className="bg-muted h-64 md:h-auto flex items-center justify-center p-8">
                <img
                  src="/book-cover.png"
                  alt="GPTs構築の教科書"
                  className="max-h-full max-w-full object-contain shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に「働楽」を実現しませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            まずは無料相談でお話しましょう
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg">
              無料相談を申し込む
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
