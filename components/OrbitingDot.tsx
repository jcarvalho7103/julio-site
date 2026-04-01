"use client";
import { useEffect, useRef } from "react";

interface OrbitingDotProps {
  duration?: number;
  size?: number;
  color?: string;
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
      const angle = progress * 2 * Math.PI;

      const container = containerRef.current;
      const dot = dotRef.current;
      if (!container || !dot) return;

      const w = container.offsetWidth;
      const h = container.offsetHeight;
      const rx = w / 2;
      const ry = h / 2;

      const x = rx + rx * Math.cos(angle);
      const y = ry + ry * Math.sin(angle);

      dot.style.left = `${(x / w) * 100}%`;
      dot.style.top = `${(y / h) * 100}%`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration]);

  return (
    <div
      ref={containerRef}
      className="absolute -inset-2 pointer-events-none z-20"
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
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: color }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: -2,
            background: color,
            opacity: 0.5,
            filter: "blur(3px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: -4,
            background: color,
            opacity: 0.2,
            filter: "blur(6px)",
          }}
        />
      </div>
    </div>
  );
}
