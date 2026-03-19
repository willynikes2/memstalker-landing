import DocsSection from "./DocsSection";

const config = `{
  "mcpServers": {
    "memstalker": {
      "command": "npx",
      "args": ["knowledge-base-server", "mcp"]
    }
  }
}`;

export default function ConnectClaude() {
  return (
    <DocsSection
      id="connect-claude"
      eyebrow="Connect Your AI"
      title="Claude Code"
      description="The shortest path is still one command. If you want manual setup, use the MCP block below."
    >
      <div className="grid gap-4">
        <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
          <p className="font-mono text-sm text-accent-pale">kb register</p>
          <p className="text-sm text-text-secondary mt-3">Registers Memstalker in Claude Code with the right stdio command.</p>
        </div>
        <pre className="rounded-2xl border border-border-subtle bg-bg-elevated p-5 overflow-x-auto">
          <code className="font-mono text-sm text-text-secondary">{config}</code>
        </pre>
      </div>
    </DocsSection>
  );
}
