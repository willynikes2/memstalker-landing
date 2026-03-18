"use client";

interface Feature {
  icon: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: "⟷",
    title: "Multi-Model Memory",
    body: "Claude, ChatGPT, and Gemini read from one brain. What one model learns, all models remember.",
  },
  {
    icon: "↻",
    title: "Self-Learning",
    body: "Your AI auto-updates its own instructions after every session. It gets smarter without you doing anything.",
  },
  {
    icon: "◎",
    title: "Token-Optimized",
    body: "FTS5 search returns just what's relevant, not everything. Smart retrieval means lower token costs.",
  },
  {
    icon: "◈",
    title: "Private & Encrypted",
    body: "AES-256 encryption at rest. Your knowledge stays yours. Export or delete anytime.",
  },
  {
    icon: "◆",
    title: "Obsidian-Native",
    body: "Sync your vault directly. Your notes become AI context instantly. Bidirectional sync keeps everything current.",
  },
  {
    icon: "⬡",
    title: "Open Source Core",
    body: "Self-host free forever. The open source version is fully featured. No vendor lock-in, no restrictions.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const delayClass = `reveal-delay-${(index % 5) + 1}`;

  return (
    <div className={`reveal ${delayClass} glass-card p-8`}>
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
        <span className="text-accent text-lg">{feature.icon}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-text-primary mt-4">
        {feature.title}
      </h3>

      {/* Body */}
      <p className="text-text-secondary text-sm mt-2 leading-relaxed">
        {feature.body}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding">
      {/* Section header */}
      <div className="text-center reveal">
        <span className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
          capabilities
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mt-4">
          Built for how developers actually work.
        </h2>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
