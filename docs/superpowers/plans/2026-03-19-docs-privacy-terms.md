# Docs, Privacy, Terms & Link Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add /docs, /privacy, /terms pages, fix broken links, fix Twitter handle, and add contact email to the Memstalker landing page.

**Architecture:** Next.js App Router pages with shared dark theme. Docs page uses a dedicated layout with sticky sidebar nav and composable section components. Privacy/Terms are simple placeholder pages. All visuals are CSS/React mockups (no real screenshots/PII).

**Tech Stack:** Next.js 14, React 18, Tailwind CSS 3, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-19-docs-privacy-terms-design.md`

---

## File Structure

### Files to Create
| File | Responsibility |
|------|---------------|
| `app/docs/layout.tsx` | Docs layout — sidebar + scrollable content area |
| `app/docs/page.tsx` | Composes all docs section components |
| `app/privacy/page.tsx` | Privacy coming-soon placeholder |
| `app/terms/page.tsx` | Terms coming-soon placeholder |
| `components/docs/DocsSidebar.tsx` | Sticky sidebar nav with section groups + mobile horizontal scroll |
| `components/docs/DocsSection.tsx` | Reusable section wrapper with anchor ID |
| `components/docs/HeroSection.tsx` | "One brain. Every AI." hero + architecture diagram + mockup screenshots |
| `components/docs/ArchitectureDiagram.tsx` | CSS/React architecture diagram |
| `components/docs/MockupScreenshots.tsx` | CSS mockup components (MCP config, Custom GPT page) |
| `components/docs/WhatIsMemstalker.tsx` | ELI5 problem/solution section |
| `components/docs/HowItWorks.tsx` | Simplified intelligence pipeline |
| `components/docs/GettingStarted.tsx` | Three-path cards (Hosted/Self-Host/GPT) |
| `components/docs/ConnectClaude.tsx` | Claude Code MCP setup |
| `components/docs/ConnectCodexGemini.tsx` | Codex/Gemini MCP setup |
| `components/docs/ConnectChatGPT.tsx` | ChatGPT Custom GPT setup with mockups |
| `components/docs/MCPToolsReference.tsx` | 16 MCP tools table |
| `components/docs/RestAPI.tsx` | REST API endpoints table |
| `components/docs/CLIReference.tsx` | CLI commands table |
| `components/docs/FileTypes.tsx` | Supported file types table |

### Files to Modify
| File | Change |
|------|--------|
| `components/Footer.tsx` | Twitter → @ShawnDanCap, add support email |
| `components/Navbar.tsx` | Docs href → `/docs` (desktop + mobile) |
| `app/layout.tsx` | Twitter creator → @ShawnDanCap |
| `.gitignore` | Add `.superpowers/` |

---

### Task 1: Quick Fixes — Twitter, Navbar, Footer, Gitignore

**Files:**
- Modify: `components/Footer.tsx:14-15`
- Modify: `components/Navbar.tsx:53-58,109-115`
- Modify: `app/layout.tsx:50`
- Modify: `.gitignore`

- [ ] **Step 1: Fix Twitter handle in Footer.tsx**

Change line 15 from `https://x.com/willynikes` to `https://x.com/ShawnDanCap`. Add support email link after Terms link.

```tsx
// Footer.tsx line 14-19: change Twitter href
<a
  href="https://x.com/ShawnDanCap"
  target="_blank"
  rel="noopener noreferrer"
  className="text-text-muted text-sm hover:text-text-secondary transition-colors"
>
  Twitter
</a>
```

After the Terms `<a>` tag (line 39), add:
```tsx
<a
  href="mailto:support@memstalker.com"
  className="text-text-muted text-sm hover:text-text-secondary transition-colors"
>
  Contact
</a>
```

- [ ] **Step 2: Fix Navbar Docs link**

Change desktop Docs link (line 53-58) href from GitHub README to `/docs`. Remove `target`/`rel` since it's internal:

```tsx
<a href="/docs" className={linkClass}>
  Docs
</a>
```

Same for mobile Docs link (line 109-115):
```tsx
<a
  href="/docs"
  className={linkClass}
  onClick={() => setMobileOpen(false)}
>
  Docs
</a>
```

- [ ] **Step 3: Fix Twitter creator in layout.tsx**

Change line 50 from `creator: "@willynikes"` to `creator: "@ShawnDanCap"`.

- [ ] **Step 4: Add .superpowers/ to .gitignore**

Append `.superpowers/` to `.gitignore`.

- [ ] **Step 5: Verify and commit**

