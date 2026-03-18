"use client";

import Terminal from "./Terminal";

export default function Demo() {
  return (
    <section className="section-padding reveal">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            product demo
          </span>
          <h2 className="font-display text-3xl md:text-[3.5rem] font-bold mt-4 text-text-primary tracking-tight leading-tight">
            See the difference.
          </h2>
        </div>

        {/* Split screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* LEFT — Without Memory */}
          <div className="reveal-delay-1">
            <div className="border-t-2 border-red-300 rounded-t-lg">
              <Terminal title="claude — no memory">
                <div className="space-y-4 font-mono text-sm leading-relaxed">
                  <div>
                    <p className="text-text-secondary">
                      $ claude &quot;Use the auth pattern from last week&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-red-400">
                      I don&apos;t have context from previous sessions.
                      <br />
                      Could you share the pattern you&apos;re referring to?
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">
                      $ claude &quot;Remember, we decided on JWT with refresh&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-red-400">
                      I&apos;ll use that approach. Note: I won&apos;t remember
                      <br />
                      this in our next conversation.
                    </p>
                  </div>
                </div>
              </Terminal>
            </div>
            <p className="text-text-tertiary text-xs italic mt-3 text-center">
              Every session starts from scratch
            </p>
          </div>

          {/* RIGHT — With Memstalker */}
          <div className="reveal-delay-2">
            <div className="border-t-2 border-accent/40 rounded-t-lg">
              <Terminal title="claude + memstalker">
                <div className="space-y-4 font-mono text-sm leading-relaxed">
                  <div>
                    <p className="text-text-secondary">
                      $ claude &quot;Use the auth pattern from last week&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-text-primary">
                      <span className="text-accent font-medium">Found in memory:</span> JWT +
                      refresh token pattern
                      <br />
                      from session Mar 12. Applying to your current
                      <br />
                      auth middleware...
                    </p>
                  </div>
                  <div>
                    <p className="text-accent font-medium">
                      ✓ Applied. 3 files updated.
                    </p>
                    <p className="text-text-primary">
                      Source: sessions/2026-03-12-auth-refactor.md
                    </p>
                  </div>
                </div>
              </Terminal>
            </div>
            <p className="text-accent text-xs italic mt-3 text-center">
              Context persists across every session
            </p>
          </div>
        </div>

        {/* Retrieval log strip */}
        <div className="bg-bg-elevated border border-border-subtle rounded-lg p-4 max-w-5xl mx-auto mt-4">
          <p className="font-mono text-xs text-text-secondary">
            [memory:recall] query=&quot;auth pattern&quot; → 3 results (12ms) →
            top: sessions/2026-03-12-auth-refactor.md{" "}
            <span className="text-accent font-medium">(score: 0.94)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
