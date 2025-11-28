import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Quote } from "lucide-react";

export default function CaseStudies() {
  const testimonials = [
    {
      name: "渡辺様",
      business: "学習塾経営",
      content:
        "質問以上に価値提供をしていただけました！実践的な内容で、すぐに活用できそうです。AIを使った業務効率化で、生徒一人ひとりに向き合う時間が大幅に増えました。",
    },
    {
      name: "田中様",
      business: "オンライン英会話スクール運営",
      content:
        "GPTsを活用したカリキュラム作成システムを導入していただき、講師の準備時間が半分以下になりました。その分、生徒とのコミュニケーションに時間を使えるようになり、満足度も向上しています。",
    },
    {
      name: "間様",
      business: "起業塾主宰",
      content:
        "受講生からの質問対応にAIBOTを導入したことで、24時間サポート体制が実現できました。迫口さんの伴走力のおかげで、導入後も安心して運用できています。",
    },
  ];

  const achievements = [
    {
      number: "50+",
      label: "GPTs構築実績",
      description: "様々な業種・業界でのGPTs構築経験",
    },
    {
      number: "5000+",
      label: "トライアンドエラー",
      description: "毎日AIに触れ続けた実践の積み重ね",
    },
    {
      number: "50+",
      label: "指導実績",
      description: "中小企業の社長や副業個人への指導経験",
    },
  ];

  const caseExamples = [
    {
      industry: "飲食店",
      challenge: "メニュー開発とSNS投稿の時間不足",
      solution: "GPTsによるメニュー提案システムとSNSコンテンツ自動生成",
      result: "業務時間を週10時間削減、SNSエンゲージメント2倍に向上",
    },
    {
      industry: "士業（行政書士）",
      challenge: "定型書類作成の効率化",
      solution: "GASとGPTsを組み合わせた書類自動生成システム",
      result: "書類作成時間を70%削減、顧客対応時間が増加",
    },
    {
      industry: "観光業",
      challenge: "多言語対応と問い合わせ対応の負担",
      solution: "多言語対応AIチャットボットとFAQシステム",
      result: "問い合わせ対応時間を60%削減、顧客満足度向上",
    },
    {
      industry: "toC向けサービス",
      challenge: "コンテンツ作成とマーケティング戦略立案",
      solution: "Lark構築とGPTsによる業務効率化とマーケティング支援",
      result: "コンテンツ制作スピード3倍、マーケティング施策の実行力向上",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            実績・導入事例
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            様々な業種・業界での支援実績をご紹介します
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            実績数値
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-4">
                    {achievement.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Examples Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            業種別導入事例
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            多岐にわたる業種での支援実績
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseExamples.map((example, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold mb-4">
                    {example.industry}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        課題
                      </h4>
                      <p>{example.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        ソリューション
                      </h4>
                      <p>{example.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        成果
                      </h4>
                      <p className="text-accent font-medium">{example.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            お客様の声
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            実際にサービスをご利用いただいたお客様からの声
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <Quote className="text-accent mb-4" size={40} />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Achievements */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            その他の実績
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">法人向けAI導入・DX支援</h3>
                <p className="text-muted-foreground">
                  上流工程からの言語化サポート、業務標準化のためのマニュアル作成、Lark構築、DXツールの選定〜導入による業務効率化支援、LINE構築（Lステップ正規代理店）、AI BOT構築、生成AI及びLarkの法人向け研修など
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">多様な業種への支援実績</h3>
                <p className="text-muted-foreground">
                  飲食店、士業、コーチング業、SNSコンサル、放課後デイサービス、インバウンド観光業、車部品販売、システム開発など、多岐にわたる企業を支援
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">セミナー・研修実績</h3>
                <p className="text-muted-foreground">
                  数名から数十名規模のAIセミナーを開催。元国会議員へのAIコンサル実施。中小企業の社長や副業している個人からのAI導入・活用相談に乗っています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
