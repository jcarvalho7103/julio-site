import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CapiHero() {
  return (
    <section id="topo" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[30%] w-[700px] h-[500px] rounded-full bg-[#9333ea]/20 blur-[80px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[500px] rounded-full bg-[#d946ef]/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#9333ea]/10 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(147,51,234,0.3)] bg-[rgba(147,51,234,0.08)] text-violet-200 text-xs font-semibold tracking-wide uppercase mb-7">
            API de Conversões — Meta · Google · TikTok
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
            Seu pixel está enxergando{" "}
            <span className="gradient-text">menos da metade</span> das suas conversões
          </h1>

          <p className="text-base md:text-lg text-violet-200/70 max-w-2xl mx-auto mb-9 leading-relaxed">
            iOS, bloqueadores de cookie e navegação privada quebraram o rastreamento pelo navegador. O algoritmo otimiza com dado incompleto e você paga mais por resultado. Eu instalo a API de Conversões server-side e devolvo o sinal limpo que o Meta, o Google e o TikTok precisam para baixar seu custo por lead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="#cta"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold text-sm transition-all duration-200 shadow-[0_0_28px_rgba(147,51,234,0.5)] hover:shadow-[0_0_38px_rgba(147,51,234,0.7)] hover:scale-[1.02]"
            >
              Quero diagnóstico do meu rastreamento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#entregaveis"
              className="px-7 py-3.5 rounded-full border border-[rgba(147,51,234,0.4)] text-violet-200 hover:text-white hover:border-[rgba(147,51,234,0.7)] hover:bg-[rgba(147,51,234,0.1)] transition-all duration-200 text-sm font-medium"
            >
              Ver o que está incluído
            </a>
          </div>

          <p className="inline-flex items-center gap-2 text-violet-300/60 text-xs">
            <ShieldCheck size={14} className="text-[#d946ef]" />
            Diagnóstico gratuito. Você sai sabendo exatamente quanto está perdendo, mesmo que não trabalhemos juntos.
          </p>
        </div>
      </div>
    </section>
  );
}
