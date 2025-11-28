import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">株式会社偶成舎</h3>
            <p className="text-sm opacity-90 mb-4">
              「働く」を「働楽」に変える生成AIコンサルティング
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.gd/Vlbxo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:opacity-80 transition-opacity">ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:opacity-80 transition-opacity">サービス</a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a className="hover:opacity-80 transition-opacity">実績・導入事例</a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a className="hover:opacity-80 transition-opacity">プロフィール</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:opacity-80 transition-opacity">よくある質問</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:opacity-80 transition-opacity">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>080-2724-9394</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>sakoryu0608@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; 2025 株式会社偶成舎. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
