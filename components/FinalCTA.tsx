"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to waitlist API
    console.log("Early access signup:", email);
    setEmail("");
  };

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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 max-w-md mx-auto reveal reveal-delay-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full sm:flex-1 bg-bg-elevated border border-border-subtle hover:border-border-hover focus:border-accent text-text-primary text-sm rounded-lg px-4 py-3 outline-none transition-colors"
          />
          <button type="submit" className="btn-glow whitespace-nowrap">
            Get Early Access
          </button>
        </form>

        <p className="font-mono text-xs text-text-secondary mt-4 reveal reveal-delay-3">
          No credit card required. Early access invites sent weekly.
        </p>
      </div>
    </section>
  );
}
