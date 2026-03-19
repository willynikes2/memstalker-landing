import Terminal from "@/components/Terminal";

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Add memstalker to your MCP config. One command.',
    code: `// claude_desktop_config.json
{
  "mcpServers": {
    "memstalker": {
      "command": "npx",
      "args": ["knowledge-base-server", "mcp"]
    }
  }
}`
  },
  {
    number: '02',
    title: 'Capture',
    description: 'Your AI saves what it learns — fixes, decisions, context.',
    code: `> kb_capture_fix "Docker networking"
✓ Fix captured: bridge network DNS resolution

> kb_capture_session
✓ Session saved: 3 findings, 2 fixes, 1 decision`
  },
  {
    number: '03',
    title: 'Retrieve',
    description: 'Context comes back instantly. Every session starts smarter.',
    code: `> kb_search "docker networking fix"
→ 8ms · 3 results

1. Fix: bridge network DNS resolution
2. Session: Docker compose networking debug
3. Lesson: always use custom networks`
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-16 lg:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-16">
        Three commands. Permanent memory.
      </h2>
      <div className="space-y-16 max-w-3xl">
        {steps.map((step) => (
          <div key={step.number}>
            <span className="font-mono text-xs text-accent-pale">{step.number}</span>
            <h3 className="text-2xl font-bold text-text-primary mt-1">{step.title}</h3>
            <p className="text-text-secondary mt-2 mb-4">{step.description}</p>
            <Terminal>
              <pre className="text-sm text-text-secondary whitespace-pre-wrap">{step.code}</pre>
            </Terminal>
          </div>
        ))}
      </div>
    </section>
  );
}
