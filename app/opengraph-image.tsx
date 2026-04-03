import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Julio Carvalho — Estrategista de Crescimento com IA e Dados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0d0118 0%, #1a0533 50%, #0d0118 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines decorativas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(147,51,234,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Glow central */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Logo JC */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            Julio
          </span>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#9333ea",
              letterSpacing: "-2px",
            }}
          >
            Carvalho
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Você não tem problema de tráfego.
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "40px",
            letterSpacing: "-2px",
            background: "linear-gradient(90deg, #9333ea, #c084fc)",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          Você tem problema de estrutura.
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(196,167,255,0.7)",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Tráfego pago · IA · Rastreamento avançado · Automação · CRM
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(147,51,234,0.2)",
            border: "1px solid rgba(147,51,234,0.5)",
            borderRadius: "100px",
            padding: "12px 28px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#9333ea",
              display: "flex",
            }}
          />
          <span style={{ fontSize: "18px", color: "rgba(196,167,255,0.9)", fontWeight: 600 }}>
            Método CTR · +50 marcas escaladas
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "16px",
            color: "rgba(147,51,234,0.6)",
            letterSpacing: "2px",
          }}
        >
          ojuliocarvalho.com
        </div>
      </div>
    ),
    { ...size }
  );
}
