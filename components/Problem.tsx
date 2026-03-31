import { AlertCircle, BarChart2, Cpu } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Tráfego rodando. Negócio parado.",
    description:
      "Você olha pro gerenciador e as campanhas estão no verde. Mas a receita não cresce. O problema nunca foi o anúncio. É o que acontece depois do clique.",
  },
  {
    icon: BarChart2,
    title: "Dados que não decidem nada",
    description:
      "CPM, CTR, CPC, tudo bonitinho no relatório. Mas ninguém sabe dizer qual campanha gerou faturamento de verdade. Sem rastreamento preciso, você está chutando com dinheiro real.",
  },
  {
    icon: Cpu,
    title: "IA nos seus concorrentes, não em você",
    description:
      "Automação de qualificação, segmentação por comportamento, criativos gerados por IA: isso já está rodando. Só não está rodando na sua operação.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="py-24">
      <div className="section-container">
        {/* Label */}
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          O diagnóstico
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight max-w-3xl mx-auto">
          A maioria das empresas está pagando para encher um balde furado
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-16 text-lg">
          Mais verba no mesmo funil quebrado só multiplica o desperdício. Reconhece algum desses?
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[rgba(147,51,234,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(147,51,234,0.15)] border border-[rgba(147,51,234,0.3)] flex items-center justify-center mb-6 group-hover:bg-[rgba(147,51,234,0.25)] transition-colors">
                <p.icon size={22} className="text-[#d946ef]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-violet-200/60 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
