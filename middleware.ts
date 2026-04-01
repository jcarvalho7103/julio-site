import { NextRequest, NextResponse } from "next/server";

// Middleware roda no Edge Runtime — só verifica presença do cookie.
// A validação completa do JWT é feita no Server Component (app/admin/page.tsx).
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") return NextResponse.next();

  const token = req.cookies.get("admin_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
