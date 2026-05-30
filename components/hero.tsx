"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-[2.5rem] font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-[3.5rem]"
        >
          Bronco Drift.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl"
        >
          Independent web work — interfaces, systems, and the occasional
          side project. A small collection of what I've shipped, below.
        </motion.p>
      </div>
    </section>
  );
}
