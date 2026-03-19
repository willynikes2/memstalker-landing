import DocsSection from "./DocsSection";

const commands = [
  "kb setup",
  "kb start",
  "kb stop",
  "kb mcp",
  "kb register",
  "kb ingest",
  "kb search",
  "kb status",
  "kb classify",
  "kb summarize",
  "kb capture-session",
  "kb capture-fix",
  "kb safety-check",
];

export default function CLIReference() {
  return (
    <DocsSection
      id="cli-reference"
      eyebrow="Reference"
      title="CLI commands"
      description="The CLI handles local setup, ingestion, search, and maintenance. Most teams only need a small subset to get started."
    >
      <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
        <div className="grid gap-3 md:grid-cols-2">
          {commands.map((command) => (
            <div key={command} className="rounded-xl border border-border-subtle bg-bg px-3 py-2 font-mono text-sm text-text-secondary">
              {command}
            </div>
          ))}
        </div>
      </div>
    </DocsSection>
  );
}
