import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section id="early-access" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
          Give your AI agents a real memory.
        </h2>
        <p className="text-text-secondary text-sm mt-3 mb-8">No credit card required. Free tier available.</p>
        <WaitlistForm source="final-cta" />
      </div>
    </section>
  );
}
