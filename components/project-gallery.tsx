"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { t } from "@/lib/i18n";
import { useI18n } from "./i18n-provider";
import type { Screenshot } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectGallery({ screenshots }: { screenshots?: Screenshot[] }) {
  const { locale } = useI18n();

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="space-y-6 md:space-y-8">
      {screenshots.map((s, i) => (
        <motion.figure
          key={s.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
          className="m-0"
        >
          <div
            className="overflow-hidden rounded-3xl border border-border bg-elevated"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={2400}
              height={1500}
              className="h-auto w-full"
              sizes="(min-width: 768px) 720px, 100vw"
            />
          </div>
          {s.caption && (
            <figcaption className="mt-4 text-sm text-ink-3">
              {t(s.caption, locale)}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  );
}
