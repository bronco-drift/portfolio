import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-3">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:flex-row md:items-center">
        <span>
          Bronco<span className="text-smoke-4">·</span>Drift —{" "}
          <span className="text-smoke-4">All rights held in trail</span>
        </span>
        <span className="hidden md:inline">MMXXVI</span>
        <Link
          href="#top"
          className="transition-colors duration-500 hover:text-smoke"
        >
          ↑ Top
        </Link>
      </div>
    </footer>
  );
}
