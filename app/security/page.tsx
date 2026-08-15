import type { Metadata } from "next";
import { SiteNav, SiteFooter } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Security — supermu",
  description:
    "How supermu is secured, where the real boundaries are, and how to run AI coding agents safely. Stated honestly: what protects you, what doesn't, and what's still to come.",
};

const runtimeMeasures = [
  {
    title: "Default-deny permissions",
    body: "One permission engine decides every action from who is asking, what they're targeting, and what they want to do. Agents get least privilege by default: they can work in their own session and raise attention, but acting on other sessions, spawning, or scheduling requires an explicit grant.",
  },
  {
    title: "Identity is proven, not asserted",
    body: "Local callers are identified by OS-verified peer credentials on the control socket, not by whatever name they claim. Agent sessions are bound to per-session tokens, so one session can't impersonate another. Every allow-or-deny decision is auditable.",
  },
  {
    title: "Observed content is untrusted",
    body: "Prompt injection is the top risk of agentic work: an agent reads a log line, a filename, or another session's output, and treats it as instructions. When one session observes another, supermu delivers that content explicitly framed as untrusted, with terminal control sequences stripped.",
  },
  {
    title: "Observing and acting are separate powers",
    body: "An agent that can watch other sessions can't also send them input unless you explicitly grant that combination. Watch-and-report is the default; watch-and-act is a decision you make.",
  },
  {
    title: "Runaway control that loses nothing",
    body: "Budgets and schedules cap how much an agent can do unattended, and the default response to a runaway session is pause, not kill — you inspect and decide with everything intact. These are supervisory controls for cost and attention, and we deliberately never present them as a security boundary.",
  },
  {
    title: "An OS-level sandbox, per session",
    body: "For sessions that warrant real containment, the runtime can launch them inside an OS-level sandbox (sandbox-exec on macOS, container or low-privilege user on Linux) with a profile you choose. This is the only mechanism we call containment — everything above it is control, not isolation.",
  },
];

const clientMeasures = [
  {
    title: "No unauthenticated listener",
    body: "Locally, the runtime is reachable only through a Unix socket protected by your OS user account. The network transport for remote clients is gated entirely behind device pairing — there is nothing to connect to anonymously, and the intended deployment keeps it inside your private VPN, never on the public internet.",
  },
  {
    title: "Every device is explicitly approved",
    body: "A new client pairing shows up as an approval in your workspace, the same way agent questions do. Until you approve it, it can do nothing. Each device holds its own keypair and must prove possession of its key when it connects.",
  },
  {
    title: "Per-device capabilities",
    body: "Devices don't all get the same power. Your phone can be allowed to read sessions, pause work, and approve or deny requests — without being able to open new shells — unless you decide otherwise.",
  },
  {
    title: "Revocation that actually revokes",
    body: "Revoking a device severs its live connections immediately, not just its next login. And because clients are stateless renderers, a lost or revoked device holds no session data of its own — your work and history live only in the runtime on your machine.",
  },
];

const practices = [
  {
    title: "Keep the runtime private",
    body: "Run supermu on your own machine and reach it remotely only over your own VPN (WireGuard, Tailscale). Don't expose it to the public internet — it isn't designed to be a public service.",
  },
  {
    title: "Keep the agent CLIs' own guardrails on",
    body: "supermu supervises Claude Code, Codex, and friends — it doesn't replace their permission systems. Their approval modes are your first line of defence; blanket auto-approve defeats them.",
  },
  {
    title: "Treat approvals as decisions",
    body: "The attention system exists so you approve less often but mean it more. If you find yourself rubber-stamping, tighten what agents can do instead of approving faster.",
  },
  {
    title: "Scope what agents can reach",
    body: "An agent session runs with your user's authority. Give long-running agent work its own narrowly-scoped credentials — a deploy key rather than your personal SSH key — and keep production secrets out of inherited environment variables.",
  },
  {
    title: "Sandbox the risky work",
    body: "Unattended, scheduled, or experiment-heavy sessions are the ones to run inside a sandbox profile. Interactive sessions you're watching need it less; agents acting alone at 3am need it most.",
  },
  {
    title: "Assume anything an agent reads can influence it",
    body: "Fetched pages, dependency install output, commit messages from strangers — all of it is potential instruction to a model. supermu frames cross-session content as untrusted, but the same skepticism applies to everything else in an agent's world.",
  },
];

