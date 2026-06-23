import {
  type LucideIcon,
  Crosshair,
  BarChart3,
  DollarSign,
  Target,
  Megaphone,
  Radar,
  Search,
  Wrench,
  LineChart,
  Filter,
  Users,
  TrendingDown,
  GitBranch,
  Repeat,
  Layers,
  Zap,
  MessageSquare,
  Bell,
  Clock,
  BrainCircuit,
  UserCheck,
  CalendarCheck,
  GitMerge,
  MessageCircle,
} from "lucide-react";

export interface Heading {
  a: string;
  em?: string;
  b?: string;
}

export interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step extends IconItem {
  step: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  badge: string;
  hero: {
    h1: Heading;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    assurance: string;
  };
  problem: { h2: string; sub: string; items: IconItem[] };
  deliverables: { h2: Heading; sub: string; items: IconItem[]; outcome: string };
  process: { h2: Heading; sub: string; steps: Step[] };
  faq: { h2: string; sub: string; items: FaqItem[] };
  cta: { h2: Heading; sub: string };
  form: {
    servico: string;
    desafioLabel: string;
    desafioPlaceholder: string;
    checkbox?: { label: string; options: string[] };
  };
  successMessage: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  schema: {
    serviceName: string;
    serviceType: string;
    serviceDescription: string;
    audienceType: string;
    offerName: string;
    offerDescription: string;
    breadcrumbName: string;
  };
}

const BASE_URL = "https://www.ojuliocarvalho.com";

