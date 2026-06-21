// Integração com o tracking stack server-side (jc-tra na Cloudflare).
// Dispara eventos para a Conversions API via endpoint /tracker.
// O endpoint hasheia o PII, enriquece com fbp/fbc e relaia para Meta CAPI.

// Subdomínio first-party (mesmo domínio raiz da LP) — evita bloqueio de
// ad-blocker/ITP que afeta domínios de terceiros como *.pages.dev.
const TRACKER_URL =
  process.env.NEXT_PUBLIC_TRACKER_URL || "https://mp.ojuliocarvalho.com";

function getCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : "";
}

type UserData = {
  em?: string; // email
  ph?: string; // telefone (com DDI, dígitos)
  fn?: string; // primeiro nome
  ln?: string; // sobrenome
};

export function newEventId(): string {
  return (
    (typeof crypto !== "undefined" && crypto.randomUUID?.()) ||
    `${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
}

export async function trackerFire(
  eventName: "PageView" | "Lead",
  userData: UserData = {},
  sharedEventId?: string
): Promise<void> {
  if (typeof window === "undefined") return;

  // Se fornecido, usa o mesmo event_id do Pixel (dedup Meta Pixel + CAPI).
  const eventId = sharedEventId || newEventId();

  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  try {
    await fetch(`${TRACKER_URL}/tracker`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        user_data: {
          ...userData,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
        },
      }),
      credentials: "include", // permite guardar os cookies geo first-party
      keepalive: true,
    });
  } catch {
    // silencioso: tracking não pode quebrar a UX
  }
}

export function splitNome(nome: string): { fn?: string; ln?: string } {
  const parts = nome.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return {};
  if (parts.length === 1) return { fn: parts[0] };
  return { fn: parts[0], ln: parts.slice(1).join(" ") };
}
