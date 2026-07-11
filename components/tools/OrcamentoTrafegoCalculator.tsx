"use client";

import { useMemo, useState } from "react";
import { Target, Users, Wallet, CalendarDays, TrendingUp } from "lucide-react";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 0,
});

const num1 = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 1,
});

function parse(value: string): number {
  if (!value) return 0;
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = parseFloat(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

type ResultCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint?: string;
};

function ResultCard({ icon, label, value, hint }: ResultCardProps) {
  return (
    <div className="rounded-xl bg-white/5 border border-[rgba(147,51,234,0.15)] p-5">
      <div className="flex items-center gap-2 text-violet-300/60 mb-2">
        {icon}
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      <div className="text-4xl font-extrabold gradient-text leading-none">{value}</div>
      {hint ? <div className="mt-2 text-xs text-violet-300/50">{hint}</div> : null}
    </div>
  );
}

export default function OrcamentoTrafegoCalculator() {
  const [meta, setMeta] = useState("50000");
  const [ticket, setTicket] = useState("500");
  const [taxa, setTaxa] = useState("10");
  const [cpl, setCpl] = useState("8");

  const r = useMemo(() => {
    const metaV = parse(meta);
    const ticketV = parse(ticket);
    const taxaV = parse(taxa);
    const cplV = parse(cpl);

    const vendas = ticketV > 0 ? metaV / ticketV : 0;
    const taxaDec = taxaV / 100;
    const leads = taxaDec > 0 ? vendas / taxaDec : 0;
    const orcamento = leads * cplV;
    const diario = orcamento / 30;
    const roas = orcamento > 0 ? metaV / orcamento : 0;

    return { vendas, leads, orcamento, diario, roas };
  }, [meta, ticket, taxa, cpl]);

  const hasResult = r.orcamento > 0;

  return (
    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-display mb-1">Seus números</h2>
        <p className="text-sm text-violet-300/60 mb-6">
          Preencha os campos abaixo. O cálculo atualiza em tempo real.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-violet-200/80 mb-1.5">
              Meta de faturamento no período (R$)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              placeholder="Ex.: 50000"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-violet-200/80 mb-1.5">
              Ticket médio (R$)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              placeholder="Ex.: 500"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-violet-200/80 mb-1.5">
              Taxa de conversão de lead para venda (%)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              max={100}
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              placeholder="Ex.: 10"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-violet-200/80 mb-1.5">
              Custo por lead - CPL (R$)
            </label>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={cpl}
              onChange={(e) => setCpl(e.target.value)}
              placeholder="Ex.: 8"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-display mb-1">Seu plano de verba</h2>
        <p className="text-sm text-violet-300/60 mb-6">
          Estimativas para dimensionar a mídia e bater a meta.
        </p>

        {hasResult ? (
          <div className="space-y-4">
            <ResultCard
              icon={<Wallet size={16} />}
              label="Orçamento de mídia necessário"
              value={brl.format(r.orcamento)}
              hint="Verba total de tráfego para o período."
            />
            <div className="grid grid-cols-2 gap-4">
              <ResultCard
                icon={<Target size={16} />}
                label="Vendas necessárias"
                value={num.format(Math.ceil(r.vendas))}
              />
              <ResultCard
                icon={<Users size={16} />}
                label="Leads necessários"
                value={num.format(Math.ceil(r.leads))}
              />
              <ResultCard
                icon={<CalendarDays size={16} />}
                label="Investimento diário"
                value={brl.format(r.diario)}
                hint="Base de 30 dias."
              />
              <ResultCard
                icon={<TrendingUp size={16} />}
                label="ROAS projetado"
                value={`${num1.format(r.roas)}x`}
                hint="Retorno sobre a mídia."
              />
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-white/5 border border-[rgba(147,51,234,0.15)] p-6 text-center text-violet-300/60">
            Informe a meta, o ticket médio, a taxa de conversão e o CPL para ver
            o orçamento sugerido.
          </div>
        )}
      </div>
    </div>
  );
}
