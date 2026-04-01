"use client";

import { useEffect, useRef, useState } from "react";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(147,51,234,0.3)] text-white placeholder-violet-300/40 focus:outline-none focus:border-[#9333ea] focus:bg-[rgba(147,51,234,0.1)] transition-colors text-sm";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneInputWrapper({ value, onChange }: Props) {
  const [ready, setReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = useRef<any>(null);

  useEffect(() => {
    import("react-phone-input-2").then((mod) => {
      Comp.current = mod.default || mod;
      setReady(true);
    });
  }, []);

  if (!ready || !Comp.current) {
    return (
      <input
        type="tel"
        placeholder="(11) 99999-9999"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        suppressHydrationWarning
      />
    );
  }

  const PhoneInput = Comp.current;

  return (
    <PhoneInput
      country="br"
      value={value}
      onChange={onChange}
      inputProps={{ name: "whatsapp", required: true }}
      containerClass="phone-input-container"
      inputClass="phone-input-field"
      buttonClass="phone-input-button"
      placeholder="(11) 99999-9999"
    />
  );
}
