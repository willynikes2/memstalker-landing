# Memstalker.com Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign memstalker.com from a light-theme AI-looking template into a dark editorial converting landing page with free hosted tier, privacy section, and competitor comparison.

**Architecture:** Complete visual overhaul of existing Next.js 14 landing page. Replaces color system, restructures page sections, adds new components (ComparisonTable, Privacy, DemoVideo), removes template-style components (SocialProof, Features, Demo), updates pricing from 4-tier to new 4-tier with free hosted. No backend changes — WaitlistForm stays as email capture.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Vercel

**Spec:** `docs/superpowers/specs/2026-03-19-memstalker-redesign-design.md`

**Project root:** `/home/shawn/memstalker-landing`

**Section order:** Navbar - Hero - Pain - HowItWorks - DemoVideo - ComparisonTable - Privacy - Pricing - FAQ - FinalCTA - Footer

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Modify | `app/globals.css` | Color system, typography, color-scheme: dark, CTA styles |
| Modify | `tailwind.config.ts` | Updated color tokens matching spec palette |
| Create | `public/logo-icon.svg` | Neural Graph icon (favicon-ready) |
| Create | `public/logo-full.svg` | Neural Graph icon + "memstalker" text |
| Modify | `app/icon.svg` | Replace with Neural Graph favicon |
| Modify | `components/Navbar.tsx` | New logo, dark theme, simplified links |
| Modify | `components/Hero.tsx` | Left-aligned editorial, Reddit badge, install command |
| Modify | `components/Problem.tsx` | Simplify to Pain section (3 paragraphs) |
| Modify | `components/HowItWorks.tsx` | Terminal-centric 3-step vertical, absorb Features content |
| Modify | `components/Terminal.tsx` | Update styles for dark theme |
| Create | `components/DemoVideo.tsx` | Video embed in dark card |
| Create | `components/ComparisonTable.tsx` | Memstalker vs Mem0/Zep/Letta |
| Create | `components/Privacy.tsx` | Data ownership / security section |
| Modify | `components/Pricing.tsx` | 4 new tiers (Free hosted, Pro, Team, Self-Hosted) |
| Modify | `components/FAQ.tsx` | Updated questions, JSON-LD schema |
| Create | `components/FaqJsonLd.tsx` | Reusable FAQ JSON-LD component |
| Modify | `components/FinalCTA.tsx` | Simplified dark editorial |
| Modify | `components/Footer.tsx` | Minimal dark |
| Modify | `components/WaitlistForm.tsx` | CTA text "Start Free", dark theme styles |
| Modify | `app/page.tsx` | New section order, remove old imports |
| Modify | `app/layout.tsx` | Updated metadata, SEO |
| Modify | `app/opengraph-image.tsx` | Dark editorial theme |
| Modify | `app/twitter-image.tsx` | Dark editorial theme |
| Delete | `components/SocialProof.tsx` | Absorbed into Hero |
| Delete | `components/Features.tsx` | Absorbed into HowItWorks |
| Delete | `components/Demo.tsx` | Replaced by DemoVideo |

---

### Task 1: Update color system and Tailwind config

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update Tailwind color tokens**

In `tailwind.config.ts`, replace the entire `colors` object inside `theme.extend` with the dark editorial palette from spec (bg, text, accent, border tokens).

- [ ] **Step 2: Update globals.css**

1. Change `color-scheme: light` to `color-scheme: dark`
2. Replace all CSS custom properties in `:root` to match new dark palette
3. Update `.btn-primary` to white bg / black text
4. Update terminal/code block styles for dark elevated background
5. Update scrollbar styles for dark theme

- [ ] **Step 3: Verify build**

Run: `cd /home/shawn/memstalker-landing && npm run build`

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: dark editorial color system and typography"
```

---

### Task 2: Create Neural Graph logo SVGs

**Files:**
- Create: `public/logo-icon.svg`
- Create: `public/logo-full.svg`
- Modify: `app/icon.svg`

- [ ] **Step 1: Create logo-icon.svg** — Neural Graph icon with 3 input nodes connecting through 2 hidden nodes to 1 output node. Indigo color family. viewBox 40x40.

- [ ] **Step 2: Create logo-full.svg** — Icon + "memstalker" text. viewBox 180x40.

- [ ] **Step 3: Copy logo-icon.svg to app/icon.svg** (favicon)

- [ ] **Step 4: Verify build** — `npm run build`

- [ ] **Step 5: Commit**

```bash
git add public/logo-icon.svg public/logo-full.svg app/icon.svg
git commit -m "feat: Neural Graph logo — brain network icon + wordmark"
```

---

### Task 3: Rebuild Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar** — Dark bg, Neural Graph logo via Image component, links (Docs, Pricing, GitHub), white "Start Free" CTA button. Fixed position with `bg-bg/95 backdrop-blur-sm border-b border-border-subtle`. Use absolute paths for anchors.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: dark editorial Navbar with Neural Graph logo"
```

