"use client";

import { useEffect } from "react";
import { trackerFire } from "@/lib/tracker";

declare global {
  interface Window {
    __capiEid?: string;
  }
}

// Dispara PageView + ViewContent para a CAPI usando o MESMO event_id de
// page-load que foi injetado no dataLayer (script inline em page.tsx).
// Assim o Pixel (que lê {{meta_event_id}}) e a CAPI partilham o id → dedup.
export default function CapiTracker() {
  useEffect(() => {
    const eid = typeof window !== "undefined" ? window.__capiEid : undefined;
    trackerFire("PageView", {}, eid);
    trackerFire("ViewContent", {}, eid);
  }, []);

  return null;
}
