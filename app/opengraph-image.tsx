import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, #f3dfc1 0%, #f7efe2 35%, #f4f1ea 100%)",
          padding: "64px",
          color: "#111827",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "20px",
              background: "#111827",
              color: "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div style={{ fontSize: "24px", letterSpacing: "0.12em" }}>
              MEMSTALKER
            </div>
            <div style={{ fontSize: "20px", color: "#4b5563" }}>
              Persistent memory for AI agents
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Shared memory for Claude, Codex, and Gemini
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.3,
              color: "#374151",
            }}
          >
            Give every agent one knowledge base for decisions, fixes, and codebase
            context that persists across sessions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#4b5563",
          }}
        >
          <div>memstalker.com</div>
          <div>Open source + hosted sync</div>
        </div>
      </div>
    ),
    size,
  );
}