---

### Task 4: Rebuild Hero section

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Rewrite Hero** — Left-aligned editorial layout. Elements in order:
1. Reddit badge pill (small, understated)
2. H1: "Persistent memory for AI agents." (48-60px, extrabold, tight tracking, accent-colored period)
3. Subhead (text-text-tertiary, 17-18px, max-w-lg)
4. CTA row: "Start Free" (white solid) + "Watch Demo" (border outline)
5. Install command card: `$ npx knowledge-base-server` with copy button
6. Proof bullets: three inline items

Left-aligned with `px-6 md:px-16 lg:px-24`, max-width ~640px on content. `"use client"` for clipboard.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: left-aligned editorial Hero with install command and Reddit badge"
```

---

### Task 5: Simplify Problem to Pain section

**Files:**
- Modify: `components/Problem.tsx`

- [ ] **Step 1: Rewrite as minimal Pain section** — H2 "Every session starts from zero." Three short paragraphs (not cards, not icons). Text 18px, color text-secondary, max-w-xl.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/Problem.tsx
git commit -m "feat: minimal Pain section — three paragraphs, no template cards"
```

---

### Task 6: Rebuild HowItWorks with terminal steps

**Files:**
- Modify: `components/HowItWorks.tsx`
- Modify: `components/Terminal.tsx`

- [ ] **Step 1: Update Terminal.tsx for dark theme** — bg-bg-elevated, border-border-subtle, muted title bar.

- [ ] **Step 2: Rewrite HowItWorks** — Vertical 3-step layout. Each step: step number (monospace accent), headline, description, Terminal with real CLI commands. Steps: Connect (MCP config), Capture (kb_capture_fix), Retrieve (kb_search 8ms).

- [ ] **Step 3: Verify build** — `npm run build`

- [ ] **Step 4: Commit**

```bash
git add components/HowItWorks.tsx components/Terminal.tsx
git commit -m "feat: terminal-centric HowItWorks with real CLI commands"
```

---

### Task 7: Create DemoVideo component

**Files:**
- Create: `components/DemoVideo.tsx`

- [ ] **Step 1: Create DemoVideo** — Simple video in dark card. `preload="none"` for lazy loading. `playsInline`, `controls`. Wrapped in `rounded-xl border border-border-subtle bg-bg-elevated`.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/DemoVideo.tsx
git commit -m "feat: DemoVideo component with lazy-loaded video embed"
```

---

### Task 8: Create ComparisonTable component

**Files:**
- Create: `components/ComparisonTable.tsx`

- [ ] **Step 1: Create ComparisonTable** — Server component. H2 "How Memstalker compares." Table: Memstalker vs Mem0 vs Zep vs Letta. Rows: cross-model memory, free tier, self-hosted, setup time, self-learning, data ownership, starting price. Memstalker column highlighted. Mobile: horizontal scroll with `overflow-x-auto` and `min-w-[600px]` on table.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/ComparisonTable.tsx
git commit -m "feat: competitor comparison table — Memstalker vs Mem0/Zep/Letta"
```

---

### Task 9: Create Privacy section

**Files:**
- Create: `components/Privacy.tsx`

- [ ] **Step 1: Create Privacy** — H2 "Your data. Not ours." Four declarative commitment statements. Small lock icon SVG inline next to headline. Left-aligned, max-w ~600px. Text text-secondary 16px.

