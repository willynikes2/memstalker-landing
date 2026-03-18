"use client";

interface StepProps {
  number: string;
  title: string;
  body: string;
  codeLines: { text: string; className: string }[];
  delay: number;
}

const STEPS: StepProps[] = [
  {
    number: "01",
    title: "Connect your sources",
    body: "Link your Obsidian vault, upload files, or connect GitHub. Memstalker indexes everything with AI-powered classification.",
    codeLines: [
      { text: "memstalker ingest ./obsidian-vault", className: "text-text-primary" },
      { text: "\u2713 847 documents indexed", className: "text-accent" },
      { text: "\u2713 AI summaries generated", className: "text-accent" },
      { text: "\u2713 Full-text search ready", className: "text-accent" },
    ],
    delay: 1,
  },
  {
    number: "02",
    title: "Connect your AI models",
    body: "One command per model. Claude Code, ChatGPT, Gemini \u2014 all reading from the same brain.",
    codeLines: [
      { text: "# Claude Code", className: "text-text-tertiary" },
      { text: "claude mcp add memstalker -- npx memstalker-mcp", className: "text-text-primary" },
      { text: "", className: "" },
      { text: "# ChatGPT \u2014 import Custom GPT Action", className: "text-text-tertiary" },
      { text: "# Gemini \u2014 add MCP config", className: "text-text-tertiary" },
    ],
    delay: 2,
  },
  {
    number: "03",
    title: "Build with memory",
    body: "Your AI agents now share context. What Claude learns, ChatGPT remembers. Across every session, every model.",
    codeLines: [
      { text: '$ claude "continue the API refactor from yesterday"', className: "text-text-primary" },
      { text: "\u2713 Found 3 relevant sessions", className: "text-accent" },
      { text: "\u2713 Resuming from commit a3f8c2d...", className: "text-accent" },
    ],
    delay: 3,
  },
];

function Step({ number, title, body, codeLines, delay }: StepProps) {
  return (
    <div className={`reveal reveal-delay-${delay} flex gap-8 md:gap-12`}>
      {/* Step number */}
      <div className="flex-shrink-0">
        <span className="font-display text-6xl font-bold text-accent/15 select-none">
          {number}
        </span>
      </div>

      {/* Step content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {title}
        </h3>
        <p className="text-text-secondary mt-2 leading-relaxed">{body}</p>

        <div className="bg-bg-elevated border border-border-subtle rounded-lg p-4 mt-4 font-mono text-sm overflow-x-auto">
          {codeLines.map((line, i) =>
            line.text === "" ? (
              <div key={i} className="h-4" />
            ) : (
              <p key={i} className={line.className}>
                {line.text}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Section header */}
      <div className="text-center reveal">
        <span className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
          getting started
        </span>
        <h2 className="font-display text-3xl md:text-[3.5rem] font-bold text-text-primary mt-4 tracking-tight leading-tight">
          Three commands. Permanent memory.
        </h2>
      </div>

      {/* Steps */}
      <div className="relative max-w-4xl mx-auto flex flex-col gap-16 mt-20">
        {/* Vertical connecting line */}
        <div
          className="absolute w-px bg-border-subtle hidden md:block"
          style={{ left: "2.25rem", top: "1rem", bottom: "1rem" }}
        />

        {STEPS.map((step) => (
          <Step key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
}
