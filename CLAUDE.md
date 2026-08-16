# supermu-website

Marketing site for **supermu** (https://supermu.app) — a persistent development
workspace for AI coding agents and terminals. The site must never claim more
than the runtime has actually shipped.

Machine-specific dev setup (ports, proxy, service management) lives in
`CLAUDE.local.md` (gitignored).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript
- Single landing page in `app/page.tsx`
- Waitlist: `app/components/WaitlistForm.tsx` submits to **Netlify Forms**
  (form `waitlist`, defined statically in `public/__forms.html` for build-time
  detection). Submissions are only captured on Netlify — not in local dev.
- Hosted on Netlify; DNS via Cloudflare.

```bash
npm run dev    # next dev -p 3027
npm run build
npm run lint
```

## Positioning rules (agreed 2026-08-14, revised same day after site review)

- Lead with the user problem (persistent AI coding sessions), never with
  architecture jargon (holders, PTYs, MCP, fabric) above the fold.
- Category phrase: **"a persistent workspace for humans and AI coding agents"**
  (hero + metadata). The older "persistent development workspace" is retired.
- Homepage story is four core capabilities, everything else supports them:
  never lose the session · one workspace · attention (has its own full
  section, #attention) · real terminal takeover. Architecture detail lives on
  **/architecture**; the homepage keeps only the short "why sessions survive"
  summary + link.
- Roadmap arc (updated 2026-08-16, runtime Phase 9 complete): **sessions
  survive (NOW) · agents work together (NOW) → workspace follows you (NEXT:
  native clients; the runtime's remote approval gate ADR-0015 is live) → one
  workspace across machines (LATER — the fabric brief, still unscheduled)**.
- **Tense policy (relaxed pre-launch, per Alexander 2026-08-14):** features
  that are built-to-plan and near may be written in confident present tense
  even if not fully shipped ("slight overpromise" is OK while unlaunched).
  Exception: **/security stays strictly honest** — its candour is the
  differentiator; never overpromise there.
- The MCP gateway is **live** (runtime 8e + Phase 9, 13 tools, ADR-0012): the
  #agent-api section is present tense with a "live" badge. Tool names shown in
  mocks must match the real surface (session_inspect, session_tail,
  attention_create, task_verify, message_send, …) — check the runtime CLAUDE.md
  "MCP tool surface" section before editing them.
- Keep local-first / no-cloud / real-CLIs-not-API-wrappers visible — it's a
  differentiator vs cloud agent platforms. Never make provider-pricing claims
  ("no per-token billing" is banned); say supermu runs the real CLI with your
  existing login rather than proxying model calls through a supermu API.
- CLI examples use **`supermu`** — the binary answers to both `supermu` and
  `mux`, and the site teaches the branded form (decided 2026-08-14). Don't mix
  the two in mocks.
- Security page (/security) follows ADR-0010's rule: never present permissions,
  budgets, or pause as containment — only the opt-in sandbox is containment.
