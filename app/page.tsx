import WaitlistForm from "./components/WaitlistForm";
import { SiteNav, SiteFooter } from "./components/SiteChrome";

function TerminalMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-line-bright bg-surface shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="size-3 rounded-full bg-term-red/70" />
        <span className="size-3 rounded-full bg-accent/70" />
        <span className="size-3 rounded-full bg-term-green/70" />
        <span className="ml-3 font-mono text-xs text-faint">mux — acme</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <p>
          <span className="text-term-green">$</span> mux session list
        </p>
        <p className="mt-2 text-faint">
          WORKSPACE&nbsp;&nbsp;SESSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KIND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ATTENTION
        </p>
        <p>
          <span className="text-muted">acme-api&nbsp;&nbsp;&nbsp;</span>
          <span className="text-term-violet">claude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          agent&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-term-green">running</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-accent attention-pulse">●</span>
          <span className="text-accent"> approval required</span>
        </p>
        <p>
          <span className="text-muted">acme-api&nbsp;&nbsp;&nbsp;</span>
          <span className="text-term-blue">tests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          shell&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-term-green">running</span>
        </p>
        <p>
          <span className="text-muted">acme-api&nbsp;&nbsp;&nbsp;</span>
          <span className="text-term-blue">dev-server&nbsp;&nbsp;</span>
          process&nbsp;&nbsp;<span className="text-term-green">running</span>
        </p>
        <p>
          <span className="text-muted">writing&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="text-term-violet">codex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          agent&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted">paused</span>
        </p>
        <p className="mt-3">
          <span className="text-term-green">$</span> mux attach acme-api/claude
        </p>
        <p className="text-muted">
          » reattached — 2h 14m of history, session never stopped
          <span className="cursor-blink text-foreground">▍</span>
        </p>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Persistent sessions",
    body: "Start Claude Code, Codex, a shell, tests, or a dev server and leave them running. Close the client, drop the connection, even restart the runtime — reconnect later and continue exactly where you left off.",
  },
  {
    title: "AI agents are first-class",
    body: "Coding agents aren't sidebars or disposable chats. They're named, persistent sessions with state, activity, and history — plus schedules, budgets, and pause-not-kill runaway control, so autonomy has limits you set.",
  },
  {
    title: "One workspace for everything",
    body: "Group shells, agents, builds, logs, and services around a project instead of juggling terminal windows and tmux sessions. The whole project's activity in one addressable place.",
  },
  {
    title: "Take over any session",
    body: "Every agent runs in a real terminal you can open. Step in, interact with Claude Code or any CLI directly, then step back out. Supervision and hands-on-keyboard are the same session.",
  },
  {
    title: "Know what needs attention",
    body: "See which agents are working, waiting, blocked, finished, or asking for a decision — instead of watching multiple terminals scroll. Triage the ones that need you; ignore the rest.",
  },
  {
    title: "The real CLIs, not a wrapper",
    body: "Use the normal Claude Code, Codex, or Gemini login and subscription you already have. supermu supervises the real CLI process rather than replacing it — no API keys, no per-token billing.",
  },
];

