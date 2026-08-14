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

## Positioning rules (agreed 2026-08-14)

- Lead with the user problem (persistent AI coding sessions), never with
  architecture jargon (holders, PTYs, MCP, fabric) above the fold.
- Category phrase: **"persistent development workspace"** on the homepage.
- Product story progression: **persistent first → AI-native second → distributed later.**
  Do not claim multi-machine / remote access / agent coordination as shipped —
  they belong in the NEXT / LATER roadmap cards only.
- Keep local-first / no-cloud / real-CLIs-not-API-wrappers visible — it's a
  differentiator vs cloud agent platforms.
- The MCP agent-API section (#agent-api) must keep its "in design" badge until
  the gateway actually ships (runtime Phase 8–9, ADR-0012). Scheduled sessions
  (#schedules) are shipped (ADR-0008) and may be present-tense — but a scheduled
  agent leaving tasks *for another agent* is coordination-phase future tense.
- Security page (/security) follows ADR-0010's rule: never present permissions,
  budgets, or pause as containment — only the opt-in sandbox is containment.
