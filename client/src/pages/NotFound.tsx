import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="container text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">ページが見つかりません</h2>
          <p className="text-xl text-muted-foreground mb-8">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link href="/">
            <Button size="lg">
              <Home className="mr-2" size={20} />
              ホームに戻る
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
