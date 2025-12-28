import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // ロゴ表示時間（1.5秒） + 少し待機（0.5秒） = 2秒後に幕を上げる
    const timer = setTimeout(() => {
      setIsLoaded(true);
      
      // アニメーション完了後（0.8秒後）にDOMから削除
      setTimeout(() => {
        setShouldRender(false);
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isLoaded ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="animate-fade-in opacity-0 fill-mode-forwards duration-[1500ms]">
        <img src="/logo.png" alt="Guseisya Logo" className="w-48 md:w-64 h-auto" />
      </div>
    </div>
  );
}
