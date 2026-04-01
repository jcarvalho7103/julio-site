import { Database, Radar, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: Database,
    tag: "CRM",
    title: "Estruturação de CRM",
    description:
      "A maioria dos negócios usa CRM como agenda glorificada. Contato entra. Ninguém sabe de onde veio. Ninguém sabe pra onde vai. Não tem etapa de qualificação. Não tem régua de nutrição. Quando o lead esfria, some.",
    items: [
      "Mapeamento e reestruturação do funil de vendas no CRM",
      "Pipeline com etapas claras, critérios de avanço e SLA por fase",
      "Segmentação por fonte, comportamento e estágio de compra",
      "Régua de relacionamento automatizada por perfil de lead",
      "Integração CRM + tráfego pago para fechar o ciclo de atribuição",
    ],
    highlight: "Lead que entra no sistema precisa de um destino. Não de uma pasta.",
  },
  {
    icon: Workflow,
    tag: "Automações",
    title: "Automações que trabalham enquanto você dorme",
    description:
      "Automação de verdade não é mandar email em sequência. É qualificar lead antes de chegar no comercial. É mover o contato de etapa quando ele toma uma ação. É avisar o time certo no momento certo, sem ninguém precisar apertar botão.",
    items: [
      "Fluxos de qualificação automática por comportamento (clique, abertura, visita)",
      "Integração WhatsApp + CRM com roteamento inteligente por score",
      "Automações de resgate de lead frio com gatilho por inatividade",
      "Notificações internas para o time de vendas com contexto completo do lead",
      "Sequências de nutrição segmentadas por persona e estágio do funil",
    ],
    highlight: "Se o time comercial ainda qualifica lead na mão, tem dinheiro escorrendo.",
  },
  {
    icon: Radar,
    tag: "GTM + CAPI",
    title: "Rastreamento avançado com GTM e CAPI de conversões",
    description:
      "iOS 14, bloqueadores de cookie e navegação em modo privado destruíram o pixel padrão. Você pensa que está rastreando 100% das conversões. Está vendo menos da metade. Isso significa que o algoritmo toma decisão com dado errado.",
    items: [
      "Configuração de Conversions API (CAPI) para Meta, Google e TikTok",
      "Server-side tracking via GTM para eliminar perda de eventos no navegador",
      "Deduplicação de eventos pixel + CAPI para não inflar dados no gerenciador",
      "Rastreamento de conversão offline e eventos de CRM enviados direto para as plataformas",
      "Monitoramento contínuo de taxa de correspondência e qualidade do sinal",
    ],
    highlight: "O algoritmo otimiza com o que você entrega pra ele. Dado ruim, resultado ruim.",
  },
  {
    icon: Bot,
    tag: "IA para Vendas",
    title: "Agentes de IA que vendem, qualificam e agendam",
    description:
      "Não é chatbot de FAQ. É um agente treinado com o seu produto, suas objeções e o seu processo de vendas. Responde em segundos, qualifica pelo critério que você define, agenda reunião direto na agenda do SDR e passa o contexto completo da conversa pro CRM. O comercial só entra quando o lead já está quente.",
    items: [
      "Agente de IA treinado com roteiro de vendas, objeções e produto",
      "Qualificação automática por perguntas e análise de respostas com LLM",
      "Agendamento de reuniões integrado ao Google Calendar ou Calendly",
      "Handoff para humano com resumo da conversa e score do lead",
      "Atendimento 24/7 no WhatsApp, Instagram Direct e Messenger",
      "Atualização automática de etapa e campos no CRM após cada conversa",
    ],
    highlight: "Lead que chega às 23h não espera até segunda-feira. O agente não dorme.",
  },
  {
    icon: Workflow,
    tag: "ManyChat",
    title: "Automações de conversação com ManyChat",
    description:
      "ManyChat transforma o Instagram e o Messenger em canal de aquisição ativo. Lead comenta no post, manda uma palavra-chave ou clica no botão do anúncio — o fluxo começa na hora, captura o contato e distribui para o funil certo. Sem depender de ninguém monitorar a caixa de entrada.",
    items: [
      "Fluxos de DM automáticos por palavra-chave, comentário ou clique em anúncio",
      "Captura de nome, email e telefone direto na conversa do Instagram ou Messenger",
      "Campanhas de broadcast segmentadas por tag, interesse e estágio no funil",
      "Sequências de nutrição com mensagens espaçadas por comportamento do contato",
      "Integração com CRM para sincronizar contatos e histórico de interação",
      "Fluxos de reativação de lead frio com gatilho por tempo de inatividade",
    ],
    highlight: "Comentário em post é intenção de compra. A maioria deixa isso passar sem responder.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          O que construímos
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight max-w-3xl mx-auto leading-tight">
          O que eu construo{" "}
          <span className="gradient-text">na sua operação</span>
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-16 text-lg">
          Cada peça conectada à próxima. CRM, automações, rastreamento, IA e integração de ferramentas — tudo rodando junto, não em paralelo.
        </p>

        <div className="space-y-6 md:space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 md:p-8 lg:p-10 group hover:border-[rgba(147,51,234,0.5)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col gap-4 mb-6 md:mb-8">
                {/* Ícone + tag sempre em linha */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center flex-shrink-0 group-hover:from-[#9333ea]/50 transition-all">
                    <s.icon size={22} className="text-[#d946ef] md:hidden" />
                    <s.icon size={26} className="text-[#d946ef] hidden md:block" />
                  </div>
                  <span className="text-[#9333ea] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[rgba(147,51,234,0.3)] bg-[rgba(147,51,234,0.08)]">
                    {s.tag}
                  </span>
                </div>
                {/* Título + descrição abaixo do ícone em tablet/mobile, lado a lado só em lg */}
                <div className="lg:pl-0">
                  <h3 className="text-white font-black text-lg md:text-xl lg:text-2xl mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-violet-200/65 text-sm md:text-[0.9rem] lg:text-base leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(147,51,234,0.15)] mb-6 md:mb-8" />

              {/* Items — 1 col mobile, 2 col tablet e acima */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 mb-6 md:mb-8">
                {s.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#d946ef]" />
                    <span className="text-violet-200/70 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight quote */}
              <div className="rounded-xl bg-[rgba(147,51,234,0.08)] border border-[rgba(147,51,234,0.2)] px-5 md:px-6 py-4">
                <p className="text-violet-200 text-sm font-medium italic leading-relaxed">
                  &ldquo;{s.highlight}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(147,51,234,0.4)] text-violet-200 hover:text-white hover:border-[rgba(147,51,234,0.7)] hover:bg-[rgba(147,51,234,0.1)] transition-all duration-200 text-sm font-medium"
          >
            Quero ver o que está faltando na minha operação
          </a>
        </div>
      </div>
    </section>
  );
}
