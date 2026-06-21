import CapiLeadForm from "./CapiLeadForm";

export default function CapiCTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#9333ea]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
          Descubra quanto rastreamento{" "}
          <span className="gradient-text">você está perdendo</span>
        </h2>

        <p className="text-lg text-violet-200/65 max-w-xl mx-auto mb-12">
          Preencha abaixo. Diagnóstico direto e gratuito. Você sai sabendo exatamente quanto está deixando na mesa e o que precisa ser corrigido primeiro.
        </p>

        <CapiLeadForm />
      </div>
    </section>
  );
}
