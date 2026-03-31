import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
  description:
    "Julio Carvalho combina tráfego pago, IA e tecnologia para construir sistemas de crescimento que escalam. Atendeu Maíra Cardi, Afya, Carolina Caribe e +50 marcas.",
  keywords: [
    "estrategista de crescimento",
    "tráfego pago",
    "vibe coding",
    "IA para marketing",
    "Julio Carvalho",
    "escalabilidade",
    "meta ads",
    "consultoria digital",
  ],
  authors: [{ name: "Julio Carvalho" }],
  openGraph: {
    title: "Julio Carvalho — Estrategista de Crescimento com IA e Dados",
    description:
      "Transforme seu negócio com estratégia, dados e tecnologia. Veja como Julio Carvalho escalou mais de 50 marcas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Julio Carvalho",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Carvalho — Estrategista de Crescimento",
    description: "Dados, IA e estratégia para escalar seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0118",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://juliocarvalhads.com.br" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Julio Carvalho",
              jobTitle: "Estrategista de Crescimento",
              description:
                "Especialista em Vibe Coding, IA para Marketing e Tráfego Pago. Criador do Método C.",
              url: "https://juliocarvalhads.com.br",
              sameAs: ["https://www.instagram.com/jcarvalho.ads/"],
              knowsAbout: [
                "Tráfego Pago",
                "Meta Ads",
                "Inteligência Artificial para Marketing",
                "Vibe Coding",
                "Estratégia Digital",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
