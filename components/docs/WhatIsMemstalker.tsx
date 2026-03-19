import DocsSection from "./DocsSection";

const items = [
  "AI sessions start stateless. Yesterday's fix disappears unless you paste it back in.",
  "Memstalker gives every tool one shared knowledge base they can search, update, and synthesize.",
  "That creates a self-learning loop: mistakes become reusable fixes instead of repeated context dumps.",
];

export default function WhatIsMemstalker() {
  return (
    <DocsSection
      id="what-is-memstalker"
      eyebrow="Overview"
      title="What is Memstalker?"
      description="It is persistent memory infrastructure for agents. Not a read-only RAG index. Not one model's built-in memory. A writeable brain your tools share."
    >
      <div className="space-y-5">
        {items.map((item) => (
          <p key={item} className="text-lg leading-8 text-text-secondary max-w-3xl">
            {item}
          </p>
        ))}
      </div>
    </DocsSection>
  );
}
