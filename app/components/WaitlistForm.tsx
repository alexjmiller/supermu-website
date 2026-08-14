"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      // Netlify Forms: POST url-encoded to the static form definition in
      // public/__forms.html. Only captured on Netlify — fails in local dev.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "waitlist", email }).toString(),
      });
      if (res.ok) {
        setStatus("done");
        setMessage("You're on the list. We'll be in touch when there's something to run.");
      } else {
        setStatus("error");
        setMessage("Something went wrong — try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong — try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="font-mono text-sm text-term-green">
        <span className="mr-2">✓</span>
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        className="w-full rounded-lg border border-line bg-surface px-4 py-3 font-mono text-sm text-foreground placeholder:text-faint outline-none transition-colors focus:border-accent-dim"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="shrink-0 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && (
        <p className="font-mono text-xs text-term-red sm:hidden">{message}</p>
      )}
    </form>
  );
}
