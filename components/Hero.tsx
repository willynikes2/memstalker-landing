"use client";

import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-20">
        <div className="max-w-[640px]">
          {/* Reddit validation badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-bg-elevated border border-border-subtle rounded-full mb-6">
            <span className="text-text-muted text-xs">As seen on r/ClaudeAI</span>
            <span className="text-accent-pale text-xs font-semibold">200K+ views</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.08] text-text-primary">
            Persistent memory for AI agents<span className="text-accent">.</span>
          </h1>

          {/* Subhead */}
          <p className="text-text-tertiary text-lg leading-relaxed max-w-lg mt-4">
            Connect Claude, Codex, and Gemini to one shared knowledge base. Fixes, decisions, and context survive every session.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-7">
            <a
              href="/#pricing"
              className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Start Free
            </a>
            <a
              href="/#demo"
              className="border border-border-hover text-text-tertiary text-sm px-6 py-2.5 rounded-md hover:border-text-muted transition-colors"
            >
              Watch Demo
            </a>
          </div>

          {/* Install command card */}
          <div className="mt-5 flex items-center gap-2.5 bg-bg-surface border border-border-subtle rounded-lg px-4 py-2.5 max-w-sm">
            <span className="text-text-muted text-sm">$</span>
            <code className="font-mono text-sm text-text-secondary flex-1">npx knowledge-base-server</code>
            <button
              onClick={() => {
                navigator.clipboard.writeText("npx knowledge-base-server");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-text-muted hover:text-text-secondary transition-colors"
              aria-label="Copy to clipboard"
            >
              {copied ? "\u2713" : "\u2398"}
            </button>
          </div>

          {/* Proof bullets */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-xs text-text-muted">
            <span>{"\u2713"} Free hosted tier</span>
            <span>{"\u2713"} Works with Claude, Codex, Gemini</span>
            <span>{"\u2713"} Self-host option</span>
          </div>
        </div>
      </div>
    </section>
  );
}
