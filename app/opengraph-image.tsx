import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Memstalker — Persistent Memory for AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Crosshair icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          fill="none"
          style={{ marginBottom: 24 }}
        >
          <path d="M32 29L35 32L32 35L29 32Z" fill="#6366f1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 25L28 21H36L32 25ZM32 39L28 43H36L32 39ZM25 32L21 28V36L25 32ZM39 32L43 28V36L39 32ZM8 8H20V12H12V20H8V8ZM56 8H44V12H52V20H56V8ZM8 56H20V52H12V44H8V56ZM56 56H44V52H52V44H56V56Z"
            fill="white"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Memstalker</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 16,
            textAlign: "center",
            display: "flex",
          }}
        >
          Persistent memory for AI agents
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
          }}
        >
          {["Claude", "ChatGPT", "Gemini", "Cursor", "Windsurf"].map(
            (name) => (
              <div
                key={name}
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 999,
                  padding: "8px 20px",
                  fontSize: 18,
                  color: "#a5b4fc",
                  display: "flex",
                }}
              >
                {name}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 20,
            color: "#6366f1",
            display: "flex",
          }}
        >
          memstalker.com
        </div>
      </div>
    ),
    { ...size }
  );
}
