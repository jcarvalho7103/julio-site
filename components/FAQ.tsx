"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qual a diferença entre você e uma agência de tráfego?",
    a: "Agência de tráfego entrega campanhas. Eu entrego o sistema por trás das campanhas. Rastreamento, automação, IA, tecnologia, estratégia. Tudo junto, executado. O tráfego só performa quando o resto está montado do jeito certo.",
  },
  {
    q: "Para que tipo de negócio faz sentido trabalhar com você?",
    a: "Negócios que já investem em tráfego mas não estão escalando. Infoprodutores, prestadores de serviço, incorporadoras, healthtechs, influencers com produto próprio. O setor não importa tanto. O que importa é que você já tem algo funcionando e quer crescer com inteligência, não com mais verba.",
  },
  {
    q: "O que é o Método C?",
    a: "É o framework que criei ao longo de mais de 50 projetos. Ele organiza o crescimento em camadas: primeiro a fundação de dados, depois a tecnologia, depois o tráfego, depois a escala. Cada fase tem entregáveis claros. Não tem fase de estudo que dura meses.",
  },
  {
    q: "Como funciona a call?",
    a: "É um diagnóstico direto. Você me conta como está o negócio hoje, o que está travando, onde está investindo. Eu devolvo uma leitura honesta do que eu enxergo e, se fizer sentido trabalharmos juntos, a gente conversa sobre como seria. Sem pitch. Sem pressão.",
  },
  {
    q: "Vocês entregam sistema rodando ou só consultoria?",
    a: "Sistema rodando. Isso inclui pixel configurado, automações ativas, dashboard no ar, campanhas veiculando. Consultoria sem execução é relatório bonito que vira gaveta. Não é o que eu faço.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          Dúvidas frequentes
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-16 tracking-tight">
          Perguntas e respostas
        </h2>

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
              {open === i && (
                <div className="px-7 pb-6 text-violet-200/65 text-sm leading-relaxed border-t border-[rgba(147,51,234,0.15)] pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
