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
    "Julio Carvalho é especialista em tráfego pago, inteligência artificial para marketing e tecnologia de crescimento. Criador do Método C, já escalou mais de 50 marcas incluindo Maíra Cardi, Afya e Carolina Caribé.",
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
  name: "Método C — Sistema de Crescimento com IA e Tráfego",
  description:
    "Consultoria e implementação de sistemas de crescimento que combinam tráfego pago, inteligência artificial, rastreamento avançado e automação. O Método C organiza o crescimento em camadas: fundação de dados, tecnologia, tráfego e escala.",
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
      name: "Qual a diferença entre Julio Carvalho e uma agência de tráfego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agência de tráfego entrega campanhas. Julio Carvalho entrega o sistema por trás das campanhas: rastreamento, automação, IA, tecnologia e estratégia. Tudo junto, executado. O tráfego só performa quando o resto está montado do jeito certo.",
      },
    },
    {
      "@type": "Question",
      name: "Para que tipo de negócio faz sentido trabalhar com Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Negócios que já investem em tráfego mas não estão escalando. Infoprodutores, prestadores de serviço, incorporadoras, healthtechs, influencers com produto próprio. O setor não importa tanto. O que importa é que o negócio já tem algo funcionando e quer crescer com inteligência, não com mais verba.",
      },
    },
    {
      "@type": "Question",
      name: "O que é o Método C de Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Método C é o framework criado por Julio Carvalho ao longo de mais de 50 projetos. Ele organiza o crescimento em camadas: primeiro a fundação de dados, depois a tecnologia, depois o tráfego, depois a escala. Cada fase tem entregáveis claros, sem fases de estudo que duram meses.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o diagnóstico gratuito com Julio Carvalho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É uma call de diagnóstico direto. Você conta como está o negócio hoje, o que está travando e onde está investindo. Julio devolve uma leitura honesta do que enxerga e, se fizer sentido trabalharem juntos, conversa sobre como seria. Sem pitch, sem pressão.",
      },
    },
    {
      "@type": "Question",
      name: "Julio Carvalho entrega sistema rodando ou só consultoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sistema rodando. Isso inclui pixel configurado, automações ativas, dashboard no ar e campanhas veiculando. Consultoria sem execução é relatório bonito que vira gaveta.",
      },
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
    "Julio Carvalho combina tráfego pago, IA e tecnologia para construir sistemas de crescimento que escalam sem aumentar verba. +50 marcas atendidas incluindo Maíra Cardi, Afya e Carolina Caribé.",
  keywords: [
    "Julio Carvalho",
    "estrategista de crescimento",
    "tráfego pago",
    "IA para marketing",
    "inteligência artificial marketing digital",
    "Meta Ads",
    "Google Ads",
    "consultoria crescimento digital",
    "Método C",
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
        url: `${BASE_URL}/og-image.png`,
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
    images: [`${BASE_URL}/og-image.png`],
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
      <body>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </body>
    </html>
  );
}
