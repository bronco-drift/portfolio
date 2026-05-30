"use client";

import { motion } from "motion/react";
import Link from "next/link";

const APEX = [0.16, 1, 0.3, 1] as const;

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: APEX },
});

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-40 md:pb-44 md:pt-52">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1 md:block">
            <motion.span {...reveal(0)} className="block">
              00
            </motion.span>
          </div>

          <div className="col-span-12 md:col-span-11">
            <motion.div
              {...reveal(0.05)}
              className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2 md:mb-14"
            >
              <span>Studio Log</span>
              <span className="text-smoke-4">/</span>
              <span>Independent practice</span>
              <span className="text-smoke-4">/</span>
              <span>Latam · MMXXVI</span>
            </motion.div>

            <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-[-0.025em] text-smoke">
              <motion.span {...reveal(0.18)} className="block">
                On the edge,
              </motion.span>
              <motion.span
                {...reveal(0.28)}
                className="block italic text-smoke"
              >
                on purpose.
              </motion.span>
            </h1>

            <motion.p
              {...reveal(0.5)}
              className="mt-10 max-w-xl text-base leading-relaxed text-smoke-2 md:mt-14 md:text-lg"
            >
              An independent practice making refined interfaces and systems on
              the web — built for people who would rather hold the line than
              draw attention to it.
            </motion.p>

            <motion.div
              {...reveal(0.66)}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.22em] md:mt-20"
            >
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 border-b border-smoke pb-1 text-smoke transition-colors duration-500 hover:text-ember"
              >
                Selected work
                <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-y-1">
                  ↓
                </span>
              </Link>
              <span className="text-smoke-4">·</span>
              <Link
                href="#contact"
                className="text-smoke-2 transition-colors duration-500 hover:text-smoke"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
