"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "./i18n-provider";
import { luminaSections, type LuminaBlock } from "@/lib/lumina";
import { projects } from "@/lib/projects";
import { t, type Locale } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LuminaPageContent() {
  const { d, locale } = useI18n();
  const luminaProjects = projects.filter((p) => p.luminaStyle);

  return (
    <>
      <header className="safe-px-6 pb-12 pt-24 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13.5px] text-ink-3 transition-colors hover:text-ink"
          >
            <span aria-hidden>←</span> {d.faq.backHome}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mt-10 text-[2.5rem] font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-[3.5rem]"
          >
            {d.lumina.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl"
          >
            {d.lumina.subtitle}
          </motion.p>
        </div>
      </header>

      <section className="safe-px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl space-y-14 md:space-y-20">
          {luminaSections.map((section) => (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="text-[13px] font-medium uppercase tracking-[0.02em] text-ink-3">
                {t(section.heading, locale)}
              </h2>
              <div className="mt-6 space-y-6">
                {section.blocks.map((b, i) => (
                  <Block key={i} block={b} locale={locale} />
                ))}
              </div>
            </motion.article>
          ))}

          {luminaProjects.length > 0 && (
            <motion.article
              id="projects"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="text-[13px] font-medium uppercase tracking-[0.02em] text-ink-3">
                {d.lumina.projectsHeading}
              </h2>
              <p className="mt-5 text-lg leading-[1.6] text-ink md:text-xl">
                {d.lumina.projectsIntro}
              </p>
              <ul className="mt-8 divide-y divide-border border-b border-t border-border">
                {luminaProjects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/work/${p.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-6 transition-colors duration-500 hover:bg-elevated"
                    >
                      <div className="min-w-0">
                        <div className="text-[17px] font-medium tracking-[-0.012em] text-ink md:text-[18px]">
                          {p.name}
                        </div>
                        <div className="mt-1 text-[14px] leading-snug text-ink-2">
                          {t(p.tagline, locale)}
                        </div>
                      </div>
                      <span
                        aria-hidden
                        className="font-mono text-[15px] text-ink-3 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.article>
          )}
        </div>
      </section>
    </>
  );
}

function Block({ block, locale }: { block: LuminaBlock; locale: Locale }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-lg leading-[1.65] text-ink md:text-xl md:leading-[1.6]">
        {t(block.body, locale)}
      </p>
    );
  }
  if (block.type === "code") {
    return (
      <pre className="overflow-x-auto rounded-2xl border border-border bg-elevated p-5 font-mono text-[12.5px] leading-[1.55] text-ink-2 md:p-6 md:text-[13px]">
        <code>{block.code}</code>
      </pre>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-3 text-lg leading-[1.6] text-ink md:text-xl md:leading-[1.55]">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden
              className="mt-3 inline-block h-[1.5px] w-4 shrink-0 bg-ink-3"
            />
            <span>{t(item, locale)}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
