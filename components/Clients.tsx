import Image from "next/image";

const clients = [
  { name: "Afya",                category: "Educação Médica",                        photo: "/clients/afya.oficial.jpg" },
  { name: "Maíra Cardi",         category: "Wellness",                               photo: "/clients/mairacardi.jpg" },
  { name: "Keila Neves",          category: "Educação em Marketing Digital",          photo: "/clients/keilaneves91.jpg" },
  { name: "Anthony Miranda",     category: "Educação Financeira",                    photo: "/clients/anthonymirandaoficial.jpg" },
  { name: "André Froede",        category: "Wellness",                               photo: "/clients/andrefroedoficial.jpg" },
  { name: "Edwards Miranda",     category: "Educação Financeira",                    photo: "/clients/euedwardsmiranda.jpg" },
  { name: "Dra. Elisiane",       category: "Educação Financeira",                    photo: "/clients/doutoraelisiane.jpg" },
  { name: "Coloplast",           category: "MedTech",                                photo: "/clients/coloplastwoundcare.jpg" },
  { name: "Rev3 Incorporadora",  category: "Imóveis",                                photo: "/clients/rev3incorporadora.jpg" },
  { name: "Mamute Inc",          category: "Imóveis",                                photo: "/clients/mamuteinc.jpg" },
  { name: "Finanças Dominadas",  category: "Educação Financeira",                    photo: "/clients/financas.dominadas.jpg" },
  { name: "Meu Consultório",     category: "Educação em Negócios",                   photo: "/clients/meu.consultorio.particular.jpg" },
  { name: "Elainne Ourives",     category: "Desenvolvimento Pessoal",                photo: "/clients/elainneourivesoficial.jpg" },
  { name: "Mentoria Residência", category: "Educação Médica",                        photo: "/clients/mentoria.residencia.jpg" },
];

const doubled = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-16 border-y border-[rgba(147,51,234,0.15)] overflow-hidden">
      <p className="text-center text-sm text-violet-300/50 font-medium tracking-widest uppercase mb-10">
        Marcas e personalidades que já escalaram com estratégia + tecnologia
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0d0118] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0d0118] to-transparent" />

        <div className="flex gap-5 animate-marquee w-max">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border border-[rgba(147,51,234,0.2)] bg-[rgba(20,2,37,0.6)]"
            >
              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[rgba(147,51,234,0.4)] flex-shrink-0">
                <Image
                  src={c.photo}
                  alt={c.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span className="text-white font-semibold text-sm leading-tight whitespace-nowrap">{c.name}</span>
                <span className="text-violet-300/50 text-xs leading-tight whitespace-nowrap">{c.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
