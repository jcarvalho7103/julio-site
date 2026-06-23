import type { ServiceData } from "@/lib/servicesData";

export default function ServiceProcess({ data }: { data: ServiceData }) {
  const { h2, sub, steps } = data.process;
  return (
    <section className="py-24">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 leading-[1.05]">
          {h2.a}
          {h2.em && <span className="gradient-text">{h2.em}</span>}
          {h2.b}
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-16 text-lg">{sub}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9333ea]/30 to-[#d946ef]/20 border border-[rgba(147,51,234,0.3)] flex items-center justify-center group-hover:from-[#9333ea]/50 transition-all">
                  <s.icon size={22} className="text-[#d946ef]" />
                </div>
                <span className="text-[#9333ea]/60 text-sm font-bold tracking-widest">{s.step}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-snug">{s.title}</h3>
              <p className="text-violet-200/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
