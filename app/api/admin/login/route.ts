import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req: NextRequest) {
  const { user, pass } = await req.json();

  if (user !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
    return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.ADMIN_SECRET!);
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return res;
}
