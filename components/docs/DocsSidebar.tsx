const groups = [
  {
    label: "Overview",
    items: [
      ["hero", "One brain. Every AI."],
      ["what-is-memstalker", "What is Memstalker?"],
      ["how-it-works", "How it works"],
    ],
  },
  {
    label: "Getting Started",
    items: [
      ["getting-started", "Choose a path"],
      ["connect-claude", "Claude Code"],
      ["connect-codex-gemini", "Codex / Gemini"],
      ["connect-chatgpt", "ChatGPT"],
    ],
  },
  {
    label: "Reference",
    items: [
      ["mcp-tools-reference", "MCP tools"],
      ["rest-api", "REST API"],
      ["cli-reference", "CLI commands"],
      ["file-types", "File types"],
    ],
  },
];

export default function DocsSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:w-64 lg:flex-shrink-0">
      <div className="lg:border lg:border-border-subtle lg:bg-bg-surface lg:rounded-2xl lg:p-5 overflow-x-auto">
        <div className="flex gap-8 lg:block">
          {groups.map((group) => (
            <div key={group.label} className="min-w-max lg:min-w-0 lg:mb-8 last:lg:mb-0">
              <p className="text-[11px] uppercase tracking-[0.28em] text-text-muted mb-3">
                {group.label}
              </p>
              <nav className="flex gap-4 lg:flex-col lg:gap-2">
                {group.items.map(([href, label]) => (
                  <a
                    key={href}
                    href={`#${href}`}
                    className="text-sm text-text-tertiary hover:text-text-secondary transition-colors whitespace-nowrap"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
