export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, empresa, whatsapp, faturamento, investeMarketing, estrutura, desafio } = body;

  if (!nome || !whatsapp || !faturamento || !investeMarketing) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("leads").insert([
    {
      nome,
      empresa: empresa || null,
      whatsapp,
      faturamento,
      investe_marketing: investeMarketing,
      estrutura: estrutura || null,
      desafio: desafio || null,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ error: "Erro ao salvar." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
