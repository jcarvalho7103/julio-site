import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OrcamentoTrafegoCalculator from "@/components/tools/OrcamentoTrafegoCalculator";

const canonical =
  "https://www.ojuliocarvalho.com/ferramentas/calculadora-orcamento-de-trafego";

export const metadata: Metadata = {
  title:
    "Calculadora de Orçamento de Tráfego | Quanto investir para bater a meta",
  description:
    "Descubra quanto investir em tráfego pago para bater sua meta de faturamento. Calcule vendas, leads, orçamento de mídia, investimento diário e ROAS projetado.",
  keywords: [
    "calculadora de orçamento de tráfego",
    "quanto investir em trafego pago",
    "orçamento de mídia",
    "calculadora de leads",
    "ROAS projetado",
    "custo por lead",
    "meta de faturamento",
    "tráfego pago",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Calculadora de Orçamento de Tráfego",
    description:
      "Dimensione a verba de tráfego pago necessária para bater sua meta de faturamento. Grátis e em tempo real.",
    url: canonical,
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Orçamento de Tráfego",
  description:
    "Ferramenta gratuita para calcular quanto investir em tráfego pago e bater a meta de faturamento, com base em ticket médio, taxa de conversão e CPL.",
  url: canonical,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  author: {
    "@type": "Person",
    name: "Julio Carvalho",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como calcular quanto investir em tráfego pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divida a meta de faturamento pelo ticket médio para achar o número de vendas. Divida as vendas pela taxa de conversão de lead em venda para achar os leads necessários. Multiplique os leads pelo custo por lead (CPL) e você tem o orçamento de mídia necessário para o período.",
      },
    },
    {
      "@type": "Question",
      name: "O que é ROAS projetado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROAS projetado é a razão entre a meta de faturamento e o orçamento de mídia estimado. Um ROAS de 5x significa que, para cada R$ 1 investido em anúncios, você projeta R$ 5 de faturamento. É um indicador de viabilidade do plano de verba.",
      },
    },
    {
      "@type": "Question",
      name: "Como estimar o investimento diário em anúncios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O investimento diário é o orçamento de mídia do período dividido pelo número de dias. A calculadora usa uma base de 30 dias, então basta dividir o orçamento total por 30 para saber quanto colocar por dia nas campanhas.",
      },
    },
    {
      "@type": "Question",
      name: "A calculadora de orçamento de tráfego é gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A ferramenta é 100% gratuita, funciona direto no navegador e recalcula os resultados em tempo real conforme você digita os números do seu negócio.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.ojuliocarvalho.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ferramentas",
      item: "https://www.ojuliocarvalho.com/ferramentas",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Calculadora de Orçamento de Tráfego",
      item: canonical,
    },
  ],
};