export const servicesData: Record<string, ServiceData> = {
  "trafego-pago": {
    slug: "trafego-pago",
    badge: "Gestão de Tráfego Pago · Meta · Google · TikTok",
    hero: {
      h1: { a: "Seu problema não é a verba. É a ", em: "estrutura", b: " por trás das campanhas." },
      sub: "Tráfego rodando e resultado parado é quase sempre estrutura, não orçamento. Eu cuido das suas campanhas no Meta, Google e TikTok com o sistema completo por trás: rastreamento, funil, oferta e dados. Mais resultado pela mesma verba.",
      ctaPrimary: "Quero diagnóstico das minhas campanhas",
      ctaSecondary: "Ver o que está incluído",
      assurance: "Diagnóstico gratuito. Você sai sabendo o que está furado nas suas campanhas, mesmo que não trabalhemos juntos.",
    },
    problem: {
      h2: "Verba subindo, resultado parado",
      sub: "Quase todo negócio que tenta escalar trava pelos mesmos motivos. Reconhece algum?",
      items: [
        { icon: Crosshair, title: "Público e oferta no chute", description: "Campanha no ar sem teste estruturado de público, criativo e oferta. Você descobre o que funciona no susto, queimando verba até acertar por sorte." },
        { icon: BarChart3, title: "Você não sabe o que realmente vende", description: "Sem rastreamento confiável, o gerenciador mostra um número e o caixa mostra outro. Decisão de escala vira aposta no escuro." },
        { icon: DollarSign, title: "Escala que multiplica o desperdício", description: "Aumentar orçamento em cima de estrutura furada só acelera a queima. O custo por resultado sobe e a margem some." },
      ],
    },
    deliverables: {
      h2: { a: "Campanhas com ", em: "sistema por trás" },
      sub: "Não é só subir anúncio. É a operação inteira que faz a campanha performar.",
      items: [
        { icon: Target, title: "Estrutura de campanha e testes", description: "Arquitetura de campanhas por objetivo, testes de público, criativo e oferta com método, e escala baseada em dado, não em achismo." },
        { icon: Megaphone, title: "Criativo e ângulo de oferta", description: "Direcionamento dos criativos e ângulos que conversam com cada etapa de consciência do público, do topo ao fundo de funil." },
        { icon: Radar, title: "Rastreamento e atribuição", description: "Pixel, GTM e API de Conversões configurados para o algoritmo otimizar com dado limpo e você saber de onde vem cada venda." },
        { icon: BarChart3, title: "Leitura de dados e otimização", description: "Acompanhamento dos números que importam (CPA, ROAS, CPL) e otimização contínua para o mesmo orçamento render mais." },
      ],
      outcome: "O objetivo é direto: transformar verba em previsibilidade. Campanha que escala porque tem estrutura, rastreamento e funil rodando juntos, não anúncio solto torcendo por resultado.",
    },
    process: {
      h2: { a: "Três etapas, ", em: "sem enrolação" },
      sub: "Implementação objetiva. Sem onboarding de semanas, sem relatório que vira gaveta.",
      steps: [
        { icon: Search, step: "01", title: "Diagnóstico da operação", description: "Analiso suas campanhas, rastreamento, funil e números atuais. Você recebe a leitura exata do que está travando o resultado e onde está o dinheiro escorrendo." },
        { icon: Wrench, step: "02", title: "Estruturação e subida", description: "Monto a arquitetura de campanhas, conecto o rastreamento e a oferta e coloco no ar com testes desenhados para encontrar o que escala rápido." },
        { icon: LineChart, step: "03", title: "Otimização e escala", description: "Leitura contínua dos dados, corte do que não performa e escala do que funciona, com previsibilidade de custo por resultado e volume." },
      ],
    },
    faq: {
      h2: "Antes de preencher, leia isso",
      sub: "O que costumam perguntar antes de começar.",
      items: [
        { q: "Você trabalha com lançamento e perpétuo?", a: "Sim. Atendo tanto operações de lançamento (com janelas e picos de investimento) quanto perpétuos e negócios de venda recorrente. A estrutura muda, o método de teste e leitura de dados é o mesmo." },
        { q: "Quais plataformas você gerencia?", a: "Meta (Facebook e Instagram), Google Ads e TikTok. A escolha depende de onde está o seu público e do objetivo, definido no diagnóstico." },
        { q: "Qual o investimento mínimo em mídia?", a: "Não trabalho com número mágico. O que importa é a operação ter margem para testar e escalar. No diagnóstico eu te falo com sinceridade se faz sentido começar agora." },
        { q: "Você também cuida do rastreamento?", a: "Sim, e isso faz parte do diferencial. Gestão de tráfego sem rastreamento confiável é decisão no escuro. Configuro pixel, GTM e API de Conversões para o algoritmo e você terem dado limpo." },
        { q: "Em quanto tempo vejo resultado?", a: "Os primeiros dados de teste aparecem nos primeiros dias. Escala com previsibilidade vem depois da fase de aprendizado, normalmente nas primeiras semanas. Tráfego sério é construção, não sorte de uma campanha." },
        { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário, a gente conversa por WhatsApp ou call, e eu te dou uma leitura honesta do que está travando suas campanhas e o que priorizar. Sem pitch e sem pressão." },
      ],
    },
    cta: {
      h2: { a: "Descubra o que está ", em: "travando suas campanhas" },
      sub: "Preencha abaixo. Diagnóstico direto e gratuito das suas campanhas e do que está fazendo você pagar mais caro por resultado.",
    },
    form: {
      servico: "Tráfego Pago",
      desafioLabel: "O que está acontecendo com suas campanhas hoje? *",
      desafioPlaceholder: "Ex.: invisto mas o custo por lead subiu, não sei se o resultado é real, quero escalar mas trava...",
      checkbox: { label: "Onde você anuncia (ou quer anunciar)? *", options: ["Meta / Facebook", "Google Ads", "TikTok", "Ainda não anuncio"] },
    },
    successMessage: "Julio entrará em contato em breve pelo WhatsApp com o diagnóstico das suas campanhas.",
    meta: {
      title: "Gestor de Tráfego Pago para Lançamentos e Perpétuos | Julio Carvalho",
      description: "Gestão de tráfego pago no Meta, Google e TikTok com o sistema completo por trás: rastreamento, funil e dados. Mais resultado pela mesma verba. Diagnóstico gratuito.",
      keywords: ["gestor de tráfego pago", "gestão de tráfego", "tráfego pago para lançamentos", "tráfego pago perpétuo", "gestor de tráfego Meta Ads", "gestor de Google Ads", "TikTok Ads", "consultoria de tráfego pago", "escalar campanhas", "gestor de tráfego para infoproduto"],
      ogTitle: "Gestão de Tráfego Pago com sistema por trás | Julio Carvalho",
      ogDescription: "Campanhas no Meta, Google e TikTok com rastreamento, funil e dados rodando juntos. Mais resultado pela mesma verba. Diagnóstico gratuito.",
    },
    schema: {
      serviceName: "Gestão de Tráfego Pago",
      serviceType: "Gestão de tráfego pago e mídia paga",
      serviceDescription: "Gestão de campanhas de tráfego pago no Meta Ads, Google Ads e TikTok Ads para lançamentos e perpétuos, com estrutura de testes, rastreamento avançado (pixel, GTM, API de Conversões), leitura de dados e otimização para reduzir custo por lead e escalar com previsibilidade.",
      audienceType: "Empresas e produtores que investem em tráfego pago e querem escalar com previsibilidade",
      offerName: "Diagnóstico de campanhas gratuito",
      offerDescription: "Leitura direta do que está travando suas campanhas e o que priorizar para reduzir custo por resultado.",
      breadcrumbName: "Gestão de Tráfego Pago",
    },
  },

  crm: {
    slug: "crm",
    badge: "Estruturação de CRM e funil de vendas",
    hero: {
      h1: { a: "Seu CRM é uma ", em: "agenda glorificada", b: ". Devia ser uma máquina de vendas." },
      sub: "Lead entra, ninguém sabe de onde veio nem para onde vai. Sem etapa, sem qualificação, sem régua de relacionamento. Eu reestruturo seu CRM para cada contato ter um destino e nenhuma venda esfriar no caminho.",
      ctaPrimary: "Quero organizar meu funil",
      ctaSecondary: "Ver o que está incluído",
      assurance: "Diagnóstico gratuito. Você sai enxergando exatamente onde seus leads estão se perdendo, mesmo que não trabalhemos juntos.",
    },
    problem: {
      h2: "Lead não falta. Organização, sim.",
      sub: "A maioria perde venda dentro de casa, não na captação. Reconhece algum?",
      items: [
        { icon: Filter, title: "Lead sem etapa nem critério", description: "Contatos jogados numa lista sem pipeline, sem fase de qualificação e sem critério de avanço. Ninguém sabe quem está perto de comprar." },
        { icon: Users, title: "Time vendendo no escuro", description: "Sem histórico e sem contexto no CRM, cada vendedor faz do seu jeito. Follow-up esquecido, lead quente tratado igual ao frio." },
        { icon: TrendingDown, title: "Lead esfria e some", description: "Sem régua de relacionamento e resgate, o contato que não comprou na hora simplesmente desaparece. Dinheiro que entrou pela porta e saiu pela janela." },
      ],
    },
    deliverables: {
      h2: { a: "Um funil que ", em: "trabalha por você" },
      sub: "Não é só configurar uma ferramenta. É o processo comercial desenhado dentro dela.",
      items: [
        { icon: GitBranch, title: "Pipeline com etapas claras", description: "Funil mapeado e reestruturado no CRM, com fases, critérios de avanço e SLA por etapa. Todo lead sabe onde está e para onde vai." },
        { icon: Filter, title: "Segmentação e qualificação", description: "Leads separados por fonte, comportamento e estágio de compra, com qualificação que entrega ao comercial só quem está pronto." },
        { icon: Repeat, title: "Régua de relacionamento", description: "Sequências automatizadas de nutrição e resgate por perfil de lead, para nenhum contato esfriar por falta de toque." },
        { icon: Layers, title: "Integração com tráfego e dados", description: "CRM conectado ao tráfego pago e ao rastreamento para fechar o ciclo de atribuição: você vê qual campanha gera venda, não só lead." },
      ],
      outcome: "O objetivo é direto: transformar o CRM de arquivo morto em processo de vendas. Cada lead com destino, cada etapa com critério e o time sabendo exatamente o que fazer.",
    },
    process: {
      h2: { a: "Três etapas, ", em: "sem enrolação" },
      sub: "Implementação objetiva, dentro da sua ferramenta, sem onboarding eterno.",
      steps: [
        { icon: Search, step: "01", title: "Diagnóstico do funil", description: "Mapeio como seus leads entram, circulam e se perdem hoje. Você recebe a leitura clara de onde está vazando venda." },
        { icon: Wrench, step: "02", title: "Estruturação do CRM", description: "Monto o pipeline, as etapas, a segmentação e as automações de relacionamento dentro da sua ferramenta, integrado ao tráfego." },
        { icon: LineChart, step: "03", title: "Operação e ajuste", description: "Deixo o processo rodando com o time orientado e acompanho os números do funil para corrigir gargalos e taxas de conversão por etapa." },
      ],
    },
    faq: {
      h2: "Antes de preencher, leia isso",
      sub: "O que costumam perguntar antes de começar.",
      items: [
        { q: "Funciona com qual CRM?", a: "Trabalho com os principais do mercado (RD Station, HubSpot, Pipedrive, Kommo, GoHighLevel e outros). Se você ainda não tem, ajudo a escolher o que faz sentido para o seu tamanho e orçamento." },
        { q: "Preciso trocar de ferramenta?", a: "Na maioria das vezes não. Reestruturo o que você já usa. Só recomendo troca se a ferramenta atual estiver limitando o crescimento, e explico o porquê." },
        { q: "Vocês também fazem as automações?", a: "Sim. A estruturação do CRM já inclui as automações de qualificação, nutrição e resgate. Se precisar de fluxos mais avançados, complemento com o serviço de automações." },
        { q: "Isso conecta com meu tráfego pago?", a: "Sim, e é onde está o ganho maior. Integro o CRM ao rastreamento para você ver qual campanha gerou venda de verdade, não só clique e lead." },
        { q: "Quanto tempo leva?", a: "Depende do tamanho da operação, mas é entrega objetiva: semanas, não meses. O diagnóstico define o escopo exato." },
        { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário, a gente conversa, e eu te mostro onde seus leads estão se perdendo e o que organizar primeiro. Sem pitch e sem pressão." },
      ],
    },
    cta: {
      h2: { a: "Pare de perder venda ", em: "dentro de casa" },
      sub: "Preencha abaixo. Diagnóstico direto e gratuito de onde seu funil está vazando e o que estruturar primeiro.",
    },
    form: {
      servico: "CRM",
      desafioLabel: "Como está seu CRM e seu funil hoje? *",
      desafioPlaceholder: "Ex.: uso planilha, leads se perdem, não tenho follow-up, não sei qual campanha gera venda...",
      checkbox: { label: "Você já usa algum CRM? *", options: ["Sim, mas desorganizado", "Uso planilha", "Não uso nada", "Não sei dizer"] },
    },
    successMessage: "Julio entrará em contato em breve pelo WhatsApp com o diagnóstico do seu funil de vendas.",
    meta: {
      title: "Estruturação de CRM e Funil de Vendas | Julio Carvalho",
      description: "Transformo seu CRM de agenda em máquina de vendas: pipeline, qualificação, régua de relacionamento e integração com tráfego pago. Diagnóstico gratuito.",
      keywords: ["estruturação de CRM", "funil de vendas", "pipeline de vendas", "automação de CRM", "RD Station", "HubSpot", "Pipedrive", "Kommo", "integração CRM tráfego pago", "qualificação de leads"],
      ogTitle: "Estruturação de CRM e Funil de Vendas | Julio Carvalho",
      ogDescription: "Pipeline, qualificação, régua de relacionamento e integração com tráfego. Cada lead com destino. Diagnóstico gratuito.",
    },
    schema: {
      serviceName: "Estruturação de CRM e funil de vendas",
      serviceType: "Consultoria e implementação de CRM",
      serviceDescription: "Estruturação de CRM e funil de vendas: mapeamento e reestruturação do pipeline, etapas com critérios e SLA, segmentação e qualificação de leads, régua de relacionamento automatizada e integração do CRM com o tráfego pago e o rastreamento para fechar o ciclo de atribuição.",
      audienceType: "Empresas que geram leads e querem organizar o funil para fechar mais vendas",
      offerName: "Diagnóstico de funil gratuito",
      offerDescription: "Leitura direta de onde seus leads estão se perdendo e o que estruturar primeiro no CRM.",
      breadcrumbName: "Estruturação de CRM",
    },
  },

  automacoes: {
    slug: "automacoes",
    badge: "Automações de marketing e vendas",
    hero: {
      h1: { a: "Seu time perde tempo no que uma ", em: "automação resolve", b: " sozinha." },
      sub: "Qualificar lead na mão, mover etapa manualmente, lembrar de fazer follow-up. Tudo isso pode rodar sozinho. Eu construo as automações que trabalham enquanto você dorme e entregam o lead pronto para o comercial.",
      ctaPrimary: "Quero automatizar minha operação",
      ctaSecondary: "Ver o que está incluído",
      assurance: "Diagnóstico gratuito. Você sai sabendo o que dá para automatizar hoje na sua operação, mesmo que não trabalhemos juntos.",
    },
    problem: {
      h2: "Trabalho manual que escala o caos",
      sub: "Quanto mais a operação cresce, mais o manual trava. Reconhece algum?",
      items: [
        { icon: Users, title: "Time qualificando lead na mão", description: "Vendedor gastando hora separando lead bom de curioso. Tempo que deveria ser de fechamento virando triagem manual." },
        { icon: Clock, title: "Lead esperando resposta", description: "Contato chega fora do horário, no fim de semana, e espera. Quando alguém responde, o interesse esfriou e o concorrente já falou." },
        { icon: Bell, title: "Follow-up que depende de memória", description: "Sem gatilho automático, o follow-up depende de alguém lembrar. E o que depende de memória uma hora falha e custa venda." },
      ],
    },
    deliverables: {
      h2: { a: "Operação que ", em: "roda sozinha" },
      sub: "Automação de verdade não é mandar e-mail em sequência. É o processo certo disparando na hora certa.",
      items: [
        { icon: Zap, title: "Qualificação automática", description: "Fluxos que qualificam o lead por comportamento (clique, abertura, visita, resposta) e entregam ao comercial só quem está pronto para conversar." },
        { icon: MessageSquare, title: "WhatsApp + CRM integrados", description: "Roteamento inteligente de conversas por score e etapa, com o lead caindo no lugar certo e o histórico salvo automaticamente no CRM." },
        { icon: Repeat, title: "Nutrição e resgate de lead frio", description: "Sequências segmentadas por persona e estágio do funil, com gatilho de resgate por inatividade para reativar contato que esfriou." },
        { icon: Bell, title: "Notificações com contexto", description: "O time de vendas avisado no momento certo, com o contexto completo do lead, sem ninguém precisar monitorar caixa de entrada." },
      ],
      outcome: "O objetivo é direto: tirar da mão tudo que não precisa de gente. O time foca em fechar, a operação escala sem virar caos e nenhum lead fica sem resposta.",
    },
    process: {
      h2: { a: "Três etapas, ", em: "sem enrolação" },
      sub: "Do mapeamento ao fluxo no ar, sem complexidade desnecessária.",
      steps: [
        { icon: Search, step: "01", title: "Diagnóstico dos processos", description: "Mapeio o que sua operação faz na mão hoje e onde isso trava ou perde lead. Você recebe a lista do que dá para automatizar com mais impacto." },
        { icon: Wrench, step: "02", title: "Construção dos fluxos", description: "Monto as automações de qualificação, roteamento, nutrição e resgate, integradas ao seu CRM e ao WhatsApp, testadas ponta a ponta." },
        { icon: LineChart, step: "03", title: "Ativação e refinamento", description: "Coloco os fluxos para rodar e acompanho os gatilhos e as taxas, ajustando para a automação converter mais sem perder o tom humano." },
      ],
    },
    faq: {
      h2: "Antes de preencher, leia isso",
      sub: "O que costumam perguntar antes de começar.",
      items: [
        { q: "Que ferramentas você usa?", a: "Depende da operação: n8n, Make, ManyChat, automações nativas do CRM, integrações com WhatsApp API e outras. Escolho a stack pelo que resolve com menos complexidade e custo." },
        { q: "Funciona com ManyChat e Instagram?", a: "Sim. Monto fluxos de DM automáticos no Instagram e Messenger por palavra-chave, comentário ou clique em anúncio, capturando o contato direto na conversa." },
        { q: "Automação não deixa o atendimento robótico?", a: "Quando mal feita, deixa. Eu construo a automação para fazer o trabalho repetitivo e passar para o humano no momento certo, com contexto. O cliente sente agilidade, não robô." },
        { q: "Preciso ter CRM antes?", a: "Ajuda muito, porque a automação fica mais poderosa conectada ao funil. Se você não tem, dá para começar pelo básico ou estruturar o CRM junto." },
        { q: "Quanto tempo para colocar no ar?", a: "Fluxos essenciais saem em dias. Operações mais completas, algumas semanas. O diagnóstico define a prioridade e o escopo." },
        { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário, a gente conversa, e eu te mostro o que dá para automatizar com mais retorno na sua operação. Sem pitch e sem pressão." },
      ],
    },
    cta: {
      h2: { a: "Tire da mão o que ", em: "a máquina faz melhor" },
      sub: "Preencha abaixo. Diagnóstico direto e gratuito do que dá para automatizar hoje para sua operação escalar sem virar caos.",
    },
    form: {
      servico: "Automações",
      desafioLabel: "O que sua operação ainda faz na mão hoje? *",
      desafioPlaceholder: "Ex.: qualifico lead manualmente, follow-up depende de lembrar, lead espera resposta, quero integrar WhatsApp e CRM...",
      checkbox: { label: "O que você quer automatizar? *", options: ["Qualificação de leads", "Follow-up / nutrição", "Atendimento no WhatsApp", "Instagram / ManyChat"] },
    },
    successMessage: "Julio entrará em contato em breve pelo WhatsApp com o diagnóstico do que dá para automatizar na sua operação.",
    meta: {
      title: "Automações de Marketing e Vendas | Julio Carvalho",
      description: "Construo automações que qualificam leads, integram WhatsApp e CRM, nutrem e resgatam contatos. Sua operação rodando sozinha. Diagnóstico gratuito.",
      keywords: ["automação de marketing", "automação de vendas", "automação de WhatsApp", "ManyChat", "n8n", "Make", "automação de CRM", "qualificação automática de leads", "nutrição de leads", "integração WhatsApp CRM"],
      ogTitle: "Automações de Marketing e Vendas | Julio Carvalho",
      ogDescription: "Qualificação, WhatsApp + CRM, nutrição e resgate de leads no automático. Operação que roda sozinha. Diagnóstico gratuito.",
    },
    schema: {
      serviceName: "Automações de marketing e vendas",
      serviceType: "Implementação de automações",
      serviceDescription: "Construção de automações de marketing e vendas: qualificação automática de leads por comportamento, integração de WhatsApp e CRM com roteamento por score, sequências de nutrição e resgate de lead frio, fluxos de ManyChat para Instagram e Messenger e notificações internas com contexto para o time comercial.",
      audienceType: "Empresas que querem escalar a operação sem aumentar a equipe na mesma proporção",
      offerName: "Diagnóstico de automação gratuito",
      offerDescription: "Leitura direta do que dá para automatizar na sua operação com mais retorno.",
      breadcrumbName: "Automações",
    },
  },

  "agentes-ia": {
    slug: "agentes-ia",
    badge: "Agentes de IA para vendas e atendimento",
    hero: {
      h1: { a: "Um vendedor de IA que ", em: "não dorme", b: ", qualifica e agenda por você." },
      sub: "Não é chatbot de FAQ. É um agente treinado com o seu produto, suas objeções e o seu processo. Responde em segundos, qualifica pelo seu critério, agenda direto na agenda do time e entrega o lead quente para o comercial.",
      ctaPrimary: "Quero um agente de IA",
      ctaSecondary: "Ver o que está incluído",
      assurance: "Diagnóstico gratuito. Você sai entendendo onde a IA encaixa na sua operação, mesmo que não trabalhemos juntos.",
    },
    problem: {
      h2: "Lead quente esfria esperando atendimento",
      sub: "Velocidade de resposta decide venda. Reconhece algum?",
      items: [
        { icon: Clock, title: "Resposta que demora horas", description: "Lead chega às 23h, no fim de semana, no meio do almoço. Quando alguém responde, ele já falou com o concorrente ou perdeu o interesse." },
        { icon: Users, title: "Time afogado em curioso", description: "Vendedor gastando o dia respondendo quem nunca vai comprar, enquanto o lead bom espera na fila do atendimento." },
        { icon: MessageCircle, title: "Atendimento sem padrão", description: "Cada conversa conduzida de um jeito, objeção respondida na sorte, sem qualificação e sem registro. Venda que depende do dia do vendedor." },
      ],
    },
    deliverables: {
      h2: { a: "Um agente que ", em: "vende enquanto você dorme" },
      sub: "Treinado no seu processo. Não é resposta pronta, é condução de venda.",
      items: [
        { icon: BrainCircuit, title: "Agente treinado no seu negócio", description: "IA alimentada com seu produto, roteiro de vendas e objeções, conduzindo a conversa do jeito que o seu melhor vendedor conduziria." },
        { icon: UserCheck, title: "Qualificação por critério", description: "Faz as perguntas certas, analisa as respostas e classifica o lead pelo critério que você define. Só o que está pronto chega no comercial." },
        { icon: CalendarCheck, title: "Agendamento automático", description: "Marca a reunião direto no Google Calendar ou Calendly, sem troca de mensagem manual, e confirma com o lead." },
        { icon: GitMerge, title: "Handoff com contexto", description: "Quando passa para o humano, entrega o resumo da conversa e o score do lead e atualiza a etapa no CRM automaticamente." },
      ],
      outcome: "O objetivo é direto: atender na hora, qualificar sem viés e entregar o lead quente com contexto, 24 horas por dia, no WhatsApp, Instagram e Messenger. O comercial só entra quando vale a pena entrar.",
    },
    process: {
      h2: { a: "Três etapas, ", em: "sem enrolação" },
      sub: "Do treino do agente ao atendimento no ar, validado conversa a conversa.",
      steps: [
        { icon: Search, step: "01", title: "Diagnóstico do atendimento", description: "Entendo seu processo de vendas, suas objeções e onde o atendimento trava hoje. Defino onde a IA gera mais retorno." },
        { icon: Wrench, step: "02", title: "Treino e construção do agente", description: "Treino o agente com seu produto, roteiro e critério de qualificação, integro ao WhatsApp/Instagram, à agenda e ao CRM, e testo conversa a conversa." },
        { icon: LineChart, step: "03", title: "Ativação e refinamento", description: "Coloco o agente para atender e acompanho as conversas, ajustando respostas, qualificação e tom para a IA converter mais sem parecer robô." },
      ],
    },
    faq: {
      h2: "Antes de preencher, leia isso",
      sub: "O que costumam perguntar antes de começar.",
      items: [
        { q: "É o mesmo que um chatbot?", a: "Não. Chatbot segue árvore de regras e trava fácil. O agente usa IA (LLM) treinada no seu contexto, entende linguagem natural, contorna objeção e conduz a conversa como um vendedor." },
        { q: "Em quais canais funciona?", a: "WhatsApp, Instagram Direct e Messenger, principalmente. Dá para colocar também no site. O agente atende 24/7 em todos ao mesmo tempo." },
        { q: "A IA vai inventar resposta?", a: "Ela é configurada com limites e base de conhecimento do seu negócio, justamente para responder dentro do que é verdade e passar para o humano quando não tem certeza. Atendimento controlado, não solto." },
        { q: "Conecta com meu CRM e minha agenda?", a: "Sim. Integro com Google Calendar ou Calendly para agendar e com o seu CRM para registrar a conversa, o score e mover a etapa automaticamente." },
        { q: "Quanto tempo para o agente ir ao ar?", a: "Um agente funcional sai em dias. O refino fino (objeções, tom, qualificação) acontece nas primeiras semanas de uso real. O diagnóstico define o escopo." },
        { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário, a gente conversa, e eu te mostro onde a IA encaixa na sua operação e o retorno esperado. Sem pitch e sem pressão." },
      ],
    },
    cta: {
      h2: { a: "Atenda na hora e ", em: "qualifique sozinho" },
      sub: "Preencha abaixo. Diagnóstico direto e gratuito de onde um agente de IA encaixa na sua operação e quanto pode te economizar de tempo e venda.",
    },
    form: {
      servico: "Agentes de IA",
      desafioLabel: "Como é seu atendimento e vendas hoje? *",
      desafioPlaceholder: "Ex.: lead espera resposta, time afogado, quero qualificar e agendar no automático, atender 24h...",
      checkbox: { label: "Onde você quer o agente? *", options: ["WhatsApp", "Instagram Direct", "Messenger", "Site"] },
    },
    successMessage: "Julio entrará em contato em breve pelo WhatsApp com o diagnóstico de onde a IA encaixa na sua operação.",
    meta: {
      title: "Agentes de IA para Vendas e Atendimento | Julio Carvalho",
      description: "Agentes de IA que atendem 24/7, qualificam pelo seu critério, agendam reuniões e entregam o lead quente no WhatsApp, Instagram e Messenger. Diagnóstico gratuito.",
      keywords: ["agente de IA", "agentes de IA para vendas", "IA para atendimento", "chatbot com IA", "qualificação de leads com IA", "agente de IA WhatsApp", "atendimento automático", "SDR de IA", "IA para vendas"],
      ogTitle: "Agentes de IA para Vendas e Atendimento | Julio Carvalho",
      ogDescription: "Atende 24/7, qualifica pelo seu critério, agenda e entrega o lead quente. WhatsApp, Instagram e Messenger. Diagnóstico gratuito.",
    },
    schema: {
      serviceName: "Agentes de IA para vendas e atendimento",
      serviceType: "Desenvolvimento de agentes de IA",
      serviceDescription: "Criação de agentes de IA para vendas e atendimento treinados com o produto, roteiro de vendas e objeções do negócio, com qualificação automática por critério, agendamento de reuniões integrado ao Google Calendar ou Calendly, handoff para humano com resumo e score, e atendimento 24/7 no WhatsApp, Instagram Direct e Messenger.",
      audienceType: "Empresas que recebem volume de leads e querem atender e qualificar na hora, 24 horas por dia",
      offerName: "Diagnóstico de IA gratuito",
      offerDescription: "Leitura direta de onde um agente de IA encaixa na sua operação e o retorno esperado.",
      breadcrumbName: "Agentes de IA",
    },
  },
};

export const serviceSlugs = Object.keys(servicesData);

export function buildServiceSchemas(data: ServiceData) {
  const url = `${BASE_URL}/${data.slug}`;
  return {
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: data.schema.serviceName,
      serviceType: data.schema.serviceType,
      description: data.schema.serviceDescription,
      provider: { "@type": "Person", "@id": `${BASE_URL}/#person`, name: "Julio Carvalho" },
      areaServed: { "@type": "Country", name: "Brasil" },
      audience: { "@type": "Audience", audienceType: data.schema.audienceType },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        name: data.schema.offerName,
        description: data.schema.offerDescription,
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: data.schema.breadcrumbName, item: url },
      ],
    },
  };
}
