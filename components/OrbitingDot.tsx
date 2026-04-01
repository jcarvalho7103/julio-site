"use client";
import { useEffect, useRef } from "react";

interface OrbitingDotProps {
  duration?: number;
  size?: number;
  color?: string;
}

/**
 * 4 segmentos em ordem:
 *  A) reta superior:       (r, 0)   → (W-r, 0)     comprimento = W-H
 *  B) semicírculo direito: (W-r, 0) → (W-r, H)     comprimento = π*r
 *  C) reta inferior:       (W-r, H) → (r, H)        comprimento = W-H
 *  D) semicírculo esquerdo:(r, H)   → (r, 0)        comprimento = π*r
 */
function getPillPoint(progress: number, W: number, H: number): { x: number; y: number } {
  const r = H / 2;
  const seg = W - H;          // comprimento de cada reta
  const arc = Math.PI * r;    // comprimento de cada semicírculo
  const total = 2 * seg + 2 * arc;
  const d = ((progress % 1) + 1) % 1 * total;

  const endA = seg;
  const endB = seg + arc;
  const endC = seg + arc + seg;
  // endD = total

  if (d <= endA) {
    // A) reta superior: esquerda → direita
    const t = d / seg;
    return { x: r + t * seg, y: 0 };
  }
  if (d <= endB) {
    // B) semicírculo direito: -90° → +90° (sentido horário)
    const t = (d - endA) / arc;
    const angle = -Math.PI / 2 + t * Math.PI;
    return { x: (W - r) + r * Math.cos(angle), y: r + r * Math.sin(angle) };
  }
  if (d <= endC) {
    // C) reta inferior: direita → esquerda
    const t = (d - endB) / seg;
    return { x: (W - r) - t * seg, y: H };
  }
  // D) semicírculo esquerdo: +90° → +270° (sentido horário)
  const t = (d - endC) / arc;
  const angle = Math.PI / 2 + t * Math.PI;
  return { x: r + r * Math.cos(angle), y: r + r * Math.sin(angle) };
}

export default function OrbitingDot({
  duration = 3,
  size = 8,
  color = "#9333ea",
}: OrbitingDotProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = (timestamp - startRef.current) / 1000;
      const progress = (elapsed % duration) / duration;

      const dot = dotRef.current;
      const wrap = wrapRef.current;
      if (!dot || !wrap) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Usa as dimensões do elemento pai (o botão)
      const parent = wrap.parentElement;
      if (!parent) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const W = parent.offsetWidth;
      const H = parent.offsetHeight;

      if (W === 0 || H === 0) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const { x, y } = getPillPoint(progress, W, H);

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration]);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 pointer-events-none z-20"
    >
      <div
        ref={dotRef}
        className="absolute"
        style={{
          width: size,
          height: size,
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        <div className="absolute inset-0 rounded-full" style={{ background: color }} />
        <div
          className="absolute rounded-full"
          style={{ inset: -2, background: color, opacity: 0.6, filter: "blur(3px)" }}
        />
        <div
          className="absolute rounded-full"
          style={{ inset: -5, background: color, opacity: 0.2, filter: "blur(8px)" }}
        />
      </div>
    </div>
  );
}
