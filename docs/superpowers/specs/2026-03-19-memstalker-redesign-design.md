# Memstalker.com Redesign — Design Spec

> Editorial Dark design direction. Converting landing page for persistent AI agent memory product.
> Project root: `/home/shawn/memstalker-landing`

---

## 1. Design Direction: Editorial Dark

**Core principles:**
- Left-aligned hero (not centered — centered = template detection)
- Bold tight-tracked headlines (-2px letter-spacing, 800 weight)
- Generous whitespace between sections
- No gradient blob backgrounds, no icon grids, no stock illustrations
- White primary CTA on dark (not colored pills)
- Monospace accents for terminal/code elements
- Subtle single-color accents (indigo #6366f1 family)
- Content reads like editorial design, not a SaaS template

**Color palette (maps to Tailwind config keys):**
```
bg.DEFAULT:      #0c0c0c
bg.surface:      #111111
bg.elevated:     #161620
border.subtle:   #1e1e2e          (default border)
border.hover:    #333333          (interactive states)
text.primary:    #ffffff
text.secondary:  #999999
text.tertiary:   #555555
text.muted:      #444444          (new key)
accent.DEFAULT:  #6366f1
accent.light:    #818cf8          (used for highlights, NOT backgrounds)
accent.pale:     #a5b4fc          (new key — node highlights, subtle accents)
```

**CTA styles (override `.btn-primary` in globals.css):**
- Primary CTA: `bg-white text-black` (not accent-colored)
- Secondary CTA: `border border-border-hover text-text-tertiary`

**CRITICAL: Set `color-scheme: dark` in globals.css** (currently `light`). This affects form inputs, scrollbars, and system UI elements.

**Typography:**
- Headlines: Inter, weight 800, letter-spacing -2px to -1px
- Body: Inter, weight 400, 17px, line-height 1.6
- Monospace: JetBrains Mono for code/terminal elements
- Small text/labels: 11-12px, uppercase, letter-spacing 2-3px

**No-go list (anti-AI-template rules):**
- NO centered hero layouts
- NO gradient pill buttons
- NO feature icon grids with 3-column cards
- NO abstract tech illustrations
- NO "leverage, utilize, comprehensive, robust, seamless, cutting-edge"
- NO cookie-cutter SaaS section patterns
- YES asymmetry, editorial rhythm, real terminal output, personality

---

## 2. Logo: Neural Graph

SVG logo showing 3 input nodes (representing Claude, Codex, Gemini) connecting through a hidden layer to one output node (KB). Minimal, abstract, indigo color family.

**Variants needed:**
- `logo-icon.svg` — icon only (works at 16x16 through 512x512)
- `logo-full.svg` — icon + "memstalker" text (navbar horizontal)
- Replace existing `public/logo-icon.svg` and `public/logo-full.svg`
- Replace `app/icon.svg` favicon

---

## 3. Page Structure (Top to Bottom)

### 3.1 Navbar
- Logo (Neural Graph) + "memstalker" text, left-aligned
- Links: Docs, Pricing, GitHub (muted gray, 13px)
- CTA: "Start Free" button (white bg, black text, right-aligned)
- Fixed on scroll, dark background with subtle bottom border
- No transparency/blur effects (keeps it clean)

### 3.2 Hero Section
- Reddit validation badge: small pill at top ("As seen on r/ClaudeAI · 200K+ views")
- H1: "Persistent memory for AI agents." (48px, weight 800, -2px tracking)
- Subhead: "Connect Claude, Codex, and Gemini to one shared knowledge base. Fixes, decisions, and context survive every session." (17px, #777)
- Two CTAs: "Start Free" (white solid) + "Watch Demo" (border outline)
- Install command: `$ npx knowledge-base-server` with copy button, monospace, dark card
- Proof bullets: "✓ Free hosted tier · ✓ Works with Claude, Codex, Gemini · ✓ Self-host option" (12px, #555)
- All left-aligned, max-width ~640px

### 3.3 Pain Section
- Headline: "Every session starts from zero."
- Three pain points as short paragraphs (NOT cards, NOT icons):
  1. "You paste the same context into every chat."
  2. "Switch tools? Start explaining all over again."
  3. "Fixes from yesterday? Your AI has no idea."
- Minimal styling. Let the words hit. Gray text (#999), 18px, line-height 1.7.

### 3.4 How It Works
- Headline: "Three commands. Permanent memory."
- Three steps, each with a real terminal snippet:
  1. **Connect** — MCP config code block showing how to add memstalker
  2. **Capture** — `kb_capture_fix` / `kb_capture_session` showing real usage
  3. **Retrieve** — `kb_search` showing 8ms results
- Steps rendered as vertical sequence (not horizontal cards)
- Real terminal output, real commands, monospace

### 3.5 Demo Video
- Embedded `demo.mp4` (already exists in `/public/`)
- Dark card container with subtle border
- Auto-play muted with controls visible
- Caption: "Watch memstalker in action — 2 minutes"

### 3.6 Comparison Table
- Headline: "How Memstalker compares."
- Table: Memstalker vs Mem0 vs Zep vs Letta
- Rows: Cross-model memory, Self-hosted option, Free tier, Setup complexity, Self-learning, Data ownership, Pricing
- Memstalker column highlighted
- Clean table, no heavy styling. Checkmarks and X marks.

### 3.7 Privacy & Security Section
- Headline: "Your data. Not ours."
- Key commitments:
  - "We can't read your data. Period. Encryption at rest, in transit."
  - "Self-host if you want zero trust. Your server, your rules."
  - "When you leave, we destroy your data. You get a download window first."
  - "No training on your data. No selling. No third-party access."
- Tone: Direct, no-bullshit. Short declarative sentences.
- Maybe a small lock/shield icon but NOT a grid of security feature cards

### 3.8 Pricing Section
- Headline: "Start free. Scale when you need to."
- Four tiers:

| | Free | Pro | Team | Self-Hosted |
|---|---|---|---|---|
| Price | $0/mo | $12/mo early / $25/mo normal | $50/mo | Free forever |
| Hosting | Managed | Managed | Managed | You manage |
| Documents | 100 | Unlimited | Unlimited | Unlimited |
| Search queries | 1,000/mo | Unlimited | Unlimited | Unlimited |
| AI connectors | 1 | All | All | All |
| Smart search | FTS5 | FTS5 + Semantic | FTS5 + Semantic | FTS5 + Semantic |
| Self-learning | ✓ | ✓ | ✓ | ✓ |
| Users | 1 | 1 | 5 | Unlimited |
| Support | Community | Email | Priority | Community |

**Pricing decisions (explicit):**
- **Starter tier dropped.** Was confusing with Free hosted. Two entry points now: Free (hosted, limited) and Self-Hosted (free, full-featured).
- **Self-hosted gets full features** including semantic search and self-learning. We don't paywall features for OSS — hosted tiers add convenience (managed infra, support), not capabilities.
- **Free hosted tier is limited** (100 docs, 1 connector, 1K queries) — enough to try, not enough to stay forever. Upgrade path is natural.
- **Pro early adopter price displayed as**: strikethrough on $25, showing $12 with "Early Adopter — 52% off" badge and "Locked in forever. 500 spots." (Same pattern as current site.)
- **Free tier CTA:** "Start Free" → email capture for now (hosted platform not yet live). Changes to signup link when platform launches.
- **Self-Hosted CTA:** "View on GitHub" → links to repo

**Mobile layout for pricing:**
- Single column stack on mobile (< 768px)
- Pro tier first on mobile (highlighted, most important)
- Swipe/scroll for other tiers

### 3.9 FAQ Section
- 6-8 questions, accordion-style
- JSON-LD FAQPage schema for Google
- Questions:
  1. "Is my data private?" → Yes. Encrypted. Can't access it. Destroy on departure.
  2. "Can I self-host?" → Yes, forever. Full-featured open source.
  3. "Which AI tools does it work with?" → Claude, Codex, Gemini, any MCP client.
  4. "How is this different from RAG?" → Memstalker is writeable. AI updates its own memory.
  5. "What about Claude's built-in memory?" → One model, one platform. Memstalker works across all.
  6. "How long does setup take?" → Under 5 minutes. One npx command.
  7. "Can teams share a knowledge base?" → Yes, Team plan supports 5 members.

### 3.10 Final CTA
- Headline: "Give your AI agents a real memory."
- Single "Start Free" button (white, large)
- Small text: "No credit card required. Free tier available."

### 3.11 Footer
- Links: GitHub, Twitter (@willynikes), Docs, Privacy, Terms
- "Built by Shawn Daniel"
- Keep minimal

---

## 4. Technical Implementation

### Stack (unchanged):
- Next.js 14, TypeScript, Tailwind CSS
- Vercel auto-deploy on push to master
- Vercel Analytics

### What changes:
- Complete visual overhaul of all existing components
- New color system in `globals.css` (dark editorial palette)
- New logo SVGs in `public/`
- New Privacy section component
- New Comparison table component
- Updated Pricing component (4 tiers including free hosted)
- Simplified page structure (remove SocialProof, Features, HowItWorks as separate heavy components — fold into leaner sections)
- WaitlistForm updated to "Start Free" flow (or kept as email capture until hosted platform is ready)

### Section order (consolidated):
```
Navbar → Hero → Pain → HowItWorks → DemoVideo → ComparisonTable → Privacy → Pricing → FAQ → FinalCTA → Footer
```

### Components to create:
- `components/ComparisonTable.tsx` — vs competitors table
- `components/Privacy.tsx` — data ownership / security section
- `components/DemoVideo.tsx` — simple video embed with dark card container
- New `public/logo-icon.svg` — Neural Graph icon
- New `public/logo-full.svg` — Neural Graph + text

### Components to heavily modify:
- `components/Navbar.tsx` — new logo, dark theme, simplified
- `components/Hero.tsx` — left-aligned, editorial layout, install command, Reddit badge (absorbed from SocialProof)
- `components/Problem.tsx` — simplify to Pain section (3 paragraphs, no cards)
- `components/HowItWorks.tsx` — rebuild as terminal-centric 3-step vertical sequence (absorb key Features content)
- `components/Pricing.tsx` — 4 tiers with free hosted (drops Starter tier)
- `components/FAQ.tsx` — add JSON-LD, update questions for dark theme
- `components/FinalCTA.tsx` — simplified
- `components/Footer.tsx` — minimal dark
- `components/WaitlistForm.tsx` — CTA text changes to "Start Free" (keeps email capture until hosted platform is ready; not a signup flow yet)
- `components/Terminal.tsx` — update styles for dark theme (currently light-themed)
- `components/ScrollReveal.tsx` — keep as-is (lightweight, ~26 lines, CSS opacity only)
- `app/globals.css` — entire color system + typography + `color-scheme: dark`
- `app/layout.tsx` — updated metadata per SEO guidance
- `app/page.tsx` — new section order and composition
- `app/opengraph-image.tsx` — update to dark editorial theme
- `app/twitter-image.tsx` — update to dark editorial theme

### Components to delete:
- `components/SocialProof.tsx` — Reddit badge absorbed into Hero
- `components/Features.tsx` — content absorbed into HowItWorks
- `components/Demo.tsx` — replaced by new DemoVideo.tsx

### Mobile layout (90% of traffic from Reddit):
- **Hero:** Goes full-width on mobile, stays left-aligned. CTA stack vertically. Install command full-width.
- **Pain:** No changes needed — text-only section scales naturally.
- **Comparison table:** Horizontal scroll with sticky first column (feature names). Or collapse to "Memstalker vs [selected competitor]" toggle cards. Implementer's choice — either works.
- **Pricing:** Single column stack. Pro tier shown first (highlighted). Others below.
- **Demo video:** Full-width, 16:9 aspect ratio maintained.
- **Sticky mobile CTA:** Fixed "Start Free" button at bottom of viewport on scroll (appears after hero exits viewport).

### Performance targets:
- LCP < 1.2s (mobile — Reddit traffic is 90% mobile)
- Lighthouse Performance 95+, SEO 95+
- No heavy JS animations — CSS transitions + ScrollReveal opacity only
- Lazy load demo video
- Inter font: load weights 400 and 800 only (subset for payload reduction)

---

## 5. pSEO Pages (Separate Plan)

The 6 learn pages from the existing pSEO plan (`docs/superpowers/plans/2026-03-18-memstalker-pseo.md`) are executed as a separate track. They depend on:
- `@tailwindcss/typography` (already installed)
- `components/LearnLayout.tsx`
- `components/FaqJsonLd.tsx`
- Navbar with absolute path links

These can be built in parallel with the homepage redesign.

---

## 6. Success Criteria

Binary pass/fail:
- Does the page look hand-designed (not AI-generated)? Y/N
- Does the hero convert above the fold on mobile? Y/N
- Can a visitor understand the product in under 5 seconds? Y/N
- Does the install command work with one copy-paste? Y/N
- Is the free tier CTA prominent and frictionless? Y/N
- Does the comparison table differentiate from competitors? Y/N
- Does the privacy section build trust? Y/N
- Lighthouse Performance >= 95? Y/N
- Lighthouse SEO >= 95? Y/N
