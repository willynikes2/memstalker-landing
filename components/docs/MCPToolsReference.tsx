import DocsSection from "./DocsSection";

const tools = [
  ["kb_search", "Full-text search with ranked snippets."],
  ["kb_search_smart", "Hybrid keyword and semantic retrieval."],
  ["kb_context", "Token-efficient context briefings."],
  ["kb_get", "Fetch a document by ID."],
  ["kb_list", "List recent or matching documents."],
  ["kb_capture_session", "Store a debugging or implementation session."],
  ["kb_capture_fix", "Store a concise bug fix record."],
  ["kb_capture_web", "Capture an external page into the KB."],
  ["kb_ingest_file", "Ingest a local file."],
  ["kb_ingest_dir", "Ingest a directory recursively."],
  ["kb_related", "Find connected documents."],
  ["kb_update_doc", "Update document metadata or body."],
  ["kb_delete_doc", "Delete a document intentionally."],
  ["kb_stats", "Inspect collection and search stats."],
  ["kb_health", "Check server health."],
  ["kb_promote", "Promote useful material into long-term memory."],
];

export default function MCPToolsReference() {
  return (
    <DocsSection
      id="mcp-tools-reference"
      eyebrow="Reference"
      title="MCP tools"
      description="These are the core tools exposed to MCP clients. Exact availability depends on deployment mode."
    >
      <div className="overflow-hidden rounded-2xl border border-border-subtle">
        <table className="w-full text-left">
          <thead className="bg-bg-elevated">
            <tr>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Tool</th>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">What it does</th>
            </tr>
          </thead>
          <tbody>
            {tools.map(([name, description]) => (
              <tr key={name} className="border-t border-border-subtle bg-bg-surface">
                <td className="px-4 py-3 font-mono text-sm text-accent-pale">{name}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  );
}
