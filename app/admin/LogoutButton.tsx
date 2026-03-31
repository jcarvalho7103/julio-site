"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-xl border border-violet-500/30 text-violet-300/70 hover:text-white hover:border-violet-500/60 text-sm transition-colors"
    >
      Sair
    </button>
  );
}
