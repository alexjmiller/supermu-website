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
- Roadmap arc: **your sessions survive (NOW) → your workspace follows you
  (NEXT: native clients + remote) → your agents work together (LATER)**, with
  the multi-machine fabric (runtime docs/future/distributed-runtime-fabric.md —
  unscheduled V2) as a future-tense vision line only, never a roadmap card.
- **Tense policy (relaxed pre-launch, per Alexander 2026-08-14):** features
  that are built-to-plan and near may be written in confident present tense
  even if not fully shipped ("slight overpromise" is OK while unlaunched).
  Exception: **/security stays strictly honest** — its candour is the
  differentiator; never overpromise there.
- Keep local-first / no-cloud / real-CLIs-not-API-wrappers visible — it's a
  differentiator vs cloud agent platforms. Never make provider-pricing claims
  ("no per-token billing" is banned); say supermu runs the real CLI with your
  existing login rather than proxying model calls through a supermu API.
- CLI examples use **`supermu`** — the binary answers to both `supermu` and
  `mux`, and the site teaches the branded form (decided 2026-08-14). Don't mix
  the two in mocks.
- Security page (/security) follows ADR-0010's rule: never present permissions,
  budgets, or pause as containment — only the opt-in sandbox is containment.
