"use client";

import { motion } from "motion/react";
import { useI18n } from "./i18n-provider";
import { faqs } from "@/lib/faq";
import { t } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Faq() {
  const { d, locale } = useI18n();

  return (
    <section
      id="faq"
      className="safe-px-6 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          {d.faq.label}
        </h2>

        <dl className="mt-10 divide-y divide-border border-b border-border md:mt-14">
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
      </div>
    </section>
  );
}
