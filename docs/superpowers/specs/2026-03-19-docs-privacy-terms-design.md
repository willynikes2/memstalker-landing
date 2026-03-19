# Memstalker Landing — Docs, Privacy, Terms & Link Fixes

**Date:** 2026-03-19
**Status:** Draft

---

## Problem

1. Footer links to `/docs`, `/privacy`, `/terms` all 404
2. Navbar "Docs" links to GitHub README instead of product docs
3. Twitter handle is wrong (`@willynikes` → `@ShawnDanCap`)
4. No documentation page exists — visitors can't understand how to use the product
5. No contact method for questions
6. The biggest conversion blocker: people don't "get" what Memstalker does. They need to SEE the actual Claude connector, Custom GPT, and multi-agent setup to understand "install this → no more copy-paste → shared AI memory"

---

## Solution Overview

### Quick Fixes
- Fix Twitter handle in Footer.tsx: `@willynikes` → `@ShawnDanCap` (link to `https://x.com/ShawnDanCap`)
- Change Navbar "Docs" href from GitHub README to `/docs`
- Add `support@memstalker.com` to Footer (Cloudflare Email Routing to be configured separately)

### New Pages

| Route | Purpose | Complexity |
|-------|---------|------------|
| `/docs` | Full product documentation with "aha moment" visuals | High |
| `/privacy` | Coming soon placeholder with privacy commitments summary | Low |
| `/terms` | Coming soon placeholder | Low |

---

## Page Design: `/docs`

