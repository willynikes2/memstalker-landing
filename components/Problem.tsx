const painPoints = [
  {
    icon: "\u2715",
    title: "Context amnesia",
    body: "Paste the same background into every new chat. Watch your AI ask questions you\u2019ve answered ten times.",
  },
  {
    icon: "\u21c4",
    title: "Model lock-in",
    body: "Switch from Claude to ChatGPT? Start over. Your context is trapped in one platform\u2019s memory.",
  },
  {
    icon: "\u27f3",
    title: "Zero continuity",
    body: "Your AI doesn\u2019t know what it learned yesterday. Every session is a blank slate.",
  },
] as const;

export default function Problem() {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section header */}
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            the problem
          </span>
          <h2 className="font-display text-3xl md:text-[3.5rem] font-bold mt-4 text-text-primary tracking-tight leading-tight">
            Every conversation starts from zero.
          </h2>
        </div>

        {/* Pain points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`bg-white border border-border-subtle rounded-xl p-8 shadow-sm reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-200 mx-auto mb-5">
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
