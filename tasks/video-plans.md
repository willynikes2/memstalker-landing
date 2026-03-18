# Memstalker Multi-Agent Demo Video Plans

---

## VIDEO 1: 60-Second Twitter/Reddit Clip

**Format:** Screen recording, 3 terminals side-by-side, dark theme, no audio required
**Caption style:** White text, bottom-center, 2-line max, slight dark backdrop
**Resolution:** 1920x1080 (renders to 1080x1080 for Twitter/Reddit, or 1920x1080 for YouTube Shorts vertical crop)

---

### Scene 1 — The Setup (0:00 - 0:07)

**On screen:** Single terminal, dark background. User types a command.

```
$ memstalker status

  Memstalker v1.0.3
  KB: brain.cutdacord.app
  Documents: 847 indexed
  Agents connected: 3
    ├── claude-code   (last sync: 2s ago)
    ├── codex-cli     (last sync: 4s ago)
    └── gemini-cli    (last sync: 3s ago)
```

**Caption:** `What if 3 AI agents shared one brain?`

---

### Scene 2 — The Prompt (0:07 - 0:14)

**On screen:** Same terminal. User sends a task to all 3 agents simultaneously.

```
$ memstalker dispatch --all "Refactor the auth middleware.
  Current pattern is in the KB under sessions/2026-03-12-auth-refactor.md.
  Propose a new implementation using refresh token rotation."

  Dispatching to 3 agents...
  ├── claude-code   ✓ received
  ├── codex-cli     ✓ received
  └── gemini-cli    ✓ received
```

**Caption:** `Same prompt. Same context. 3 different AIs.`

---

### Scene 3 — Three Terminals Working (0:14 - 0:24)

**On screen:** Screen splits into 3 terminals side-by-side.
- Left: `claude-code` (green accent)
- Center: `codex-cli` (blue accent)
- Right: `gemini-cli` (yellow accent)

Each shows the agent pulling from KB, then typing out its approach. Text appears progressively (typewriter effect, fast).

**Left terminal (Claude Code):**
```
[claude-code] Reading KB...
  ✓ Found: sessions/2026-03-12-auth-refactor.md
  ✓ Found: lessons/jwt-refresh-patterns.md
  ✓ Found: fixes/token-expiry-race-condition.md

Approach: Middleware chain pattern
- Separate token validation from refresh logic
- Use async middleware pipeline
- Add token fingerprinting to prevent replay
- Estimated: 4 files changed
```

**Center terminal (Codex CLI):**
```
[codex-cli] Reading KB...
  ✓ Found: sessions/2026-03-12-auth-refactor.md
  ✓ Found: operational/docker-auth-service.md

Approach: Service extraction pattern
- Extract auth into standalone microservice
- gRPC for token validation (< 2ms latency)
- Redis-backed token blacklist
- Estimated: new service + 2 files changed
```

**Right terminal (Gemini CLI):**
```
[gemini-cli] Reading KB...
  ✓ Found: sessions/2026-03-12-auth-refactor.md
  ✓ Found: research/oauth2-best-practices.md

Approach: Edge-first validation
- Validate tokens at the CDN/edge layer
- Short-lived access tokens (5min)
- Sliding window refresh with jitter
- Estimated: 3 files + edge config
```

**Caption:** `Each AI reads the same KB. Each proposes a different solution.`

---

### Scene 4 — The Merge (0:24 - 0:34)

**On screen:** The 3 terminals slide/compress to the top third. A new, larger terminal appears below them.

```
$ memstalker merge --task auth-refactor

  Analyzing 3 proposals...

  [merge-agent] Combining approaches:

  FROM claude-code:  ✓ Middleware chain pattern (clean separation)
  FROM codex-cli:    ✓ Redis token blacklist (instant revocation)
  FROM gemini-cli:   ✓ Short-lived tokens + sliding refresh (security)

  REJECTED:
  FROM codex-cli:    ✗ Microservice extraction (over-engineered for current scale)
  FROM gemini-cli:   ✗ Edge validation (requires CDN config not in current infra)
```

