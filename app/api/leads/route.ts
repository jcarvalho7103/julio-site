export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, empresa, email, whatsapp, faturamento, investeMarketing, estrutura, desafio, url_params } = body;

  // Campos sempre obrigatórios. empresa/investeMarketing/estrutura são opcionais
  // para suportar formulários enxutos (ex.: LP de CAPI), sem quebrar o form principal.
  if (!nome || !email || !whatsapp || !faturamento || !desafio) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("leads").insert([
    {
      nome,
      empresa: empresa || "",
      email,
      whatsapp,
      faturamento,
      investe_marketing: investeMarketing || "",
      estrutura: estrutura || "",
      desafio,
      url_params: url_params || null,
    },
  ]);

  if (error) {
    console.error("Supabase error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message || "Erro ao salvar." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
