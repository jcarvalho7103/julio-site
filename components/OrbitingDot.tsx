"use client";

interface OrbitingDotProps {
  duration?: number;
  size?: number;
  color?: string;
}

export default function OrbitingDot({
  duration = 3,
  size = 8,
  color = "#d946ef",
}: OrbitingDotProps) {
  return (
    <span
      className="absolute inset-0 rounded-full pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      <span
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 6px 2px ${color}99`,
          offsetPath: "border-box",
          offsetDistance: "0%",
          animation: `orbit ${duration}s linear infinite`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <style>{`
        @keyframes orbit {
          0%   { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </span>
  );
}
