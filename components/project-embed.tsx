"use client";

import { motion } from "motion/react";
import { useI18n } from "./i18n-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const { d } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="space-y-4"
    >
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          {d.detail.embedLabel}
        </h3>
        <span className="text-[12px] text-ink-4">{d.detail.embedHint}</span>
      </div>
      <div
        className="overflow-hidden rounded-3xl border border-border bg-elevated"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <iframe
          src={src}
          title={`${title} — live embed`}
          className="block h-[1100px] w-full border-0 md:h-[720px]"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"
        />
      </div>
    </motion.div>
  );
}
