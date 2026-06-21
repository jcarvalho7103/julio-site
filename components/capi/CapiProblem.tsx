import { EyeOff, TrendingDown, Wallet } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    title: "O navegador perde o evento antes de chegar na plataforma",
    description:
      "Safari, Firefox, modo anônimo e extensões de bloqueio derrubam o pixel. Uma fatia grande das suas conversões simplesmente nunca é registrada. Você acha que está vendo tudo. Está vendo o que sobrou.",
  },
  {
    icon: TrendingDown,
    title: "O algoritmo otimiza com dado incompleto",
    description:
      "Meta, Google e TikTok aprendem com os eventos que recebem. Se metade some, o algoritmo busca o público errado, encarece o leilão e o CPA sobe. Não é a verba que está faltando: é o sinal.",
  },
  {
    icon: Wallet,
    title: "Você aumenta o orçamento e o resultado não acompanha",
    description:
      "Mais verba em cima de um rastreamento furado só multiplica o desperdício. Sem a API de Conversões server-side e a deduplicação correta, cada escala fica mais cara do que deveria.",
  },
];

export default function CapiProblem() {
  return (
    <section className="py-24">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          O problema
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight max-w-3xl mx-auto">
          Rastreamento quebrado custa dinheiro todo dia
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-16 text-lg">
          Desde o iOS 14, o rastreamento pelo navegador deixou de ser confiável. Reconhece algum desses?
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
