import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="text-primary mr-3" size={40} />
            <h2 className="text-3xl md:text-4xl font-bold">Instagram</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            最新の活動やAI活用のヒントを発信しています
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instagram Post 1 */}
                <div className="instagram-embed-wrapper">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/p/"
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      borderRadius: "3px",
                      boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                      margin: "1px",
                      maxWidth: "540px",
                      minWidth: "326px",
                      padding: 0,
                      width: "calc(100% - 2px)",
                    }}
                  >
                    <div style={{ padding: "16px" }}>
                      <a
                        href="https://x.gd/Vlbxo"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#FFFFFF",
                          lineHeight: 0,
                          padding: "0 0",
                          textAlign: "center",
                          textDecoration: "none",
                          width: "100%",
                        }}
                      >
                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg">
                          <Instagram className="text-white" size={80} />
                        </div>
                      </a>
                      <div style={{ padding: "16px 0" }}>
                        <p className="text-center text-muted-foreground">
                          Instagramで最新情報をチェック
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>

                {/* CTA to Instagram */}
                <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Instagram className="text-primary mb-4" size={60} />
                  <h3 className="text-xl font-bold mb-4 text-center">
                    フォローして最新情報をゲット
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    AI活用のヒントや実践的なノウハウを日々発信しています
                  </p>
                  <a
                    href="https://x.gd/Vlbxo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="mr-2" size={20} />
                    Instagramをフォロー
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
