import DocsSection from "./DocsSection";

const paths = [
  {
    title: "Hosted",
    subtitle: "Fastest path",
    body: "Create an account, connect your agent with the provided config, and let Memstalker manage the infrastructure.",
  },
  {
    title: "Self-hosted",
    subtitle: "Free forever",
    body: "Clone the repo, run setup, and keep the full feature set on your own VPS or workstation.",
  },
  {
    title: "Custom GPT",
    subtitle: "REST API route",
    body: "Import the OpenAPI spec, set X-API-Key auth, and let ChatGPT search and write to the same KB.",
  },
];

export default function GettingStarted() {
  return (
    <DocsSection
      id="getting-started"
      eyebrow="Getting Started"
      title="Choose a setup path"
      description="You can start managed, self-hosted, or through ChatGPT actions. The memory model stays the same."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {paths.map((path) => (
          <div key={path.title} className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-accent-pale mb-3">{path.subtitle}</p>
            <h3 className="text-xl font-semibold text-text-primary mb-2">{path.title}</h3>
            <p className="text-sm leading-7 text-text-secondary">{path.body}</p>
          </div>
        ))}
      </div>
    </DocsSection>
  );
}
