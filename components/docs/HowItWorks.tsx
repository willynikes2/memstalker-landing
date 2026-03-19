import DocsSection from "./DocsSection";

const steps = [
  ["Capture", "Store sessions, fixes, and docs as soon as work happens."],
  ["Classify", "Promote useful artifacts into searchable operational knowledge."],
  ["Synthesize", "Generate concise briefings so agents read summaries before full docs."],
  ["Retrieve", "Return the right snippet, context pack, or document when the next session starts."],
];

export default function HowItWorks() {
  return (
    <DocsSection
      id="how-it-works"
      eyebrow="Overview"
      title="How it works"
      description="The system keeps hot, warm, and cold memory layers so agents get fast summaries first and deeper source material only when needed."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map(([title, body], index) => (
          <div key={title} className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-3">0{index + 1}</p>
            <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
            <p className="text-sm leading-7 text-text-secondary">{body}</p>
          </div>
        ))}
      </div>
    </DocsSection>
  );
}
