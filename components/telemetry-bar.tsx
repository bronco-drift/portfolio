import Link from "next/link";

export function TelemetryBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-3 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.22em]">
        <Link
          href="/"
          className="text-smoke transition-colors duration-500 hover:text-ember"
        >
          Bronco<span className="text-smoke-3">·</span>Drift
        </Link>

        <nav className="hidden items-center gap-8 text-smoke-2 md:flex">
          <Link
            href="/#work"
            className="transition-colors duration-500 hover:text-smoke"
          >
            Work
          </Link>
          <Link
            href="/#studio"
            className="transition-colors duration-500 hover:text-smoke"
          >
            Studio
          </Link>
          <Link
            href="/#contact"
            className="transition-colors duration-500 hover:text-smoke"
          >
            Contact
          </Link>
        </nav>

        <span className="flex items-center gap-2.5 text-smoke-2">
          <span className="live-dot inline-block size-1.5 rounded-full bg-ember" />
          <span className="hidden sm:inline">04 entries</span>
          <span className="hidden text-smoke-3 sm:inline">/</span>
          <span>MMXXVI</span>
        </span>
      </div>
    </header>
  );
}