export default function Page() {
  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-4xl">
          <nav aria-label="Trilha de navegação" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-violet-300/60">
              <li>
                <Link href="/" className="hover:text-violet-200 transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/ferramentas"
                  className="hover:text-violet-200 transition-colors"
                >
                  Ferramentas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-violet-200/80">
                Calculadora de Orçamento de Tráfego
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Calculadora de <span className="gradient-text">Orçamento de Tráfego</span>
          </h1>
          <p className="text-lg text-violet-200/70 max-w-2xl">
            Descubra em segundos quanto você precisa investir em tráfego pago para
            bater a meta de faturamento. Informe seus números e veja vendas, leads,
            orçamento de mídia, investimento diário e ROAS projetado.
          </p>

          <OrcamentoTrafegoCalculator />

          <section className="prose-invert max-w-none mt-12 space-y-10 text-violet-200/70 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-display text-white">
                O que é a calculadora de orçamento de tráfego
              </h2>
              <p>
                Todo gestor de tráfego e dono de negócio já se fez a mesma pergunta
                antes de subir uma campanha: quanto preciso investir para chegar na
                meta? Essa calculadora responde exatamente isso. Em vez de chutar
                verba, você parte da meta de faturamento e caminha de trás para
                frente até o orçamento de mídia, transformando um objetivo comercial
                em um plano de investimento claro.
              </p>
              <p>
                A ferramenta é útil no planejamento de um novo mês, na definição de
                budget para um lançamento ou na hora de justificar a verba de
                anúncios para o cliente ou para a diretoria. Como o cálculo é
                transparente, fica fácil enxergar qual alavanca mexer quando o número
                final não fecha.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display text-white">
                Como calcular passo a passo
              </h2>
              <p>
                O raciocínio segue uma cascata simples, partindo da meta e chegando
                na verba diária:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Vendas necessárias</strong> = meta de
                  faturamento dividida pelo ticket médio. Se a meta é R$ 50.000 e cada
                  venda vale R$ 500, você precisa de 100 vendas.
                </li>
                <li>
                  <strong className="text-white">Leads necessários</strong> = vendas
                  divididas pela taxa de conversão de lead em venda. Com 100 vendas e
                  10% de conversão, são 1.000 leads.
                </li>
                <li>
                  <strong className="text-white">Orçamento de mídia</strong> = leads
                  multiplicados pelo custo por lead (CPL). Mil leads a R$ 8 cada
                  resultam em R$ 8.000 de verba.
                </li>
                <li>
                  <strong className="text-white">Investimento diário</strong> =
                  orçamento de mídia dividido por 30 dias. No exemplo, cerca de R$ 267
                  por dia.
                </li>
                <li>
                  <strong className="text-white">ROAS projetado</strong> = meta de
                  faturamento dividida pelo orçamento de mídia. Aqui, R$ 50.000
                  divididos por R$ 8.000 dão um ROAS de 6,3x.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display text-white">
                Como interpretar os resultados
              </h2>
              <p>
                O orçamento de mídia é o número que dimensiona a campanha, mas o ROAS
                projetado é o que diz se o plano faz sentido. Um ROAS confortável, com
                margem para cobrir custos operacionais e produto, indica um cenário
                saudável. Um ROAS muito baixo é um alerta de que o custo de aquisição
                está comendo a margem antes mesmo de você subir o primeiro anúncio.
              </p>
              <p>
                Use os campos como um simulador. Melhorar a taxa de conversão da equipe
                comercial reduz os leads necessários e derruba a verba. Baixar o CPL
                com criativos e segmentação melhores tem o mesmo efeito. Aumentar o
                ticket médio, por sua vez, reduz o número de vendas necessárias. Testar
                essas alavancas mostra onde está a maior oportunidade antes de gastar
                dinheiro.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-display text-white">Erros comuns</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Usar uma taxa de conversão otimista demais. Prefira a média real dos
                  últimos meses, não o melhor dia que você já teve.
                </li>
                <li>
                  Confundir CPL histórico com CPL do canal novo. Um público mais frio
                  ou uma escala maior costumam elevar o custo por lead.
                </li>
                <li>
                  Esquecer que o orçamento de mídia não inclui ferramentas, comissões e
                  taxas. O ROAS mínimo saudável precisa cobrir tudo isso.
                </li>
                <li>
                  Tratar o resultado como garantia. A calculadora dimensiona o cenário
                  planejado; o mercado exige acompanhamento e ajuste contínuo.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-display text-white">Perguntas frequentes</h2>

              <div className="space-y-2">
                <h3 className="text-lg font-display text-white">
                  Como calcular quanto investir em tráfego pago?
                </h3>
                <p>
                  Divida a meta de faturamento pelo ticket médio para achar as vendas.
                  Divida as vendas pela taxa de conversão de lead em venda para achar os
                  leads. Multiplique os leads pelo CPL e você tem o orçamento de mídia
                  necessário para o período.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-display text-white">
                  O que é ROAS projetado?
                </h3>
                <p>
                  É a razão entre a meta de faturamento e o orçamento de mídia estimado.
                  Um ROAS de 5x significa projetar R$ 5 de faturamento para cada R$ 1
                  investido em anúncios. Serve para avaliar a viabilidade do plano.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-display text-white">
                  Como estimar o investimento diário em anúncios?
                </h3>
                <p>
                  É o orçamento de mídia do período dividido pelo número de dias. A
                  calculadora usa base de 30 dias, então divida o orçamento total por 30
                  para saber quanto colocar por dia nas campanhas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-display text-white">
                  A calculadora de orçamento de tráfego é gratuita?
                </h3>
                <p>
                  Sim. É totalmente gratuita, funciona direto no navegador e recalcula
                  os resultados em tempo real conforme você digita os números do seu
                  negócio.
                </p>
              </div>
            </div>
          </section>

          <div className="glass-card rounded-2xl p-6 mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-display text-white mb-1">
                Quer transformar essa verba em resultado?
              </h2>
              <p className="text-sm text-violet-200/70 max-w-xl">
                Agende um diagnóstico estratégico gratuito e receba um plano de tráfego
                para bater a sua meta com previsibilidade.
              </p>
            </div>
            <Link
              href="/#cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Diagnóstico estratégico gratuito
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
