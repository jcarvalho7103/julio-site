import { Database, Radar, Bot, Workflow, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Database,
    tag: "CRM",
    title: "Estruturação de CRM",
    summary: "Pipeline com etapas reais, qualificação automática e integração com tráfego pago para fechar o ciclo de atribuição.",
  },
  {
    icon: Workflow,
    tag: "Automações",
    title: "Automações de funil",
    summary: "Lead qualificado antes de chegar no comercial. Fluxos por comportamento, resgate de lead frio e notificações com contexto.",
  },
  {
    icon: Radar,
    tag: "GTM + CAPI",
    title: "Rastreamento avançado",
    summary: "CAPI server-side para Meta, Google e TikTok. Sinal limpo chegando na plataforma. O algoritmo otimiza com dado real.",
  },
  {
    icon: Bot,
    tag: "IA para Vendas",
    title: "Agentes de IA para vendas",
    summary: "Agente treinado com seu produto e objeções. Qualifica, agenda e passa o contexto pro CRM. Atendimento 24/7.",
  },
  {
    icon: Workflow,
    tag: "ManyChat",
    title: "ManyChat",
    summary: "Instagram e Messenger como canal de aquisição ativo. Captura por comentário, DM ou clique em anúncio. Distribuição automática pro funil.",
  },
];

export default function ServicesSummary() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          O que construímos
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight max-w-3xl mx-auto leading-tight">
          Cada peça que faz o tráfego{" "}
          <span className="gradient-text">trabalhar de verdade</span>
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-14 text-lg">
          CRM, automações, rastreamento, IA e conversação — tudo conectado, tudo rodando junto.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center flex-shrink-0 group-hover:from-[#9333ea]/50 transition-all">
                  <s.icon size={18} className="text-[#d946ef]" />
                </div>
                <span className="text-[#9333ea] text-xs font-bold tracking-widest uppercase">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-violet-200/60 text-sm leading-relaxed">
                {s.summary}
              </p>
            </div>
          ))}

          {/* Card CTA — ocupa o espaço restante no grid */}
          <div className="glass-card rounded-2xl p-6 border-dashed border-[rgba(147,51,234,0.3)] flex flex-col justify-center items-center text-center gap-3 hover:border-[rgba(147,51,234,0.6)] transition-all duration-300 group">
            <p className="text-violet-200/70 text-sm leading-relaxed">
              Quer ver os detalhes de cada serviço e o que é entregue em cada um?
            </p>
            <a
              href="/servicos"
              className="inline-flex items-center gap-1.5 text-[#9333ea] hover:text-[#d946ef] font-semibold text-sm transition-colors group-hover:gap-2.5"
            >
              Ver todos os serviços
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
