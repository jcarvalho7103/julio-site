import { Calendar } from "lucide-react";
import LeadForm from "./LeadForm";

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#9333ea]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(147,51,234,0.4)] bg-[rgba(147,51,234,0.1)] text-violet-300 text-sm font-medium mb-8">
          <Calendar size={14} />
          Vagas limitadas por semana
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
          Se você já investe em tráfego e o negócio{" "}
          <span className="gradient-text">não escala como deveria,</span>{" "}
          vale uma conversa.
        </h2>

        <p className="text-lg text-violet-200/65 max-w-xl mx-auto mb-12">
          Preencha abaixo. Diagnóstico direto. Você sai sabendo exatamente o que está travando o crescimento e o que precisa mudar primeiro.
        </p>

        <LeadForm />
      </div>
    </section>
  );
}
