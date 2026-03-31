import { Target, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "01",
    title: "A gente encontra onde está sangrando",
    description:
      "Antes de tocar em qualquer campanha, eu olho para o funil inteiro. Rastreamento, atribuição, jornada do lead. Na maioria dos projetos, o dinheiro está sendo perdido num ponto que ninguém estava olhando.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Construímos a base que faltava",
    description:
      "Pixel configurado do jeito certo. Automações que qualificam o lead antes de chegar no time. Dashboard que mostra o que importa, não 40 métricas de vaidade. Isso não é complexo. Só nunca foi feito.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Aí sim o tráfego entra",
    description:
      "Com a estrutura no lugar, cada real investido tem para onde ir. Criativos testados com método. Públicos segmentados por comportamento real. CPL cai porque o sistema está trabalhando, não você.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "O sistema escala sem você escalar o esforço",
    description:
      "Quando tudo está conectado, dado, IA, tráfego e tecnologia, o negócio cresce sem que você precise dobrar o time ou o orçamento. Esse é o ponto que a maioria nunca chega. É onde a gente começa.",
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex gap-6 group hover:border-[rgba(147,51,234,0.5)] transition-all duration-300"
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
      </div>
    </section>
  );
}
