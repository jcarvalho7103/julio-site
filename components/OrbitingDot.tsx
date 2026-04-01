"use client";
import { useEffect, useRef } from "react";

interface OrbitingDotProps {
  duration?: number;
  size?: number;
  color?: string;
}

/**
 * Percorre a borda exata de um botão pill (rounded-full).
 * O contorno de um pill é: reta-superior → semicírculo-direito → reta-inferior → semicírculo-esquerdo.
 */
function getPillPoint(progress: number, W: number, H: number): { x: number; y: number } {
  const r = H / 2;           // raio dos semicírculos
  const straight = W - H;   // comprimento total das retas (superior + inferior)
  const arcLen = Math.PI * r; // comprimento de cada semicírculo

  const totalLen = straight + arcLen + straight + arcLen;
  const d = ((progress % 1) + 1) % 1 * totalLen;

  // Segmento 1: reta superior — da esquerda (r,0) para a direita (W-r,0)
  const s1 = straight / 2;
  // Segmento 2: semicírculo direito — de (W-r,0) passando por (W,r) até (W-r,H)
  const s2 = s1 + arcLen;
  // Segmento 3: reta inferior — da direita (W-r,H) para a esquerda (r,H)
  const s3 = s2 + straight / 2 + straight / 2;
  // Segmento 4: semicírculo esquerdo — de (r,H) passando por (0,r) até (r,0)
  const s4 = s3 + arcLen;

  if (d < s1) {
    // Reta superior: esquerda → direita, y = 0
    const t = d / s1;
    return { x: r + t * (W - H), y: 0 };
  } else if (d < s2) {
    // Semicírculo direito: centro em (W-r, r), ângulo de -π/2 a +π/2
    const t = (d - s1) / arcLen;
    const angle = -Math.PI / 2 + t * Math.PI;
    return { x: (W - r) + r * Math.cos(angle), y: r + r * Math.sin(angle) };
  } else if (d < s3) {
    // Reta inferior: direita → esquerda, y = H
    const t = (d - s2) / (straight);
    return { x: (W - r) - t * (W - H), y: H };
  } else if (d < s4) {
    // Semicírculo esquerdo: centro em (r, r), ângulo de +π/2 a +3π/2
    const t = (d - s3) / arcLen;
    const angle = Math.PI / 2 + t * Math.PI;
    return { x: r + r * Math.cos(angle), y: r + r * Math.sin(angle) };
  }

  return { x: r, y: 0 };
}

export default function OrbitingDot({
  duration = 3,
  size = 8,
  color = "#9333ea",
}: OrbitingDotProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = (timestamp - startRef.current) / 1000;
      const progress = (elapsed % duration) / duration;

      const container = containerRef.current;
      const dot = dotRef.current;
      if (!container || !dot) return;

      const W = container.offsetWidth;
      const H = container.offsetHeight;

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
      ref={containerRef}
      className="absolute -inset-0 pointer-events-none z-20 rounded-full"
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
