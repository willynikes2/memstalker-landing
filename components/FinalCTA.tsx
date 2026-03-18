import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold reveal">
          Ready to give your AI real memory?
        </h2>
        <p className="text-text-secondary text-lg mt-4 reveal reveal-delay-1">
          Join thousands of developers building smarter AI workflows.
        </p>

        <WaitlistForm source="cta" className="mt-8 reveal reveal-delay-2" />

        <p className="font-mono text-xs text-text-secondary mt-4 reveal reveal-delay-3">
          No credit card required. Early access invites sent weekly.
        </p>
      </div>
    </section>
  );
}
