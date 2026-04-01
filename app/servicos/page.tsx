import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "CRM, automações, rastreamento avançado com GTM e CAPI, agentes de IA para vendas e ManyChat. Veja em detalhe o que Julio Carvalho constrói na sua operação.",
  alternates: {
    canonical: "https://juliocarvalhads.com.br/servicos",
  },
  openGraph: {
    title: "Serviços | Julio Carvalho",
    description:
      "CRM estruturado, automações de qualificação, CAPI server-side, agente de IA para vendas e ManyChat. O que vai mudar na sua operação.",
    url: "https://juliocarvalhads.com.br/servicos",
  },
};

export default function ServicosPage() {
  return (
    <main className="bg-[#0d0118] text-white min-h-screen">
      <Nav />

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[400px] rounded-full bg-[#9333ea]/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#d946ef]/8 blur-[100px]" />
      </div>

      {/* Voltar para home */}
      <div className="relative z-10 section-container pt-28 pb-0">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-violet-300/60 hover:text-violet-200 transition-colors text-sm"
        >
          <ArrowLeft size={14} />
          Voltar para o início
        </a>
      </div>

      <Services />

      {/* CTA final */}
      <section className="py-20 relative z-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#9333ea]/15 blur-[100px]" />
        </div>
        <div className="section-container text-center relative z-10">
          <p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
            Próximo passo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight max-w-2xl mx-auto leading-tight">
            Quer saber qual dessas peças{" "}
            <span className="gradient-text">está faltando na sua operação?</span>
          </h2>
          <p className="text-violet-200/60 max-w-lg mx-auto mb-10 text-lg">
            Diagnóstico direto. Você sai sabendo exatamente o que está travando o crescimento e o que precisa mudar primeiro.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold transition-all duration-200 shadow-[0_0_28px_rgba(147,51,234,0.5)] hover:shadow-[0_0_38px_rgba(147,51,234,0.7)] hover:scale-[1.02]"
          >
            Quero meu diagnóstico
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
