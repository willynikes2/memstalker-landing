import DocsSection from "./DocsSection";

const steps = [
  "Create a Custom GPT in ChatGPT.",
  "Add an Action and import your Memstalker OpenAPI spec.",
  "Set API Key auth using the X-API-Key header.",
  "Test search and capture endpoints against your knowledge base.",
];

export default function ConnectChatGPT() {
  return (
    <DocsSection
      id="connect-chatgpt"
      eyebrow="Connect Your AI"
      title="ChatGPT via Custom GPT"
      description="ChatGPT connects over REST instead of MCP, but it still reads and writes the same knowledge base."
    >
      <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-5">
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="text-accent-pale font-mono text-sm">0{index + 1}</span>
              <span className="text-sm leading-7 text-text-secondary">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </DocsSection>
  );
}
