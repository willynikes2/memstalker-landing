function MockupCard({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-elevated overflow-hidden">
      <div className="border-b border-border-subtle px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <span className="text-xs text-text-muted">{caption}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function MockupScreenshots() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <MockupCard title="MCP connections" caption="Claude Desktop">
        <div className="space-y-3">
          {[
            ["memstalker", "Connected"],
            ["filesystem", "Connected"],
            ["github", "Connected"],
          ].map(([name, state]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-xl border border-border-subtle bg-bg px-3 py-2"
            >
              <span className="text-sm text-text-secondary">{name}</span>
              <span className="text-xs text-accent-pale">{state}</span>
            </div>
          ))}
        </div>
      </MockupCard>
      <MockupCard title="Custom GPT action" caption="ChatGPT">
        <div className="space-y-3">
          <div className="rounded-xl border border-border-subtle bg-bg px-3 py-2">
            <p className="text-xs uppercase tracking-[0.24em] text-text-muted mb-2">Action URL</p>
            <p className="font-mono text-sm text-text-secondary">https://api.memstalker.com/openapi.json</p>
          </div>
          <div className="rounded-xl border border-border-subtle bg-bg px-3 py-2">
            <p className="text-xs uppercase tracking-[0.24em] text-text-muted mb-2">Auth</p>
            <p className="font-mono text-sm text-text-secondary">Header: X-API-Key</p>
          </div>
          <div className="rounded-xl border border-accent/20 bg-accent/10 px-3 py-2">
            <p className="text-sm text-accent-pale">My Brain GPT is connected to your shared memory.</p>
          </div>
        </div>
      </MockupCard>
    </div>
  );
}
