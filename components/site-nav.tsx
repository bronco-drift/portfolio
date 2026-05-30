import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-ink transition-colors hover:text-ink-2"
        >
          Bronco Drift
        </Link>
        <nav className="flex items-center gap-7 text-[13.5px] text-ink-2">
          <Link
            href="/#work"
            className="transition-colors hover:text-ink"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
