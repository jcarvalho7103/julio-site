"use client";

import { useState, useMemo } from "react";
import { TrendingUp, TrendingDown, Target, Wallet, ArrowUpRight, Percent } from "lucide-react";

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

const pct = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

function parseInput(value: string): number {
  if (!value) return NaN;
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

export default function RoasCalculator() {
  const [investimento, setInvestimento] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [margem, setMargem] = useState("");

  const result = useMemo(() => {
    const inv = parseInput(investimento);
    const fat = parseInput(faturamento);
    const mar = parseInput(margem);

    const hasInv = Number.isFinite(inv) && inv > 0;
    const hasFat = Number.isFinite(fat) && fat >= 0;
    const hasMar = Number.isFinite(mar) && mar > 0;

    const ready = hasInv && hasFat;

    if (!ready) {
      return {
        ready: false,
        roas: 0,
        roi: 0,
        breakEven: 0,
        lucro: 0,
        acima: false,
        temMargem: hasMar,
      };
    }

    const roas = fat / inv;
    const roi = ((fat - inv) / inv) * 100;

    const margemDecimal = hasMar ? mar / 100 : 0;
    const breakEven = hasMar ? 1 / margemDecimal : 0;

    // Lucro estimado = (faturamento * margem) - investimento
    const lucro = hasMar ? fat * margemDecimal - inv : fat - inv;
    const acima = hasMar ? roas >= breakEven : roas >= 1;

    return {
      ready: true,
      roas,
      roi,
      breakEven,
      lucro,
      acima,
      temMargem: hasMar,
    };
  }, [investimento, faturamento, margem]);

  return (
    <div className="not-prose my-10 grid md:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Wallet className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white m-0">Seus números</h3>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="roas-investimento" className="block text-sm text-violet-200/80 mb-1.5">
              Investimento em anúncios (R$)
            </label>
            <input
              id="roas-investimento"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={investimento}
              onChange={(e) => setInvestimento(e.target.value)}
              placeholder="Ex.: 5000"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="roas-faturamento" className="block text-sm text-violet-200/80 mb-1.5">
              Faturamento gerado (R$)
            </label>
            <input
              id="roas-faturamento"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={faturamento}
              onChange={(e) => setFaturamento(e.target.value)}
              placeholder="Ex.: 20000"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="roas-margem" className="block text-sm text-violet-200/80 mb-1.5">
              Margem de contribuição (%)
            </label>
            <input
              id="roas-margem"
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              step="0.1"
              value={margem}
              onChange={(e) => setMargem(e.target.value)}
              placeholder="Ex.: 40"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors"
            />
            <p className="text-xs text-violet-300/60 mt-1.5">
              Percentual que sobra de cada venda depois dos custos variáveis (produto, taxas, frete).
              Opcional, mas necessário para o break-even e o lucro real.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="glass-card rounded-2xl p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-5">
          <Percent className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white m-0">Resultado</h3>
        </div>

        {!result.ready ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
            <Target className="w-10 h-10 text-violet-300/40 mb-3" aria-hidden="true" />
            <p className="text-violet-200/70 text-sm max-w-xs">
              Preencha o investimento e o faturamento para ver o ROAS, o ROI e o seu ponto de
              equilíbrio em tempo real.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-extrabold gradient-text leading-none">
                  {num.format(result.roas)}
                </div>
                <div className="text-xs text-violet-300/60 mt-2 uppercase tracking-wide">
                  ROAS (retorno por real)
                </div>
              </div>

              <div>
                <div className="text-4xl font-extrabold gradient-text leading-none">
                  {result.roi >= 0 ? "+" : ""}
                  {pct.format(result.roi)}%
                </div>
                <div className="text-xs text-violet-300/60 mt-2 uppercase tracking-wide">
                  ROI (retorno sobre o investimento)
                </div>
              </div>
            </div>

            {/* Break-even destacado */}
            <div className="rounded-xl border border-[rgba(217,70,239,0.35)] bg-[rgba(217,70,239,0.08)] p-4">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-[#d946ef]" aria-hidden="true" />
                <span className="text-xs text-violet-200/80 uppercase tracking-wide">
                  Break-even ROAS (meta mínima)
                </span>
              </div>
              {result.temMargem ? (
                <>
                  <div className="text-3xl font-extrabold gradient-text leading-none">
                    {num.format(result.breakEven)}
                  </div>
                  <p className="text-xs text-violet-200/70 mt-2">
                    Abaixo desse ROAS você opera no prejuízo. É a sua meta de referência.
                  </p>
                </>
              ) : (
                <p className="text-sm text-violet-200/70">
                  Informe a margem de contribuição para calcular o ROAS mínimo que cobre seus custos.
                </p>
              )}
            </div>

            {/* Lucro / veredito */}
            <div>
              <div
                className={`flex items-center gap-2 text-2xl font-extrabold leading-none ${
                  result.lucro >= 0 ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {result.lucro >= 0 ? (
                  <TrendingUp className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <TrendingDown className="w-6 h-6" aria-hidden="true" />
                )}
                {brl.format(result.lucro)}
              </div>
              <div className="text-xs text-violet-300/60 mt-2 uppercase tracking-wide">
                {result.lucro >= 0 ? "Lucro estimado" : "Prejuízo estimado"}
                {result.temMargem ? " (já considerando a margem)" : " (sem margem informada)"}
              </div>
            </div>

            {result.temMargem && (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  result.acima
                    ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/30"
                    : "bg-rose-500/10 text-rose-200 border border-rose-500/30"
                }`}
              >
                {result.acima
                  ? `Acima do break-even: sua campanha é lucrativa (ROAS ${num.format(
                      result.roas
                    )} contra a meta de ${num.format(result.breakEven)}).`
                  : `Abaixo do break-even: a campanha ainda não se paga (ROAS ${num.format(
                      result.roas
                    )} contra a meta de ${num.format(result.breakEven)}).`}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
