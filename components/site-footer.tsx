"use client";

import Link from "next/link";
import { useI18n } from "./i18n-provider";

export function SiteFooter() {
  const { d } = useI18n();

  return (
    <footer className="safe-pb border-t border-border">
      <div className="safe-px-6 mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 py-8 text-[13px] text-ink-3 md:flex-row md:items-center">
        <span>© 2026 Bronco Drift</span>
        <div className="flex items-center gap-6">
          <Link
            href="/faq"
            className="transition-colors hover:text-ink"
          >
            {d.faq.nav}
          </Link>
          <Link
            href="#top"
            className="transition-colors hover:text-ink"
          >
            {d.footer.backToTop} ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
