"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ user: "", pass: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json();
      setError(data.error || "Credenciais inválidas.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0118] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-black text-white text-center mb-8">Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-violet-200/70 mb-1.5">
              Usuário
            </label>
            <input
              type="text"
              required
              value={form.user}
              onChange={(e) => setForm((p) => ({ ...p, user: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-violet-200/70 mb-1.5">
              Senha
            </label>
            <input
              type="password"
              required
              value={form.pass}
              onChange={(e) => setForm((p) => ({ ...p, pass: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-violet-500/30 text-white focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold transition-colors disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
