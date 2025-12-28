import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/case-studies", label: "実績・導入事例" },
    { href: "/profile", label: "プロフィール" },
    { href: "/faq", label: "よくある質問" },
    { href: "https://gsgqynvzjuht.sg.larksuite.com/share/base/form/shrlgpKpa9jY7KyB1gTFpP1hRtc", label: "お問い合わせ", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <img src="/logo-v2.png" alt="株式会社偶成舎" className="h-12 md:h-16 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-secondary"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
