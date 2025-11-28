import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // フォーム送信のロジック（実際の実装では、バックエンドAPIに送信する）
    console.log("Form submitted:", formData);
    
    toast.success("お問い合わせを受け付けました。3営業日以内にご返信いたします。");
    
    // フォームをリセット
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            お気軽にご相談ください。3営業日以内にご返信いたします。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">お問い合わせ先</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold mb-1">電話</p>
                        <p className="text-muted-foreground">080-2724-9394</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold mb-1">メール</p>
                        <p className="text-muted-foreground break-all">
                          sakoryu0608@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">営業時間</h3>
                  <p className="text-muted-foreground">
                    平日 9:00 - 18:00
                    <br />
                    （土日祝日は休業）
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    ※お問い合わせは24時間受け付けております。
                    <br />
                    ※3営業日以内にご返信いたします。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">無料相談実施中</h3>
                  <p className="text-sm">
                    初回のご相談は無料です。お客様の課題やご要望をお聞きし、最適なソリューションをご提案いたします。
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    お問い合わせフォーム
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          お名前 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="山田 太郎"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">会社名</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="株式会社〇〇"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          メールアドレス <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="example@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">電話番号</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="090-1234-5678"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        お問い合わせ内容 <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        placeholder="お問い合わせ内容をご記入ください"
                      />
                    </div>

                    <div className="bg-secondary p-4 rounded-md text-sm">
                      <p className="mb-2">
                        <strong>個人情報の取り扱いについて</strong>
                      </p>
                      <p className="text-muted-foreground">
                        お預かりした個人情報は、お問い合わせへの回答および弊社サービスのご案内にのみ使用し、第三者に開示することはございません。
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      送信する
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
