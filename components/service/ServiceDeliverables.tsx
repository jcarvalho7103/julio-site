import { CheckCircle2 } from "lucide-react";
import type { ServiceData } from "@/lib/servicesData";

export default function ServiceDeliverables({ data }: { data: ServiceData }) {
  const { h2, sub, items, outcome } = data.deliverables;
  return (
    <section id="entregaveis" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 max-w-3xl mx-auto leading-[1.05]">
          {h2.a}
          {h2.em && <span className="gradient-text">{h2.em}</span>}
          {h2.b}
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-16 text-lg">{sub}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((d, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex gap-5 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center group-hover:from-[#9333ea]/50 transition-all">
                  <d.icon size={22} className="text-[#d946ef]" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{d.title}</h3>
                <p className="text-violet-200/60 text-sm leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto glass-card rounded-2xl px-6 py-5 flex items-start gap-3">
          <CheckCircle2 size={20} className="text-[#d946ef] flex-shrink-0 mt-0.5" />
          <p className="text-violet-200/80 text-sm leading-relaxed">{outcome}</p>
        </div>
      </div>
    </section>
  );
}
