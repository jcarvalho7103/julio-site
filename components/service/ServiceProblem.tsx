import type { ServiceData } from "@/lib/servicesData";

export default function ServiceProblem({ data }: { data: ServiceData }) {
  const { h2, sub, items } = data.problem;
  return (
    <section className="py-24">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 max-w-3xl mx-auto leading-[1.05]">
          {h2}
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-16 text-lg">{sub}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group hover:border-[rgba(147,51,234,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(147,51,234,0.15)] border border-[rgba(147,51,234,0.3)] flex items-center justify-center mb-6 group-hover:bg-[rgba(147,51,234,0.25)] transition-colors">
                <p.icon size={22} className="text-[#d946ef]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-violet-200/60 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
