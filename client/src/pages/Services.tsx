import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowRight, Bot, Brain, CheckCircle, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            サービス内容
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            貴社の課題に合わせた最適なソリューションをご提供します
          </p>
        </div>
      </section>

      {/* Service 1: System Development */}
      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: "url(/service-ai.jpg)" }}
              />
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                    <Bot size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">小規模システム・AIBOT開発</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">こんな課題をお持ちの方に</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <span>現在行なっている業務をシステム化したい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <span>AIに仕事を任せたい</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">サービス内容</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span>GASでスプレッドシート作業をワンクリックで半自動化</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span>AIBOT開発によりコンテンツ作成を半自動化（特有業務・SNSコンテンツ作成・記事作成など）</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">ご契約の流れ</h3>
                    <div className="flex flex-wrap gap-2">
                      {["ご相談受付", "ヒアリング", "お見積もり", "契約", "開発", "納品"].map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                            {step}
                          </span>
                          {index < 5 && <ArrowRight className="mx-2 text-muted-foreground" size={16} />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">料金プラン</h3>
                    <p className="text-muted-foreground">
                      ヒアリングさせていただいた内容からお見積りを作成し、ご提出させていただきます。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">契約形態</h3>
                    <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium">
                      単発依頼
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service 2: Training Program */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                    <GraduationCap size={32} />
                  </div>
                  <h2 className="text-3xl font-bold">生成AIコンサル養成講座</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">こんな課題をお持ちの方に</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <span>経営者またはNo.2がAI活用をマスターしたい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <span>事業にAIを取り入れたい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <span>社員にAIを学ばせたい</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">サービス内容</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>AIグループコンサル:</strong> 毎週60分</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>個別コンサル:</strong> 月2回（60分）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>チャットサポート:</strong> 契約期間中</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>AI学習教材:</strong> 動画9時間分＋プロンプト</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">参加条件</h3>
                    <p className="text-muted-foreground">
                      同時に2人まで参加可能（経営者とNo.2メンバー）
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">ご契約の流れ</h3>
                    <div className="flex flex-wrap gap-2">
                      {["ご相談受付", "ヒアリング＋講座説明会", "契約", "オリエンテーション"].map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className="px-3 py-1 bg-background rounded-full text-sm font-medium">
                            {step}
                          </span>
                          {index < 3 && <ArrowRight className="mx-2 text-muted-foreground" size={16} />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">料金プラン</h3>
                    <p className="text-muted-foreground">
                      お客様の状況に合わせた最適なプランをご提案いたします。まずはお気軽にご相談ください。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">契約形態</h3>
                    <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium">
                      単発依頼
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="h-64 md:h-auto bg-cover bg-center order-1 md:order-2"
                style={{ backgroundImage: "url(/service-education.jpg)" }}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            その他のサービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-3 text-primary" size={24} />
                  業務効率化コンサルティング
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  現状の業務フローを分析し、AI・DXツールを活用した効率化をご提案します。
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>契約形態:</strong> 単発コンサルティング / 月額顧問契約</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-3 text-primary" size={24} />
                  新規事業創出支援
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  生成AIを活用した新規事業のアイデア創出から実行までをサポートします。
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>契約形態:</strong> プロジェクト型支援</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-3 text-primary" size={24} />
                  AI人材育成研修
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  企業向けのAI活用研修プログラムをカスタマイズしてご提供します。
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>契約形態:</strong> 単発依頼 / 継続研修</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            サービスについてもっと詳しく知りたい方へ
          </h2>
          <p className="text-xl mb-8 opacity-90">
            無料相談で貴社に最適なプランをご提案いたします
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
