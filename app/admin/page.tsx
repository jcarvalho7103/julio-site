export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { createSupabaseServerClient, getSupabaseAdmin } from "@/lib/supabase";
import LogoutButton from "./LogoutButton";

interface Lead {
  id: string;
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  faturamento: string;
  investe_marketing: string;
  estrutura: string;
  desafio: string | null;
  created_at: string;
}

async function getLeads(): Promise<Lead[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("leads")
    .select("id, nome, empresa, email, whatsapp, faturamento, investe_marketing, estrutura, desafio, created_at")
    .order("created_at", { ascending: false });

  if (error) return [];
  return data as Lead[];
}

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect("/admin/login");

  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-[#0d0118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black">Leads</h1>
            <p className="text-violet-300/60 text-sm mt-1">
              {leads.length} lead{leads.length !== 1 ? "s" : ""} coletado{leads.length !== 1 ? "s" : ""}
            </p>
          </div>
          <LogoutButton />
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-20 text-violet-300/50">
            Nenhum lead ainda.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-violet-500/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-violet-500/20 bg-violet-500/10">
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Nome</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Empresa</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">E-mail</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">WhatsApp</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Faturamento</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Investe Marketing</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Estrutura</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Desafio</th>
                  <th className="text-left px-4 py-3 text-violet-300/80 font-medium">Data</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr
                    key={lead.id}
                    className={`border-b border-violet-500/10 ${i % 2 === 0 ? "" : "bg-white/[0.02]"} hover:bg-violet-500/5 transition-colors`}
                  >
                    <td className="px-4 py-3 font-medium whitespace-nowrap">{lead.nome}</td>
                    <td className="px-4 py-3 text-violet-200/70 whitespace-nowrap">{lead.empresa || "—"}</td>
                    <td className="px-4 py-3 text-violet-200/70">{lead.email || "—"}</td>
                    <td className="px-4 py-3 text-violet-200/70 whitespace-nowrap">{lead.whatsapp}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-xs">
                        {lead.faturamento || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-violet-200/70 whitespace-nowrap">{lead.investe_marketing || "—"}</td>
                    <td className="px-4 py-3 text-violet-200/50 max-w-[160px] truncate">{lead.estrutura || "—"}</td>
                    <td className="px-4 py-3 text-violet-200/50 max-w-[200px] truncate">{lead.desafio || "—"}</td>
                    <td className="px-4 py-3 text-violet-200/50 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
