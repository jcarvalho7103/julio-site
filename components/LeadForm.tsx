"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const SEGMENTOS = ["Saúde", "Educação", "Imóveis", "Finanças", "E-commerce", "Outro"];
const VERBAS = ["Menos de R$3k", "R$3k–R$10k", "R$10k–R$30k", "Acima de R$30k"];

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    segmento: "",
    verba: "",
    desafio: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar.");
      }

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
          Julio entrará em contato em breve pelo WhatsApp ou e-mail.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(147,51,234,0.3)] text-white placeholder-violet-300/40 focus:outline-none focus:border-[#9333ea] focus:bg-[rgba(147,51,234,0.1)] transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-violet-200/80 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto space-y-4 px-4 sm:px-0"
    >
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
          <label htmlFor="whatsapp" className={labelClass}>WhatsApp *</label>
          <input
            id="whatsapp"
            type="tel"
            name="whatsapp"
            required
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className={inputClass}
          />
        </div>
      </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="segmento" className={labelClass}>Segmento/nicho *</label>
          <select
            id="segmento"
            name="segmento"
            required
            value={form.segmento}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Selecione...</option>
            {SEGMENTOS.map((s) => (
              <option key={s} value={s} className="bg-[#1a0533]">{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="verba" className={labelClass}>Verba mensal em tráfego *</label>
          <select
            id="verba"
            name="verba"
            required
            value={form.verba}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Selecione...</option>
            {VERBAS.map((v) => (
              <option key={v} value={v} className="bg-[#1a0533]">{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="desafio" className={labelClass}>Maior desafio atual</label>
        <textarea
          id="desafio"
          name="desafio"
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
            Quero meu diagnóstico gratuito
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
