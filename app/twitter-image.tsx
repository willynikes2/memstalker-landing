import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Persistent memory for AI agents | Memstalker";
export const size = { width: 1200, height: 675 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c0c0c",
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

        <svg
          width="72"
          height="72"
          viewBox="0 0 64 64"
          fill="none"
          style={{ marginBottom: 20 }}
        >
          <path d="M32 29L35 32L32 35L29 32Z" fill="#6366f1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 25L28 21H36L32 25ZM32 39L28 43H36L32 39ZM25 32L21 28V36L25 32ZM39 32L43 28V36L39 32ZM8 8H20V12H12V20H8V8ZM56 8H44V12H52V20H56V8ZM8 56H20V52H12V44H8V56ZM56 56H44V52H52V44H56V56Z"
            fill="white"
          />
        </svg>

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            textAlign: "center",
            display: "flex",
          }}
        >
          Persistent memory for AI agents
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#999999",
            marginTop: 16,
            display: "flex",
          }}
        >
          Connect Claude, Codex, and Gemini to one shared knowledge base
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 32,
            fontSize: 18,
            color: "#6366f1",
          }}
        >
          <span style={{ display: "flex" }}>8ms retrieval</span>
          <span style={{ color: "#3f3f46", display: "flex" }}>/</span>
          <span style={{ display: "flex" }}>200+ sessions</span>
          <span style={{ color: "#3f3f46", display: "flex" }}>/</span>
          <span style={{ display: "flex" }}>Open source</span>
        </div>

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
