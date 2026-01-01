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
                <h3 className="text-2xl font-bold text-foreground mb-4">「働く」を、「働楽」へ。</h3>
                <p className="font-medium text-foreground">
                  あなたの「やりたい」を共に創る、永遠の相方として。
                </p>
                <p>
                  私たちのビジョンはシンプルです。それは、世の中から仕事の無駄をなくし、「働く」という時間を、心から楽しめる「働楽」に変えること。
                </p>
                <p>
                  日々の業務に追われ、本来やりたかった新しい挑戦や、お客様と向き合う時間が削られていく――。<br />
                  そんな経営者様やフリーランスの方々の葛藤を、私は痛いほど理解しています。
                </p>
                <p>
                  だからこそ、私たちは単にAIツールを導入するだけの会社ではありません。<br />
                  「デジタルの困った」を解決し、皆様が本来注力すべき創造的な時間を生み出すことを使命としています。
                </p>
                <p>
                  私たちのミッションは、顧客の“やりたい”を共に創ること。<br />
                  「AIで何ができるか」ではなく、「あなたが何を成し遂げたいか」を出発点に、その想いを実現するための最適なルートを一緒に描き出します。
                </p>
                <p>
                  そのために、私たちは3つの価値をお約束します。
                </p>
                <ul className="space-y-4 pl-4 border-l-4 border-primary/20 my-6">
                  <li>
                    <strong className="block text-foreground text-lg mb-1">一つ目、言えない「不」に寄り添う永遠の相方であること</strong>
                    言葉にしづらい不安や不満、業務のボトルネックを汲み取り、解決策を提示します。
                  </li>
                  <li>
                    <strong className="block text-foreground text-lg mb-1">二つ目、絶えず改善し続けること</strong>
                    一度の成功に満足せず、常により良い方法を模索し続けます。
                  </li>
                  <li>
                    <strong className="block text-foreground text-lg mb-1">三つ目、変化に適応し、柔軟な思考と行動を促進すること</strong>
                    猛スピードで進化する技術に適応し、御社に最適な形で翻訳してご提供します。
                  </li>
                </ul>
                <p>
                  AIは冷たい技術ではなく、人の想いを形にするための温かいパートナーです。<br />
                  私たち偶成舎もまた、皆様のビジネスの隣で、泥臭く、誠実に、どこまでも伴走する「相方」でありたいと願っています。
                </p>
                <p>
                  皆様の「やりたい」を、ぜひ私たちに聞かせてください。<br />
                  「働く」が「働楽」に変わる瞬間を、共に創り上げていきましょう。
                </p>
                <p className="text-right font-bold mt-8">
                  株式会社偶成舎<br />
                  代表取締役　迫口 竜士
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
          
          <div className="space-y-16">
            {/* 経歴 */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="mr-3 text-primary" />
                経歴
              </h3>
              <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 space-y-12">
                <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                  <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4 md:text-right mb-2 md:mb-0 pl-4 md:pl-0">
                      <span className="text-primary font-bold text-lg">映像クリエイター</span>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-muted-foreground">
                        2年近く企業のPVや広告、SNS動画の編集を実施。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                  <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4 md:text-right mb-2 md:mb-0 pl-4 md:pl-0">
                      <span className="text-primary font-bold text-lg">SNS運用代行時代</span>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-muted-foreground">
                        約3年間にわたり、SNS運用代行事業に従事。飲食店、工務店、車ディーラーなど、実店舗や地域ビジネスに特化したInstagramやTikTokの運用、セミナー開催を行い、集客とブランディングを支援。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                  <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4 md:text-right mb-2 md:mb-0 pl-4 md:pl-0">
                      <span className="text-primary font-bold text-lg">AIコンサルタントへの転身</span>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-muted-foreground">
                        2022年11月のChatGPT公開を機に、AI分野へ注力。それまでAIに関しては素人であった経験を活かし、「初心者目線」での導入支援を強みとする。以来、毎日ChatGPTを使用し続け、AI導入支援やシステム開発を行っている。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 md:pl-0">
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                  <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4 md:text-right mb-2 md:mb-0 pl-4 md:pl-0">
                      <span className="text-primary font-bold text-lg">現在</span>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-muted-foreground">
                        株式会社偶成舎の代表として、中小企業から個人事業主まで業種問わず幅広いクライアントに対し、AI導入・DX支援・人材育成を展開。2025年4月には書籍『GPTs構築の教科書』を出版。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 専門分野 */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Target className="mr-3 text-primary" />
                専門分野
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3 text-primary">
                        <span className="font-bold">1</span>
                      </div>
                      <h4 className="text-lg font-bold">生成AI導入・システム開発支援</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">AIチャットボット構築:</strong> クライアントのルーティン業務や事務作業を代行する専用GPTsを構築。実績は50件以上にのぼる。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">プロンプトエンジニアリング:</strong> 5,000回以上の試行錯誤から得た知見に基づき、理想の回答を引き出すための最適な指示（プロンプト）設計を行う。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">GAS構築:</strong> SNS分析ツールや業務効率化システムの構築</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3 text-primary">
                        <span className="font-bold">2</span>
                      </div>
                      <h4 className="text-lg font-bold">業務DX・効率化コンサルティング</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">業務や課題、経営の「言語化」:</strong> クライアント自身も曖昧な業務課題をヒアリングで明確化し、やりたいことを言語化する。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">ツール導入・環境構築:</strong> AI導入にとどまらず、業務に必要なツールの導入、業務フロー全体を最適化する。</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3 text-primary">
                        <span className="font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-bold">AI人材育成・教育研修</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">企業研修・セミナー:</strong> 数名から数十名規模のAIセミナーを多数開催。専門用語を避けた「自分ごと」として学べる実践的な内容に定評がある。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong className="text-foreground">構築指導:</strong> 60名以上に対してAI活用や導入を指導し、AI人材の育成に貢献。</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3 text-primary">
                        <span className="font-bold">4</span>
                      </div>
                      <h4 className="text-lg font-bold">デジタルマーケティング知見</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>過去のSNS運用（Instagram, TikTok）で培った「魅せる」ノウハウと最新トレンドへのキャッチアップ能力を活かし、AIを活用したマーケティング戦略立案もサポート。</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission/Value Section - Blue Sky Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0">
          {/* Sky Image */}
          <div className="absolute inset-0 bg-[url('/vision-sky.jpg')] bg-cover bg-center"></div>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Vision */}
            <div className="md:pl-12 border-l-4 border-white/30 pl-6 mb-8 md:mb-0">
              <div className="flex items-baseline mb-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mr-4">VISION</h2>
                <span className="text-white/80 text-sm tracking-widest">実現したい未来</span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                仕事の無駄をなくし、「働く」を「働楽」にすること。
              </p>
            </div>

            {/* Slogan */}
            <div className="md:pl-12 border-l-4 border-white/30 pl-6 mb-8 md:mb-0">
              <div className="flex items-baseline mb-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider mr-4">SLOGAN</h2>
                <span className="text-white/80 text-sm tracking-widest">ブランドの合言葉</span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                デジタルの困った解決します！
              </p>
            </div>

            {/* Mission & Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-4">
                  <Target className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">MISSION</h3>
                  <span className="ml-2 text-sm text-white/70">企業の存在意義</span>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  顧客の“やりたい”を共に創ること。
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="flex items-center mb-4">
                  <BookOpen className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">VALUE</h3>
                  <span className="ml-2 text-sm text-white/70">約束する価値</span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  言えない「不」に寄り添う永遠の相方、<br />
                  絶えず改善し続ける、<br />
                  変化に適応し柔軟な思考と行動を促進する。
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
            まずはお気軽にお問い合わせください
          </p>
          <a
            href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="text-lg">
              お問い合わせはこちら
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