const audience = [
  {
    title: "Heavy agent users",
    body: "Solo developers running Claude Code or Codex as a core part of every working day.",
  },
  {
    title: "Multi-repo engineers",
    body: "Engineers keeping several repositories, dev servers, and long-running environments alive at once.",
  },
  {
    title: "Technical founders",
    body: "People who want agents making progress while they're in meetings, on other tasks, or asleep.",
  },
  {
    title: "Agent-led teams",
    body: "Teams starting to experiment with agent-driven development and needing one place to see it all.",
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
          <p className="mb-5 inline-block rounded-full border border-line-bright bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="mr-2 text-term-green">●</span>In development — local-first, written in Rust
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Your AI coding sessions should outlive{" "}
            <span className="text-accent">your terminal.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            supermu is a persistent development workspace for Claude Code, Codex,
            shells, and long-running dev sessions. Start work, detach, reconnect,
            and keep going — without rebuilding your environment or losing track
            of what your agents are doing.
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
          <div className="mt-16 max-w-3xl">
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
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
                Terminal multiplexers keep processes alive, but they know nothing
                about what runs inside them. They can&apos;t tell you an agent needs an
                approval, and they were never designed for work that runs for
                hours without you.
              </p>
              <p className="text-foreground">
                supermu turns those sessions into persistent, named parts of a
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-10 rounded-xl border border-line bg-surface px-6 py-4 text-center font-mono text-xs text-faint">
            local-first · everything on your machine, in SQLite · no cloud account · no telemetry ·{" "}
            <a href="/security" className="text-accent hover:underline">
              read the security model →
            </a>
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            For developers whose AI sessions became part of the working
            environment<span className="text-muted"> — not occasional chats.</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div key={a.title} className="rounded-xl border border-line bg-background p-6">
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why sessions survive
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Persistence isn&apos;t a feature bolted on top — it&apos;s the process
            architecture. Three roles, each allowed to fail independently.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-faint">01 · the brain</p>
              <h3 className="mt-2 text-lg font-semibold">Coordinator</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                One daemon keeps the map: workspaces, sessions, activity, budgets,
                schedules — all persisted to SQLite. It can be killed and
                restarted at any moment without a single session noticing.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-faint">02 · the muscle</p>
              <h3 className="mt-2 text-lg font-semibold">Holders</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Each session gets a deliberately boring little process that owns
                its terminal. Holders detach at spawn, survive the coordinator&apos;s
                death, and are re-adopted when it comes back.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-faint">03 · the windows</p>
              <h3 className="mt-2 text-lg font-semibold">Clients</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                CLI today, native Mac and iPhone apps next — all stateless views
                over one versioned protocol. If closing a client could destroy
                work, the architecture would be wrong. It can&apos;t, so it isn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent API / MCP */}
      <section id="agent-api" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 inline-block rounded-full border border-line-bright bg-background px-3 py-1 font-mono text-xs text-term-violet">
            in design — ships with the agent-coordination phase
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Terminals give agents a screen.
            <span className="text-accent"> supermu gives them an API.</span>
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Everything in supermu is an addressable session behind one
                control API — so agents don&apos;t have to scrape terminal output to
                know what&apos;s going on around them. Through the Model Context
                Protocol, which Claude Code and other agent CLIs already speak,
                an agent will see the runtime the way it sees an operating
                system: the workspace it&apos;s in, the sessions beside it, what
                needs attention, and the tasks that concern it.
              </p>
              <p>That opens ways of working no terminal offers:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  An agent tails the test session and starts fixing failures —
                  no copy-pasting output between windows.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  One agent hands a task to another and collects the result,
                  instead of you replaying context between them.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-accent">→</span>
                  An agent with a question raises it as an attention item that
                  reaches you, rather than burying it in scrollback.
                </li>
              </ul>
              <p className="text-sm">
                Every such call is a thin wrapper over the same control API
                humans use — it passes the same default-deny permission engine,
                authenticated with a per-session identity the agent cannot
                forge. New power, same rules.
              </p>
            </div>
            <div className="overflow-hidden self-start rounded-xl border border-line-bright bg-background shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
                <span className="size-2 rounded-full bg-term-violet" />
                <span className="font-mono text-xs text-faint">
                  mcp — session://acme-api/claude
                </span>
              </div>
              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <p className="text-faint">
                  tools: workspace_inspect · session_tail · task_send · attention_raise
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> session_tail(&quot;acme-api/tests&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">← untrusted ▸</span> FAIL auth.test.ts — 3 of 214
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> task_send(&quot;acme-api/codex&quot;,
                  &quot;fix the 3 auth failures&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">←</span> accepted · task 018f…
                </p>
                <p className="mt-3">
                  <span className="text-term-violet">→</span> attention_raise(question,
                  &quot;token TTL: 15m or 30m?&quot;)
                </p>
                <p className="text-muted">
                  <span className="text-faint">←</span> raised · owner will be notified
                  <span className="cursor-blink text-foreground">▍</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduled work */}
      <section id="schedules" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Work that runs on a clock,
                <span className="text-muted"> not on your attention</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  The schedule engine is already in the runtime: any session —
                  including an agent — can spin up at a set time, do its job, and
                  exit. Because sessions are persistent and recorded,
                  &ldquo;finished&rdquo; doesn&apos;t mean &ldquo;gone&rdquo;: the full transcript is there
                  to inspect, and anything that needs a human becomes an
                  attention item waiting for you.
                </p>
                <p>
                  Morning CI triage, a nightly dependency check, a weekly tidy of
                  a backlog — work that happens whether or not a terminal is
                  open, on a budget you set.
                </p>
                <p className="text-sm">
                  And when the coordination phase lands, a scheduled check-in
                  will be able to leave a task for another agent as easily as it
                  raises one for you — the night shift queueing up work for the
                  day shift.
                </p>
              </div>
            </div>
            <div className="self-center overflow-hidden rounded-xl border border-line-bright bg-surface shadow-[0_24px_80px_-24px_rgb(0_0_0/0.8)]">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
                <span className="size-2 rounded-full bg-term-green" />
                <span className="font-mono text-xs text-faint">schedule — acme-api/triage</span>
              </div>
              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <p>
                  <span className="text-term-green">$</span> mux schedule create acme-api/triage
                  --daily 07:00
                </p>
                <p className="mt-3 text-faint">— next morning —</p>
                <p className="mt-3 text-muted">
                  <span className="text-faint">07:00</span> triage started · agent
                </p>
                <p className="text-muted">
                  <span className="text-faint">07:06</span> exited(0) · transcript kept
                </p>
                <p className="mt-3">
                  <span className="text-accent attention-pulse">●</span>
                  <span className="text-accent"> attention</span>
                  <span className="text-muted">
                    {" "}
                    — &ldquo;2 flaky tests quarantined; PR #142 needs a decision&rdquo;
                    <span className="cursor-blink text-foreground">▍</span>
                  </span>
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
            Persistent first. AI-native second. Distributed later.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            The core runtime works today. What&apos;s built on top of it arrives in
            order — and we&apos;ll only ever claim the part that ships.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-term-green/30 bg-background p-6">
              <p className="font-mono text-xs font-semibold text-term-green">NOW</p>
              <h3 className="mt-2 text-lg font-semibold">Persistent sessions</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Shells, agents, and processes that survive disconnects and
                restarts, organised into workspaces, with attention states and
                budgets — driven from the reference CLI.
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-background p-6">
              <p className="font-mono text-xs font-semibold text-accent">NEXT</p>
              <h3 className="mt-2 text-lg font-semibold">Native clients &amp; remote</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A native Mac cockpit for the whole workspace, then secure device
                pairing and push — reconnect and approve from your phone, not just
                your desk.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-background p-6">
              <p className="font-mono text-xs font-semibold text-term-violet">LATER</p>
              <h3 className="mt-2 text-lg font-semibold">Agents working together</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Controlled capabilities for agents to observe sessions, exchange
                tasks, and coordinate — and eventually one workspace spanning
                multiple machines.
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
              Be there when it ships
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
