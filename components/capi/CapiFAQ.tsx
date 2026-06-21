"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é a API de Conversões (CAPI) e por que eu preciso dela?",
    a: "É um método de enviar os eventos de conversão direto do servidor para a plataforma de anúncios, sem depender do navegador do usuário. Como iOS, bloqueadores e navegação privada derrubam o pixel, a CAPI recupera os eventos que seriam perdidos e devolve sinal de qualidade para o algoritmo otimizar melhor.",
  },
  {
    q: "Funciona para Meta, Google e TikTok?",
    a: "Sim. Configuro a Conversions API do Meta, o Enhanced Conversions do Google Ads e a Events API do TikTok — as três rodando server-side via GTM, com deduplicação correta para não inflar os dados no gerenciador.",
  },
  {
    q: "Vou ver mais conversões duplicadas no gerenciador?",
    a: "Não. A implementação usa event_id e deduplicação para o pixel e a CAPI reconhecerem o mesmo evento. Você recupera o que estava perdendo sem contar a mesma conversão duas vezes.",
  },
  {
    q: "Preciso trocar de plataforma de site ou de CRM?",
    a: "Não. A configuração é feita por cima da sua estrutura atual via Google Tag Manager. Funciona com a maioria das plataformas de site, checkout e CRM do mercado.",
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Depende do tamanho da operação, mas é uma entrega objetiva — dias, não meses. Começa com o diagnóstico gratuito, onde eu te mostro exatamente o que está sendo perdido e o escopo da implementação.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Você preenche o formulário, a gente conversa pelo WhatsApp ou em call, e eu te dou uma leitura honesta de quanto rastreamento você está perdendo hoje e o que precisa ser feito. Sem pitch e sem pressão — você sai com clareza mesmo que não fechemos.",
  },
];

export default function CapiFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          Dúvidas frequentes
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight">
          Antes de preencher, leia isso
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-12 text-lg">
          O que costumam perguntar antes de começar.
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-[rgba(147,51,234,0.5)]" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                aria-expanded={open === i}
                aria-controls={`capi-faq-answer-${i}`}
                id={`capi-faq-question-${i}`}
              >
                <span className="text-white font-semibold text-sm md:text-base pr-4 group-hover:text-violet-200 transition-colors">
                  {f.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#9333ea] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`capi-faq-answer-${i}`}
                role="region"
                aria-labelledby={`capi-faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6 text-violet-200/65 text-sm leading-relaxed border-t border-[rgba(147,51,234,0.15)] pt-4">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
