"use client";

import { useEffect, useState, useCallback } from "react";
import Terminal from "./Terminal";
import WaitlistForm from "./WaitlistForm";

interface TerminalLine {
  text: string;
  className: string;
  delay: number;
}

const TERMINAL_LINES: TerminalLine[] = [
  {
    text: '$ claude "what project did I mention yesterday?"',
    className: "text-text-secondary",
    delay: 500,
  },
  {
    text: "I don't have memory of previous conversations.",
    className: "text-red-400/70",
    delay: 1500,
  },
  {
    text: "$ memstalker connect claude",
    className: "text-text-secondary",
    delay: 3000,
  },
  {
    text: "\u2713 Memory linked. 847 documents indexed.",
    className: "text-accent",
    delay: 3500,
  },
  {
    text: '$ claude "what project did I mention yesterday?"',
    className: "text-text-secondary",
    delay: 4500,
  },
  {
    text: 'You mentioned "Project Omega" \u2014 a FastAPI migration',
    className: "text-text-primary",
    delay: 6000,
  },
  {
    text: "with 3 open PRs. Source: session from Mar 17.",
    className: "text-text-primary",
    delay: 6200,
  },
];

const LOOP_PAUSE = 10000;
const CURSOR_DELAY = 7000;
const TOTAL_CYCLE = CURSOR_DELAY + LOOP_PAUSE;

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(false);

  const runSequence = useCallback(() => {
    setVisibleLines(0);
    setShowCursor(false);

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    TERMINAL_LINES.forEach((line, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleLines(index + 1);
        }, line.delay)
      );
    });

    timeouts.push(
      setTimeout(() => {
        setShowCursor(true);
      }, CURSOR_DELAY)
    );

    timeouts.push(
      setTimeout(() => {
        runSequence();
      }, TOTAL_CYCLE)
    );

    return timeouts;
  }, []);

  useEffect(() => {
    const timeouts = runSequence();
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [runSequence]);

  return (
    <div className="mt-12 max-w-2xl mx-auto shadow-[0_0_60px_rgba(0,255,65,0.08)]">
      <Terminal title="memstalker">
        <div className="space-y-1 font-mono text-sm leading-relaxed">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <p key={i} className={line.className}>
              {line.text}
            </p>
          ))}
          {showCursor && <span className="terminal-cursor" />}
        </div>
      </Terminal>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="bg-grid absolute inset-0" />
      <div className="bg-gradient-radial absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Version badge */}
        <span className="inline-block font-mono text-accent text-sm border border-accent/30 rounded-full px-4 py-1.5 mb-8">
          v1.0 &mdash; Now in early access
        </span>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6">
          Your AI agents
          <br />
          shouldn&apos;t forget.
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          Memstalker gives every AI model persistent memory. One knowledge base.
          Every session. Zero copy-paste.
        </p>

        {/* Email waitlist form */}
        <WaitlistForm source="hero" className="mb-6" />

        {/* Early adopter urgency */}
        <p className="font-mono text-sm text-accent/80 mb-4">
          First 500 get Pro for $12/mo forever{" "}
          <span className="text-text-secondary line-through">$25</span>
        </p>

        {/* Micro-proof */}
        <p className="font-mono text-sm text-text-secondary flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent/60" />
          200,000+ developers saw this on Reddit
        </p>

        {/* Terminal animation */}
        <TerminalAnimation />
      </div>
    </section>
  );
}
