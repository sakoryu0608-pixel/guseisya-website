import { Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import { TriangleLarge, TriangleDots } from "./TriangleDecoration";

export default function Footer() {
  return (
    <footer className="relative bg-[#eee] overflow-hidden">
      {/* 三角形装飾 - 参照サイト準拠 */}
      <TriangleDots className="top-[-3rem] left-[-3rem]" opacity={0.04} />
      <TriangleLarge className="top-[-3rem] right-[1.5rem]" opacity={0.06} />

      {/* SNSエリア */}
      <div className="pt-16 pb-8 text-center">
        <p className="font-en text-sm italic tracking-wider text-muted-foreground">SNS</p>
      </div>

      {/* メインフッター */}
      <div className="relative z-10 px-[5%] lg:px-[8.3%] pb-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 左: ロゴ + 住所 */}
          <div className="flex-shrink-0 lg:mr-[5%]">
            <div className="mb-4">
              <img
                src="/logo-v2.png"
                alt="株式会社偶成舎"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="text-sm leading-[2.28] text-muted-foreground">
              <p>株式会社偶成舎</p>
            </div>
          </div>

          {/* 右: ナビゲーション */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-x-12 gap-y-2">
              {[
                { href: "/", label: "ホーム" },
                { href: "/services", label: "サービス" },
                { href: "/case-studies", label: "実績・事例" },
                { href: "/voice", label: "お客様の声" },
                { href: "/philosophy", label: "目指す会社像" },
                { href: "/profile", label: "代表について" },
                { href: "/faq", label: "よくある質問" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center footer-link text-sm py-1 text-[var(--dark)] hover:opacity-70 transition-opacity tracking-wider">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-center text-sm"
          >
            お問い合わせ
          </a>
          <Link href="/contact" className="flex items-center justify-center gap-2 py-[1.5em] px-[3em] text-sm font-semibold tracking-widest text-[var(--dark)] border border-[var(--dark)] hover:bg-[var(--dark)] hover:text-white transition-all">
            資料請求
          </Link>
        </div>
      </div>

      {/* コピーライト */}
      <div className="mt-8 py-4 px-6 border-t border-[#f2f2f2]">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <p className="font-en text-xs font-medium tracking-wider text-muted-foreground">
            &copy; 2025 GUSEISYA INC.
          </p>
          <div className="flex-1 flex justify-end">
            <ul className="flex items-center gap-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span className="font-en text-xs">080-2724-9394</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span className="text-xs">sakoryu0608@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
