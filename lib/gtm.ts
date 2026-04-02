declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// Eventos padronizados
export const gtm = {
  // Usuário começou a preencher o formulário
  formStart: () =>
    pushEvent("form_start", {
      form_id: "lead_form",
      form_name: "Diagnóstico Julio Carvalho",
    }),

  // Usuário clicou em enviar (antes da resposta)
  formSubmit: (data: {
    faturamento?: string;
    investeMarketing?: string;
  }) =>
    pushEvent("form_submit", {
      form_id: "lead_form",
      form_name: "Diagnóstico Julio Carvalho",
      faturamento: data.faturamento,
      investe_marketing: data.investeMarketing,
    }),

  // Lead gerado com sucesso
  lead: (data: {
    nome?: string;
    email?: string;
    whatsapp?: string;
    faturamento?: string;
    investeMarketing?: string;
    estrutura?: string;
    geo?: {
      ip?: string;
      city?: string;
      region?: string;
      country?: string;
      timezone?: string;
      latitude?: number;
      longitude?: number;
      accuracy?: number;
      source?: string;
    };
  }) =>
    pushEvent("generate_lead", {
      form_id: "lead_form",
      form_name: "Diagnóstico Julio Carvalho",
      currency: "BRL",
      user_data: {
        name: data.nome,
        email: data.email,
        phone: data.whatsapp,
      },
      geo: data.geo,
      faturamento: data.faturamento,
      investe_marketing: data.investeMarketing,
      estrutura: data.estrutura,
    }),
};
