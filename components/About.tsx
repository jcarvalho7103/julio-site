import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-[440px] md:w-96 md:h-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 blur-2xl scale-110" />
              {/* Frame */}
              <div className="relative w-full h-full rounded-3xl border border-[rgba(147,51,234,0.35)] overflow-hidden">
                <Image
                  src="/julio2.png"
                  alt="Julio Carvalho, Estrategista de Crescimento"
                  fill
                  sizes="(max-width: 768px) 320px, 420px"
                  className="object-cover object-top"
                  quality={85}
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0114]/80 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-5 py-3 border border-[rgba(147,51,234,0.4)]">
                <span className="text-white font-bold text-sm block">4+ anos</span>
                <span className="text-violet-300/60 text-xs">em performance</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
              Quem é Julio Carvalho
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              Comecei como gestor de tráfego.{" "}
              <span className="gradient-text">Parei quando percebi que não era suficiente.</span>
            </h2>
            <p className="text-violet-200/70 mb-5 leading-relaxed">
              Aos poucos fui entendendo que a campanha era só a parte visível. O que determinava se o negócio crescia ou não estava em outro lugar: no rastreamento, no funil, nas automações, na tecnologia por trás.
            </p>
            <p className="text-violet-200/70 mb-5 leading-relaxed">
              Aprendi a programar. Aprendi a usar IA do jeito que faz diferença pra negócio, não só pra gerar texto. E comecei a juntar tudo isso num único trabalho: estratégia, dados, tecnologia e tráfego, executados do mesmo lugar, com o mesmo objetivo.
            </p>
            <p className="text-violet-200/70 mb-8 leading-relaxed">
              Mais de 50 projetos depois, de influencers com milhões de seguidores a healthtechs e incorporadoras, virou o Método CTR. Não é fórmula mágica. É a sequência certa para não desperdiçar o que você já tem.
            </p>

            <div className="mt-8">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-bold transition-all duration-200 shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)]"
              >
                Quero meu diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
