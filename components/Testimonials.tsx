const testimonials = [
  {
    quote:
      "O Julio não entrega relatório — entrega sistema. Em 60 dias tínhamos automações rodando, CPL caindo e dados reais para tomar decisão. É outro nível.",
    name: "Mentoria — Infoproduto",
    role: "Programa de mentoria",
    initial: "M",
  },
  {
    quote:
      "Finalmente alguém que entende que o problema não é só o tráfego. Ele mapeou o funil inteiro, identificou onde estávamos perdendo e construiu a solução. Resultado: 3x de ROAS em 90 dias.",
    name: "E-commerce — Moda",
    role: "Setor de moda",
    initial: "E",
  },
  {
    quote:
      "Trabalhar com o Julio é diferente. Ele combina estratégia com tecnologia de um jeito que a maioria das agências não consegue. A IA que ele implementou economiza horas da equipe todo dia.",
    name: "Tech — Plataforma Médica",
    role: "Plataforma médica",
    initial: "T",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-container">
        <p className="text-center text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white mb-4 tracking-tight">
          Resultados reais. Palavras reais.
        </h2>
        <p className="text-center text-violet-200/60 max-w-xl mx-auto mb-12 text-lg">
          De quem já estava no mesmo ponto que você e decidiu mudar a estrutura.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex flex-col group hover:border-[rgba(147,51,234,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#9333ea]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-violet-200/75 text-sm leading-relaxed flex-1 italic mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-[rgba(147,51,234,0.15)] pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9333ea] to-[#d946ef] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-violet-300/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
