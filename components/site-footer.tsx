import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-[13px] text-ink-3 md:flex-row md:items-center">
        <span>© 2026 Bronco Drift</span>
        <Link
          href="#top"
          className="transition-colors hover:text-ink"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
