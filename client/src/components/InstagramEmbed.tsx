import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ArrowRight } from "lucide-react";

export default function InstagramEmbed() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1">
                <div className="bg-background p-8 md:p-12 text-center rounded-sm">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Instagram size={40} />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">Official Instagram</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                    最新のAI活用事例や、日々の活動の様子を発信しています。<br className="hidden md:block" />
                    ぜひフォローして、最新情報をチェックしてください。
                  </p>
                  
                  <a
                    href="https://www.instagram.com/ai_chatgpt_gpts_ryushi?igsh=MXBkN2tyMGw0YzJ3ag%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all transform bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full hover:opacity-90 hover:scale-105 shadow-md"
                  >
                    <Instagram className="mr-2" size={24} />
                    Instagramを見る
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
