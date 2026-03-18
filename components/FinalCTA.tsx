import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-padding text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-display text-3xl md:text-[3.5rem] font-bold reveal tracking-tight leading-tight text-text-primary">
          Ready to give your AI real memory?
        </h2>
        <p className="text-text-secondary text-lg mt-4 reveal reveal-delay-1">
          Join thousands of developers building smarter AI workflows.
        </p>

        <WaitlistForm
          source="cta"
          className="mt-8 reveal reveal-delay-2"
          buttonClassName="btn-primary whitespace-nowrap"
          inputClassName="w-full sm:flex-1 bg-white border border-border-subtle rounded-lg px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors disabled:opacity-50"
        />

        <p className="font-mono text-sm text-accent mt-4 reveal reveal-delay-3">
          Lock in 52% off — limited to first 500 signups
        </p>
        <p className="font-mono text-xs text-text-tertiary mt-2 reveal reveal-delay-3">
          No credit card required. Early access invites sent weekly.
        </p>
      </div>
    </section>
  );
}