**Caption:** `A merge agent picks the best parts from each.`

---

### Scene 5 — The Result (0:34 - 0:44)

**On screen:** The merged terminal continues, showing the combined output.

```
  MERGED SOLUTION:
  ┌─────────────────────────────────────────────┐
  │  Async middleware chain (Claude)             │
  │  + Redis token blacklist (Codex)             │
  │  + 5-min access tokens w/ sliding refresh    │
  │    (Gemini)                                  │
  │                                              │
  │  Files: auth.middleware.ts                   │
  │         token.service.ts                     │
  │         redis.blacklist.ts                   │
  │         auth.config.ts                       │
  │                                              │
  │  Security: replay protection + instant       │
  │            revocation + short token window    │
  └─────────────────────────────────────────────┘

  Quality score: Better than any single proposal.
```

**Caption:** `The merged result is better than any single AI could produce.`

---

### Scene 6 — Saved to KB (0:44 - 0:50)

**On screen:** The terminal shows the result being saved back.

```
  Saving to knowledge base...

  ✓ Written: sessions/2026-03-18-auth-refactor-v2.md
  ✓ Written: fixes/token-rotation-pattern.md
  ✓ KB updated: 849 documents indexed

  Next time ANY agent works on auth, they'll have this.
```

**Caption:** `Saved back to the KB. Every future AI session starts smarter.`

---

### Scene 7 — The Loop (0:50 - 0:55)

**On screen:** Quick animated diagram or text overlay showing the cycle:

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐
  │  Claude   │     │  Codex   │     │  Gemini  │
  └─────┬────┘     └─────┬────┘     └─────┬────┘
        │                │                │
        └───────┬────────┘────────┬───────┘
                │                 │
           ┌────▼────┐     ┌─────▼─────┐
           │  Merge  │────▶│    KB     │
           └─────────┘     └───────────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
               Claude       Codex       Gemini
              (smarter)   (smarter)   (smarter)
```

**Caption:** `3 AIs. 1 brain. Every session compounds.`

---

### Scene 8 — End Card (0:55 - 1:00)

**On screen:** Black background. Memstalker logo centered. URL below.

```
  MEMSTALKER

  Persistent memory for AI agents.

  memstalker.com
```

**Caption:** `memstalker.com — Give your AI agents a brain.`

---

### Production Notes for Video 1

- **Terminal font:** JetBrains Mono or SF Mono
- **Terminal theme:** Match the landing page (dark bg #0a0a0a, green accent #00ff41)
- **Typewriter speed:** Fast enough to feel real, slow enough to read (40-60 chars/sec)
- **Transitions:** Clean cuts or slide transitions, no flashy effects
- **Music:** None needed (autoplay). Optional: subtle ambient synth if adding sound
- **Recording tool:** Can use Remotion (already have it), or screen record with iTerm2/kitty
- **The money shot is Scene 5** — when the merged box appears showing the combined solution. Hold this frame longest.

---
---

## VIDEO 2: 3-5 Minute YouTube Deep-Dive

**Format:** Screencast with optional picture-in-picture face cam (bottom-right)
**Title:** "I Made 3 AI Agents Share One Brain. Here's What Happened."
**Alt title:** "Claude + Codex + Gemini Sharing Memory: The Multi-Agent Setup Nobody's Talking About"

---

### Thumbnail Concept

**Visual:** 3 terminal windows arranged in a fan/spread, each with a different colored border (green=Claude, blue=Codex, yellow=Gemini). All 3 have arrows pointing into a single glowing brain icon at center. Text overlay on the right side.

**Text on thumbnail:**
- Top: `3 AIs`
- Middle (large, bold): `ONE BRAIN`
- Bottom-right badge: `it actually works`

**Color scheme:** Dark background (#0a0a0a), the 3 terminal windows have subtle glow matching their agent color. The brain icon glows green (#00ff41).

---

### Script Outline

#### 0:00 - 0:30 | HOOK — The Problem

**On screen:** Single terminal, user typing to Claude.

**Voiceover/captions:**
> "Here's something that's been driving me insane. I use Claude Code for architecture, Codex for quick fixes, and Gemini for research. But none of them remember what the others did. Every time I switch models, I'm copy-pasting context like it's 2019. So I built something."

**Terminal shows:**
```
$ claude "continue the auth refactor from the Codex session"

