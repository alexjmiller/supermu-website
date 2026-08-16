import WaitlistForm from "./components/WaitlistForm";
import { SiteNav, SiteFooter } from "./components/SiteChrome";

function TerminalMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-line-bright bg-surface shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="size-3 rounded-full bg-term-red/70" />
        <span className="size-3 rounded-full bg-accent/70" />
        <span className="size-3 rounded-full bg-term-green/70" />
        <span className="ml-3 font-mono text-xs text-faint">supermu — acme</span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
        <p>
          <span className="text-term-green">$</span> supermu session list
        </p>
        <p className="mt-2 whitespace-nowrap text-faint">
          NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ATTENTION
        </p>
        <p className="whitespace-nowrap">
          <span className="text-term-violet">claude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          agent&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-term-green">running</span>&nbsp;&nbsp;&nbsp;
          <span className="text-accent attention-pulse">●</span>
          <span className="text-accent">&nbsp;approval</span>
        </p>
        <p>
          <span className="text-term-blue">tests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          shell&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-term-green">running</span>
        </p>
        <p>
          <span className="text-term-blue">dev-server&nbsp;&nbsp;</span>
          process&nbsp;&nbsp;<span className="text-term-green">running</span>
        </p>
        <p>
          <span className="text-term-violet">codex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          agent&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted">paused</span>
        </p>
        <p className="mt-3">
          <span className="text-term-green">$</span> supermu attach acme-api claude
        </p>
        <p className="text-muted">
          » reattached — 2h 14m of history, nothing lost
          <span className="cursor-blink text-foreground">▍</span>
        </p>
      </div>
    </div>
  );
}

