"use client";

import Link from "next/link";
import { useI18n } from "./i18n-provider";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

export function SiteNav() {
  const { d } = useI18n();

  return (
    <header className="safe-pt sticky top-0 z-40 border-b border-border bg-bg/75 backdrop-blur-xl">
      <div className="safe-px-6 mx-auto flex h-14 max-w-6xl items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-ink transition-colors hover:text-ink-2"
        >
          Bronco Drift
        </Link>

        <nav className="hidden items-center gap-7 text-[13.5px] text-ink-2 sm:flex">
          <Link href="/#work" className="transition-colors hover:text-ink">
            {d.nav.work}
          </Link>
          <Link href="/#about" className="transition-colors hover:text-ink">
            {d.nav.about}
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-ink">
            {d.faq.nav}
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-ink">
            {d.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