I don't have access to previous sessions or other AI tools.
Could you provide the context you're referring to?
```

**Clip-worthy moment:** The frustration of "I don't have access to previous sessions" — relatable for every dev.

---

#### 0:30 - 1:15 | THE SETUP — Connecting 3 Agents

**On screen:** Terminal, running setup commands live.

**Voiceover/captions:**
> "Memstalker is a knowledge base server that acts as shared memory for AI agents. It runs as an MCP server — that's the Model Context Protocol that Claude, Codex, and Gemini all support now. One command per model."

**Terminal shows (run these live):**
```
$ memstalker status

  Memstalker v1.0.3
  KB endpoint: https://brain.cutdacord.app
  Documents: 847 indexed
  Storage: 124 MB
  Search: FTS5 + semantic (hybrid)

$ # Connect Claude Code
$ claude mcp add memstalker -- npx memstalker-mcp

$ # Connect Codex CLI
$ codex --mcp-config ~/.memstalker/mcp.json

$ # Connect Gemini CLI
$ gemini --mcp-config ~/.memstalker/mcp.json
```

**Voiceover/captions:**
> "Now all three are reading from the same knowledge base. 847 documents — session logs, architectural decisions, bug fixes, research notes. Everything I've ever told any AI, organized and searchable."

---

#### 1:15 - 1:45 | THE KB — What's Actually In There

**On screen:** Quick scroll through the KB dashboard or terminal listing.

**Terminal shows:**
```
$ memstalker list --recent 10

  TYPE        TITLE                                    DATE
  ─────────────────────────────────────────────────────────
  session     auth-refactor-jwt-migration               Mar 17
  fix         token-expiry-race-condition                Mar 16
  research    oauth2-refresh-token-rotation              Mar 15
  lesson      never-store-refresh-tokens-in-localstorage Mar 14
  session     api-rate-limiter-implementation            Mar 13
  fix         cors-preflight-caching-bug                 Mar 12
  idea        edge-auth-validation-concept               Mar 11
  session     database-connection-pooling                Mar 10
  research    redis-vs-memcached-token-store             Mar 09
  workflow    ci-cd-pipeline-auth-tests                  Mar 08

$ memstalker search "auth middleware"

  3 results (8ms)

  1. sessions/2026-03-12-auth-refactor.md     (score: 0.94)
     "Decided on JWT with refresh token rotation..."

  2. fixes/token-expiry-race-condition.md      (score: 0.87)
     "Race condition when access token expires during..."

  3. research/oauth2-best-practices.md         (score: 0.71)
     "RFC 6749 recommends short-lived access tokens..."
```

**Voiceover/captions:**
> "This isn't just raw chat logs. Every session gets auto-classified — sessions, fixes, research, lessons, ideas. Full-text search with FTS5 plus semantic matching. When an AI searches for 'auth middleware,' it gets exactly what it needs in 8 milliseconds."

---

#### 1:45 - 3:00 | THE DEMO — 3 Agents, 1 Problem

**On screen:** Split into 3 terminals. This is the core demo.

**Voiceover/captions:**
> "Alright, here's the actual demo. I'm going to send the same prompt to all three agents. 'Refactor the auth middleware using refresh token rotation.' They all have access to the same KB. Watch what happens."

**Step 1 (1:45 - 2:00): Dispatch the task**
```
$ memstalker dispatch --all \
  "Refactor auth middleware. Use refresh token rotation.
   Check the KB for our existing auth patterns and past decisions."

  Dispatching to 3 agents...
  ├── claude-code   ✓ received
  ├── codex-cli     ✓ received
  └── gemini-cli    ✓ received
