import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
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

      <div className="relative z-10 section-container py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* Left: copy */}
          <div className="flex flex-col justify-center order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Você não tem problema de tráfego.{" "}
              <span className="gradient-text">Você tem problema de estrutura.</span>
            </h1>

            <p className="text-base md:text-lg text-violet-200/70 max-w-xl mb-8 leading-relaxed lg:mx-0 mx-auto">
              Maíra Cardi, Afya e Carolina Caribé tinham o mesmo problema que você. Tráfego rodando. Resultado abaixo do esperado. A diferença foi o sistema que construímos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-10">
              <a
                href="#cta"
                id="hero-cta"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold text-sm transition-all duration-200 shadow-[0_0_28px_rgba(147,51,234,0.5)] hover:shadow-[0_0_38px_rgba(147,51,234,0.7)] hover:scale-[1.02]"
              >
                Quero meu diagnóstico gratuito
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resultados"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(147,51,234,0.35)] text-violet-200 hover:text-white hover:border-[rgba(147,51,234,0.6)] transition-all duration-200 text-sm font-medium"
              >
                Ver casos reais
              </a>
            </div>

            <p className="text-violet-300/50 text-xs lg:text-left text-center">
              Vagas limitadas por semana
            </p>
          </div>

          {/* Right: photo */}
          <div className="relative flex justify-center lg:justify-end items-center order-2">
            <div className="relative w-72 sm:w-80 lg:w-[420px] h-[400px] sm:h-[460px] lg:h-[580px]">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/15 blur-3xl scale-105" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[rgba(147,51,234,0.3)]">
                <Image
                  src="/julio.png"
                  alt="Julio Carvalho, Estrategista de Crescimento com IA e Dados"
                  fill
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 320px, 420px"
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0118]/70 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 border border-[rgba(147,51,234,0.4)]">
                <span className="text-white font-bold text-sm block">+50 marcas</span>
                <span className="text-violet-300/60 text-xs">escaladas</span>
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2.5 border border-[rgba(147,51,234,0.4)]">
                <span className="gradient-text font-black text-lg block leading-none">3x</span>
                <span className="text-violet-300/60 text-xs">ROAS médio</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
