import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono font-semibold tracking-tight ${className}`}>
      super<span className="text-accent">μ</span>
    </span>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#features" className="hidden transition-colors hover:text-foreground sm:block">
            Features
          </Link>
          <Link href="/#how-it-works" className="hidden transition-colors hover:text-foreground sm:block">
            How it works
          </Link>
          <Link href="/#roadmap" className="hidden transition-colors hover:text-foreground sm:block">
            Roadmap
          </Link>
          <Link href="/security" className="transition-colors hover:text-foreground">
            Security
          </Link>
          <Link
            href="/#early-access"
            className="rounded-lg border border-accent-dim px-4 py-2 font-medium text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Early access
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <Wordmark className="text-muted" />
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} supermu · local-first, always
        </p>
      </div>
    </footer>
  );
}