### Layout
- **Sticky sidebar nav** (left, 200px) with section groups
- **Main content area** (scrollable, max-width ~720px)
- **Same dark theme** as landing page (bg: #0c0c0c, same color tokens)
- **Responsive**: sidebar collapses to horizontal scrolling section nav on mobile (< md breakpoint)
- **Docs layout**: `app/docs/layout.tsx` renders `<DocsSidebar />` alongside `{children}` — keeps sidebar logic separate from content

### Sidebar Navigation Structure

```
OVERVIEW
  What is Memstalker?
  How It Works

GETTING STARTED
  Hosted (Memstalker)
  Self-Hosted
  Custom GPT Setup

CONNECT YOUR AI
  Claude Code
  Codex / Gemini
  ChatGPT (Custom GPT)

REFERENCE
  MCP Tools (16)
  REST API
  CLI Commands
  File Types
```

### Section Content

#### 1. Hero — "One brain. Every AI."

**Purpose:** The "aha moment" — immediately show what this product does.

- Headline: "One brain. Every AI."
- Subhead: ELI5 — "Memstalker gives all your AI tools — Claude, Codex, Gemini, ChatGPT — a shared persistent memory. What one learns, all of them know. No more copy-pasting context between sessions."
- **Architecture diagram**: Inline React/CSS component (not an image) showing Claude Code, Codex CLI, Gemini CLI, ChatGPT all connecting via MCP + REST API to one Memstalker Knowledge Base, backed by SQLite + FTS5, Embeddings, and Obsidian Sync. Built as `components/docs/ArchitectureDiagram.tsx`.
- **Mockup screenshots** (React/CSS components, no real PII):
  - Mockup of MCP connector config showing Claude Code, Gemini, etc. connected (generic names)
  - Mockup of a Custom GPT page showing it connected to the knowledge base (generic "My Brain GPT")
  - Captions: "MCP connections in Claude Desktop" / "Custom GPT connected via REST API"

#### 2. What is Memstalker?

ELI5 version of the README "Problem" and "Solution" sections:
- The problem: AI agents are stateless, every session starts from zero
- The solution: One shared knowledge base all your AIs read from and write to
- The self-learning loop: Sessions 1-10 mistakes → Sessions 100+ one-shot clean code
- Tone: Product voice, not OSS voice. "You" not "developers"

#### 3. How It Works

Simplified version of the 7-layer intelligence pipeline:
- Capture → Classify → Promote → Synthesize → Retrieve
- Three-tier memory (Hot/Warm/Cold) explained simply
- Token-optimized retrieval (agents get summaries first, full docs only when needed)

#### 4. Getting Started

Three paths presented as cards:

**Hosted (Easiest)**
- Sign up at memstalker.com
- Add MCP config to your AI tool
- Done — we handle the server

**Self-Hosted (Free forever)**
- `git clone` + `npm install` + `kb setup`
- Interactive wizard handles everything
- Prerequisites: Node.js >= 18, that's it

**Custom GPT**
- Import OpenAPI spec from your server
- Set API Key authentication
- ChatGPT can now search/read/write your KB
- Include CSS mockups showing the auth setup (generic, no PII)

#### 5. Connect Your AI — Claude Code

```bash
kb register    # One command, done
```

Or manual MCP config:
```json
{
  "mcpServers": {
    "memstalker": {
      "command": "npx",
      "args": ["knowledge-base-server", "mcp"]
    }
  }
}
```

Mockup showing connected state (generic names, no PII).

#### 6. Connect Your AI — Codex / Gemini

MCP stdio config pointing to local server. Same JSON format, different agent config location.

#### 7. Connect Your AI — ChatGPT Custom GPT

Step-by-step with screenshots:
1. Create Custom GPT in ChatGPT
2. Add Action → Import OpenAPI spec URL
3. Set Authentication → API Key → Header `X-API-Key`
4. Test it

CSS mockups showing the flow (generic names, no PII).

#### 8. MCP Tools Reference

Table of all 16 tools from README:

| Tool | Description |
|------|-------------|
| `kb_search` | Full-text search with BM25 ranking and highlighted snippets |
| `kb_search_smart` | Hybrid keyword + semantic search for conceptual queries |
| `kb_context` | Token-efficient briefing — summaries only, 90%+ savings |
| ... | (all 16 tools) |

#### 9. REST API

Endpoints table:
- `GET /api/v1/search?q=query`
- `GET /api/v1/search/smart?q=query`
- `GET /api/v1/context?q=query`
- `GET /api/v1/documents`
- `GET /api/v1/documents/:id`
- `POST /api/v1/ingest`
- `POST /api/v1/capture/session`
- `POST /api/v1/capture/fix`
- `POST /api/v1/capture/web`

Auth: API Key via `X-API-Key` header. Three separate keys for Claude, OpenAI, Gemini.

#### 10. CLI Commands

Table from README:
```
kb setup, kb start, kb stop, kb mcp, kb register,
kb ingest, kb search, kb status, kb classify,
kb summarize, kb capture-x, kb safety-check
```

#### 11. Supported File Types

Table: Markdown, Text, Code (20+ extensions), PDF, Config files.

#### 12. Questions?

"Email us at support@memstalker.com" with mailto link.

---

## Page Design: `/privacy`

Coming soon page with:
- "Privacy Policy — Coming Soon" heading
- Summary of privacy commitments from landing page Privacy component:
  - Encrypted at rest and in transit
  - Self-host option for zero trust
  - Data destroyed on cancellation with download window
  - No training on user data, no selling, no third-party access
- "Questions? Email support@memstalker.com"
- Link back to home

---

## Page Design: `/terms`

Coming soon page with:
- "Terms of Service — Coming Soon" heading
- "We're preparing our terms of service. In the meantime, email support@memstalker.com with any questions."
- Link back to home

---

## Assets

No real screenshots used — all visuals are CSS/React mockup components with generic placeholder content (no PII). This includes:
- MCP connector config mockup (shows "Claude Code", "Gemini", etc. with generic connection status)
- Custom GPT mockup (shows "My Brain GPT" with generic KB connection)
- GPT auth setup mockup (shows API key configuration flow)

These are built as reusable components in `components/docs/`.

---

## Technical Decisions

- **No markdown library needed** — docs content will be JSX/TSX components, matching the landing page styling. This avoids adding dependencies and gives full control over the dark theme styling.
- **Single page with anchor sections** — simpler than multi-page routing, good enough for this amount of content. Sidebar nav uses hash anchors to scroll.
- **Images optimized with Next.js `<Image />`** — automatic optimization, lazy loading.
- **Responsive sidebar** — collapses to horizontal scroll nav or hamburger on mobile (< md breakpoint).

---

## Files to Create

| File | Purpose |
|------|---------|
| `app/docs/layout.tsx` | Docs layout with sidebar + main content area |
| `app/docs/page.tsx` | Docs page composing all section components |
| `app/privacy/page.tsx` | Privacy coming soon page |
| `app/terms/page.tsx` | Terms coming soon page |
| `components/docs/DocsSidebar.tsx` | Sticky sidebar navigation (horizontal scroll on mobile) |
| `components/docs/DocsSection.tsx` | Reusable section wrapper with anchor ID |
| `components/docs/ArchitectureDiagram.tsx` | Inline React/CSS architecture diagram |
| `components/docs/HeroSection.tsx` | "One brain. Every AI." hero with mockup visuals |
| `components/docs/GettingStarted.tsx` | Three-path getting started cards |
| `components/docs/ConnectClaude.tsx` | Claude Code setup section |
| `components/docs/ConnectCodexGemini.tsx` | Codex/Gemini setup section |
| `components/docs/ConnectChatGPT.tsx` | ChatGPT Custom GPT setup with CSS mockups |
| `components/docs/MockupScreenshots.tsx` | Reusable CSS mockup components (MCP config, GPT page, auth flow) |
| `components/docs/MCPToolsReference.tsx` | 16 MCP tools table |
| `components/docs/RestAPI.tsx` | REST API endpoints table |
| `components/docs/CLIReference.tsx` | CLI commands table |
| `components/docs/FileTypes.tsx` | Supported file types table |

Each section component is independently editable and keeps `page.tsx` under 50 lines.

## Files to Modify

| File | Change |
|------|--------|
| `components/Footer.tsx` | Fix Twitter to @ShawnDanCap, add support@memstalker.com |
| `components/Navbar.tsx` | Change Docs href to `/docs` |
