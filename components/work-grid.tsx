"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects, type Project } from "@/lib/projects";
import { t } from "@/lib/i18n";
import { useI18n } from "./i18n-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkGrid() {
  const { d } = useI18n();

  return (
    <section id="work" className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          {d.work.label}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale, d } = useI18n();
  const hasUrl = !!project.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: EASE }}
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
            {hasUrl && (
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-3">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                {d.work.live}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
