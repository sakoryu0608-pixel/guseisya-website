import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/case-studies", label: "実績・事例" },
    { href: "/voice", label: "お客様の声" },
    { href: "/philosophy", label: "目指す会社像" },
    { href: "/profile", label: "代表について" },
    { href: "/faq", label: "よくある質問" },
  ];

  return (
    <>
      {/* 参照サイト準拠: 固定ヘッダー、スクロールで背景白+縮小 */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-400 ${
          scrolled ? "h-[80px] bg-white shadow-sm" : "h-[100px] lg:h-[120px]"
        }`}
      >
        <div className="flex items-center justify-between h-full w-full max-w-none px-[5%] lg:px-[3%]">
          {/* ロゴ */}
          <Link href="/" className="flex items-center h-full">
            <img
              src="/logo-v2.png"
              alt="株式会社偶成舎"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-16"
              }`}
            />
          </Link>

          {/* デスクトップナビ + CTAボタン */}
          <div className="hidden lg:flex items-center h-full">
            <nav className="flex items-center h-full">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-underline flex items-center justify-center px-[1em] h-full text-sm font-medium tracking-wider transition-colors ${
                    location === item.href
                      ? "text-[var(--blue-main)]"
                      : "text-[var(--dark)] hover:text-[var(--blue-main)]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA - 参照サイトの右端グラデーションボタン */}
            <Link href="/contact" className="nav-cta ml-4 h-full flex items-center">
              CONTACT
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2 text-[var(--dark)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* モバイルナビ */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <nav className="py-4 px-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 text-sm font-medium tracking-wider transition-colors ${
                    location === item.href
                      ? "text-[var(--blue-main)] font-bold"
                      : "text-[var(--dark)] hover:text-[var(--blue-main)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-2 py-3 px-6 text-center text-white text-sm font-bold tracking-widest"
                style={{ background: "linear-gradient(145deg, var(--blue-main), var(--blue-light))" }}
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
