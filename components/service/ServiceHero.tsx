import { ArrowRight, ShieldCheck } from "lucide-react";
import type { ServiceData } from "@/lib/servicesData";

export default function ServiceHero({ data }: { data: ServiceData }) {
  const { h1, sub, ctaPrimary, ctaSecondary, assurance } = data.hero;
  return (
    <section id="topo" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[30%] w-[700px] h-[500px] rounded-full bg-[#9333ea]/20 blur-[80px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[500px] rounded-full bg-[#d946ef]/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#9333ea]/10 blur-[80px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 section-container py-16">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(147,51,234,0.3)] bg-[rgba(147,51,234,0.08)] text-violet-200 text-xs font-semibold tracking-wide uppercase mb-7">
            {data.badge}
          </p>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-white leading-[1.03] mb-6">
            {h1.a}
            {h1.em && <span className="gradient-text">{h1.em}</span>}
            {h1.b}
          </h1>

          <p className="text-lg md:text-xl text-violet-100/75 max-w-2xl mx-auto mb-9 leading-relaxed">
            {sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="#cta"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold text-sm transition-all duration-200 shadow-[0_0_28px_rgba(147,51,234,0.5)] hover:shadow-[0_0_38px_rgba(147,51,234,0.7)] hover:scale-[1.02]"
            >
              {ctaPrimary}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#entregaveis"
              className="px-7 py-3.5 rounded-full border border-[rgba(147,51,234,0.4)] text-violet-200 hover:text-white hover:border-[rgba(147,51,234,0.7)] hover:bg-[rgba(147,51,234,0.1)] transition-all duration-200 text-sm font-medium"
            >
              {ctaSecondary}
            </a>
          </div>

          <p className="inline-flex items-center gap-2 text-violet-300/60 text-xs max-w-xl mx-auto">
            <ShieldCheck size={14} className="text-[#d946ef] flex-shrink-0" />
            {assurance}
          </p>
        </div>
      </div>
    </section>
  );
}
