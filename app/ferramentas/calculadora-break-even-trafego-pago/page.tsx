import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BreakEvenCalculator from "@/components/tools/BreakEvenCalculator";

const canonical = "https://www.ojuliocarvalho.com/ferramentas/calculadora-break-even-trafego-pago";

export const metadata: Metadata = {
  title: "Calculadora de Break-even de Trafego Pago | Julio Carvalho",
  description:
    "Descubra o CPA maximo que sua campanha pode pagar por venda sem sair do prejuizo. Calcule break-even ROAS, CPA atual e margem por venda em tempo real, de graca.",
  keywords: [
    "calculadora break-even trafego pago",
    "cpa maximo",
    "break-even roas",
    "calculo cpa permitido",
    "custo por aquisicao",
    "margem de contribuicao trafego pago",
    "roas minimo",
    "julio carvalho",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Calculadora de Break-even de Trafego Pago",
    description:
      "Calcule o CPA maximo permitido, o break-even ROAS e a margem por venda da sua operacao de trafego pago em tempo real.",
    url: canonical,
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
};

const faq = [
  {
    q: "O que e o CPA maximo permitido?",
    a: "E o valor maximo que voce pode gastar para conquistar uma venda sem ter prejuizo. Ele nasce da multiplicacao do ticket medio pela margem de contribuicao. Por exemplo, um ticket de R$ 497 com 60% de margem gera um CPA maximo de R$ 298,20. Enquanto seu custo real por venda ficar abaixo desse numero, cada cliente sobra dinheiro.",
  },
  {
    q: "Qual a diferenca entre CPA maximo e break-even ROAS?",
    a: "Sao duas formas de olhar o mesmo ponto de equilibrio. O CPA maximo e expresso em reais por venda, enquanto o break-even ROAS e um multiplicador do faturamento. O break-even ROAS e igual a 1 dividido pela margem: com 60% de margem, voce precisa de um ROAS minimo de 1,67x apenas para empatar. Acima disso ha lucro, abaixo ha prejuizo.",
  },
  {
    q: "Como calculo meu CPA atual se so tenho o CPC?",
    a: "Basta informar o custo por clique e a taxa de conversao da pagina. A calculadora estima primeiro o custo por lead dividindo o CPC pela conversao da pagina e, depois, divide esse CPL pela taxa de conversao de lead para venda. Assim voce compara o CPA atual com o CPA maximo mesmo comprando trafego por clique.",
  },
  {
    q: "Minha campanha esta acima do CPA maximo. O que fazer?",
    a: "Voce tem quatro alavancas: reduzir o CPL com criativos e segmentacoes melhores, aumentar a conversao da pagina de captura, melhorar a taxa de lead para venda no comercial ou elevar o ticket medio com ofertas e order bumps. Mexer em qualquer uma dessas variaveis puxa o CPA atual para baixo do teto.",
  },
];

export default function Page() {
  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Break-even de Trafego Pago",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: canonical,
    description:
      "Calculadora gratuita que mostra o CPA maximo permitido, o break-even ROAS e a margem por venda de campanhas de trafego pago.",
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
        name: "Calculadora de Break-even de Trafego Pago",
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-4xl">
          <nav aria-label="Trilha de navegacao" className="mb-6 text-sm text-violet-300/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/ferramentas" className="hover:text-white transition-colors">
                  Ferramentas
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-violet-200/80">Calculadora de Break-even</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Calculadora de <span className="gradient-text">Break-even</span> de Trafego Pago
          </h1>
          <p className="mt-4 text-lg text-violet-200/70">
            Antes de escalar qualquer campanha, voce precisa saber o numero que separa lucro de prejuizo: o CPA maximo
            que sua operacao pode pagar por venda. Preencha os campos e descubra em tempo real se o seu trafego esta no
            azul ou no vermelho.
          </p>

          <BreakEvenCalculator />

          <section className="prose-invert max-w-none mt-14 space-y-4 text-violet-200/70 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">O que e o break-even no trafego pago</h2>
            <p>
              Break-even, ou ponto de equilibrio, e o momento em que a receita de uma venda cobre exatamente o custo
              para conquistar essa venda. No trafego pago, ele se traduz em um numero pratico: o CPA maximo permitido.
              Esse valor representa o teto que voce pode investir em midia por cliente adquirido antes de comecar a
              perder dinheiro. Toda decisao de escala, corte de campanha ou aumento de orcamento deveria passar por esse
              numero primeiro.
            </p>

            <h2 className="text-2xl font-bold text-white">Como calcular o CPA maximo permitido</h2>
            <p>
              A formula do CPA maximo e simples e direta:
            </p>
            <p className="glass-card rounded-2xl p-6 text-center text-white text-lg font-semibold">
              CPA maximo = Ticket medio x Margem de contribuicao
            </p>
            <p>
              Se o seu produto vende por R$ 497 e a margem de contribuicao e de 60%, o CPA maximo e de R$ 298,20. Esse e
              o valor que sobra de cada venda depois dos custos variaveis e que pode, no limite, ser usado para pagar a
              aquisicao. A margem de contribuicao e o percentual do ticket que resta apos descontar custos diretos como
              taxas de plataforma, comissoes, impostos sobre a venda e custo do produto ou servico.
            </p>
            <p>
              Ja o CPA atual estimado sai da relacao entre o custo por lead e a taxa de conversao de lead para venda:
            </p>
            <p className="glass-card rounded-2xl p-6 text-center text-white text-lg font-semibold">
              CPA atual = CPL / Taxa de conversao de lead para venda
            </p>
            <p>
              Com um CPL de R$ 25 e uma conversao de 10% do lead para a venda, seu CPA atual e de R$ 250. Comparando com
              o teto de R$ 298,20, a operacao esta lucrativa e ainda tem folga para escalar. Se voce compra trafego por
              clique, a calculadora estima o CPL dividindo o CPC pela taxa de conversao da sua pagina de captura antes de
              chegar ao CPA atual.
            </p>

            <h2 className="text-2xl font-bold text-white">Break-even ROAS: o mesmo ponto por outro angulo</h2>
            <p>
              O break-even ROAS mostra qual retorno sobre o investimento em anuncios voce precisa apenas para empatar. A
              conta e o inverso da margem: ROAS de equilibrio igual a 1 dividido pela margem de contribuicao. Com 60% de
              margem, o break-even ROAS e 1,67x. Isso significa que cada real investido precisa gerar pelo menos R$ 1,67
              de faturamento so para pagar a operacao. Rodar abaixo desse ROAS, mesmo com muitas vendas, e queimar
              caixa.
            </p>

            <h2 className="text-2xl font-bold text-white">Como interpretar o resultado</h2>
            <p>
              Use o CPA maximo como numero-guia de toda a operacao. Se o CPA atual estiver confortavelmente abaixo do
              teto, existe espaco para investir mais e capturar volume. Se estiver colado no limite, escale com cautela e
              acompanhe de perto, porque pequenas oscilacoes de CPL ja empurram a campanha para o prejuizo. Se o CPA
              atual passou do teto, pare de escalar e ataque as alavancas de eficiencia antes de aumentar o orcamento.
            </p>

            <h2 className="text-2xl font-bold text-white">Erros comuns ao calcular o break-even</h2>
            <p>
              O erro mais frequente e confundir margem de contribuicao com markup ou com margem liquida. Use sempre o
              percentual que sobra do ticket apos os custos variaveis diretos da venda. Outro deslize e ignorar a taxa de
              conversao de lead para venda e olhar so o CPL, o que esconde o custo real por cliente. Tambem e comum
              esquecer que ticket e conversao mudam ao longo do funil: revise os numeros com dados reais do periodo, nao
              com estimativas otimistas. Por fim, muita gente escala campanhas olhando apenas o volume de leads, sem
              comparar o CPA atual com o CPA maximo permitido.
            </p>

            <h2 className="text-2xl font-bold text-white">Perguntas frequentes</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                  <p className="mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="glass-card rounded-2xl p-8 mt-14 text-center">
            <h2 className="text-2xl font-bold text-white">Seu trafego esta no vermelho e voce nao sabe por que?</h2>
            <p className="mt-3 text-violet-200/70 max-w-2xl mx-auto">
              A calculadora aponta o numero, mas cada operacao tem alavancas diferentes para melhorar o CPA. Faca um
              diagnostico estrategico gratuito e receba um plano claro para colocar suas campanhas no azul e escalar com
              seguranca.
            </p>
            <div className="mt-6">
              <Link
                href="/#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-colors"
              >
                Quero meu diagnostico estrategico gratuito
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
