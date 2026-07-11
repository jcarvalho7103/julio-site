import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CacLtvCalculator from "@/components/tools/CacLtvCalculator";

const CANONICAL = "https://www.ojuliocarvalho.com/ferramentas/calculadora-cac-ltv";

export const metadata: Metadata = {
  title: "Calculadora de CAC e LTV | Julio Carvalho",
  description:
    "Calcule CAC, LTV, a razao LTV/CAC e o payback em meses de forma gratuita. Descubra se o seu custo de aquisicao esta saudavel e quando o cliente se paga.",
  keywords: [
    "calculadora de CAC",
    "calculadora de LTV",
    "razao LTV CAC",
    "custo de aquisicao de cliente",
    "lifetime value",
    "payback de aquisicao",
    "trafego pago",
    "metricas de aquisicao",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Calculadora de CAC e LTV | Julio Carvalho",
    description:
      "Calcule CAC, LTV, a razao LTV/CAC e o payback em meses. Ferramenta gratuita para quem investe em trafego pago.",
    url: CANONICAL,
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
};

const FAQ = [
  {
    pergunta: "O que e CAC e como ele e calculado?",
    resposta:
      "CAC e o custo de aquisicao de cliente. Ele mede quanto voce investe, em media, para conquistar cada novo cliente. O calculo e simples: some tudo o que foi gasto em aquisicao (midia, ferramentas, comissoes) em um periodo e divida pelo numero de novos clientes conquistados nesse mesmo periodo.",
  },
  {
    pergunta: "O que e LTV e por que ele importa?",
    resposta:
      "LTV, ou lifetime value, e o valor liquido que um cliente gera ao longo do relacionamento com a sua empresa. Nesta calculadora ele considera o ticket medio, a margem de contribuicao, a frequencia de compras por ano e os anos de retencao. Ele importa porque mostra o teto do quanto voce pode investir para adquirir cada cliente sem perder dinheiro.",
  },
  {
    pergunta: "Qual e uma boa razao entre LTV e CAC?",
    resposta:
      "A referencia de mercado e uma razao LTV/CAC igual ou superior a 3x. Isso significa que cada cliente devolve pelo menos tres vezes o que custou para ser adquirido. Abaixo de 1x voce perde dinheiro a cada venda. Entre 1x e 3x o modelo funciona, mas ainda tem pouca folga para escalar.",
  },
  {
    pergunta: "O que significa o payback em meses?",
    resposta:
      "O payback indica quantos meses sao necessarios para que a contribuicao mensal gerada pelo cliente cubra o custo de aquisicao. Quanto menor o payback, mais rapido o caixa se recupera e mais folego voce tem para reinvestir em novas campanhas.",
  },
];

export default function Page() {
  const webApplicationLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de CAC e LTV",
    description:
      "Ferramenta gratuita para calcular CAC, LTV, a razao LTV/CAC e o payback de aquisicao de clientes.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: CANONICAL,
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
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
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
        name: "Inicio",
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
        name: "Calculadora de CAC e LTV",
        item: CANONICAL,
      },
    ],
  };

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-4xl">
          <nav aria-label="Trilha de navegacao" className="text-sm text-violet-300/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-violet-200 transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ferramentas" className="hover:text-violet-200 transition-colors">
                  Ferramentas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-violet-200/80">Calculadora de CAC e LTV</li>
            </ol>
          </nav>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
            Calculadora de <span className="gradient-text">CAC e LTV</span>
          </h1>
          <p className="mt-4 text-lg text-violet-200/70">
            Descubra quanto custa conquistar cada cliente, quanto ele gera de valor ao longo do
            tempo e se a sua operacao de aquisicao esta realmente saudavel. Basta preencher os
            campos abaixo e o resultado aparece na hora.
          </p>

          <CacLtvCalculator />

          <section className="mt-16 space-y-8 text-violet-200/70 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-white">
                O que sao CAC e LTV, na pratica
              </h2>
              <p className="mt-3">
                CAC e a sigla para custo de aquisicao de cliente. Ele responde a uma pergunta
                direta: quanto voce precisa investir, em media, para transformar um desconhecido em
                cliente pagante. LTV, ou lifetime value, olha para o outro lado da conta, ou seja,
                quanto de valor liquido esse cliente gera durante todo o tempo em que compra de
                voce. Sozinhas, essas duas metricas ja sao importantes. Juntas, elas revelam se o
                seu modelo de crescimento se sustenta ou se voce esta apenas comprando faturamento
                no prejuizo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Como calcular passo a passo</h2>
              <p className="mt-3">
                O CAC sai da divisao entre o investimento total em aquisicao e o numero de novos
                clientes conquistados no mesmo periodo. Se voce investiu dez mil reais e trouxe
                cinquenta clientes, o seu CAC e de duzentos reais. O LTV, nesta calculadora, usa a
                formula ticket medio multiplicado pela margem de contribuicao, pela frequencia de
                compras por ano e pelos anos de retencao. Assim, um ticket de trezentos reais com
                margem de quarenta por cento, quatro compras por ano e tres anos de relacionamento
                gera um LTV de mil quatrocentos e quarenta reais.
              </p>
              <p className="mt-3">
                Com os dois valores em maos, a razao LTV/CAC e apenas o LTV dividido pelo CAC. O
                payback em meses, por sua vez, mostra em quanto tempo o cliente devolve o custo de
                aquisicao, dividindo o CAC pela contribuicao mensal que ele gera, ou seja, ticket
                vezes margem vezes frequencia dividido por doze.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Como interpretar os resultados</h2>
              <p className="mt-3">
                A leitura mais rapida vem da razao LTV/CAC. Um valor igual ou acima de 3x indica um
                modelo saudavel, com folga para reinvestir e escalar. Entre 1x e 3x a operacao ainda
                funciona, mas com pouca margem de seguranca, o que exige atencao com aumentos de
                custo de midia. Abaixo de 1x o sinal e vermelho: cada cliente custa mais do que
                devolve, e crescer nesse cenario significa acelerar o prejuizo. O payback complementa
                essa analise ao mostrar a velocidade do retorno. Um payback curto libera caixa
                rapido; um payback longo trava a expansao mesmo com uma razao aparentemente boa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Erros comuns ao medir CAC e LTV</h2>
              <p className="mt-3">
                O erro mais frequente e considerar apenas o gasto de midia no CAC e esquecer
                ferramentas, comissoes e equipe. Isso deixa o custo artificialmente baixo e cria uma
                falsa sensacao de saude. No LTV, o engano tipico e usar o faturamento em vez da
                margem de contribuicao, o que infla o valor do cliente e mascara operacoes que na
                verdade nao pagam a propria aquisicao. Tambem e comum misturar periodos diferentes,
                comparando o investimento de um mes com clientes que chegaram em outro, o que
                distorce completamente o resultado. Mantenha os periodos alinhados e sempre trabalhe
                com margem, nao com receita bruta.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white">Perguntas frequentes</h2>
            <div className="mt-6 space-y-4">
              {FAQ.map((item) => (
                <div key={item.pergunta} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">{item.pergunta}</h3>
                  <p className="mt-2 text-violet-200/70 leading-relaxed">{item.resposta}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white">
                Seus numeros de aquisicao nao fecham?
              </h2>
              <p className="mt-3 text-violet-200/70 max-w-2xl mx-auto">
                Se a sua razao LTV/CAC esta abaixo do ideal ou o payback esta longo demais, o
                problema costuma estar na estrategia de trafego, na oferta ou na retencao. Vamos
                olhar juntos para o seu funil e encontrar onde esta o gargalo.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-colors"
                >
                  Quero um diagnostico estrategico gratuito
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationLd) }}
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