function AttentionMock() {
  return (
    <div className="self-center overflow-hidden rounded-xl border border-line-bright bg-background shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="text-accent attention-pulse font-mono text-xs">●</span>
        <span className="font-mono text-xs text-faint">attention — 2 items need you</span>
      </div>
      <div className="divide-y divide-line">
        <div className="flex items-start justify-between gap-6 p-5">
          <div>
            <p className="font-mono text-xs text-accent">● approval required</p>
            <p className="mt-1 text-sm font-medium">Run the database migration on staging?</p>
            <p className="mt-1 font-mono text-xs text-faint">claude · acme-api · 4m ago</p>
          </div>
          <span className="shrink-0 rounded-lg border border-accent-dim px-3 py-1.5 font-mono text-xs text-accent">
            review →
          </span>
        </div>
        <div className="flex items-start justify-between gap-6 p-5">
          <div>
            <p className="font-mono text-xs text-term-violet">● question</p>
            <p className="mt-1 text-sm font-medium">Keep the existing auth flow, or replace it?</p>
            <p className="mt-1 font-mono text-xs text-faint">codex · website · 11m ago</p>
          </div>
          <span className="shrink-0 rounded-lg border border-line-bright px-3 py-1.5 font-mono text-xs text-muted">
            answer →
          </span>
        </div>
        <div className="p-5">
          <p className="font-mono text-xs text-faint">
            3 other sessions running quietly — nothing needs you
          </p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Never lose the session",
    body: "Start Claude Code, Codex, a shell, tests, or a dev server and leave them running. Close the client, drop the connection, even restart the runtime — reconnect later and continue exactly where you left off.",
  },
  {
    title: "One workspace for everything",
    body: "Group shells, agents, builds, logs, and services around a project instead of juggling terminal windows and tmux sessions. The whole project's activity in one addressable place.",
  },
  {
    title: "Know when an agent needs you",
    body: "Working, waiting, blocked, approval required, finished — session states you can see at a glance instead of terminals you have to reread. Triage the ones that need you; ignore the rest.",
  },
  {
    title: "Take over any session",
    body: "Every agent runs in a real terminal you can open. Step in, interact with Claude Code or any CLI directly, then step back out. Supervision and hands-on-keyboard are the same session.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <SiteNav />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-5 inline-block rounded-full border border-line-bright bg-surface px-3 py-1 font-mono text-xs text-muted">
                <span className="mr-2 text-term-green">●</span>In development — local-first, written in Rust
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
                Your AI coding sessions should outlive{" "}
                <span className="text-accent">your terminal.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                supermu is a persistent workspace for humans and AI coding
                agents. Run Claude Code, Codex, shells, and development
                processes as durable sessions — close your terminal, reconnect
                later, and everything is still there, still working, still
                yours.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#early-access"
                  className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Join the early access
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-lg border border-line-bright px-6 py-3 font-medium text-foreground transition-colors hover:border-accent-dim hover:text-accent"
                >
                  How it works
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <TerminalMock />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              AI coding tools keep getting more capable.
              <span className="text-muted"> The terminal they live in is still temporary.</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Close a window and the session is gone. Run three agents at once
                and your day becomes tab-checking: which one is thinking, which is
                stuck waiting for an answer, which died when the connection
                dropped. Move between machines and the whole workflow falls apart.
              </p>
              <p>
                Terminals were built around interactive processes — you type, it
                responds, you watch. AI coding agents increasingly run for minutes
                or hours without you, and that work needs a durable identity,
                state, and a place — not a window. Even multiplexers like tmux,
                which keep processes alive, know nothing about what runs inside
                them: they can&apos;t tell you an agent is waiting on an approval.
              </p>
              <p className="text-foreground">
                supermu gives that work a home: persistent, named sessions in a
                workspace — organised, observable, and ready to resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A workspace, not a window
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-bright"
              >
                <h3 className="font-mono text-sm font-semibold text-accent">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-line bg-surface px-6 py-5">
            <p className="font-mono text-sm font-semibold">
              Local-first by design. <span className="text-accent">Honest about authority.</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Everything lives on your machine in SQLite — no cloud account, no
              telemetry. supermu runs the real Claude Code, Codex, or Gemini CLI
              with the login you already have, rather than proxying model calls
              through a supermu API. And where actual containment matters, it
              uses OS-level sandboxing — not security theatre.{" "}
              <a href="/security" className="text-accent hover:underline">
                Read the security model →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Attention */}
      <section id="attention" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Stop watching agents work.
                <span className="text-accent"> supermu tells you when one actually needs you.</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  Agents can run for hours. You shouldn&apos;t have to watch their
                  terminals for hours. Waiting for input, blocked on an approval,
                  asking a question, failed, finished — supermu tracks those
                  states per session and raises the moments that need a human as
                  attention items, instead of leaving them buried in scrollback.
                </p>
                <p>
                  And it&apos;s deliberate about when it interrupts: an approval
                  prompt only becomes an attention item if nobody is watching
                  that session, and it&apos;s withdrawn the moment you attach.
                  Work stays running, and you triage a short queue instead of
                  patrolling terminal tabs wondering which agent stalled forty
                  minutes ago.
                </p>
                <p>
                  Attention doesn&apos;t just notify — it gates. A risky agent
                  action can block until you approve or deny it, with everything
                  else intact. That&apos;s why native clients are next on the
                  roadmap: the decision already works remotely, and the apps put
                  it in your pocket.
                </p>
              </div>
            </div>
            <AttentionMock />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            For developers with more AI sessions than they can
            <span className="text-muted"> comfortably keep track of.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            If Claude Code stays open all day, you run several agents in
            parallel, or your terminal windows have quietly become a makeshift
            agent dashboard — supermu is for you. The same workspace scales from
            one developer&apos;s repos and dev servers to a team&apos;s first
            experiments with agent-driven development.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why sessions survive
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <p className="leading-relaxed text-muted">
              Persistence is architecture, not session restore. Every session is
              owned by a tiny, independent holder process that holds the real
              terminal. The coordinator — the daemon that keeps the map — can
              restart at any moment. Clients can disappear. The terminal stays
              alive through all of it, because nothing that can die owns it.
            </p>
            <div className="space-y-3 font-mono text-sm text-muted">
              <p><span className="text-faint">clients</span> — stateless windows, safe to close</p>
              <p><span className="text-faint">coordinator</span> — restartable brain, all state in SQLite</p>
              <p><span className="text-faint">holders</span> — own the terminals, outlive everything above</p>
              <p className="pt-2 text-sm">
                <a href="/architecture" className="text-accent hover:underline">
                  Read how supermu works →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent API / MCP */}
      <section id="agent-api" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 inline-block rounded-full border border-line-bright bg-surface px-3 py-1 font-mono text-xs text-term-green">
            live — every agent session gets its own scoped gateway
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Terminals give agents a screen.
            <span className="text-accent"> supermu gives them an API.</span>
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                An agent shouldn&apos;t have to read another terminal the way a
                human stares at a screen. Everything in supermu is an addressable
                session behind one control API, and the workspace is exposed to
                agents as structured capabilities: inspect a session, read test
                results, hand off work, raise a question.
              </p>
              <p>
                Those capabilities arrive through the Model Context Protocol,
                which Claude Code and other agent CLIs already speak — each
                agent session gets its own gateway, wired in automatically. MCP
                is the plumbing, though; the idea is the structured workspace
                behind it, and it opens ways of working no terminal offers:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  An agent tails the test session and starts fixing failures —
                  no copy-pasting output between windows.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  A manager agent hands work to another and gets back a
                  completion with evidence — verified by an agent that
                  didn&apos;t do the work.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  An agent with a question raises it as an attention item that
                  reaches you, rather than burying it in scrollback.
                </li>
              </ul>
              <p>
                Every call passes the same default-deny permission engine humans
                do, authenticated with a per-session identity the agent cannot
                forge. What it observes is framed as untrusted; delegation and
                messaging need an explicitly granted capability; no agent can
                verify its own work; and runaway loops between agents are
                detected and broken. New power, same rules.
              </p>
            </div>
            <div className="overflow-hidden self-start rounded-xl border border-line-bright bg-surface shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
                <span className="size-2 rounded-full bg-term-violet" />
                <span className="font-mono text-xs text-faint">
                  mcp — session://acme-api/claude
                </span>
              </div>
              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <p className="text-faint">
                  tools: session_inspect · session_tail · attention_create ·
                  task_verify · message_send · …
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> session_tail(&quot;acme-api/tests&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">← untrusted ▸</span> FAIL auth.test.ts — 3 of 214
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> message_send(&quot;acme-api/codex&quot;,
                  &quot;fix the 3 auth failures&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">←</span> delivered · sender: claude
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> attention_create(question,
                  &quot;token TTL: 15m or 30m?&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">←</span> raised · waiting on you
                  <span className="cursor-blink text-foreground">▍</span>
                </p>
              </div>
            </div>
          </div>

          {/* Scheduled work — compact */}
          <div id="schedules" className="mt-14 rounded-xl border border-line bg-surface p-8">
            <h3 className="text-xl font-semibold tracking-tight">
              Work doesn&apos;t have to start when you open a terminal
            </h3>
            <div className="mt-4 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-muted">
                The schedule engine is already in the runtime: any session —
                including an agent — can spin up at a set time, do its job, and
                exit. Sessions are persistent and recorded, so &ldquo;finished&rdquo;
                doesn&apos;t mean &ldquo;gone&rdquo;: the transcript is kept, budgets bound what
                unattended work can spend, and anything that needs a human
                becomes an attention item waiting for you.
              </p>
              <div className="text-sm leading-relaxed text-muted">
                <p className="overflow-x-auto rounded-lg border border-line bg-background px-4 py-3 font-mono text-xs">
                  <span className="text-term-green">$</span> supermu schedule create acme-api triage --cron &quot;0 0 7 * * *&quot; \<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;--session triage -- claude &quot;triage overnight CI&quot;
                </p>
                <p className="mt-3 text-sm">
                  A scheduled check-in can leave a task for another agent as
                  easily as it raises one for you — the night shift queueing up
                  work for the day shift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap / product story */}
      <section id="roadmap" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Persistent and cooperative today. Portable next. Distributed later.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The core runtime works today. What&apos;s built on top of it arrives in
            order — and we&apos;ll only ever claim the part that ships.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-term-green/30 bg-background p-6">
              <p className="font-mono text-xs font-semibold text-term-green">NOW</p>
              <h3 className="mt-2 text-lg font-semibold">Your sessions survive</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Shells, agents, and processes that survive disconnects and
                runtime restarts, organised into workspaces, with schedules,
                budgets, and a first-class attention queue — driven from the
                reference CLI.
              </p>
            </div>
            <div className="rounded-xl border border-term-green/30 bg-background p-6">
              <p className="font-mono text-xs font-semibold text-term-green">NOW</p>
              <h3 className="mt-2 text-lg font-semibold">Your agents work together</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Manager agents delegate to workers with full provenance, work is
                verified by an agent that didn&apos;t do it, each agent can run
                in its own git worktree, and loop-breakers stop runaway
                back-and-forth — all through the live agent API.
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-background p-6">
              <p className="font-mono text-xs font-semibold text-accent">NEXT</p>
              <h3 className="mt-2 text-lg font-semibold">Your workspace follows you</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Native Mac and iPhone apps over secure device pairing. The
                runtime&apos;s remote approval gate already works — the apps put
                triage and approval in your pocket, not just at your desk.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-background p-6">
              <p className="font-mono text-xs font-semibold text-term-violet">LATER</p>
              <h3 className="mt-2 text-lg font-semibold">One workspace across machines</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Sessions living on the machines where they belong — your Mac, a
                devbox, a build server — appearing in a single workspace,
                without every host becoming another SSH window to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early access */}
      <section id="early-access" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Your agents can keep working.
              <span className="text-muted"> You don&apos;t have to keep watching.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Early access opens with the Mac app. Leave an email and you&apos;ll hear
              from us exactly once when there&apos;s something worth running — no
              newsletter, no drip campaign.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
