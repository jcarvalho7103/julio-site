import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, whatsapp, email, segmento, verba, desafio } = body;

  if (!nome || !whatsapp || !email || !segmento || !verba) {
    return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("leads").insert([
    { nome, whatsapp, email, segmento, verba, desafio: desafio || null },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ error: "Erro ao salvar." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
