"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";

export default function NotFound() {
  const { d } = useI18n();

  return (
    <main className="safe-px-6 py-32 md:py-48">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-3">
          {d.notFound.label}
        </p>
        <h1 className="mt-5 text-[2.5rem] font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-[3.5rem]">
          {d.notFound.title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-2">
          {d.notFound.body}
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-5 py-2.5 text-[14px] font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-bg"
        >
          <span aria-hidden>←</span> {d.notFound.back}
        </Link>
      </div>
    </main>
  );
}
