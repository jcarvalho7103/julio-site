import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Coins, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CANONICAL = "https://www.ojuliocarvalho.com/ferramentas";

export const metadata: Metadata = {
  title: "Ferramentas gratuitas para tráfego pago | Julio Carvalho",
  description:
    "Calculadoras gratuitas de ROAS, CAC, LTV, break-even e orçamento de tráfego pago. Ferramentas online em português para planejar e avaliar suas campanhas de mídia paga.",
  keywords: [
    "ferramentas tráfego pago",
    "calculadora de ROAS",
    "calculadora de CAC",
    "calculadora de LTV",
    "break-even tráfego pago",
    "orçamento de tráfego",
    "calculadora de marketing",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Ferramentas gratuitas para tráfego pago | Julio Carvalho",
    description:
      "Calculadoras gratuitas de ROAS, CAC, LTV, break-even e orçamento de tráfego pago. Planeje e avalie suas campanhas de mídia paga.",
    url: CANONICAL,
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
};

type Tool = {
  title: string;
  description: string;
  href: string;
  Icon: typeof Calculator;
};

const tools: Tool[] = [
  {
    title: "Calculadora de ROAS",
    description:
      "Descubra o retorno sobre o investimento em anúncios e saiba se cada real investido está gerando faturamento.",
    href: "/ferramentas/calculadora-roas",
    Icon: TrendingUp,
  },
  {
    title: "Calculadora de CAC e LTV",
    description:
      "Calcule o custo de aquisição de cliente e o valor do tempo de vida para entender a saúde da sua operação.",
    href: "/ferramentas/calculadora-cac-ltv",
    Icon: Coins,
  },
  {
    title: "Calculadora de Break-even de Tráfego Pago",
    description:
      "Encontre o ponto de equilíbrio das suas campanhas e saiba a partir de qual resultado o anúncio se paga.",
    href: "/ferramentas/calculadora-break-even-trafego-pago",
    Icon: Calculator,
  },
  {
    title: "Calculadora de Orçamento de Tráfego",
    description:
      "Defina quanto investir por dia e por mês para bater a sua meta de vendas com previsibilidade.",
    href: "/ferramentas/calculadora-orcamento-de-trafego",
    Icon: Wallet,
  },
];

export default function Page() {
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
        item: CANONICAL,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ferramentas gratuitas para tráfego pago",
    description:
      "Coleção de calculadoras gratuitas para planejar e avaliar campanhas de tráfego pago: ROAS, CAC, LTV, break-even e orçamento.",
    url: CANONICAL,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: "Julio Carvalho",
      url: "https://www.ojuliocarvalho.com",
    },
    hasPart: tools.map((tool) => ({
      "@type": "WebApplication",
      name: tool.title,
      applicationCategory: "BusinessApplication",
      url: `https://www.ojuliocarvalho.com${tool.href}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
    })),
  };

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-4xl">
          <nav aria-label="Trilha de navegação" className="mb-8 text-sm text-violet-300/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-violet-200/80">Ferramentas</li>
            </ol>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ferramentas gratuitas para{" "}
              <span className="gradient-text">tráfego pago</span>
            </h1>
            <p className="text-lg text-violet-200/70 max-w-2xl">
              Calculadoras online e gratuitas para planejar, medir e otimizar as suas
              campanhas de mídia paga. Insira os seus números e veja os resultados na
              hora, sem cadastro e sem planilhas complicadas.
            </p>
          </header>

          <section aria-label="Lista de ferramentas" className="grid md:grid-cols-2 gap-6 mb-16">
            {tools.map(({ title, description, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="glass-card rounded-2xl p-6 group flex flex-col gap-4 transition-colors hover:border-[#9333ea]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(147,51,234,0.15)] text-[#d946ef]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <p className="text-violet-200/70 text-sm leading-relaxed flex-1">
                  {description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#d946ef] group-hover:gap-3 transition-all">
                  Abrir calculadora
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </section>

          <section className="max-w-3xl space-y-6 text-violet-200/70 leading-relaxed mb-16">
            <h2 className="text-2xl font-bold text-white">
              Por que usar calculadoras de tráfego pago
            </h2>
            <p>
              Investir em anúncios sem acompanhar os números certos é o caminho mais
              rápido para queimar orçamento. Antes de subir uma campanha no Meta Ads ou
              no Google Ads, você precisa saber quanto pode pagar por cliente, qual
              faturamento cada real investido devolve e a partir de que ponto a operação
              começa a dar lucro. Essas calculadoras traduzem os principais indicadores
              de mídia paga em respostas diretas para você tomar decisões com segurança.
            </p>
            <p>
              O <strong className="text-white">ROAS</strong> mostra o retorno sobre o
              investimento em anúncios, dividindo a receita gerada pelo valor gasto. O{" "}
              <strong className="text-white">CAC</strong> revela quanto custa conquistar
              cada novo cliente, enquanto o <strong className="text-white">LTV</strong>{" "}
              estima o valor que esse cliente gera ao longo do relacionamento. Já o{" "}
              <strong className="text-white">break-even</strong> aponta o ponto de
              equilíbrio, e a calculadora de{" "}
              <strong className="text-white">orçamento</strong> ajuda a definir quanto
              investir por dia para bater a sua meta.
            </p>
            <p>
              Um erro comum é olhar apenas para o ROAS e esquecer da margem de lucro. Uma
              campanha pode ter um retorno aparentemente alto e ainda assim gerar
              prejuízo se o custo do produto e as despesas operacionais forem elevados.
              Por isso o ideal é cruzar os indicadores: use o CAC e o LTV para avaliar a
              saúde do negócio, o break-even para conhecer o limite seguro de
              investimento e o orçamento para planejar o crescimento com previsibilidade.
            </p>
            <p>
              Todas as ferramentas são gratuitas, funcionam direto no navegador e
              recalculam os resultados em tempo real conforme você digita. Comece pela
              calculadora que resolve a sua dúvida mais urgente e volte sempre que
              precisar revisar os números da sua operação.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Quer ir além das calculadoras?
            </h2>
            <p className="text-violet-200/70 max-w-xl mx-auto mb-6">
              Agende um diagnóstico estratégico gratuito e receba uma análise
              personalizada da sua operação de tráfego pago, com os próximos passos para
              escalar com lucro.
            </p>
            <Link
              href="/#cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-colors"
            >
              Quero meu diagnóstico gratuito
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
    </>
  );
}
