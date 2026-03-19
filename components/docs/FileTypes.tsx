import DocsSection from "./DocsSection";

const fileTypes = [
  ["Markdown", ".md, .mdx", "Docs, notes, session captures"],
  ["Plain text", ".txt", "Raw notes and exports"],
  ["Code", ".ts, .tsx, .js, .py, .go, .rs, .sh", "Source files for retrieval"],
  ["Config", ".json, .yaml, .toml, .env.example", "Tooling and deployment config"],
  ["PDF", ".pdf", "Reference material and reports"],
];

export default function FileTypes() {
  return (
    <DocsSection
      id="file-types"
      eyebrow="Reference"
      title="Supported file types"
      description="Memstalker is optimized for text-heavy operational knowledge. Binary handling stays narrow on purpose."
    >
      <div className="overflow-hidden rounded-2xl border border-border-subtle">
        <table className="w-full text-left">
          <thead className="bg-bg-elevated">
            <tr>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Type</th>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Extensions</th>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Typical use</th>
            </tr>
          </thead>
          <tbody>
            {fileTypes.map(([type, extensions, use]) => (
              <tr key={type} className="border-t border-border-subtle bg-bg-surface">
                <td className="px-4 py-3 text-sm text-text-primary">{type}</td>
                <td className="px-4 py-3 font-mono text-sm text-text-secondary">{extensions}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  );
}
