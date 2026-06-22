import type { Metadata } from "next";
import dynamic from "next/dynamic";
import CapiNav from "@/components/capi/CapiNav";
import CapiHero from "@/components/capi/CapiHero";

// Abaixo do fold — carregados após o LCP
const Clients = dynamic(() => import("@/components/Clients"));
const CapiProblem = dynamic(() => import("@/components/capi/CapiProblem"));
const CapiDeliverables = dynamic(() => import("@/components/capi/CapiDeliverables"));
const CapiProcess = dynamic(() => import("@/components/capi/CapiProcess"));
const CapiFAQ = dynamic(() => import("@/components/capi/CapiFAQ"));
const CapiCTA = dynamic(() => import("@/components/capi/CapiCTA"));
const CapiFooter = dynamic(() => import("@/components/capi/CapiFooter"));

const BASE_URL = "https://www.ojuliocarvalho.com";

export const metadata: Metadata = {
  title: "API de Conversões (CAPI) para Meta, Google e TikTok | Julio Carvalho",
  description:
    "Seu pixel está perdendo metade das conversões. Implemento a API de Conversões server-side para Meta, Google Ads e TikTok, com GTM server-side e deduplicação, para baixar seu custo por lead. Diagnóstico gratuito.",
  keywords: [
    "API de Conversões",
    "CAPI",
    "Conversions API Meta",
    "Enhanced Conversions Google Ads",
    "TikTok Events API",
    "rastreamento server-side",
    "GTM server-side",
    "configurar CAPI",
    "implementar API de Conversões",
    "deduplicação pixel CAPI",
    "rastreamento avançado tráfego pago",
    "conversões offline CRM",
  ],
  alternates: { canonical: `${BASE_URL}/capi` },
  openGraph: {
    title: "API de Conversões (CAPI) server-side para Meta, Google e TikTok",
    description:
      "Recupere as conversões que o navegador perde e devolva sinal limpo para o algoritmo. Rastreamento avançado instalado e rodando. Diagnóstico gratuito.",
    type: "website",
    locale: "pt_BR",
    url: `${BASE_URL}/capi`,
    siteName: "Julio Carvalho",
  },
};

const capiFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a API de Conversões (CAPI) e por que eu preciso dela?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É um método de enviar os eventos de conversão direto do servidor para a plataforma de anúncios, sem depender do navegador do usuário. Como iOS, bloqueadores e navegação privada derrubam o pixel, a CAPI recupera os eventos que seriam perdidos e devolve sinal de qualidade para o algoritmo otimizar melhor.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona para Meta, Google e TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Configuro a Conversions API do Meta, o Enhanced Conversions do Google Ads e a Events API do TikTok, as três rodando server-side via GTM, com deduplicação correta para não inflar os dados no gerenciador.",
      },
    },
    {
      "@type": "Question",
      name: "Vou ver conversões duplicadas no gerenciador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A implementação usa event_id e deduplicação para o pixel e a CAPI reconhecerem o mesmo evento. Você recupera o que estava perdendo sem contar a mesma conversão duas vezes.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para implementar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É uma entrega objetiva, dias e não meses. Começa com o diagnóstico gratuito, onde eu mostro exatamente o que está sendo perdido e o escopo da implementação.",
      },
    },
  ],
};

const capiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/capi#service`,
  name: "Implementação de API de Conversões (CAPI) server-side",
  serviceType: "Rastreamento avançado e API de Conversões",
  description:
    "Implementação da API de Conversões (CAPI) server-side para Meta Ads, Google Ads (Enhanced Conversions) e TikTok Events API, com GTM server-side, deduplicação de eventos e envio de conversões offline do CRM. Recupera as conversões que o navegador perde por iOS, bloqueadores de cookie e navegação privada.",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Julio Carvalho",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  audience: {
    "@type": "Audience",
    audienceType: "Empresas que investem em tráfego pago no Meta, Google e TikTok",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    name: "Diagnóstico de rastreamento gratuito",
    description:
      "Diagnóstico direto de quanto rastreamento a conta está perdendo hoje e o escopo da implementação.",
  },
};

const capiBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "API de Conversões (CAPI)",
      item: `${BASE_URL}/capi`,
    },
  ],
};

export default function CapiPage() {
  return (
    <main id="conteudo-principal" className="bg-[#0d0118] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capiFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capiServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capiBreadcrumbSchema) }}
      />
      <CapiNav />
      <CapiHero />
      <Clients />
      <CapiProblem />
      <CapiDeliverables />
      <CapiProcess />
      <CapiFAQ />
      <CapiCTA />
      <CapiFooter />
    </main>
  );
}
