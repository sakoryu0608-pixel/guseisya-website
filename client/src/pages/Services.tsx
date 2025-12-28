import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowRight, Bot, CheckCircle, GraduationCap, Users } from "lucide-react";
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
                style={{ backgroundImage: "url(/service-dev-new.png)" }}
              />
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                    <Bot size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">小規模システム・AIBOT開発</h2>
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
                  <h2 className="text-2xl md:text-3xl font-bold">生成AIコンサルタント養成講座</h2>
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
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>AIコミュニティ:</strong> 経営者メイン</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <span><strong>追加オプション:</strong> 貴社専用の社員向けオーダーメイド研修も可能</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">参加条件</h3>
                    <p className="text-muted-foreground">
                      同じ組織で2人以上の参加可能（例：経営者とNo.2スタッフ）<br />
                      <span className="text-sm text-accent font-bold">※価格割引あり</span>
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
                    <p className="text-2xl font-bold text-primary">
                      22万円〜
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ※同じ組織からの参加人数によって変動
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
                style={{ backgroundImage: "url(/service-education-new.png)" }}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Service 3: Subscription AI Advisor */}
      <section className="py-20">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: "url(/consultation.jpg)" }}
              />
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                    <Users size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">経営の「右腕」として、AIと業務設計を実装する。<br className="md:hidden" />サブスク型AI顧問</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">こんな課題をお持ちの方に</h3>
                    <p className="text-muted-foreground mb-4">
                      AIツールの導入だけでなく、経営課題の整理や業務フローの根本的な見直しを求めている経営者様に最適です。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">経営の相談相手が欲しい</span>
                          <span className="text-sm text-muted-foreground">新しいアイデアや経営の悩みを言語化したいが、社内には相談できる相手がいない。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">AIを事業に実装したいが、何から手をつけるべきかわからない</span>
                          <span className="text-sm text-muted-foreground">単なるツール導入ではなく、自社のビジネスモデルに合ったAI活用法を知りたい。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-accent flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">現場の業務フローが属人化しており、整理したい</span>
                          <span className="text-sm text-muted-foreground">AIを入れる前に、まずは業務設計（BPR）を行い、組織の生産性を底上げしたい。</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">サービス内容</h3>
                    <p className="text-muted-foreground mb-4">
                      単発のコンサルティングではなく、月額定額制で長期的に伴走し、貴社の課題の言語化や業務設計サポートを行う、さらに社員に相談できない経営者の壁打ち相手という。内部から企業を変革するパートナーのような立ち位置で支援します。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">言語化サポート（壁打ち）</span>
                          <span className="text-sm text-muted-foreground">2回の定例ミーティングを通じ、経営者や社員の頭の中にある構想をヒアリング。最善の具体策や案の提案、内容のまとめ、昇華などを行います。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">業務設計・事業プロセス構築</span>
                          <span className="text-sm text-muted-foreground">現状の業務フローを可視化・整理し、どこにAIを導入すれば効果が出るかを設計。企業の特徴に最適な無理のない業務DXを推進します。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">AI活用アドバイザリー</span>
                          <span className="text-sm text-muted-foreground">最新のAIトレンドから貴社に役立つツールを選定・提案。具体的なプロンプト作成や運用ルールの策定も支援します。<br />月に一回AI活用定着のための研修を行います。</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 text-primary flex-shrink-0" size={20} />
                        <div>
                          <span className="font-bold block">チャット相談サポート（随時）</span>
                          <span className="text-sm text-muted-foreground">日々の業務で生じた疑問や、急ぎの判断が必要な事項について、チャットツールでいつでも相談可能です。</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">参加条件</h3>
                    <p className="text-muted-foreground">
                      特になし
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">ご契約の流れ</h3>
                    <div className="flex flex-wrap gap-2">
                      {["相談受付", "ヒアリング（状況確認）", "年間ロードマップ作成", "契約"].map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                            {step}
                          </span>
                          {index < 3 && <ArrowRight className="mx-2 text-muted-foreground" size={16} />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">料金プラン</h3>
                    <p className="text-2xl font-bold text-primary">
                      10万円<span className="text-sm font-normal text-muted-foreground"> / 月</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ※社員20名以上場合は金額変動
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">契約形態</h3>
                    <div className="bg-secondary p-4 rounded-md">
                      <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium mb-2">
                        月額定額制
                      </span>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>※ 最低契約期間：3ヶ月〜（組織内部との関係構築を行い、中長期的な成果を目指すため）</li>
                        <li>※ 3ヶ月目以降は1ヶ月目に解約のお申し出をいただくことで、解約可能</li>
                        <li>※ 契約解除後も再契約可能</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
