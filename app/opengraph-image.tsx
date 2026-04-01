import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Julio Carvalho — Estrategista de Crescimento com IA e Dados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0118",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "200px",
            width: "600px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(147,51,234,0.25)",
            filter: "blur(80px)",
          }}
        />

        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "640px", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(147,51,234,0.15)",
              border: "1px solid rgba(147,51,234,0.4)",
              borderRadius: "100px",
              padding: "8px 20px",
              marginBottom: "28px",
              width: "fit-content",
            }}
          >
            <span style={{ color: "#c084fc", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em" }}>
              ESTRATEGISTA DE CRESCIMENTO
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "62px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-2px",
            }}
          >
            Julio{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9333ea, #d946ef)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Carvalho
            </span>
          </div>

          {/* Tagline */}
          <div style={{ fontSize: "22px", color: "rgba(196,181,253,0.75)", lineHeight: 1.4, marginBottom: "36px" }}>
            Tráfego pago + IA + tecnologia.<br />
            O sistema que faz o negócio escalar.
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { value: "+50", label: "marcas atendidas" },
              { value: "3x", label: "ROAS médio" },
              { value: "-47%", label: "CPL médio" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #9333ea, #d946ef)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: "13px", color: "rgba(196,181,253,0.55)", marginTop: "2px" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(147,51,234,0.6)",
            fontWeight: 500,
          }}
        >
          juliocarvalhads.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
