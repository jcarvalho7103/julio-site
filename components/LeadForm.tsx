"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import PhoneInputWrapper from "./PhoneInputWrapper";
import { gtm } from "@/lib/gtm";
import { getGeoData, type GeoData } from "@/lib/geo";

const FATURAMENTOS = [
  "Até R$10 mil",
  "Entre R$10 mil e R$50 mil",
  "Entre R$50 mil e R$100 mil",
  "Acima de R$100 mil",
];

const INVESTE_MARKETING = [
  "Não, ainda não",
  "Sim, com agência",
  "Sim, com equipe interna",
  "Sim, com freelancer",
];

const ESTRUTURA_NEGOCIO = [
  "Tenho equipe",
  "Tenho uma ou outra pessoa me ajudando",
  "Faço tudo sozinho",
];


export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    faturamento: "",
    investeMarketing: "",
    estrutura: [] as string[],
    desafio: "",
  });
  const [urlParams, setUrlParams] = useState<Record<string, string>>({});
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formStarted = useRef(false);

  useEffect(() => {
    const params: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((value, key) => {
      params[key] = value;
    });
    if (Object.keys(params).length > 0) setUrlParams(params);

    getGeoData().then(setGeoData);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (!formStarted.current) {
      formStarted.current = true;
      gtm.formStart();
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      estrutura: prev.estrutura.includes(value)
        ? prev.estrutura.filter((v) => v !== value)
        : [...prev.estrutura, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.estrutura.length === 0) {
      setError("Selecione ao menos uma opção em 'Como está estruturado o seu negócio'.");
      return;
    }
    setLoading(true);
    setError("");
    gtm.formSubmit({
      faturamento: form.faturamento,
      investeMarketing: form.investeMarketing,
    });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          estrutura: form.estrutura.join(", "),
          url_params: Object.keys(urlParams).length > 0 ? urlParams : undefined,
          geo: geoData ?? undefined,
        }),
      });

      if (!res.ok) {
        let msg = "Erro ao enviar. Tente novamente.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        throw new Error(msg);
      }

      gtm.lead({
        nome: form.nome,
        email: form.email,
        whatsapp: form.whatsapp,
        faturamento: form.faturamento,
        investeMarketing: form.investeMarketing,
        estrutura: form.estrutura.join(", "),
        geo: geoData ?? undefined,
      });
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-lg mx-auto text-center py-10 px-6 rounded-2xl border border-[rgba(147,51,234,0.3)] bg-[rgba(147,51,234,0.08)]">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-black text-white mb-3">Recebemos!</h3>
        <p className="text-violet-200/70 text-lg">
          Julio entrará em contato em breve pelo WhatsApp.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(147,51,234,0.3)] text-white placeholder-violet-300/40 focus:outline-none focus:border-[#9333ea] focus:bg-[rgba(147,51,234,0.1)] transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-violet-200/80 mb-1.5";
  const sectionLabelClass = "block text-sm font-semibold text-violet-200/90 mb-3 text-center";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-5 px-4 sm:px-0"
      suppressHydrationWarning
    >
      {/* Nome + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={labelClass}>Nome completo *</label>
          <input
            id="nome"
            type="text"
            name="nome"
            required
            value={form.nome}
            onChange={handleChange}
            placeholder="João Silva"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>Nome da empresa *</label>
          <input
            id="empresa"
            type="text"
            name="empresa"
            required
            value={form.empresa}
            onChange={handleChange}
            placeholder="Minha Empresa"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="joao@empresa.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClass}>WhatsApp *</label>
          <PhoneInputWrapper
            value={form.whatsapp}
            onChange={(value) => {
              if (!formStarted.current) {
                formStarted.current = true;
                gtm.formStart();
              }
              setForm((prev) => ({ ...prev, whatsapp: value }));
            }}
          />
        </div>
      </div>

      {/* Faixa de faturamento */}
      <div className="rounded-xl border border-[rgba(147,51,234,0.3)] bg-[rgba(255,255,255,0.03)] px-5 py-4">
        <span className={sectionLabelClass}>Faixa de faturamento mensal *</span>
        <div className="space-y-2.5">
          {FATURAMENTOS.map((f) => (
            <label key={f} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0">
                <input
                  type="radio"
                  name="faturamento"
                  value={f}
                  required
                  checked={form.faturamento === f}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                  form.faturamento === f
                    ? "border-[#9333ea] bg-[#9333ea]"
                    : "border-violet-400/40 group-hover:border-violet-400"
                }`}>
                  {form.faturamento === f && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </div>
              <span className={`text-sm transition-colors ${
                form.faturamento === f ? "text-white font-medium" : "text-violet-200/60 group-hover:text-violet-200"
              }`}>{f}</span>
            </label>
          ))}
        </div>
      </div>


      {/* Já investe em marketing */}
      <div>
        <label htmlFor="investeMarketing" className={labelClass}>Você já investe em marketing digital atualmente? *</label>
        <select
          id="investeMarketing"
          name="investeMarketing"
          required
          value={form.investeMarketing}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Selecione...</option>
          {INVESTE_MARKETING.map((v) => (
            <option key={v} value={v} className="bg-[#1a0533]">{v}</option>
          ))}
        </select>
      </div>

      {/* Estrutura do negócio */}
      <div className="rounded-xl border border-[rgba(147,51,234,0.3)] bg-[rgba(255,255,255,0.03)] px-5 py-4">
        <span className={sectionLabelClass}>Como está estruturado o seu negócio hoje? *</span>
        <div className="space-y-2.5">
          {ESTRUTURA_NEGOCIO.map((op) => (
            <label key={op} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={form.estrutura.includes(op)}
                  onChange={() => handleCheckbox(op)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded border-2 transition-all flex items-center justify-center ${
                  form.estrutura.includes(op)
                    ? "border-[#9333ea] bg-[#9333ea]"
                    : "border-violet-400/40 group-hover:border-violet-400"
                }`}>
                  {form.estrutura.includes(op) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <span className={`text-sm transition-colors ${
                form.estrutura.includes(op) ? "text-white font-medium" : "text-violet-200/60 group-hover:text-violet-200"
              }`}>{op}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Desafio */}
      <div>
        <label htmlFor="desafio" className={labelClass}>Qual é o seu maior desafio hoje? *</label>
        <textarea
          id="desafio"
          name="desafio"
          required
          value={form.desafio}
          onChange={handleChange}
          rows={3}
          placeholder="Descreva brevemente o que está travando seu crescimento..."
          className={inputClass + " resize-none"}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-black text-base transition-all duration-200 shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:shadow-[0_0_55px_rgba(147,51,234,0.7)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            Quero meu diagnóstico
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-violet-300/60 text-xs">
        Sem spam. Seus dados ficam seguros.
      </p>
    </form>
  );
}
