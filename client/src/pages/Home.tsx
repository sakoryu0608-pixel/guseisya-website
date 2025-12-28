import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import InstagramEmbed from "@/components/InstagramEmbed";
import { ArrowRight, BookOpen, Brain, Lightbulb, Sparkles, Target, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/hero-new.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow">
              経営者のための<br />
              生成AIコンサルタント
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 text-shadow">
              あなたの会社のポテンシャルを最大化
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" variant="secondary" className="text-lg">
                  サービスを見る
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  無料相談はこちら
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            こんなお悩みありませんか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "社員の仕事をもっと楽にしてあげられないか…",
              "うちにもITに強い人材がいてくれれば…",
              "事業展開をもっと早くできれば…",
            ].map((problem, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-center">{problem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              この悩みは、人材のITリテラシーの底上げを実現し、事業に使用すべきツールを厳選、それらをまとめてリードかつ推し進める人材がいることで解決することができます。
            </p>
            <p>
              ただ、「優れたツール」を外部の人間にスポットで「構築・レクチャー」してもらうだけでは、その場しのぎに過ぎません。
            </p>
            <p className="font-semibold text-primary">
              弊社では多くの中小企業の経営者が抱える、「言語化はできないが、イメージ通りに事業が進まない日々のモヤモヤ」を解決するために支援をしています。
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            選ばれる3つの理由
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            なぜ多くの経営者に選ばれているのか
          </p>

          <div className="space-y-12">
            <Card className="overflow-hidden card-elevated">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">
                      圧倒的な「課題解決の即応力」
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    ChatGPTが公開されて以来、毎日AIに触れ、5000回以上のトライアンドエラーを重ねてきたからこそ、机上の空論ではない「生きたノウハウ」があります。お客様の曖昧な悩みや要望をヒアリングするだけで、豊富な引き出しの中から「その課題には、このAI活用法が最適です」と即座に具体的な解決策を提示し、その場で形にすることが可能です。
                  </p>
                </div>
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: "url(/service-ai.jpg)" }}
                />
              </div>
            </Card>

            <Card className="overflow-hidden card-elevated">
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className="h-64 md:h-auto bg-cover bg-center order-2 md:order-1"
                  style={{ backgroundImage: "url(/consultation.jpg)" }}
                />
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                      <Target size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">
                      業種・業界を問わない「業務の言語化」と「オーダーメイドの仕組み構築力」
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    飲食店から士業、観光業まで、50以上のGPTs構築と多岐にわたる業種へのAI導入支援で培った「業務を言語化する力」が最大の強みです。専門的な業務内容であっても、ヒアリングを通じて本質的な課題や効率化のポイントを的確に抽出します。
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden card-elevated">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mr-4">
                      <Users size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">
                      ツール導入で終わらない、「働く」を「働楽」に変えるための「伴走力」
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    私たちのゴールは、単にAIやDXツールを導入することではありません。Visionとして掲げる「『働く』を『働楽』に」を実現するため、お客様の言えない「不（不満・不安・不便）」にまで寄り添う"永遠の相方"でありたいと考えています。
                  </p>
                </div>
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: "url(/success-story.jpg)" }}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            主なサービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                  <Brain size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">小規模システム・AIBOT開発</h3>
                <p className="text-muted-foreground mb-6">
                  GASでスプレッドシート作業をワンクリックで半自動化。AIBOT開発によりコンテンツ作成を半自動化。
                </p>
                <Link href="/services">
                  <Button variant="outline">
                    詳しく見る
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">生成AIコンサルタント養成講座</h3>
                <p className="text-muted-foreground mb-6">
                  経営者またはNo.2がAI活用をマスター。AIグループコンサル、個別コンサル、チャットサポート付き。
                </p>
                <Link href="/services">
                  <Button variant="outline">
                    詳しく見る
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-elevated md:col-span-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">サブスク型AI顧問</h3>
                <p className="text-muted-foreground mb-6">
                  AIはもちろんのこと、その他の「業務設計サポート・事業相談・経営者の言語化サポート」など幅広く伴奏型で長期的にご支援させていただきます。
                </p>
                <Link href="/services">
                  <Button variant="outline">
                    詳しく見る
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <BookOpen size={32} className="text-accent mr-4" />
                  <h2 className="text-3xl font-bold">書籍出版</h2>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  『GPTs構築の教科書』
                </h3>
                <p className="text-muted-foreground mb-6">
                  2025年4月出版。GPTsを基礎から応用までステップ形式で学べる内容です。業務を全てGPTs化し、セルフブラック企業を1ヶ月で卒業した実践的ノウハウを凝縮。
                </p>
                <a
                  href="https://amzn.asia/d/elDjFDJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    Amazonで見る
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </a>
              </div>
              <div className="bg-muted h-64 md:h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="/book-cover.png"
                  alt="GPTs構築の教科書"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramEmbed />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            お気軽にお問い合わせください。3営業日以内にご返信いたします。
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
