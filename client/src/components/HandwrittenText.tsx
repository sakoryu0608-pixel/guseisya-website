import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 手書き風テキストアニメーション「働くを、働楽へ。」
 *
 * 参考サイトのSVGストロークアニメーションの雰囲気を
 * テキストベースで再現。一文字ずつ筆で書かれるように出現する演出。
 *
 * - 各文字がフェード+スケールで出現
 * - 手書きフォント（Zen Kurenaido）使用
 * - CSSクリップパスで左から右に描かれる効果
 */

interface HandwrittenTextProps {
  className?: string;
  delay?: number;
  color?: string;
}

export default function HandwrittenText({
  className = "",
  delay = 800,
  color = "#FFFFFF",
}: HandwrittenTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // 文字ごとの定義（間隔調整用）
  const chars = [
    { char: "働", delay: 0 },
    { char: "く", delay: 0.15 },
    { char: "を", delay: 0.3 },
    { char: "、", delay: 0.42 },
    { char: "働", delay: 0.55 },
    { char: "楽", delay: 0.7 },
    { char: "へ", delay: 0.85 },
    { char: "。", delay: 0.95 },
  ];

  return (
    <div
      className={`${className} select-none pointer-events-none`}
      aria-label="働くを、働楽へ。"
      role="img"
    >
      {/* Google Fontsの手書き風フォントを使用 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
        .handwritten-char {
          font-family: 'Zen Kurenaido', serif;
          display: inline-block;
        }
        @keyframes brushStroke {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <div className="flex items-baseline whitespace-nowrap">
            {chars.map((item, index) => (
              <motion.span
                key={index}
                className="handwritten-char"
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 100% 0 0)",
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                  clipPath: {
                    duration: 0.6,
                    delay: item.delay,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                style={{
                  color,
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  lineHeight: 1.2,
                  letterSpacing: "0.05em",
                }}
              >
                {item.char}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
