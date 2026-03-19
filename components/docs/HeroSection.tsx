import DocsSection from "./DocsSection";
import ArchitectureDiagram from "./ArchitectureDiagram";
import MockupScreenshots from "./MockupScreenshots";

export default function HeroSection() {
  return (
    <DocsSection
      id="hero"
      eyebrow="Docs"
      title="One brain. Every AI."
      description="Memstalker gives Claude, Codex, Gemini, and ChatGPT a shared persistent memory. What one agent learns, every other agent can retrieve without you re-explaining the project."
    >
      <div className="grid gap-8">
        <ArchitectureDiagram />
        <MockupScreenshots />
      </div>
    </DocsSection>
  );
}
