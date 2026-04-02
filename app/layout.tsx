import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-phone-input-2/lib/style.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://juliocarvalhads.com.br";

// ─── Structured Data ────────────────────────────────────────────────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Julio Carvalho",
  jobTitle: "Estrategista de Crescimento com IA e Dados",
  description:
    "Julio Carvalho é especialista em tráfego pago, inteligência artificial para marketing e tecnologia de crescimento. Criador do Método CTR, já escalou mais de 50 marcas nos setores de saúde, educação, imóveis e infoprodutos.",
  url: BASE_URL,
  image: `${BASE_URL}/julio.png`,
  email: "contato@juliocarvalhads.com.br",
  sameAs: [
    "https://www.instagram.com/jcarvalho.ads/",
  ],
  knowsAbout: [
    "Tráfego Pago",
    "Meta Ads",
    "Google Ads",
    "Inteligência Artificial para Marketing",
    "Automação de Marketing",
    "Rastreamento e Atribuição",
    "Funil de Vendas",
    "Growth Hacking",
    "Vibe Coding",
    "Estratégia Digital",
    "CRO — Otimização de Conversão",
    "Dashboard de Performance",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Estrategista de Crescimento",
    occupationLocation: { "@type": "Country", name: "Brasil" },
    skills: "Tráfego Pago, IA, Tecnologia, Rastreamento, Funil de Vendas",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/#service`,
  name: "Método CTR — Sistema de Crescimento com IA e Tráfego",
  description:
    "Consultoria e implementação de sistemas de crescimento que combinam tráfego pago, inteligência artificial, rastreamento avançado e automação. O Método CTR organiza o crescimento em camadas: fundação de dados, tecnologia, tráfego e escala.",
  provider: { "@id": `${BASE_URL}/#person` },
  serviceType: "Consultoria de Marketing Digital",
  areaServed: { "@type": "Country", name: "Brasil" },
  audience: {
    "@type": "Audience",
    audienceType: "Empresas que já investem em tráfego e buscam escalar com estrutura",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    name: "Diagnóstico Estratégico Gratuito",
    description: "Call de 30 minutos com diagnóstico direto do funil e estratégia de crescimento.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quem é Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Julio Carvalho é estrategista de crescimento especializado em tráfego pago, inteligência artificial para marketing e tecnologia de dados. Criador do Método CTR, já ajudou mais de 50 marcas nos setores de saúde, educação, imóveis e infoprodutos a escalar resultados sem aumentar verba.",
      },
    },
    {
      "@type": "Question",
      name: "O que é o Método CTR de Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Método CTR é o framework criado por Julio Carvalho ao longo de mais de 50 projetos. CTR significa Camadas de Tecnologia e Resultado. Ele organiza o crescimento em fases sequenciais: fundação de dados e rastreamento, configuração de tecnologia e automação, estruturação do tráfego pago e escala com IA. Cada fase tem entregáveis claros e mensuráveis.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre Julio Carvalho e uma agência de tráfego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agência de tráfego entrega campanhas. Julio Carvalho entrega o sistema por trás das campanhas: rastreamento com CAPI server-side, automações ativas, CRM estruturado, IA aplicada e estratégia de crescimento. O tráfego só performa quando toda a estrutura está montada corretamente.",
      },
    },
    {
      "@type": "Question",
      name: "O que é CAPI e por que é importante para tráfego pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAPI (Conversions API) é o rastreamento server-side que envia eventos de conversão diretamente dos servidores para plataformas como Meta e Google, sem depender de cookies ou pixel no navegador. Com iOS 14 e bloqueadores de anúncio, o pixel convencional perde até 40% dos eventos. O CAPI recupera esses dados, melhora a otimização das campanhas e reduz o CPL.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o rastreamento avançado com GTM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Google Tag Manager (GTM) centraliza todos os scripts e eventos de rastreamento sem precisar alterar código. Com GTM server-side é possível capturar eventos com mais precisão, contornar bloqueadores e enviar dados para múltiplas plataformas simultaneamente — Meta, Google Ads, TikTok e CRM — de forma unificada.",
      },
    },
    {
      "@type": "Question",
      name: "Para que tipo de negócio faz sentido trabalhar com Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Negócios que já investem em tráfego mas não estão escalando. Infoprodutores, prestadores de serviço, incorporadoras, healthtechs e influencers com produto próprio. O que importa é que o negócio já tem algo funcionando e quer crescer com inteligência e estrutura, não apenas com mais verba.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o diagnóstico com Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É uma call de diagnóstico direto. O empresário conta como está o negócio hoje, o que está travando e onde está investindo. Julio devolve uma leitura honesta do funil, identifica os gargalos e, se fizer sentido trabalharem juntos, explica como seria a parceria. Sem pitch, sem pressão.",
      },
    },
    {
      "@type": "Question",
      name: "Julio Carvalho entrega sistema rodando ou só consultoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sistema rodando. Isso inclui pixel e CAPI configurados, automações ativas, CRM estruturado, dashboard de performance no ar e campanhas veiculando. Consultoria sem execução é relatório bonito que vira gaveta.",
      },
    },
    {
      "@type": "Question",
      name: "Como usar inteligência artificial para escalar vendas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Julio Carvalho aplica IA em três frentes: qualificação automática de leads com scoring, otimização de criativos e copies com modelos de linguagem, e análise preditiva de funil para identificar onde o dinheiro está sendo perdido. A IA não substitui a estratégia — ela acelera a execução e melhora a precisão das decisões.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como escalar tráfego pago com o Método CTR de Julio Carvalho",
  description:
    "O Método CTR é um framework em 4 fases para escalar resultados de tráfego pago sem aumentar verba, combinando rastreamento avançado, tecnologia, automação e IA.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Fundação de Dados e Rastreamento",
      text: "Configuração de pixel, CAPI server-side via GTM, rastreamento de conversões offline e estruturação do fluxo de dados entre plataformas de anúncio e CRM.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Tecnologia e Automação",
      text: "Implementação de CRM com funis reais, automações de qualificação de leads, integração com ManyChat para captura conversacional e dashboards de performance em tempo real.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Estruturação do Tráfego Pago",
      text: "Revisão de estrutura de campanhas em Meta Ads e Google Ads com base nos dados de rastreamento corrigidos, segmentação por funil e otimização de criativos com IA.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escala com Inteligência Artificial",
      text: "Aplicação de IA para scoring de leads, análise preditiva de funil, otimização contínua de budget e identificação de oportunidades de escala com menor risco.",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
  description:
    "Site oficial de Julio Carvalho, estrategista de crescimento especializado em tráfego pago, IA para marketing e sistemas de escala.",
  inLanguage: "pt-BR",
  isPartOf: { "@type": "WebSite", url: BASE_URL, name: "Julio Carvalho" },
  about: { "@id": `${BASE_URL}/#person` },
  author: { "@id": `${BASE_URL}/#person` },
};

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
    template: "%s | Julio Carvalho",
  },
  description:
    "Julio Carvalho combina tráfego pago, IA e tecnologia para construir sistemas de crescimento que escalam sem aumentar verba. Criador do Método CTR. +50 marcas atendidas nos setores de saúde, educação, imóveis e infoprodutos.",
  keywords: [
    "Julio Carvalho",
    "estrategista de crescimento",
    "tráfego pago",
    "IA para marketing",
    "inteligência artificial marketing digital",
    "Meta Ads",
    "Google Ads",
    "consultoria crescimento digital",
    "Método CTR",
    "automação de marketing",
    "rastreamento e atribuição",
    "funil de vendas",
    "escalar negócio digital",
    "CRO",
    "vibe coding",
  ],
  authors: [{ name: "Julio Carvalho", url: BASE_URL }],
  creator: "Julio Carvalho",
  publisher: "Julio Carvalho",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
    description:
      "Tráfego rodando, resultado abaixo do esperado? O problema não é a verba — é a estrutura. Julio Carvalho constrói o sistema que faz cada real investido trabalhar mais.",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Julio Carvalho",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
    description:
      "Tráfego pago + IA + tecnologia = sistema que escala. +50 marcas. Diagnóstico gratuito.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@jcarvalho.ads",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "marketing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0118",
};

// ─── Layout ──────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPZP4P9');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPZP4P9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#9333ea] focus:text-white focus:rounded-lg"
        >
          Ir para o conteúdo principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </body>
    </html>
  );
}
