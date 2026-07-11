import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RoasCalculator from "@/components/tools/RoasCalculator";

const CANONICAL = "https://www.ojuliocarvalho.com/ferramentas/calculadora-roas";

export const metadata: Metadata = {
  title: "Calculadora de ROAS grátis | Julio Carvalho",
  description:
    "Calcule o ROAS, o ROI e o break-even das suas campanhas de tráfego pago em tempo real. Descubra o retorno mínimo que cobre seus custos e se o anúncio dá lucro.",
  keywords: [
    "calculadora de roas",
    "roas",
    "retorno sobre investimento em anúncios",
    "break-even roas",
    "roi trafego pago",
    "calcular roas",
    "tráfego pago",
    "meta ads",
    "google ads",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Calculadora de ROAS grátis | Julio Carvalho",
    description:
      "Calcule ROAS, ROI e break-even das suas campanhas em tempo real e saiba o retorno mínimo para não operar no prejuízo.",
    url: CANONICAL,
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
};

const faq = [
  {
    q: "O que é ROAS e como ele é calculado?",
    a: "ROAS (Return on Ad Spend) é o retorno sobre o valor investido em anúncios. Ele é calculado dividindo o faturamento gerado pelas campanhas pelo total investido. Um ROAS de 4 significa que cada R$ 1 investido trouxe R$ 4 de faturamento.",
  },
  {
    q: "Qual é a diferença entre ROAS e ROI?",
    a: "O ROAS mede o faturamento por real investido em mídia, sem descontar custos. O ROI mede o lucro percentual sobre o investimento. Um ROAS alto pode até esconder um ROI negativo quando a margem de contribuição é baixa, por isso os dois indicadores devem ser lidos juntos.",
  },
  {
    q: "O que é o break-even ROAS?",
    a: "O break-even ROAS é o retorno mínimo para a campanha se pagar. Ele é calculado dividindo 1 pela margem de contribuição. Com margem de 40 por cento, o break-even é 1 dividido por 0,40, ou seja, 2,5. Abaixo desse valor a operação dá prejuízo.",
  },
  {
    q: "Um ROAS alto significa que a campanha é lucrativa?",
    a: "Nem sempre. A lucratividade depende da margem de contribuição. Se a sua margem é baixa, você precisa de um ROAS maior para cobrir os custos. Por isso a calculadora compara o seu ROAS atual com o break-even antes de dizer se há lucro ou prejuízo.",
  },
];

export default function Page() {
  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de ROAS",
    description:
      "Ferramenta gratuita para calcular ROAS, ROI, break-even e lucro estimado de campanhas de tráfego pago.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: CANONICAL,
    inLanguage: "pt-BR",
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

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.ojuliocarvalho.com/",
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
        name: "Calculadora de ROAS",
        item: CANONICAL,
      },
    ],
  };

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Trilha de navegação" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-violet-300/60">
              <li>
                <Link href="/" className="hover:text-violet-200 transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ferramentas" className="hover:text-violet-200 transition-colors">
                  Ferramentas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-violet-200/80">Calculadora de ROAS</li>
            </ol>
          </nav>

          <header className="mb-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Calculadora de <span className="gradient-text">ROAS</span>
            </h1>
            <p className="mt-4 text-lg text-violet-200/70 max-w-2xl">
              Descubra em tempo real o retorno das suas campanhas de tráfego pago. Calcule o ROAS, o
              ROI, o lucro estimado e, principalmente, o break-even: o retorno mínimo para você não
              operar no prejuízo.
            </p>
          </header>

          {/* Calculadora */}
          <RoasCalculator />

          {/* Conteúdo SEO */}
          <section className="prose-none mt-14 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">O que é ROAS</h2>
              <p className="mt-3 text-violet-200/70 leading-relaxed">
                ROAS é a sigla para Return on Ad Spend, ou retorno sobre o investimento em anúncios.
                É o indicador que mostra quanto de faturamento cada real investido em mídia paga
                gerou. Ele é a métrica central de qualquer gestor de tráfego porque traduz, em um
                único número, a eficiência da verba aplicada em plataformas como Meta Ads e Google
                Ads. Um ROAS de 3 quer dizer que, para cada R$ 1 investido, a campanha devolveu R$ 3
                em vendas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Como calcular o ROAS</h2>
              <p className="mt-3 text-violet-200/70 leading-relaxed">
                A fórmula do ROAS é simples: basta dividir o faturamento gerado pelo total
                investido. Em fórmula:
              </p>
              <div className="glass-card rounded-2xl p-6 mt-4">
                <p className="text-center text-lg text-white font-semibold">
                  ROAS = Faturamento gerado ÷ Investimento em anúncios
                </p>
              </div>
              <p className="mt-4 text-violet-200/70 leading-relaxed">
                Exemplo prático: uma campanha que investiu R$ 5.000 e gerou R$ 20.000 de faturamento
                tem um ROAS de 4 (20.000 dividido por 5.000). Já o ROI, que mede o retorno
                percentual, seria de 300 por cento, pois o lucro sobre a mídia foi de R$ 15.000
                sobre os R$ 5.000 investidos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                O break-even ROAS: sua meta mínima
              </h2>
              <p className="mt-3 text-violet-200/70 leading-relaxed">
                O ROAS sozinho não diz se você teve lucro. Para isso, entra a margem de contribuição,
                que é o percentual que sobra de cada venda depois de descontar os custos variáveis
                como produto, taxas de pagamento e frete. O break-even ROAS é o retorno mínimo para
                a campanha se pagar, e ele é calculado assim:
              </p>
              <div className="glass-card rounded-2xl p-6 mt-4">
                <p className="text-center text-lg text-white font-semibold">
                  Break-even ROAS = 1 ÷ Margem de contribuição
                </p>
              </div>
              <p className="mt-4 text-violet-200/70 leading-relaxed">
                Se a sua margem é de 40 por cento, o break-even é 1 dividido por 0,40, ou seja, 2,5.
                Isso significa que qualquer ROAS abaixo de 2,5 gera prejuízo, mesmo que o número
                pareça alto à primeira vista. Saber essa meta é o que separa quem escala campanhas
                com segurança de quem apenas comemora um ROAS grande sem olhar a rentabilidade.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Como interpretar os resultados
              </h2>
              <p className="mt-3 text-violet-200/70 leading-relaxed">
                Compare sempre o ROAS obtido com o break-even. Quando o ROAS está acima do
                break-even, a campanha é lucrativa e há espaço para investir mais. Quando está
                abaixo, é sinal de que a operação consome mais do que devolve e precisa de ajuste no
                criativo, na segmentação, na oferta ou no preço. O ROI complementa a leitura: ele
                mostra em percentual o quanto o investimento rendeu, o que facilita a comparação
                entre campanhas de tamanhos diferentes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Erros comuns ao medir ROAS</h2>
              <ul className="mt-3 space-y-3 text-violet-200/70 leading-relaxed list-disc pl-5">
                <li>
                  Ignorar a margem de contribuição e achar que qualquer ROAS acima de 1 já é lucro.
                </li>
                <li>
                  Usar o faturamento bruto sem descontar reembolsos, chargebacks e cancelamentos.
                </li>
                <li>
                  Misturar o investimento de várias campanhas com faturamentos de origens diferentes,
                  o que distorce o número real.
                </li>
                <li>
                  Comparar o ROAS entre produtos com margens muito distintas sem ajustar a meta de
                  break-even de cada um.
                </li>
                <li>
                  Tomar decisões de escala com poucos dias de dados, antes de a campanha sair da fase
                  de aprendizado.
                </li>
              </ul>
            </div>

            {/* FAQ visível */}
            <div id="faq">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Perguntas frequentes</h2>
              <div className="mt-4 space-y-4">
                {faq.map((item) => (
                  <div key={item.q} className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                    <p className="mt-2 text-violet-200/70 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 mt-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Quer transformar esses números em escala?
            </h2>
            <p className="mt-3 text-violet-200/70 max-w-2xl mx-auto">
              Calcular o ROAS é o primeiro passo. O próximo é estruturar campanhas que crescem com
              lucro previsível. Agende um diagnóstico estratégico gratuito e descubra onde está o
              gargalo do seu tráfego pago.
            </p>
            <div className="mt-6">
              <Link
                href="/#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-colors"
              >
                Diagnóstico estratégico gratuito
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