Run: `cd /home/shawn/memstalker-landing && npx next build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

```bash
git add components/Footer.tsx components/Navbar.tsx app/layout.tsx .gitignore
git commit -m "fix: twitter handle, navbar docs link, add contact email, gitignore"
```

---

### Task 2: Privacy & Terms Coming-Soon Pages

**Files:**
- Create: `app/privacy/page.tsx`
- Create: `app/terms/page.tsx`

- [ ] **Step 1: Create privacy page**

```tsx
// app/privacy/page.tsx
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Memstalker",
  description: "Memstalker privacy policy and data commitments.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-20 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-accent-pale text-sm font-medium mb-8">Coming Soon</p>

        <p className="text-text-secondary text-base leading-relaxed mb-6">
          We&apos;re finalizing our full privacy policy. Here&apos;s what we commit to today:
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "Your data is encrypted at rest and in transit. We cannot read it.",
            "Self-host if you want zero trust. Your server, your rules.",
            "When you cancel, we destroy your data. You get a download window first.",
            "We don't train on your data. We don't sell it. No third-party access.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-0.5">✓</span>
              <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-text-tertiary text-sm">
          Questions? Email{" "}
          <a href="mailto:support@memstalker.com" className="text-accent-pale hover:text-accent-light transition-colors">
            support@memstalker.com
          </a>
        </p>

        <a href="/" className="inline-block mt-8 text-text-tertiary text-sm hover:text-text-secondary transition-colors">
          ← Back to home
        </a>
      </div>
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Create terms page**

```tsx
// app/terms/page.tsx
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service | Memstalker",
  description: "Memstalker terms of service.",
}

export default function TermsPage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-20 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-accent-pale text-sm font-medium mb-8">Coming Soon</p>

        <p className="text-text-secondary text-base leading-relaxed">
          We&apos;re preparing our terms of service. In the meantime, email{" "}
          <a href="mailto:support@memstalker.com" className="text-accent-pale hover:text-accent-light transition-colors">
            support@memstalker.com
          </a>{" "}
          with any questions.
        </p>

        <a href="/" className="inline-block mt-8 text-text-tertiary text-sm hover:text-text-secondary transition-colors">
          ← Back to home
        </a>
      </div>
      <Footer />
    </main>
  )
}
```

- [ ] **Step 3: Verify both pages build and commit**

Run: `cd /home/shawn/memstalker-landing && npx next build 2>&1 | tail -10`
Expected: Build succeeds, `/privacy` and `/terms` appear in route list.

```bash
git add app/privacy/page.tsx app/terms/page.tsx
git commit -m "feat: add privacy and terms coming-soon pages"
```

---

### Task 3: Docs Layout + Sidebar

**Files:**
- Create: `app/docs/layout.tsx`
- Create: `components/docs/DocsSidebar.tsx`
- Create: `components/docs/DocsSection.tsx`

- [ ] **Step 1: Create DocsSection wrapper component**

```tsx
// components/docs/DocsSection.tsx
export default function DocsSection({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      {children}
    </section>
  )
}
```

- [ ] **Step 2: Create DocsSidebar component**

```tsx
// components/docs/DocsSidebar.tsx
"use client"

import { useEffect, useState } from "react"

const sections = [
  {
    group: "Overview",
    items: [
      { id: "what-is-memstalker", label: "What is Memstalker?" },
      { id: "how-it-works", label: "How It Works" },
    ],
  },
  {
    group: "Getting Started",
    items: [
      { id: "getting-started", label: "Setup Paths" },
    ],
  },
  {
    group: "Connect Your AI",
    items: [
      { id: "connect-claude", label: "Claude Code" },
      { id: "connect-codex-gemini", label: "Codex / Gemini" },
      { id: "connect-chatgpt", label: "ChatGPT" },
    ],
  },
  {
    group: "Reference",
    items: [
      { id: "mcp-tools", label: "MCP Tools" },
      { id: "rest-api", label: "REST API" },
      { id: "cli-commands", label: "CLI Commands" },
      { id: "file-types", label: "File Types" },
    ],
  },
]

export default function DocsSidebar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((s) =>
      s.items.forEach((item) => {
        const el = document.getElementById(item.id)
        if (el) observer.observe(el)
      })
    )

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0 sticky top-20 self-start max-h-[calc(100vh-5rem)] overflow-y-auto py-8 pr-6">
        {sections.map((s) => (
          <div key={s.group} className="mb-6">
            <div className="text-text-muted text-[11px] font-semibold uppercase tracking-wider mb-2">
              {s.group}
            </div>
            {s.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm py-1 transition-colors ${
                  active === item.id
                    ? "text-accent-pale font-medium"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </aside>

      {/* Mobile horizontal nav */}
      <div className="md:hidden sticky top-16 z-40 bg-bg/95 backdrop-blur-sm border-b border-border-subtle overflow-x-auto">
        <div className="flex gap-4 px-6 py-3 min-w-max">
          {sections.flatMap((s) =>
            s.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs whitespace-nowrap transition-colors ${
                  active === item.id
                    ? "text-accent-pale font-medium"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {item.label}
              </a>
            ))
          )}
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 3: Create docs layout**

```tsx
// app/docs/layout.tsx
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DocsSidebar from "@/components/docs/DocsSidebar"

