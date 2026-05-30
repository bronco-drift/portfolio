"use client";

import { motion } from "motion/react";
import { useI18n } from "./i18n-provider";
import { faqs } from "@/lib/faq";
import { t } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FaqList() {
  const { locale } = useI18n();

  return (
    <dl className="divide-y divide-border border-b border-t border-border">
      {faqs.map((item, i) => (
        <motion.div
          key={typeof item.q === "string" ? item.q : item.q.en}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
          className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[1fr_1.5fr] md:gap-12 md:py-10"
        >
          <dt className="text-[17px] font-medium tracking-[-0.012em] text-ink md:text-[19px]">
            {t(item.q, locale)}
          </dt>
          <dd className="text-[15px] leading-[1.6] text-ink-2 md:text-base">
            {t(item.a, locale)}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}

export function FaqPageHeader() {
  const { d } = useI18n();

  return (
    <header className="safe-px-6 pb-12 pt-28 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[2.5rem] font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-[3.5rem]">
          {d.faq.label}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
          {d.faq.intro}
        </p>
      </div>
    </header>
  );
}
