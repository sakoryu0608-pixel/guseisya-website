/* 参照サイト準拠のSVG三角形装飾コンポーネント */

interface TriangleProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/* 大きな三角形（参照サイトの bg-tryangle） */
export function TriangleLarge({ className = "", color = "#2B7DE9", opacity = 0.08 }: TriangleProps) {
  return (
    <div className={`deco-triangle ${className}`} style={{ width: "12%" }}>
      <svg viewBox="0 0 304 336" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="152,0 304,336 0,336" fill={color} opacity={opacity} />
        <polygon points="152,40 280,310 24,310" fill={color} opacity={opacity * 0.5}>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1;1 -1;1 1"
            dur="8s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>
  );
}

/* 小さなドット付き三角形（参照サイトの bg-tryangle-dot） */
export function TriangleDots({ className = "", color = "#2B7DE9", opacity = 0.06 }: TriangleProps) {
  return (
    <div className={`deco-triangle ${className}`} style={{ width: "28%" }}>
      <svg viewBox="0 0 520 232" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,232 260,0 520,232" fill={color} opacity={opacity} />
        <polygon points="40,220 260,30 480,220" fill={color} opacity={opacity * 0.4} />
        {/* ドットパターン */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 40}
              cy={20 + row * 28}
              r="2"
              fill={color}
              opacity={opacity * 2}
            />
          ))
        )}
      </svg>
    </div>
  );
}

/* 円ライン装飾（参照サイトの bg-circle-line） */
export function CircleLine({ className = "", color = "#2B7DE9", opacity = 0.12 }: TriangleProps) {
  return (
    <div className={`deco-triangle ${className}`}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="1" opacity={opacity} fill="none" />
        <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="1" opacity={opacity * 0.6} fill="none" />
      </svg>
    </div>
  );
}

/* ドットパターン装飾（参考サイトの INTERVIEW 上部風） */
export function DotPattern({ className = "", color = "#2B7DE9", opacity = 0.15, rows = 5, cols = 12 }: TriangleProps & { rows?: number; cols?: number }) {
  return (
    <div className={`deco-dots ${className}`}>
      <svg width={cols * 24} height={rows * 24} viewBox={`0 0 ${cols * 24} ${rows * 24}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={12 + col * 24}
              cy={12 + row * 24}
              r="3"
              fill={color}
              opacity={opacity}
            />
          ))
        )}
      </svg>
    </div>
  );
}

/* 斜線ライン装飾（参考サイト風） */
export function DiagonalLine({ className = "", color = "#2B7DE9", opacity = 0.1 }: TriangleProps) {
  return (
    <div className={`deco-triangle ${className}`} style={{ width: "200px" }}>
      <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="400" x2="200" y2="0" stroke={color} strokeWidth="1" opacity={opacity} />
        <line x1="40" y1="400" x2="200" y2="80" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
      </svg>
    </div>
  );
}
