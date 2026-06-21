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
const Footer = dynamic(() => import("@/components/Footer"));

const BASE_URL = "https://www.ojuliocarvalho.com";

export const metadata: Metadata = {
  title: "API de Conversões (CAPI) — Meta, Google e TikTok | Julio Carvalho",
  description:
    "Seu pixel está perdendo metade das conversões. Instalo a API de Conversões server-side para Meta, Google Ads e TikTok, com deduplicação e GTM server-side, para baixar seu custo por lead. Diagnóstico gratuito.",
  alternates: { canonical: `${BASE_URL}/capi` },
  openGraph: {
    title: "API de Conversões (CAPI) server-side — Meta, Google e TikTok",
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

export default function CapiPage() {
  return (
    <main id="conteudo-principal" className="bg-[#0d0118] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capiFaqSchema) }}
      />
      <CapiNav />
      <CapiHero />
      <Clients />
      <CapiProblem />
      <CapiDeliverables />
      <CapiProcess />
      <CapiFAQ />
      <CapiCTA />
      <Footer />
    </main>
  );
}
