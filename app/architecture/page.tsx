import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Architecture — supermu",
  description:
    "How supermu keeps sessions alive: a restartable coordinator, tiny per-session holder processes that own the terminals, and stateless clients over one versioned protocol.",
};

const roles = [
  {
    index: "01 · the brain",
    title: "Coordinator",
    body: "One daemon keeps the map: workspaces, sessions, activity, budgets, schedules, permissions — all persisted to SQLite. It is the single writer to that database, and every state change appends its event in the same transaction, so the record and the facts can never disagree. It can be killed and restarted at any moment without a single session noticing.",
  },
  {
    index: "02 · the muscle",
    title: "Holders",
    body: "Each session gets a deliberately boring little process that owns its terminal and child process group. Holders detach at spawn, survive the coordinator's death, and are re-adopted when it comes back — the coordinator reconciles to what the holders actually hold, never the other way round. If the part that owns your work can't crash interestingly, your work can't be lost interestingly.",
  },
  {
    index: "03 · the windows",
    title: "Clients",
    body: "The CLI today, native Mac and iPhone apps next — all stateless views over one versioned protocol. A client holds no session data of its own: it renders what the runtime knows and sends requests. If closing a client could destroy work, the architecture would be wrong. It can't, so it isn't.",
  },
];

const invariants = [
  {
    title: "State changes and their events are one transaction",
    body: "The coordinator is the single writer to SQLite, and every mutation appends its event atomically. Anything a client or agent observes on the event bus is a fact that is also durably recorded.",
  },
  {
    title: "Holders are the source of truth for live sessions",
    body: "On restart the coordinator adopts running holders and reconciles its database to them — it never assumes a stale row over a live terminal.",
  },
  {
    title: "Requests are idempotent",
    body: "Every mutating request carries an id; retries return the original outcome instead of doing the work twice. Flaky networks can't double-spawn a session or double-send input.",
  },
  {
    title: "The default runaway response is pause, not kill",
    body: "When budgets trip or something loops, supermu suspends the session with everything intact so you can inspect and decide. Losing work is never the safety mechanism.",
  },
  {
    title: "The terminal is an interface, not the product",
    body: "Sessions are addressable objects with identity, state, history, and events. A terminal screen is one way to look at one — the same session is equally a thing an agent can inspect through the API.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="flex-1">
      <SiteNav />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <p className="font-mono text-xs text-faint">supermu / architecture</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Persistence is architecture,
            <br />
            <span className="text-accent">not session restore.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Most tools that promise to save your session snapshot it and hope to
            put it back together later. supermu is built the other way round:
            the process design makes it structurally impossible for a closing
            window — or a crashing runtime — to take your work with it. Three
            roles, each allowed to fail independently.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Three roles, three failure domains
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="rounded-xl border border-line bg-background p-6">
                <p className="font-mono text-xs text-faint">{r.index}</p>
                <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-muted">
            The consequence: your terminal, your client, and the runtime itself
            can each go away — separately or together — and the sessions keep
            running. Reconnect and the coordinator hands you back the same
            terminals, with their history, exactly where they were.
          </p>
        </div>
      </section>

      {/* Invariants */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Invariants the runtime is built on
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Every one of these comes from a public architecture decision record
            in the runtime repository — written before the code, kept honest by
            it.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {invariants.map((inv, i) => (
              <div key={inv.title} className="flex gap-4">
                <span className="font-mono text-sm text-faint">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{inv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{inv.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The same rigour applies to authority
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              The process model keeps work alive; the security model decides
              what that work is allowed to do. It gets the same treatment —
              designed up front, stated honestly.{" "}
              <a href="/security" className="text-accent hover:underline">
                Read the security model →
              </a>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
