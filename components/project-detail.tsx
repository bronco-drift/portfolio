"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { t } from "@/lib/i18n";
import { useI18n } from "./i18n-provider";
import { ProjectGallery } from "./project-gallery";
import type { Project } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const { locale, d } = useI18n();

  return (
    <main id="top">
      <article>
        <header className="border-b border-border safe-px-6 pb-14 pt-16 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[13.5px] text-ink-3 transition-colors hover:text-ink"
            >
              <span aria-hidden>←</span> {d.detail.allWork}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mt-10"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] text-ink-3">
                <span>{project.year}</span>
                <span className="text-ink-4">·</span>
                <span>{t(project.role, locale)}</span>
                <span className="text-ink-4">·</span>
                <span className="flex items-center gap-1.5">
                  {project.status === "live" && (
                    <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                  {d.status[project.status]}
                </span>
              </div>

              <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.04] tracking-[-0.028em] text-ink md:text-[4rem]">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
                {t(project.tagline, locale)}
              </p>

              {(project.url || project.repo) && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-bg transition-all duration-300 hover:opacity-90"
                    >
                      {d.detail.visitLive}
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 11L11 3M11 3H5M11 3V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-5 py-2.5 text-[14px] font-medium text-ink transition-all duration-300 hover:border-ink"
                    >
                      {d.detail.viewSource}
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 11L11 3M11 3H5M11 3V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-elevated px-2.5 py-1 font-mono text-[11px] text-ink-3"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        <section className="safe-px-6 border-b border-border py-20 md:py-28">
          <div className="mx-auto max-w-3xl space-y-14">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
                  {d.detail.sections[s.heading] ?? s.heading}
                </h3>
                <p className="mt-4 text-lg leading-[1.6] text-ink md:text-xl">
                  {t(s.body, locale)}
                </p>
              </div>
            ))}

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="pt-4">
                <ProjectGallery screenshots={project.screenshots} />
              </div>
            )}
          </div>
        </section>

        <section>
          <Link
            href={`/work/${next.slug}`}
            className="group block safe-px-6 border-b border-border py-16 transition-colors duration-500 hover:bg-elevated md:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <div className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
                {d.detail.nextProject}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-6">
                <div>
                  <h3 className="text-[1.8rem] font-medium leading-tight tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1 md:text-[2.4rem]">
                    {next.name}
                  </h3>
                  <p className="mt-2 text-base text-ink-2 md:text-lg">
                    {t(next.tagline, locale)}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-2xl text-ink-3 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
