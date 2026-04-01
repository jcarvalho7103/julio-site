import { Target, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "01",
    title: "A gente encontra onde está sangrando",
    description:
      "Antes de tocar em campanha, eu olho o funil inteiro. Taxa de correspondência do pixel, eventos que somem no meio do caminho, CRM sem etapa definida, lead chegando no comercial sem qualificação nenhuma. O buraco costuma estar num desses pontos. E está custando dinheiro todo dia.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Montamos a infraestrutura que a maioria pula",
    description:
      "CAPI configurado server-side para o algoritmo receber sinal de qualidade. CRM com funil real, não pasta de contato. Automações que qualificam o lead por comportamento antes de chegar no time de vendas. GTM com rastreamento de conversão offline integrado ao CRM. Isso não é sofisticado. É o básico que 90% dos negócios nunca fez.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Aí sim o tráfego entra",
    description:
      "Com sinal limpo chegando nas plataformas e o funil estruturado, o algoritmo começa a trabalhar do jeito certo. Públicos segmentados por comportamento real, não suposição. Criativos testados com método. CPL cai porque o sistema está otimizando com dado verdadeiro, não com o que sobrou depois do bloqueador de cookie.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "O sistema escala sem você escalar o esforço",
    description:
      "Quando dado, CRM, automações e tráfego estão conectados, o negócio cresce sem dobrar time ou orçamento. Lead qualificado chega no comercial com contexto completo. Nenhum contato some sem follow-up. O gerenciador otimiza com conversão real. Esse é o ponto que a maioria nunca chega. É onde a gente começa.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          O método
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight">
          Como eu trabalho,{" "}
          <span className="gradient-text">sem enrolação</span>
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-16 text-lg">
          Sem deck de onboarding de 3 semanas. Sem relatório de diagnóstico que vira gaveta. A gente entra, identifica, constrói e roda.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex gap-6 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center group-hover:from-[#9333ea]/50 transition-all">
                  <s.icon size={24} className="text-[#d946ef]" />
                </div>
              </div>
              <div>
                <span className="text-[#9333ea]/60 text-xs font-bold tracking-widest">{s.step}</span>
                <h3 className="text-white font-bold text-xl mb-2 mt-0.5">{s.title}</h3>
                <p className="text-violet-200/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(147,51,234,0.4)] text-violet-200 hover:text-white hover:border-[rgba(147,51,234,0.7)] hover:bg-[rgba(147,51,234,0.1)] transition-all duration-200 text-sm font-medium"
          >
            Quer saber onde seu funil está vazando?
          </a>
        </div>
      </div>
    </section>
  );
}
