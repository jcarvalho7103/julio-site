import { Server, GitMerge, Database, Activity, CheckCircle2 } from "lucide-react";

const deliverables = [
  {
    icon: Server,
    title: "API de Conversões server-side",
    description:
      "Configuração da CAPI para Meta, Google Ads (Enhanced Conversions) e TikTok Events API, enviando os eventos direto do servidor, sem depender do navegador do usuário.",
  },
  {
    icon: GitMerge,
    title: "Deduplicação pixel + servidor",
    description:
      "Pixel e CAPI rodando juntos com event_id e deduplicação correta, para não inflar nem duplicar conversão no gerenciador. Dado limpo, não dado inflado.",
  },
  {
    icon: Database,
    title: "GTM server-side e conversões offline",
    description:
      "Tag Manager server-side para capturar 100% dos eventos e enviar conversões offline do seu CRM (lead que virou venda) de volta para as plataformas, fechando o ciclo de atribuição.",
  },
  {
    icon: Activity,
    title: "Monitoramento de qualidade do sinal",
    description:
      "Acompanhamento da taxa de correspondência (EMQ no Meta) e da qualidade dos eventos, com ajuste de parâmetros para o algoritmo receber o melhor sinal possível.",
  },
];

export default function CapiDeliverables() {
  return (
    <section id="entregaveis" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 max-w-3xl mx-auto leading-[1.05]">
          Rastreamento avançado{" "}
          <span className="gradient-text">instalado e rodando</span>
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-16 text-lg">
          Não é relatório de auditoria. É a infraestrutura configurada e funcionando na sua conta.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((d, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex gap-5 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center group-hover:from-[#9333ea]/50 transition-all">
                  <d.icon size={22} className="text-[#d946ef]" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{d.title}</h3>
                <p className="text-violet-200/60 text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome strip */}
        <div className="mt-10 max-w-3xl mx-auto glass-card rounded-2xl px-6 py-5 flex items-start gap-3">
          <CheckCircle2 size={20} className="text-[#d946ef] flex-shrink-0 mt-0.5" />
          <p className="text-violet-200/80 text-sm leading-relaxed">
            <span className="text-white font-semibold">O objetivo é direto:</span> recuperar as conversões que o navegador perde, devolver sinal de qualidade para o algoritmo e fazer o mesmo orçamento gerar mais resultado, com dado em que você pode confiar para tomar decisão.
          </p>
        </div>
      </div>
    </section>
  );
}
