import DocsSection from "./DocsSection";

const config = `{
  "mcpServers": {
    "memstalker": {
      "command": "npx",
      "args": ["knowledge-base-server", "mcp"]
    }
  }
}`;

export default function ConnectCodexGemini() {
  return (
    <DocsSection
      id="connect-codex-gemini"
      eyebrow="Connect Your AI"
      title="Codex and Gemini"
      description="Both support the same stdio MCP pattern. Point them at the Memstalker server and they share the same brain immediately."
    >
      <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
        <pre className="overflow-x-auto">
          <code className="font-mono text-sm text-text-secondary">{config}</code>
        </pre>
      </div>
    </DocsSection>
  );
}
