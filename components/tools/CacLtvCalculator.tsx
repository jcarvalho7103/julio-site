"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp, Target, Clock, AlertTriangle } from "lucide-react";

type Faixa = "vermelho" | "amarelo" | "verde" | "vazio";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function parseInput(value: string): number {
  if (value.trim() === "") return NaN;
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

interface Campo {
  id: string;
  label: string;
  placeholder: string;
  suffix?: string;
  prefix?: string;
}

const CAMPOS: Campo[] = [
  { id: "investimento", label: "Investimento em aquisicao", placeholder: "10000", prefix: "R$" },
  { id: "clientes", label: "Novos clientes gerados", placeholder: "50" },
  { id: "ticket", label: "Ticket medio por compra", placeholder: "300", prefix: "R$" },
  { id: "margem", label: "Margem de contribuicao", placeholder: "40", suffix: "%" },
  { id: "frequencia", label: "Compras por ano (frequencia)", placeholder: "4" },
  { id: "lifespan", label: "Anos de retencao (lifespan)", placeholder: "3" },
];

export default function CacLtvCalculator() {
  const [values, setValues] = useState<Record<string, string>>({
    investimento: "",
    clientes: "",
    ticket: "",
    margem: "",
    frequencia: "",
    lifespan: "",
  });

  const handleChange = (id: string, raw: string) => {
    setValues((prev) => ({ ...prev, [id]: raw }));
  };

  const resultado = useMemo(() => {
    const investimento = parseInput(values.investimento);
    const clientes = parseInput(values.clientes);
    const ticket = parseInput(values.ticket);
    const margemPct = parseInput(values.margem);
    const frequencia = parseInput(values.frequencia);
    const lifespan = parseInput(values.lifespan);

    const preenchido =
      [investimento, clientes, ticket, margemPct, frequencia, lifespan].some(
        (v) => Number.isFinite(v)
      );

    const camposValidos =
      Number.isFinite(investimento) &&
      Number.isFinite(clientes) &&
      clientes > 0 &&
      Number.isFinite(ticket) &&
      Number.isFinite(margemPct) &&
      Number.isFinite(frequencia) &&
      Number.isFinite(lifespan);

    if (!camposValidos) {
      return {
        preenchido,
        pronto: false,
        cac: 0,
        ltv: 0,
        razao: 0,
        payback: 0,
        faixa: "vazio" as Faixa,
      };
    }

    const margem = margemPct / 100;
    const cac = investimento / clientes;
    const ltv = ticket * margem * frequencia * lifespan;
    const razao = cac > 0 ? ltv / cac : 0;

    const contribuicaoMensal = (ticket * margem * frequencia) / 12;
    const payback = contribuicaoMensal > 0 ? cac / contribuicaoMensal : Infinity;

    let faixa: Faixa = "vermelho";
    if (razao >= 3) faixa = "verde";
    else if (razao >= 1) faixa = "amarelo";

    return { preenchido, pronto: true, cac, ltv, razao, payback, faixa };
  }, [values]);

  const faixaCor: Record<Faixa, string> = {
    verde: "text-emerald-400",
    amarelo: "text-amber-400",
    vermelho: "text-red-400",
    vazio: "gradient-text",
  };

  const faixaTexto: Record<Faixa, string> = {
    verde: "Saudavel. O valor gerado por cliente cobre bem o custo de aquisicao.",
    amarelo: "Atencao. Ha margem, mas o retorno por cliente ainda e apertado.",
    vermelho: "Alerta. Voce esta gastando mais para adquirir do que o cliente devolve.",
    vazio: "Preencha os campos ao lado para ver o diagnostico.",
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">Seus numeros</h3>
        </div>

        <div className="space-y-4">
          {CAMPOS.map((campo) => (
            <div key={campo.id}>
              <label htmlFor={campo.id} className="block text-sm text-violet-200/80 mb-1.5">
                {campo.label}
              </label>
              <div className="relative">
                {campo.prefix ? (
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-violet-300/60 text-sm">
                    {campo.prefix}
                  </span>
                ) : null}
                <input
                  id={campo.id}
                  name={campo.id}
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  placeholder={campo.placeholder}
                  value={values[campo.id]}
                  onChange={(e) => handleChange(campo.id, e.target.value)}
                  className={`w-full py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors ${
                    campo.prefix ? "pl-11 pr-4" : campo.suffix ? "pl-4 pr-11" : "px-4"
                  }`}
                />
                {campo.suffix ? (
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-violet-300/60 text-sm">
                    {campo.suffix}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-violet-300/60">
          O calculo e atualizado automaticamente conforme voce digita. Use ponto para milhar e
          virgula para decimais, no padrao brasileiro.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">Resultados</h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-4xl font-extrabold gradient-text tabular-nums">
              {resultado.pronto ? brl.format(resultado.cac) : "R$ 0,00"}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-violet-200/70">
              <Target className="w-3.5 h-3.5" aria-hidden="true" />
              CAC por cliente
            </div>
          </div>

          <div>
            <div className="text-4xl font-extrabold gradient-text tabular-nums">
              {resultado.pronto ? brl.format(resultado.ltv) : "R$ 0,00"}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-violet-200/70">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              LTV por cliente
            </div>
          </div>

          <div>
            <div className={`text-4xl font-extrabold tabular-nums ${faixaCor[resultado.faixa]}`}>
              {resultado.pronto ? `${num.format(resultado.razao)}x` : "0,00x"}
            </div>
            <div className="mt-1 text-sm text-violet-200/70">Razao LTV / CAC</div>
          </div>

          <div>
            <div className="text-4xl font-extrabold gradient-text tabular-nums">
              {resultado.pronto
                ? Number.isFinite(resultado.payback)
                  ? `${num.format(resultado.payback)}`
                  : "-"
                : "0,00"}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-violet-200/70">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              Payback (meses)
            </div>
          </div>
        </div>

        <div
          className={`mt-6 rounded-xl border p-4 text-sm ${
            resultado.faixa === "verde"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
              : resultado.faixa === "amarelo"
              ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
              : resultado.faixa === "vermelho"
              ? "border-red-500/30 bg-red-500/10 text-red-200"
              : "border-[rgba(147,51,234,0.3)] bg-white/5 text-violet-200/70"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-2">
            {resultado.faixa === "vermelho" ? (
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
            ) : null}
            <p>{faixaTexto[resultado.faixa]}</p>
          </div>
        </div>

        <p className="mt-auto pt-6 text-xs text-violet-300/60">
          Referencia de mercado: uma razao LTV/CAC igual ou acima de 3x indica um modelo de
          aquisicao saudavel e escalavel.
        </p>
      </div>
    </div>
  );
}