```

**Step 2 (2:00 - 2:30): Show each agent working**

Show terminals side by side. Each agent searches the KB (show the retrieval logs), then produces its solution. Use split-screen or quick cuts between them.

**Claude Code output (left):**
```
[claude-code] kb_search("auth middleware refresh token")
  → 3 results found
  → Reading: sessions/2026-03-12-auth-refactor.md
  → Reading: fixes/token-expiry-race-condition.md

Proposal: Async Middleware Chain
─────────────────────────────
- authMiddleware.ts: Validate access token
- refreshMiddleware.ts: Handle token rotation
- tokenFingerprint.ts: Bind tokens to device
- Key insight: separate validation from refresh
  to avoid the race condition we hit on Mar 16
```

**Codex CLI output (center):**
```
[codex-cli] kb_search("token revocation blacklist")
  → 2 results found
  → Reading: research/redis-vs-memcached-token-store.md

Proposal: Redis-Backed Revocation
─────────────────────────────
- tokenBlacklist.service.ts: Redis SET with TTL
- Instant revocation on logout/password change
- O(1) lookup, auto-cleanup via TTL expiry
- Key insight: Redis chosen over Memcached per
  our Mar 9 research (persistence + pub/sub)
```

**Gemini CLI output (right):**
```
[gemini-cli] kb_search("oauth2 token lifetime best practice")
  → 2 results found
  → Reading: research/oauth2-best-practices.md
  → Reading: lessons/never-store-refresh-tokens-in-localstorage.md

Proposal: Short-Lived Token Strategy
─────────────────────────────
- 5-minute access tokens (per RFC 6749)
- Sliding window refresh with random jitter
- HttpOnly secure cookies (never localStorage!)
- Key insight: localStorage lesson from Mar 14
  directly informed this — KB paid for itself
```

**Voiceover/captions:**
> "Look at this. Claude focused on the middleware architecture and caught a race condition from a previous session. Codex went deep on revocation infrastructure, pulling from a Redis research doc we wrote 9 days ago. And Gemini nailed the token lifetime strategy, referencing an OAuth RFC and a lesson we learned the hard way about localStorage. Three completely different angles. All informed by shared context."

**Step 3 (2:30 - 3:00): The Merge -- THE MONEY SHOT**

**On screen:** 3 terminals compress up. New large terminal below.

```
$ memstalker merge --task auth-refactor

  ┌─ MERGE ANALYSIS ────────────────────────────────┐
  │                                                  │
  │  ACCEPTED:                                       │
  │  ✓ Async middleware chain (claude-code)           │
  │    → Clean separation of concerns                │
  │  ✓ Redis token blacklist (codex-cli)              │
  │    → Instant revocation, proven in our stack     │
  │  ✓ 5-min tokens + HttpOnly cookies (gemini-cli)   │
  │    → Follows RFC + our own localStorage lesson   │
  │                                                  │
  │  REJECTED:                                       │
  │  ✗ Token fingerprinting (claude-code)             │
  │    → Adds complexity, not needed with 5-min TTL  │
  │  ✗ Microservice extraction (codex-cli)            │
  │    → Over-engineered for current traffic         │
  │                                                  │
  │  MERGED IMPLEMENTATION:                          │
  │  ──────────────────────                          │
  │  auth.middleware.ts    ← async chain (Claude)    │
  │  refresh.middleware.ts ← sliding window (Gemini) │
  │  blacklist.service.ts  ← Redis SET+TTL (Codex)  │
  │  auth.config.ts        ← 5min access, HttpOnly  │
  │                                                  │
  │  Security coverage:                              │
  │  • Token theft → 5-min window limits damage      │
  │  • Session hijack → instant Redis revocation     │
  │  • XSS → HttpOnly cookies (no JS access)         │
  │  • Race conditions → separated middleware chain  │
  │                                                  │
  │  No single agent produced this.                  │
  │  The merged version covers 4 attack vectors.     │
  │  Each individual proposal covered 1-2.           │
  └─────────────────────────────────────────────────┘
