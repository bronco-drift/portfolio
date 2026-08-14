"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import {
  projects,
  CATEGORY_ORDER,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { t } from "@/lib/i18n";
import { useI18n } from "./i18n-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

type SortMode = "featured" | "level" | "category";

export function WorkGrid() {
  const { d } = useI18n();
  const [mode, setMode] = useState<SortMode>("featured");

  const sortedFlat = useMemo(() => {
    if (mode === "featured") return projects;
    if (mode === "level") {
      return [...projects].sort((a, b) => b.level - a.level);
    }
    return projects;
  }, [mode]);

  const grouped = useMemo(() => {
    if (mode !== "category") return null;
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      items: projects.filter((p) => p.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [mode]);

  return (
    <section id="work" className="safe-px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
            {d.work.label}
          </h2>
          <SortToggle mode={mode} setMode={setMode} />
        </div>

        <div className="mt-8">
          {mode === "category" && grouped ? (
            <div className="space-y-14 md:space-y-16">
              {grouped.map((g, gi) => (
                <div key={g.category}>
                  <div className="mb-4 flex items-baseline justify-between">
                    <h3 className="text-[13px] font-medium tracking-[-0.01em] text-ink-2">
                      {d.work.categories[g.category]}
                    </h3>
                    <span className="font-mono text-[11px] text-ink-4">
                      {String(g.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.div
                    layout
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
                  >
                    {g.items.map((p, i) => (
                      <ProjectCard
                        key={p.slug}
                        project={p}
                        index={gi * 10 + i}
                      />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
            >
              <AnimatePresence mode="popLayout">
                {sortedFlat.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function SortToggle({
  mode,
  setMode,
}: {
  mode: SortMode;
  setMode: (m: SortMode) => void;
}) {
  const { d } = useI18n();
  const opts: { key: SortMode; label: string }[] = [
    { key: "featured", label: d.work.sortFeatured },
    { key: "level", label: d.work.sortLevel },
    { key: "category", label: d.work.sortCategory },
  ];

  return (
    <div
      role="group"
      aria-label={d.work.sortLabel}
      className="flex items-center gap-1 rounded-full border border-border bg-elevated p-0.5 font-mono text-[11px] uppercase tracking-[0.06em]"
    >
      {opts.map((o) => {
        const active = o.key === mode;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => setMode(o.key)}
            className={`rounded-full px-3 py-1 transition-colors duration-300 ${
              active ? "bg-ink text-bg" : "text-ink-3 hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale } = useI18n();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.04, ease: EASE }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block h-full rounded-3xl border border-border bg-elevated p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-border-strong md:p-10"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h3 className="text-[1.35rem] font-medium tracking-[-0.015em] text-ink md:text-[1.5rem]">
                {project.name}
              </h3>
              <p className="mt-1.5 font-mono text-[12px] text-ink-3">
                {project.year} · {t(project.role, locale)}
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
            {t(project.tagline, locale)}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-8">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-ink-3"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