Commitments:
1. Can't read your data. Encrypted at rest and in transit.
2. Self-host for zero trust. Your server, your rules.
3. When you leave, data destroyed. Download window first.
4. No training on data. No selling. No third-party access.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/Privacy.tsx
git commit -m "feat: Privacy section — data ownership commitments"
```

---

### Task 10: Rebuild Pricing with free hosted tier

**Files:**
- Modify: `components/Pricing.tsx`

- [ ] **Step 1: Rewrite Pricing** — 4 tiers: Free ($0, managed, limited), Pro ($12 early/$25, highlighted, early adopter badge), Team ($50), Self-Hosted (free forever, GitHub link). Dark cards with `bg-bg-elevated border-border-subtle`. Pro has `border-accent/30 ring-1 ring-accent/20`. Original price strikethrough. Mobile: single column, Pro first via CSS order.

- [ ] **Step 2: Verify build** — `npm run build`

- [ ] **Step 3: Commit**

```bash
git add components/Pricing.tsx
git commit -m "feat: 4-tier pricing with free hosted tier and early adopter Pro"
```

---

### Task 11: Create FaqJsonLd and update FAQ

**Files:**
- Create: `components/FaqJsonLd.tsx`
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Create FaqJsonLd** — Reusable component that renders FAQPage JSON-LD structured data as a script tag. Takes `items: { question: string; answer: string }[]`. Content is our own typed data (safe, not user input).

- [ ] **Step 2: Update FAQ.tsx** — Replace questions with spec questions (7 items). Extract data as typed array. Render FaqJsonLd before FAQ section. Dark theme styling: accordion borders border-subtle, text text-secondary.

- [ ] **Step 3: Verify build** — `npm run build`

- [ ] **Step 4: Commit**

```bash
git add components/FaqJsonLd.tsx components/FAQ.tsx
git commit -m "feat: FAQ with JSON-LD schema and updated questions"
```

---

### Task 12: Update FinalCTA, Footer, WaitlistForm

**Files:**
- Modify: `components/FinalCTA.tsx`
- Modify: `components/Footer.tsx`
- Modify: `components/WaitlistForm.tsx`

- [ ] **Step 1: Simplify FinalCTA** — "Give your AI agents a real memory." White CTA. "No credit card required."

- [ ] **Step 2: Dark Footer** — Minimal. GitHub, Twitter, Docs, Privacy, Terms. "Built by Shawn Daniel." `bg-bg-surface border-t border-border-subtle`.

- [ ] **Step 3: Update WaitlistForm** — CTA text "Start Free". Dark input styles. Success state uses accent-pale text.

- [ ] **Step 4: Verify build** — `npm run build`

- [ ] **Step 5: Commit**

```bash
git add components/FinalCTA.tsx components/Footer.tsx components/WaitlistForm.tsx
git commit -m "feat: dark editorial FinalCTA, Footer, and WaitlistForm"
```

---

### Task 13: Rewire page.tsx and delete old components

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/SocialProof.tsx`
- Delete: `components/Features.tsx`
- Delete: `components/Demo.tsx`

- [ ] **Step 1: Update page.tsx** — New imports and section order: Navbar, Hero, Problem, HowItWorks, DemoVideo, ComparisonTable, Privacy, Pricing, FAQ, FinalCTA, Footer. Keep ScrollReveal.

- [ ] **Step 2: Delete old components** — `rm components/SocialProof.tsx components/Features.tsx components/Demo.tsx`

- [ ] **Step 3: Verify build** — `npm run build` — no missing import errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git rm components/SocialProof.tsx components/Features.tsx components/Demo.tsx
git commit -m "feat: new page section order, delete template-style components"
```

---

### Task 14: Update metadata and OG images

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/opengraph-image.tsx`
- Modify: `app/twitter-image.tsx`

- [ ] **Step 1: Update layout.tsx metadata** — Title: "Persistent memory for AI agents | Memstalker". Description per spec. Inter font weights 400 + 800 only.

- [ ] **Step 2: Update opengraph-image.tsx** — Dark editorial theme (#0c0c0c bg, white text, indigo accent).

- [ ] **Step 3: Update twitter-image.tsx** — Same dark theme.

- [ ] **Step 4: Verify build** — `npm run build`

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/opengraph-image.tsx app/twitter-image.tsx
git commit -m "feat: updated SEO metadata and dark editorial OG/Twitter images"
```

---

### Task 15: Final verification

- [ ] **Step 1: Full production build** — `npm run build` — clean, all pages generated.

- [ ] **Step 2: Dev server spot check** — `npm run dev` — verify all sections render, dark theme consistent, no light artifacts, forms work, video plays, logo correct.

- [ ] **Step 3: Lighthouse** — Performance >= 0.95, SEO >= 0.95, LCP < 1200ms.

- [ ] **Step 4: Anti-AI voice check** — No banned words, no centered hero, no icon grids, no template patterns.

- [ ] **Step 5: Push to production** — `git push origin master` — Vercel auto-deploys.
