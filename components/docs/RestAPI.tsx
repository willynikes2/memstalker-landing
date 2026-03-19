import DocsSection from "./DocsSection";

const endpoints = [
  ["GET", "/api/v1/search?q=query", "Keyword search"],
  ["GET", "/api/v1/search/smart?q=query", "Hybrid smart search"],
  ["GET", "/api/v1/context?q=query", "Summary-first context pack"],
  ["GET", "/api/v1/documents", "List documents"],
  ["GET", "/api/v1/documents/:id", "Fetch one document"],
  ["POST", "/api/v1/ingest", "Ingest content"],
  ["POST", "/api/v1/capture/session", "Capture a work session"],
  ["POST", "/api/v1/capture/fix", "Capture a bug fix"],
  ["POST", "/api/v1/capture/web", "Capture a page from the web"],
];

export default function RestAPI() {
  return (
    <DocsSection
      id="rest-api"
      eyebrow="Reference"
      title="REST API"
      description="ChatGPT and any non-MCP client can talk to Memstalker over HTTP using API key auth in the X-API-Key header."
    >
      <div className="overflow-hidden rounded-2xl border border-border-subtle">
        <table className="w-full text-left">
          <thead className="bg-bg-elevated">
            <tr>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Method</th>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Endpoint</th>
              <th className="px-4 py-3 text-xs uppercase tracking-[0.24em] text-text-muted">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map(([method, path, purpose]) => (
              <tr key={path} className="border-t border-border-subtle bg-bg-surface">
                <td className="px-4 py-3 text-sm text-accent-pale">{method}</td>
                <td className="px-4 py-3 font-mono text-sm text-text-secondary">{path}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  );
}
