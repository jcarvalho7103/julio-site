"use client";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { prefix: "+", target: 50,  suffix: "",  label: "marcas atendidas",    detail: "de diferentes setores" },
  { prefix: "-", target: 47,  suffix: "%", label: "redução de CPL",      detail: "média entre os clientes" },
  { prefix: "",  target: 3,   suffix: "x", label: "crescimento de ROAS", detail: "com IA + dados combinados" },
  { prefix: "",  target: 92,  suffix: "%", label: "dos clientes",        detail: "com sistemas ativos em 45 dias" },
];

function AnimatedNumber({ prefix, target, suffix, delay = 0, active }: {
  prefix: string; target: number; suffix: string; delay?: number; active: boolean;
}) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!active) return;
    setCount(0);
    const totalSteps = 50;
    const intervalMs = 1400 / totalSteps;
    let step = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        step++;
        const progress = step / totalSteps;
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (step >= totalSteps) {
          setCount(target);
          clearInterval(intervalId);
        }
      }, intervalMs);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [target, delay, active]);

  return <span>{prefix}{count}{suffix}</span>;
}

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resultados" ref={sectionRef} aria-label="Resultados e métricas" className="py-24">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          Resultados
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight">
          O que acontece quando a estrutura está certa
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-16 text-lg">
          Não é sorte, não é verba maior. É o mesmo orçamento trabalhando melhor.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="text-4xl md:text-5xl font-black gradient-text mb-2"
                aria-label={`${m.prefix}${m.target}${m.suffix}`}
              >
                <AnimatedNumber prefix={m.prefix} target={m.target} suffix={m.suffix} delay={i * 100} active={visible} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-violet-300/50 text-xs">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
