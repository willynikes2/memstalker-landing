const nodes = [
  { name: "Claude Code", x: "8%", y: "16%" },
  { name: "Codex CLI", x: "12%", y: "42%" },
  { name: "Gemini CLI", x: "8%", y: "68%" },
  { name: "ChatGPT", x: "78%", y: "24%" },
  { name: "REST API", x: "76%", y: "58%" },
];

export default function ArchitectureDiagram() {
  return (
    <div className="relative rounded-2xl border border-border-subtle bg-bg-elevated p-6 min-h-[340px] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative h-full min-h-[292px]">
        {nodes.map((node) => (
          <div
            key={node.name}
            className="absolute rounded-full border border-border-hover bg-bg px-3 py-2 text-xs text-text-secondary"
            style={{ left: node.x, top: node.y }}
          >
            {node.name}
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-accent/30 bg-accent/10 px-6 py-5 text-center shadow-[0_0_30px_rgba(99,102,241,0.12)]">
          <p className="text-xs uppercase tracking-[0.28em] text-accent-pale mb-2">Memstalker</p>
          <p className="text-xl font-semibold text-text-primary">Shared knowledge base</p>
          <p className="text-sm text-text-secondary mt-2">SQLite + FTS5 + semantic search + session capture</p>
        </div>
        <div className="absolute left-[28%] top-[29%] h-px w-[22%] bg-accent/35" />
        <div className="absolute left-[30%] top-[55%] h-px w-[20%] bg-accent/35" />
        <div className="absolute left-[28%] top-[76%] h-px w-[22%] bg-accent/35" />
        <div className="absolute right-[28%] top-[37%] h-px w-[20%] bg-accent/35" />
        <div className="absolute right-[28%] top-[65%] h-px w-[20%] bg-accent/35" />
      </div>
    </div>
  );
}