```

**Voiceover/captions:**
> "And here's the merge. The system takes the best from each proposal and rejects what doesn't fit. Claude's clean architecture, Codex's Redis blacklist, Gemini's token strategy. But look at the bottom — the merged version covers four attack vectors. Each individual agent only covered one or two. This is the whole point. The merged output is objectively better than any single AI could produce."

**This is THE money shot.** Hold on this frame for 5+ seconds. Let it sink in.

---

#### 3:00 - 3:30 | THE LOOP — Saving Back

**On screen:** Terminal showing save operation.

```
$ memstalker save --from-merge auth-refactor

  Writing to knowledge base...

  ✓ sessions/2026-03-18-auth-refactor-v2.md
    (full merged proposal + reasoning)
  ✓ fixes/token-rotation-implementation.md
    (reusable pattern for future auth work)
  ✓ lessons/multi-agent-auth-review.md
    (what each agent caught that others missed)

  KB: 850 documents indexed

  Next time ANY agent touches auth code,
  they'll see this merged solution first.
```

**Voiceover/captions:**
> "And it saves back. Three new documents in the KB. Next time any of my agents — Claude, Codex, or Gemini — works on auth, they'll pull from this merged solution. The system gets smarter every cycle."

---

#### 3:30 - 4:00 | THE PROOF — Next Session

**On screen:** New terminal session. Different day simulation.

```
$ claude "I need to add OAuth2 to the billing service"

[claude-code] kb_search("auth oauth2 implementation")
  → Found: sessions/2026-03-18-auth-refactor-v2.md (score: 0.96)

  I found our merged auth implementation from the multi-agent
  review on March 18. I'll use the same pattern:

  - Async middleware chain for clean separation
  - Redis blacklist for instant token revocation
  - 5-minute access tokens with sliding refresh
  - HttpOnly cookies (we learned the localStorage lesson)

  Applying to billing service...
```

**Voiceover/captions:**
> "Two days later. I ask Claude about OAuth for a different service. It immediately finds the merged solution and applies the same pattern. No copy-paste. No re-explaining. It just knows. And this is the thing that changes how you work with AI — it compounds."

---

#### 4:00 - 4:30 | CLOSE — CTA

**On screen:** Terminal with memstalker.com, then transition to end card.

**Voiceover/captions:**
> "Memstalker is open source. Self-host it free, or use the hosted version at memstalker.com. First 500 signups get Pro pricing locked at $12 a month forever. Link in the description."

**End card (hold 10 seconds):**
```
  MEMSTALKER

  Persistent memory for AI agents.
  3 AIs. 1 brain. Every session compounds.

  memstalker.com

  GitHub: github.com/memstalker/memstalker
```

---

### Clip-Worthy Moments (for YouTube Shorts / Twitter reposts)

1. **"The Frustration" (0:00-0:30):** Claude saying "I don't have access to previous sessions" — every dev relates
2. **"The KB Search" (1:15-1:45):** 8ms search across 847 docs — speed flex
3. **"3 Different Solutions" (2:00-2:30):** Side-by-side showing 3 different approaches — visual impact
4. **"The Money Shot" (2:30-3:00):** Merge result covering 4 attack vectors vs 1-2 each — the "holy shit" moment
5. **"The Proof" (3:30-4:00):** Next session automatically using merged knowledge — the compound effect

---

### Production Checklist

- [ ] Terminal emulator: kitty or iTerm2 with JetBrains Mono
- [ ] Color scheme: match memstalker.com (bg #0a0a0a, accent #00ff41)
- [ ] Agent colors: Claude=green, Codex=blue, Gemini=yellow
- [ ] Screen recording: OBS or ScreenFlow
- [ ] Face cam (optional): Good lighting, neutral background
- [ ] Captions: Auto-generate then hand-edit for accuracy
- [ ] Thumbnail: Create in Figma/Canva with the 3-terminal + brain concept
- [ ] Background music: Lo-fi or ambient synth, low volume
- [ ] Total runtime target: 4:00-4:30 (tight, no filler)
- [ ] Export: 1080p60 for YouTube, 1080x1080 for Twitter/Reddit clip