export const metadata: Metadata = {
  title: "Documentation | Memstalker",
  description:
    "Learn how to set up Memstalker — persistent shared memory for Claude, Codex, Gemini, and ChatGPT.",
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <div className="pt-20 px-6 md:px-16 lg:px-24">
        <div className="flex max-w-5xl mx-auto">
          <DocsSidebar />
          <div className="flex-1 min-w-0 py-8 md:pl-8 max-w-[720px]">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
```

- [ ] **Step 4: Create minimal docs page to test layout**

```tsx
// app/docs/page.tsx (temporary — will be expanded in later tasks)
import DocsSection from "@/components/docs/DocsSection"

export default function DocsPage() {
  return (
    <>
      <DocsSection id="what-is-memstalker">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
          One brain. Every AI.
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          Documentation loading...
        </p>
      </DocsSection>
    </>
  )
}
```

- [ ] **Step 5: Verify layout renders and commit**

Run: `cd /home/shawn/memstalker-landing && npx next build 2>&1 | tail -10`
Expected: `/docs` route appears in output.

```bash
git add app/docs/ components/docs/DocsSection.tsx components/docs/DocsSidebar.tsx
git commit -m "feat: docs layout with sticky sidebar and mobile horizontal nav"
```

---

### Task 4: Architecture Diagram + Mockup Screenshots

**Files:**
- Create: `components/docs/ArchitectureDiagram.tsx`
- Create: `components/docs/MockupScreenshots.tsx`

- [ ] **Step 1: Create architecture diagram component**

```tsx
// components/docs/ArchitectureDiagram.tsx
const agents = [
  { name: "Claude Code", protocol: "MCP" },
  { name: "Codex CLI", protocol: "MCP" },
  { name: "Gemini CLI", protocol: "MCP" },
  { name: "ChatGPT", protocol: "REST" },
]

const storage = ["SQLite + FTS5", "Embeddings", "Obsidian Sync"]

export default function ArchitectureDiagram() {
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 md:p-8">
      {/* Agents row */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {agents.map((a) => (
          <div
            key={a.name}
            className="bg-bg-elevated border border-border-subtle rounded-lg px-4 py-2.5 text-center"
          >
            <div className="text-accent-pale text-sm font-medium">{a.name}</div>
            <div className="text-text-muted text-[10px] mt-0.5">{a.protocol}</div>
          </div>
        ))}
      </div>

      {/* Arrow down */}
      <div className="flex justify-center my-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-border-hover" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-border-hover">
            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Central KB */}
      <div className="flex justify-center mb-3">
        <div className="bg-accent rounded-lg px-8 py-3 text-center">
          <div className="text-white font-bold text-sm">Memstalker Knowledge Base</div>
          <div className="text-white/60 text-[10px] mt-0.5">Capture · Classify · Synthesize · Retrieve</div>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center my-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-border-hover" />
          <svg width="12" height="8" viewBox="0 0 12 8" className="text-border-hover">
            <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Storage row */}
      <div className="flex flex-wrap justify-center gap-3">
        {storage.map((s) => (
          <div
            key={s}
            className="bg-bg-elevated border border-border-subtle rounded-lg px-4 py-2 text-center"
          >
            <div className="text-text-tertiary text-xs">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create mockup screenshot components**

```tsx
// components/docs/MockupScreenshots.tsx
export function MCPConnectorMockup() {
  const connectors = [
    { name: "Claude Code", icon: "◆", status: "Connected", color: "text-green-400" },
    { name: "Gemini CLI", icon: "◇", status: "Connected", color: "text-green-400" },
    { name: "Codex CLI", icon: "▣", status: "Connected", color: "text-green-400" },
  ]

  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-xl overflow-hidden">
      {/* Title bar */}
      <div className="bg-bg-surface border-b border-border-subtle px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-text-muted text-xs ml-2">MCP Connections</span>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Active Connectors</div>
        {connectors.map((c) => (
          <div key={c.name} className="flex items-center justify-between bg-bg-surface rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="text-accent-pale text-sm">{c.icon}</span>
              <span className="text-text-primary text-sm">{c.name}</span>
            </div>
            <span className={`text-xs ${c.color}`}>● {c.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CustomGPTMockup() {
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-xl overflow-hidden">
      {/* Title bar */}
      <div className="bg-bg-surface border-b border-border-subtle px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-text-muted text-xs ml-2">ChatGPT — My Brain GPT</span>
      </div>
      {/* Content */}
      <div className="p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
          <span className="text-accent text-xl">🧠</span>
        </div>
        <div className="text-text-primary font-semibold mb-1">My Brain GPT</div>
        <div className="text-text-muted text-xs mb-4">Uses knowledge-base-server via REST API</div>
        <div className="bg-bg-surface border border-border-subtle rounded-lg p-3 text-left">
          <div className="text-text-muted text-[10px] uppercase tracking-wider mb-1">Actions</div>
          <div className="text-text-secondary text-xs">kb_search · kb_read · kb_context · kb_write</div>
        </div>
      </div>
    </div>
  )
}

export function GPTAuthMockup() {
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-xl overflow-hidden">
      <div className="bg-bg-surface border-b border-border-subtle px-4 py-2.5">
        <span className="text-text-muted text-xs">Authentication Setup</span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-text-tertiary text-[10px] uppercase tracking-wider mb-1">Auth Type</div>
          <div className="flex gap-2">
            <span className="bg-bg-surface border border-border-subtle rounded px-2 py-1 text-text-muted text-xs">None</span>
            <span className="bg-accent/10 border border-accent/30 rounded px-2 py-1 text-accent-pale text-xs">API Key</span>
            <span className="bg-bg-surface border border-border-subtle rounded px-2 py-1 text-text-muted text-xs">OAuth</span>
          </div>
        </div>
        <div>
          <div className="text-text-tertiary text-[10px] uppercase tracking-wider mb-1">Header Name</div>
          <div className="bg-bg-surface border border-border-subtle rounded px-3 py-1.5 text-text-secondary text-xs font-mono">
            X-API-Key
          </div>
        </div>
        <div>
          <div className="text-text-tertiary text-[10px] uppercase tracking-wider mb-1">API Key</div>
          <div className="bg-bg-surface border border-border-subtle rounded px-3 py-1.5 text-text-muted text-xs font-mono">
            ••••••••••••••••
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Verify components compile**

Run: `cd /home/shawn/memstalker-landing && npx next build 2>&1 | tail -5`

```bash
git add components/docs/ArchitectureDiagram.tsx components/docs/MockupScreenshots.tsx
git commit -m "feat: architecture diagram and CSS mockup screenshot components"
```

---

### Task 5: Docs Content Sections — Overview

**Files:**
- Create: `components/docs/HeroSection.tsx`
- Create: `components/docs/WhatIsMemstalker.tsx`
- Create: `components/docs/HowItWorks.tsx`

- [ ] **Step 1: Create HeroSection**

```tsx
// components/docs/HeroSection.tsx
import DocsSection from "./DocsSection"
import ArchitectureDiagram from "./ArchitectureDiagram"
import { MCPConnectorMockup, CustomGPTMockup } from "./MockupScreenshots"

export default function HeroSection() {
  return (
    <DocsSection id="what-is-memstalker">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
        One brain. Every AI.
      </h1>
      <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
        Memstalker gives all your AI tools — Claude, Codex, Gemini, ChatGPT — a
        shared persistent memory. What one learns, all of them know. No more
        copy-pasting context between sessions.
      </p>

      <ArchitectureDiagram />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <MCPConnectorMockup />
          <p className="text-text-muted text-xs mt-2 text-center">
            MCP connections in your AI tool
          </p>
        </div>
        <div>
          <CustomGPTMockup />
          <p className="text-text-muted text-xs mt-2 text-center">
            Custom GPT connected via REST API
          </p>
        </div>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 2: Create WhatIsMemstalker**

```tsx
// components/docs/WhatIsMemstalker.tsx
import DocsSection from "./DocsSection"

export default function WhatIsMemstalker() {
  return (
    <DocsSection id="what-is-memstalker-detail">
      <h2 className="text-2xl font-bold text-text-primary mb-4">The Problem</h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        AI agents are stateless. Every session starts from zero. You end up
        copy-pasting the same context, re-explaining your codebase, and watching
        your AI repeat mistakes it already fixed yesterday.
      </p>
      <p className="text-text-secondary leading-relaxed mb-4">
        The smarter the model, the more painful the amnesia. Context is the
        bottleneck, not intelligence.
      </p>

      <h2 className="text-2xl font-bold text-text-primary mb-4 mt-10">The Solution</h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Memstalker sits between your knowledge and your AI agents. It captures
        everything — your notes, code, debugging sessions, bug fixes, decisions —
        and serves it to every AI tool you use through MCP and REST APIs.
      </p>
      <p className="text-text-secondary leading-relaxed mb-6">
        Every agent reads from and writes to the same brain. What Claude learns
        today, Gemini knows tomorrow.
      </p>

      <h3 className="text-lg font-semibold text-text-primary mb-3">The Self-Learning Loop</h3>
      <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 space-y-2 text-sm">
        <div className="flex items-start gap-3">
          <span className="text-text-muted font-mono text-xs mt-0.5 w-24 flex-shrink-0">Sessions 1-10</span>
          <span className="text-text-secondary">AI makes mistakes. You correct. Fixes get captured.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-text-muted font-mono text-xs mt-0.5 w-24 flex-shrink-0">Sessions 10-50</span>
          <span className="text-text-secondary">AI recognizes patterns. Starts getting things right.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-text-muted font-mono text-xs mt-0.5 w-24 flex-shrink-0">Sessions 50-100</span>
          <span className="text-text-secondary">AI knows your codebase, preferences, architecture.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-accent-pale font-mono text-xs mt-0.5 w-24 flex-shrink-0">Sessions 100+</span>
          <span className="text-text-primary font-medium">One-shot clean code. Context covers everything.</span>
        </div>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 3: Create HowItWorks**

```tsx
// components/docs/HowItWorks.tsx
import DocsSection from "./DocsSection"

const steps = [
  {
    name: "Capture",
    desc: "Ingest from everywhere — Obsidian vault, YouTube transcripts, X bookmarks, web articles, terminal sessions, bug fixes. 20+ file types supported.",
  },
  {
    name: "Classify",
    desc: "AI auto-classifies each document with type, tags, summary, and key topics. Raw clippings become structured, searchable knowledge.",
  },
  {
    name: "Promote",
    desc: "Raw captures get refined into higher-value artifacts — insights, lessons, decisions, runbooks. The system distinguishes signal from noise.",
  },
  {
    name: "Synthesize",
    desc: "Connects dots across sources. Identifies recurring themes, patterns, and bottlenecks. Generates cross-cutting insights no single source contains.",
  },
  {
    name: "Retrieve",
    desc: "Token-optimized search. Agents get summaries first (90% fewer tokens), then full content only when needed. Three tiers: hot (active), warm (relevant), cold (archived).",
  },
]

export default function DocsHowItWorks() {
  return (
    <DocsSection id="how-it-works">
      <h2 className="text-2xl font-bold text-text-primary mb-6">How It Works</h2>
      <p className="text-text-secondary leading-relaxed mb-8">
        Raw information flows through five stages to become actionable intelligence your AI agents can use:
      </p>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={step.name} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-pale text-xs font-bold flex-shrink-0">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border-subtle mt-2" />}
            </div>
            <div className="pb-6">
              <h3 className="text-text-primary font-semibold mb-1">{step.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add components/docs/HeroSection.tsx components/docs/WhatIsMemstalker.tsx components/docs/HowItWorks.tsx
git commit -m "feat: docs overview sections — hero, what is memstalker, how it works"
```

---

### Task 6: Docs Content — Getting Started + Connect Your AI

**Files:**
- Create: `components/docs/GettingStarted.tsx`
- Create: `components/docs/ConnectClaude.tsx`
- Create: `components/docs/ConnectCodexGemini.tsx`
- Create: `components/docs/ConnectChatGPT.tsx`

- [ ] **Step 1: Create GettingStarted**

```tsx
// components/docs/GettingStarted.tsx
import DocsSection from "./DocsSection"

const paths = [
  {
    emoji: "☁️",
    title: "Hosted (Easiest)",
    desc: "Sign up, connect your agents. We handle the server.",
    steps: [
      "Sign up at memstalker.com",
      "Add MCP config to your AI tool (see below)",
      "Done — your AI agents now have persistent memory",
    ],
    highlight: true,
  },
  {
    emoji: "🖥️",
    title: "Self-Hosted (Free forever)",
    desc: "Clone, install, own your data completely.",
    steps: [
      "git clone https://github.com/willynikes2/knowledge-base-server.git",
      "cd knowledge-base-server && npm install && npm link",
      "kb setup — interactive wizard handles everything",
    ],
    highlight: false,
  },
  {
    emoji: "🤖",
    title: "Custom GPT",
    desc: "Connect ChatGPT via REST API and OpenAPI.",
    steps: [
      "Start your KB server (hosted or self-hosted)",
      "Import OpenAPI spec into your Custom GPT",
      "Set API Key auth — ChatGPT can now use your KB",
    ],
    highlight: false,
  },
]

export default function GettingStarted() {
  return (
    <DocsSection id="getting-started">
      <h2 className="text-2xl font-bold text-text-primary mb-3">Getting Started</h2>
      <p className="text-text-secondary mb-6">
        Three ways to get going, depending on how much control you want:
      </p>
      <div className="grid gap-4">
        {paths.map((p) => (
          <div
            key={p.title}
            className={`bg-bg-elevated border rounded-xl p-5 ${
              p.highlight ? "border-accent/30" : "border-border-subtle"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{p.emoji}</span>
              <h3 className="text-text-primary font-semibold">{p.title}</h3>
            </div>
            <p className="text-text-secondary text-sm mb-3">{p.desc}</p>
            <ol className="space-y-1.5">
              {p.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-accent-pale font-mono text-xs mt-0.5">{i + 1}.</span>
                  <span className="text-text-secondary font-mono text-xs">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="text-text-muted text-xs mt-4">
        Prerequisites: Node.js &gt;= 18. No external databases, Docker, or cloud dependencies required.
      </p>
    </DocsSection>
  )
}
```

- [ ] **Step 2: Create ConnectClaude**

```tsx
// components/docs/ConnectClaude.tsx
import DocsSection from "./DocsSection"

export default function ConnectClaude() {
  return (
    <DocsSection id="connect-claude">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Connect Claude Code</h2>
      <p className="text-text-secondary mb-4">One command if you have the CLI:</p>

      <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 mb-6">
        <pre className="text-sm text-accent-pale font-mono">kb register</pre>
        <p className="text-text-muted text-xs mt-2">
          Writes to ~/.claude.json automatically. All 16 MCP tools become available.
        </p>
      </div>

      <p className="text-text-secondary mb-3">Or add manually to your MCP config:</p>

      <div className="bg-bg-surface border border-border-subtle rounded-lg p-4">
        <pre className="text-sm text-text-secondary font-mono whitespace-pre-wrap">{`{
  "mcpServers": {
    "memstalker": {
      "command": "npx",
      "args": ["knowledge-base-server", "mcp"]
    }
  }
}`}</pre>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 3: Create ConnectCodexGemini**

```tsx
// components/docs/ConnectCodexGemini.tsx
import DocsSection from "./DocsSection"

export default function ConnectCodexGemini() {
  return (
    <DocsSection id="connect-codex-gemini">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Connect Codex / Gemini</h2>
      <p className="text-text-secondary mb-4">
        Point your MCP client at the stdio transport:
      </p>

      <div className="bg-bg-surface border border-border-subtle rounded-lg p-4 mb-4">
        <pre className="text-sm text-text-secondary font-mono whitespace-pre-wrap">{`{
  "mcpServers": {
    "knowledge-base": {
      "command": "node",
      "args": ["/path/to/knowledge-base-server/bin/kb.js", "mcp"]
    }
  }
}`}</pre>
      </div>

      <p className="text-text-muted text-sm">
        Replace <code className="text-accent-pale">/path/to/</code> with your actual install directory.
        Works with any MCP-compatible agent.
      </p>
    </DocsSection>
  )
}
```

- [ ] **Step 4: Create ConnectChatGPT**

```tsx
// components/docs/ConnectChatGPT.tsx
import DocsSection from "./DocsSection"
import { GPTAuthMockup } from "./MockupScreenshots"

export default function ConnectChatGPT() {
  return (
    <DocsSection id="connect-chatgpt">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Connect ChatGPT (Custom GPT)</h2>
      <p className="text-text-secondary mb-6">
        ChatGPT connects via REST API using OpenAPI Actions. Four steps:
      </p>

      <ol className="space-y-6 mb-6">
        <li className="flex gap-3">
          <span className="text-accent-pale font-mono text-sm font-bold mt-0.5">1.</span>
          <div>
            <h3 className="text-text-primary font-medium mb-1">Create a Custom GPT</h3>
            <p className="text-text-secondary text-sm">
              Go to ChatGPT → Explore GPTs → Create. Name it whatever you want (e.g. &quot;My Brain GPT&quot;).
            </p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-accent-pale font-mono text-sm font-bold mt-0.5">2.</span>
          <div>
            <h3 className="text-text-primary font-medium mb-1">Import the OpenAPI spec</h3>
            <p className="text-text-secondary text-sm">
              In Configure → Actions → Import from URL, enter:{" "}
              <code className="text-accent-pale text-xs">https://your-domain.com/openapi.json</code>
            </p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-accent-pale font-mono text-sm font-bold mt-0.5">3.</span>
          <div>
            <h3 className="text-text-primary font-medium mb-1">Set up authentication</h3>
            <p className="text-text-secondary text-sm mb-3">
              Select API Key auth, set the header to <code className="text-accent-pale text-xs">X-API-Key</code>, and paste your key.
            </p>
            <div className="max-w-xs">
              <GPTAuthMockup />
            </div>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="text-accent-pale font-mono text-sm font-bold mt-0.5">4.</span>
          <div>
            <h3 className="text-text-primary font-medium mb-1">Test it</h3>
            <p className="text-text-secondary text-sm">
              Ask your GPT: &quot;Search the knowledge base for recent bug fixes.&quot;
              It should use <code className="text-accent-pale text-xs">kb_search</code> and return results.
            </p>
          </div>
        </li>
      </ol>
    </DocsSection>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add components/docs/GettingStarted.tsx components/docs/ConnectClaude.tsx components/docs/ConnectCodexGemini.tsx components/docs/ConnectChatGPT.tsx
git commit -m "feat: docs getting started and connect-your-AI sections"
```

---

### Task 7: Docs Content — Reference Tables

**Files:**
- Create: `components/docs/MCPToolsReference.tsx`
- Create: `components/docs/RestAPI.tsx`
- Create: `components/docs/CLIReference.tsx`
- Create: `components/docs/FileTypes.tsx`

- [ ] **Step 1: Create MCPToolsReference**

```tsx
// components/docs/MCPToolsReference.tsx
import DocsSection from "./DocsSection"

const tools = [
  { name: "kb_search", desc: "Full-text search with BM25 ranking and highlighted snippets" },
  { name: "kb_search_smart", desc: "Hybrid keyword + semantic search for conceptual queries" },
  { name: "kb_context", desc: "Token-efficient briefing — summaries only, 90%+ savings" },
  { name: "kb_read", desc: "Read full document content by ID" },
  { name: "kb_list", desc: "List documents filtered by type or tag" },
  { name: "kb_write", desc: "Write a new note to the Obsidian vault" },
  { name: "kb_ingest", desc: "Ingest raw text directly into the database" },
  { name: "kb_classify", desc: "Auto-classify unprocessed notes (type, tags, summary)" },
  { name: "kb_promote", desc: "Promote raw source into structured knowledge" },
  { name: "kb_synthesize", desc: "Generate cross-source synthesis connecting recent knowledge" },
  { name: "kb_capture_session", desc: "Record a debugging/coding session with findings" },
  { name: "kb_capture_fix", desc: "Record a bug fix with symptom, cause, resolution" },
  { name: "kb_capture_web", desc: "Capture a web article with content and metadata" },
  { name: "kb_capture_youtube", desc: "Capture a YouTube transcript with metadata" },
  { name: "kb_vault_status", desc: "Show vault indexing stats by type and project" },
  { name: "kb_safety_check", desc: "Review a destructive action against KB history" },
]

export default function MCPToolsReference() {
  return (
    <DocsSection id="mcp-tools">
      <h2 className="text-2xl font-bold text-text-primary mb-3">MCP Tools</h2>
      <p className="text-text-secondary text-sm mb-6">
        16 tools available via MCP (stdio and HTTP). Your AI agent calls these automatically.
      </p>
      <div className="border border-border-subtle rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-surface border-b border-border-subtle">
              <th className="text-left text-text-primary font-medium py-2.5 px-4">Tool</th>
              <th className="text-left text-text-secondary font-normal py-2.5 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t, i) => (
              <tr key={t.name} className={i % 2 === 0 ? "bg-bg-surface/30" : ""}>
                <td className="py-2 px-4 font-mono text-accent-pale text-xs whitespace-nowrap">{t.name}</td>
                <td className="py-2 px-4 text-text-secondary text-xs">{t.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 2: Create RestAPI**

```tsx
// components/docs/RestAPI.tsx
import DocsSection from "./DocsSection"

const endpoints = [
  { method: "GET", path: "/api/v1/search?q=query", desc: "Full-text search" },
  { method: "GET", path: "/api/v1/search/smart?q=query", desc: "Semantic search" },
  { method: "GET", path: "/api/v1/context?q=query", desc: "Token-efficient briefing" },
  { method: "GET", path: "/api/v1/documents", desc: "List documents" },
  { method: "GET", path: "/api/v1/documents/:id", desc: "Read document" },
  { method: "POST", path: "/api/v1/ingest", desc: "Ingest content" },
  { method: "POST", path: "/api/v1/capture/session", desc: "Capture session" },
  { method: "POST", path: "/api/v1/capture/fix", desc: "Capture fix" },
  { method: "POST", path: "/api/v1/capture/web", desc: "Capture web content" },
]

export default function RestAPI() {
  return (
    <DocsSection id="rest-api">
      <h2 className="text-2xl font-bold text-text-primary mb-3">REST API</h2>
      <p className="text-text-secondary text-sm mb-4">
        All endpoints require authentication via <code className="text-accent-pale text-xs">X-API-Key</code> header.
        Three separate keys for Claude, OpenAI, and Gemini.
      </p>
      <div className="border border-border-subtle rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-surface border-b border-border-subtle">
              <th className="text-left text-text-primary font-medium py-2.5 px-4 w-16">Method</th>
              <th className="text-left text-text-primary font-medium py-2.5 px-4">Endpoint</th>
              <th className="text-left text-text-secondary font-normal py-2.5 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((e, i) => (
              <tr key={e.path} className={i % 2 === 0 ? "bg-bg-surface/30" : ""}>
                <td className={`py-2 px-4 text-xs font-mono font-medium ${e.method === "GET" ? "text-green-400" : "text-yellow-400"}`}>
                  {e.method}
                </td>
                <td className="py-2 px-4 text-accent-pale font-mono text-xs">{e.path}</td>
                <td className="py-2 px-4 text-text-secondary text-xs">{e.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 3: Create CLIReference**

```tsx
// components/docs/CLIReference.tsx
import DocsSection from "./DocsSection"

const commands = [
  { cmd: "kb setup", desc: "Interactive setup wizard (--auto for agent mode)" },
  { cmd: "kb start", desc: "Start the dashboard + API server (default :3838)" },
  { cmd: "kb stop", desc: "Stop the running server" },
  { cmd: "kb mcp", desc: "Start MCP stdio server (used by AI tools)" },
  { cmd: "kb register", desc: "Register MCP server with Claude Code" },
  { cmd: "kb ingest <path>", desc: "Ingest a file or directory" },
  { cmd: "kb search <query>", desc: "Search documents from terminal" },
  { cmd: "kb status", desc: "Show stats and server status" },
  { cmd: "kb classify", desc: "Auto-classify unprocessed vault notes" },
  { cmd: "kb summarize", desc: "Generate AI summaries for unsummarized notes" },
  { cmd: "kb capture-x", desc: "Ingest X/Twitter bookmarks from export" },
  { cmd: "kb safety-check", desc: "Review a planned action against KB history" },
]

export default function CLIReference() {
  return (
    <DocsSection id="cli-commands">
      <h2 className="text-2xl font-bold text-text-primary mb-3">CLI Commands</h2>
      <div className="border border-border-subtle rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-surface border-b border-border-subtle">
              <th className="text-left text-text-primary font-medium py-2.5 px-4">Command</th>
              <th className="text-left text-text-secondary font-normal py-2.5 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c, i) => (
              <tr key={c.cmd} className={i % 2 === 0 ? "bg-bg-surface/30" : ""}>
                <td className="py-2 px-4 font-mono text-accent-pale text-xs whitespace-nowrap">{c.cmd}</td>
                <td className="py-2 px-4 text-text-secondary text-xs">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DocsSection>
  )
}
```

- [ ] **Step 4: Create FileTypes**

```tsx
// components/docs/FileTypes.tsx
import DocsSection from "./DocsSection"

const types = [
  { category: "Markdown", extensions: ".md" },
  { category: "Text", extensions: ".txt, .log, .json, .yaml, .yml, .xml, .csv" },
  { category: "Code", extensions: ".js, .ts, .jsx, .tsx, .py, .go, .rs, .java, .rb, .sh, .bash, .c, .cpp, .h, .hpp, .html, .css, .sql, .toml" },
  { category: "PDF", extensions: ".pdf (with text extraction)" },
  { category: "Config", extensions: ".env, .ini, .cfg, .conf" },
]

export default function FileTypes() {
  return (
    <DocsSection id="file-types">
      <h2 className="text-2xl font-bold text-text-primary mb-3">Supported File Types</h2>
      <div className="border border-border-subtle rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-surface border-b border-border-subtle">
              <th className="text-left text-text-primary font-medium py-2.5 px-4 w-28">Category</th>
              <th className="text-left text-text-secondary font-normal py-2.5 px-4">Extensions</th>
            </tr>
          </thead>
          <tbody>
            {types.map((t, i) => (
              <tr key={t.category} className={i % 2 === 0 ? "bg-bg-surface/30" : ""}>
                <td className="py-2 px-4 text-text-primary text-xs font-medium">{t.category}</td>
                <td className="py-2 px-4 text-text-secondary text-xs font-mono">{t.extensions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-text-tertiary text-sm mt-8">
        Questions? Email{" "}
        <a href="mailto:support@memstalker.com" className="text-accent-pale hover:text-accent-light transition-colors">
          support@memstalker.com
        </a>
      </p>
    </DocsSection>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add components/docs/MCPToolsReference.tsx components/docs/RestAPI.tsx components/docs/CLIReference.tsx components/docs/FileTypes.tsx
git commit -m "feat: docs reference sections — MCP tools, REST API, CLI, file types"
```

---

### Task 8: Assemble Docs Page + Final Build

**Files:**
- Modify: `app/docs/page.tsx`

- [ ] **Step 1: Assemble all sections in page.tsx**

```tsx
// app/docs/page.tsx
import HeroSection from "@/components/docs/HeroSection"
import WhatIsMemstalker from "@/components/docs/WhatIsMemstalker"
import DocsHowItWorks from "@/components/docs/HowItWorks"
import GettingStarted from "@/components/docs/GettingStarted"
import ConnectClaude from "@/components/docs/ConnectClaude"
import ConnectCodexGemini from "@/components/docs/ConnectCodexGemini"
import ConnectChatGPT from "@/components/docs/ConnectChatGPT"
import MCPToolsReference from "@/components/docs/MCPToolsReference"
import RestAPI from "@/components/docs/RestAPI"
import CLIReference from "@/components/docs/CLIReference"
import FileTypes from "@/components/docs/FileTypes"

export default function DocsPage() {
  return (
    <>
      <HeroSection />
      <WhatIsMemstalker />
      <DocsHowItWorks />
      <GettingStarted />
      <ConnectClaude />
      <ConnectCodexGemini />
      <ConnectChatGPT />
      <MCPToolsReference />
      <RestAPI />
      <CLIReference />
      <FileTypes />
    </>
  )
}
```

- [ ] **Step 2: Build and verify all routes**

Run: `cd /home/shawn/memstalker-landing && npx next build 2>&1 | tail -15`
Expected: Build succeeds. Routes `/`, `/docs`, `/privacy`, `/terms` all appear.

- [ ] **Step 3: Visual check in browser**

Navigate to `http://localhost:3002/docs`, `/privacy`, `/terms` and verify:
- Docs: sidebar nav works, sections render, architecture diagram visible, mockups look good
- Privacy: commitments listed, contact email linked
- Terms: coming soon message displayed
- All pages use dark theme consistently

- [ ] **Step 4: Final commit**

```bash
git add app/docs/page.tsx
git commit -m "feat: assemble complete docs page with all sections"
```

---

### Task 9: Save to KB + Final Verification

- [ ] **Step 1: Save implementation plan to KB**

Use `kb_write` to save this plan.

- [ ] **Step 2: Run production build**

```bash
cd /home/shawn/memstalker-landing && npx next build
```

Expected: Clean build, no errors, all routes listed.

- [ ] **Step 3: Capture session to KB**

Use `kb_capture_session` to record what was built.
