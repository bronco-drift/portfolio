"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "./i18n-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LuminaCard({ index = 0 }: { index?: number }) {
  const { d } = useI18n();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.04, ease: EASE }}
    >
      <Link
        href="/lumina"
        className="group relative block h-full rounded-3xl border border-border bg-elevated p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-border-strong md:p-10"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h3 className="text-[1.35rem] font-medium tracking-[-0.015em] text-ink md:text-[1.5rem]">
                {d.lumina.cardName}
              </h3>
              <p className="mt-1.5 font-mono text-[12px] text-ink-3">
                {d.lumina.systemLabel}
              </p>
            </div>
            <span
              aria-hidden
              className="mt-1.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-ink-3 transition-all duration-500 group-hover:border-ink group-hover:text-ink"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink-2 md:mt-8">
            {d.lumina.subtitle}
          </p>

          <div className="mt-auto flex items-center gap-2 pt-8">
            <span
              aria-hidden
              className="size-4 rounded-full border border-border bg-bg"
              title="white"
            />
            <span
              aria-hidden
              className="size-4 rounded-full border border-border"
              style={{ background: "oklch(0.708 0 0)" }}
              title="muted"
            />
            <span
              aria-hidden
              className="size-4 rounded-full border border-border"
              style={{ background: "oklch(0.145 0 0)" }}
              title="ink"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
