"use client";

import { useEffect } from "react";
import { trackerFire } from "@/lib/tracker";

// Dispara o PageView para o tracking stack uma vez por carregamento da /capi.
export default function CapiTracker() {
  useEffect(() => {
    trackerFire("PageView");
  }, []);

  return null;
}