const honesty = [
  "Sessions run as your user by default. Unless you opt a session into a sandbox, permissions restrain the runtime's control API — they do not contain a process that already has your account.",
  "supermu is single-user by design. It has no multi-tenant isolation and shouldn't be shared between people who don't trust each other completely.",
  "Sandbox profiles are yours to choose. The runtime provides the mechanism, but a correct profile depends on the workload, so we don't pretend a default profile would protect every case.",
  "Remote connection integrity currently rests on your VPN plus per-device authentication at connect time; per-request signing is planned hardening, not a shipped feature.",
  "Credential hygiene (per-agent keys, secret brokering, redaction of secrets from observed output) is a stated direction landing in phases — not all of it exists today.",
];

export default function SecurityPage() {
  return (
    <main className="flex-1">
      <SiteNav />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
          <p className="font-mono text-xs text-faint">supermu / security</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Agents act with real authority.
            <br />
            <span className="text-accent">We design like that&apos;s dangerous</span> — because it is.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            supermu supervises AI agents that run real commands on your machine.
            That power is the product, so its security model is a first-class part
            of the architecture — designed up front, written down in public
            decision records, and stated honestly, including the parts that
            aren&apos;t solved yet.
          </p>
          <blockquote className="mt-10 max-w-2xl border-l-2 border-accent pl-5 font-mono text-sm leading-relaxed text-muted">
            &ldquo;Claiming isolation we do not have is worse than a precise
            boundary.&rdquo;
            <span className="mt-1 block text-xs text-faint">
              — from supermu&apos;s threat-model decision record
            </span>
          </blockquote>
        </div>
      </section>

      {/* Baseline */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The baseline: local-first is a security posture
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Everything — your sessions, history, workspaces, and state — lives
                on your machine in a local database. There is no supermu cloud, no
                account to breach, and no telemetry leaving your computer. The
                attack surface starts at the size of your own machine, not ours.
              </p>
              <p>
                Your AI subscriptions stay where they are, too: supermu supervises
                the real Claude Code or Codex process using the login you already
                have. Your provider credentials never pass through us.
              </p>
            </div>
            <ul className="space-y-3 font-mono text-sm text-muted">
              <li className="flex gap-3"><span className="text-term-green">✓</span>All state local, in SQLite — nothing synced anywhere</li>
              <li className="flex gap-3"><span className="text-term-green">✓</span>No cloud service, no supermu account, no telemetry</li>
              <li className="flex gap-3"><span className="text-term-green">✓</span>Local control only via a Unix socket, guarded by your OS user</li>
              <li className="flex gap-3"><span className="text-term-green">✓</span>Provider logins stay in the provider&apos;s own CLI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Runtime measures */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How the runtime restrains agents
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The threat we take most seriously isn&apos;t a network attacker — it&apos;s a
            confused or prompt-injected agent acting with your own authority. The
            runtime is built around that assumption.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {runtimeMeasures.map((m) => (
              <div key={m.title} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-mono text-sm font-semibold text-accent">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & remote */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Client apps and remote access
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The Mac and iPhone apps are views into your runtime, not copies of it.
            The rules below govern every client, on every platform, from the first
            release.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {clientMeasures.map((m) => (
              <div key={m.title} className="rounded-xl border border-line bg-background p-6">
                <h3 className="font-mono text-sm font-semibold text-accent">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Using it securely */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Using supermu securely
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The runtime restrains what agents can do through supermu. What keeps
            you safe overall is the combination of those controls and how you run
            things. Six habits that matter most:
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {practices.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="font-mono text-sm text-faint">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honesty ledger */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we don&apos;t claim
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Security pages usually stop at the reassuring part. These are the
            boundaries as they actually stand — so your decisions are based on
            what&apos;s true, not what sounds good:
          </p>
          <ul className="mt-8 space-y-4">
            {honesty.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-0.5 shrink-0 text-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reporting */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Found something?
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              If you believe you&apos;ve found a security issue in supermu or its
              clients, we want to hear about it before anyone else does. Email{" "}
              <a href="mailto:security@supermu.app" className="font-mono text-accent hover:underline">
                security@supermu.app
              </a>{" "}
              and we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
