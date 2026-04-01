import { AlertCircle, BarChart2, Cpu } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Tráfego rodando. Negócio parado.",
    description:
      "Você olha pro gerenciador e as campanhas estão no verde. Mas a receita não cresce. Lead chega. Ninguém sabe de onde veio. Ninguém sabe o que aconteceu com ele depois. O problema nunca foi o anúncio. É tudo que vem depois do clique.",
  },
  {
    icon: BarChart2,
    title: "Pixel vendo menos da metade do que acontece",
    description:
      "iOS 14, navegação privada e bloqueadores de cookie derrubaram o rastreamento padrão. Você acha que está vendo 100% das conversões. Está vendo menos da metade. O algoritmo otimiza com dado errado. Você aumenta verba e o resultado não melhora porque o sinal que chega na plataforma é ruim.",
  },
  {
    icon: Cpu,
    title: "CRM que não trabalha pra ninguém",
    description:
      "Lead entra no CRM e para. Sem etapa definida, sem automação, sem régua de nutrição. O time comercial qualifica na mão, um por um. Lead frio some sem follow-up. E nenhuma dessas informações volta para as plataformas de tráfego pra fechar o ciclo de atribuição.",
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
