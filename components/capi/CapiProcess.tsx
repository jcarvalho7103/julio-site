import { Search, Wrench, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico do rastreamento",
    description:
      "Eu analiso o que está sendo perdido hoje: eventos que somem, pixel sem deduplicação, taxa de correspondência baixa, conversões que nunca chegam na plataforma. Você recebe a leitura exata de quanto está deixando na mesa.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Implementação server-side",
    description:
      "Configuro a CAPI para Meta, Google e TikTok via GTM server-side, com deduplicação, eventos de qualidade e parâmetros de correspondência otimizados. Tudo testado e validado evento a evento.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Validação e sinal limpo",
    description:
      "Confirmo a qualidade do sinal nas três plataformas, ligo as conversões offline do CRM e deixo o monitoramento ativo. A partir daí o algoritmo otimiza com dado verdadeiro, e o custo por resultado cai.",
  },
];

export default function CapiProcess() {
  return (
    <section className="py-24">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 leading-[1.05]">
          Três etapas, <span className="gradient-text">sem enrolação</span>
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-16 text-lg">
          Implementação objetiva. Sem onboarding de semanas, sem relatório que vira gaveta.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center group-hover:from-[#9333ea]/50 transition-all">
                  <s.icon size={22} className="text-[#d946ef]" />
                </div>
                <span className="text-[#9333ea]/60 text-sm font-bold tracking-widest">{s.step}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-snug">{s.title}</h3>
              <p className="text-violet-200/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
