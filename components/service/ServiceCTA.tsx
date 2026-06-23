import ServiceLeadForm from "./ServiceLeadForm";
import type { ServiceData } from "@/lib/servicesData";

export default function ServiceCTA({ data }: { data: ServiceData }) {
  const { h2, sub } = data.cta;
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#9333ea]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 section-container text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
          {h2.a}
          {h2.em && <span className="gradient-text">{h2.em}</span>}
          {h2.b}
        </h2>

        <p className="text-lg text-violet-200/65 max-w-xl mx-auto mb-12">{sub}</p>

        <ServiceLeadForm slug={data.slug} form={data.form} successMessage={data.successMessage} />
      </div>
    </section>
  );
}
