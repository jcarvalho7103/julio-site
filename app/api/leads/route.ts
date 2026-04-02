export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, empresa, email, whatsapp, faturamento, investeMarketing, estrutura, desafio, url_params } = body;

  if (!nome || !empresa || !email || !whatsapp || !faturamento || !investeMarketing || !estrutura || !desafio) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("leads").insert([
    {
      nome,
      empresa,
      email,
      whatsapp,
      faturamento,
      investe_marketing: investeMarketing,
      estrutura,
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
