"use client";

import { useState, useMemo } from "react";
import { Target, TrendingUp, Percent, DollarSign, CheckCircle2, AlertTriangle } from "lucide-react";

type Modo = "cpl" | "cpc";

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numero = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function parseInput(valor: string): number {
  if (!valor) return 0;
  const limpo = valor.replace(/\./g, "").replace(",", ".");
  const n = parseFloat(limpo);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default function BreakEvenCalculator() {
  const [ticket, setTicket] = useState<string>("497");
  const [margem, setMargem] = useState<string>("60");
  const [taxaLeadVenda, setTaxaLeadVenda] = useState<string>("10");
  const [modo, setModo] = useState<Modo>("cpl");
  const [cpl, setCpl] = useState<string>("25");
  const [cpc, setCpc] = useState<string>("2");
  const [taxaPagina, setTaxaPagina] = useState<string>("8");

  const r = useMemo(() => {
    const ticketN = parseInput(ticket);
    const margemN = parseInput(margem) / 100;
    const taxaLVN = parseInput(taxaLeadVenda) / 100;
    const cplN = parseInput(cpl);
    const cpcN = parseInput(cpc);
    const taxaPagN = parseInput(taxaPagina) / 100;

    // CPL efetivo: quando modo CPC, deriva o CPL a partir do CPC e da taxa da pagina
    const cplEfetivo = modo === "cpl" ? cplN : taxaPagN > 0 ? cpcN / taxaPagN : 0;

    const margemPorVenda = ticketN * margemN;
    const cpaMaximo = ticketN * margemN; // margem de contribuicao em R$
    const cpaAtual = taxaLVN > 0 ? cplEfetivo / taxaLVN : 0;
    const breakEvenRoas = margemN > 0 ? 1 / margemN : 0;

    const temDados = ticketN > 0 && margemN > 0 && taxaLVN > 0 && cplEfetivo > 0;
    const lucrativo = temDados && cpaAtual > 0 && cpaAtual < cpaMaximo;
    const folga = cpaMaximo > 0 ? ((cpaMaximo - cpaAtual) / cpaMaximo) * 100 : 0;
    const roasNecessario = cpaAtual > 0 ? ticketN / cpaAtual : 0;

    return {
      temDados,
      cpaMaximo,
      cpaAtual,
      breakEvenRoas,
      margemPorVenda,
      cplEfetivo,
      lucrativo,
      folga,
      roasNecessario,
    };
  }, [ticket, margem, taxaLeadVenda, modo, cpl, cpc, taxaPagina]);

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-[rgba(147,51,234,0.3)] text-white placeholder:text-violet-300/40 focus:border-[#9333ea] outline-none transition-colors";

  return (
    <div className="grid md:grid-cols-2 gap-6 my-10">
      {/* Inputs */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          Seus numeros
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="ticket" className="block text-sm text-violet-200/80 mb-1.5">
              Ticket medio (R$)
            </label>
            <input
              id="ticket"
              type="number"
              inputMode="decimal"
              min="0"
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              placeholder="Ex: 497"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="margem" className="block text-sm text-violet-200/80 mb-1.5">
              Margem de contribuicao (%)
            </label>
            <input
              id="margem"
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              value={margem}
              onChange={(e) => setMargem(e.target.value)}
              placeholder="Ex: 60"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="taxaLeadVenda" className="block text-sm text-violet-200/80 mb-1.5">
              Taxa de conversao de lead para venda (%)
            </label>
            <input
              id="taxaLeadVenda"
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              value={taxaLeadVenda}
              onChange={(e) => setTaxaLeadVenda(e.target.value)}
              placeholder="Ex: 10"
              className={inputClass}
            />
          </div>

          {/* Alternador de modo */}
          <div>
            <span className="block text-sm text-violet-200/80 mb-1.5">Como voce mede o custo de midia?</span>
            <div className="inline-flex p-1 rounded-full bg-white/5 border border-[rgba(147,51,234,0.3)]">
              <button
                type="button"
                onClick={() => setModo("cpl")}
                className={
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-colors " +
                  (modo === "cpl" ? "bg-[#9333ea] text-white" : "text-violet-200/70 hover:text-white")
                }
                aria-pressed={modo === "cpl"}
              >
                Por lead (CPL)
              </button>
              <button
                type="button"
                onClick={() => setModo("cpc")}
                className={
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-colors " +
                  (modo === "cpc" ? "bg-[#9333ea] text-white" : "text-violet-200/70 hover:text-white")
                }
                aria-pressed={modo === "cpc"}
              >
                Por clique (CPC)
              </button>
            </div>
          </div>

          {modo === "cpl" ? (
            <div>
              <label htmlFor="cpl" className="block text-sm text-violet-200/80 mb-1.5">
                Custo por lead - CPL (R$)
              </label>
              <input
                id="cpl"
                type="number"
                inputMode="decimal"
                min="0"
                value={cpl}
                onChange={(e) => setCpl(e.target.value)}
                placeholder="Ex: 25"
                className={inputClass}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="cpc" className="block text-sm text-violet-200/80 mb-1.5">
                  Custo por clique - CPC (R$)
                </label>
                <input
                  id="cpc"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  value={cpc}
                  onChange={(e) => setCpc(e.target.value)}
                  placeholder="Ex: 2"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="taxaPagina" className="block text-sm text-violet-200/80 mb-1.5">
                  Conversao da pagina (%)
                </label>
                <input
                  id="taxaPagina"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="100"
                  value={taxaPagina}
                  onChange={(e) => setTaxaPagina(e.target.value)}
                  placeholder="Ex: 8"
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {modo === "cpc" && r.cplEfetivo > 0 && (
            <p className="text-xs text-violet-300/60">
              CPL estimado a partir do CPC: <span className="text-violet-200/80">{moeda.format(r.cplEfetivo)}</span>
            </p>
          )}
        </div>
      </div>

      {/* Resultados */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#d946ef]" aria-hidden="true" />
          Seu resultado
        </h3>

        {!r.temDados ? (
          <div className="flex items-center justify-center h-56 text-center px-4">
            <p className="text-violet-300/60 text-sm">
              Preencha os campos ao lado para ver o CPA maximo permitido e se a sua operacao esta lucrativa.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Numero-guia: CPA maximo */}
            <div className="rounded-xl p-5 bg-white/5 border border-[rgba(147,51,234,0.35)]">
              <p className="text-xs uppercase tracking-wide text-violet-300/70 mb-1">
                CPA maximo permitido (numero-guia)
              </p>
              <p className="text-4xl font-extrabold gradient-text leading-tight">{moeda.format(r.cpaMaximo)}</p>
              <p className="text-xs text-violet-300/60 mt-2">
                Acima deste custo por venda, cada cliente da prejuizo. Use este numero como teto de aquisicao.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-extrabold gradient-text leading-tight">{moeda.format(r.cpaAtual)}</p>
                <p className="text-xs text-violet-300/60 mt-1">CPA atual estimado</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text leading-tight">{numero.format(r.breakEvenRoas)}x</p>
                <p className="text-xs text-violet-300/60 mt-1">Break-even ROAS</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text leading-tight">{moeda.format(r.margemPorVenda)}</p>
                <p className="text-xs text-violet-300/60 mt-1">Margem por venda</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold gradient-text leading-tight">{numero.format(r.roasNecessario)}x</p>
                <p className="text-xs text-violet-300/60 mt-1">ROAS atual estimado</p>
              </div>
            </div>

            {/* Veredito */}
            <div
              className={
                "rounded-xl p-4 flex items-start gap-3 border " +
                (r.lucrativo
                  ? "bg-emerald-500/10 border-emerald-500/40"
                  : "bg-red-500/10 border-red-500/40")
              }
            >
              {r.lucrativo ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
              )}
              <div>
                <p className={"font-semibold " + (r.lucrativo ? "text-emerald-300" : "text-red-300")}>
                  {r.lucrativo ? "Operacao lucrativa" : "Operacao no vermelho"}
                </p>
                <p className="text-sm text-violet-200/70 mt-1">
                  {r.lucrativo ? (
                    <>
                      Seu CPA atual ({moeda.format(r.cpaAtual)}) esta abaixo do teto ({moeda.format(r.cpaMaximo)}). Voce
                      tem {numero.format(r.folga)}% de folga para escalar o investimento.
                    </>
                  ) : (
                    <>
                      Seu CPA atual ({moeda.format(r.cpaAtual)}) ultrapassa o teto de {moeda.format(r.cpaMaximo)}. Reduza
                      o CPL, aumente a conversao de lead para venda ou eleve o ticket para voltar ao azul.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
