const painPoints = [
  {
    icon: "✕",
    title: "Context amnesia",
    body: "Paste the same background into every new chat. Watch your AI ask questions you've answered ten times.",
  },
  {
    icon: "↔",
    title: "Model lock-in",
    body: "Switch from Claude to ChatGPT? Start over. Your context is trapped in one platform's memory.",
  },
  {
    icon: "⟳",
    title: "Zero continuity",
    body: "Your AI doesn't know what it learned yesterday. Every session is a blank slate.",
  },
] as const;

export default function Problem() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            the problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-text-primary">
            Every conversation starts from zero.
          </h2>
        </div>

        {/* Pain points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`glass-card p-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-400/50 mx-auto mb-5">
                <span className="text-red-400 text-lg leading-none">
                  {point.icon}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
