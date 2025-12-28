import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { BookOpen, Heart, Lightbulb, Target } from "lucide-react";
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

      {/* Profile Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="迫口竜士"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">迫口 竜士</h2>
                  <p className="text-muted-foreground mb-4">
                    代表取締役
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>電話:</strong> 080-2724-9394
                    </p>
                    <p>
                      <strong>メール:</strong> sakoryu0608@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">代表挨拶</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    株式会社偶成舎の代表を務めております、迫口竜士と申します。
                  </p>
                  <p>
                    私は元々、3年ほどSNS運用代行を行なっていました。ChatGPTが世に公開された2022年11月以来、毎日Chat
                    GPTを使用し続けています。AIに関する勉強を開始したのは約2年前（2022年12月ごろ）で、それ以前はAIについて全くの素人でした。
                  </p>
                  <p>
                    現在は、GPTs構築（カスタムChat GPT）を提供しており、法人へのAI導入やGPTs納品を行なっています。GASシステム構築受注もあります。また、AI導入支援、クライアントの業務の言語化などをサポートしています。
                  </p>
                  <p>
                    toC向けのサービスも展開しており、GPTsの構築方法やAIを活用した業務効率化、コンサルなども行なっています。プロンプトに対する出力パターンを感覚的に把握しており、理想の回答を出力させるために合計で5000回以上のトライアンドエラーを実施した経験があります。
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">経歴と専門分野</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">SNS運用からAIコンサルへ</h4>
                      <p className="text-muted-foreground">
                        約3年間のSNS運用代行の経験を経て、2022年11月のChatGPT公開を機にAI分野へ転身。それ以前はAIの知識がゼロでしたが、毎日の実践を通じて専門性を構築しました。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">GPTs構築の専門家</h4>
                      <p className="text-muted-foreground">
                        50以上のGPTs構築実績を持ち、依頼者様専用のGPTs構築（カスタムChat
                        GPT）を提供。ルーティンとなっているクライアントワーク業務や事務的なルーティン業務を代行する専門のGPTsを構築し、質の担保と作業時短を実現します。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">幅広い支援実績</h4>
                      <p className="text-muted-foreground">
                        法人へのAI導入支援、クライアントの業務の言語化などをサポート。toC向けサービスも展開しており、GPTsの構築方法やAIを活用した業務効率化、コンサルなども行なっています。
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">得意分野・スキル</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">得意な業界</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>飲食店</li>
                        <li>士業（行政書士など）</li>
                        <li>観光業</li>
                        <li>コーチング業</li>
                        <li>SNSコンサル</li>
                        <li>教育関連</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">得意な業務</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>マーケティング</li>
                        <li>業務効率化</li>
                        <li>コンテンツ作成</li>
                        <li>システム開発</li>
                        <li>人材育成</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">使えるツール</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>GPT-4 / Claude</li>
                        <li>Midjourney</li>
                        <li>GAS（Google Apps Script）</li>
                        <li>Lark</li>
                        <li>LINE構築（Lステップ）</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">強み</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>5000回以上のトライアンドエラー経験</li>
                        <li>業務の言語化力</li>
                        <li>幅広い業種への対応力</li>
                        <li>伴走型サポート</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission/Value Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Vision / Mission / Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Vision（実現したい未来）</h3>
                </div>
                <p className="text-lg">
                  仕事の無駄をなくし、「働く」を「働楽」にすること。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Slogan（ブランドの合言葉）</h3>
                </div>
                <p className="text-lg">デジタルの困った解決します！</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Mission（企業の存在意義）</h3>
                </div>
                <p className="text-lg">顧客の"やりたい"を共に創ること。</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Value（約束する価値）</h3>
                </div>
                <p className="text-lg">
                  言えない「不」に寄り添う永遠の相方。絶えず改善し続ける、変化に適応し柔軟な思考と行動を促進する。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            書籍出版
          </h2>
          <Card className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
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
                  <Button>Amazonで詳細を見る</Button>
                </a>
              </div>
              <div className="bg-muted h-64 md:h-full flex items-center justify-center overflow-hidden">
                <img
                  src="/book-cover.png"
                  alt="GPTs構築の教科書"
                  className="w-full h-full object-contain p-4"
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
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
