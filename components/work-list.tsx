"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "@/lib/projects";

const APEX = [0.16, 1, 0.3, 1] as const;

export function WorkList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="relative border-t border-ink-3">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeader number="01" label="Selected work — 04 entries" hint="hover · click · open" />

        <ul
          className="border-t border-ink-3"
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((p) => {
            const isActive = hovered === p.slug;
            const isDim = hovered !== null && !isActive;
            return (
              <li
                key={p.slug}
                className="border-b border-ink-3"
                onMouseEnter={() => setHovered(p.slug)}
              >
                <Link href={`/work/${p.slug}`} className="group block">
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isDim ? 0.32 : 1,
                      x: isActive ? 14 : 0,
                    }}
                    transition={{ duration: 0.8, ease: APEX }}
                    className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-10 md:py-14"
                  >
                    <span className="col-span-2 self-start pt-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
                      {p.number}
                    </span>

                    <div className="col-span-10 md:col-span-7">
                      <h3 className="font-display text-[clamp(2.5rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.022em] text-smoke">
                        {p.name}
                      </h3>
                      <p className="mt-3 max-w-md font-display text-xl italic leading-snug text-smoke-2 md:text-2xl">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="col-span-7 mt-4 flex flex-col gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-3 md:mt-4 md:self-start">
                      <span className="text-smoke-2">{p.year}</span>
                      <span>{p.stack.slice(0, 2).join(" · ")}</span>
                      <span className="flex items-center gap-2">
                        {p.status === "live" && (
                          <span className="live-dot inline-block size-1 rounded-full bg-ember" />
                        )}
                        {p.status}
                      </span>
                    </div>

                    <div className="col-span-5 mt-4 flex justify-end self-start pt-1 md:col-span-1 md:mt-4">
                      <motion.span
                        animate={{
                          x: isActive ? 8 : 0,
                          color: isActive ? "var(--color-ember)" : "var(--color-smoke-2)",
                        }}
                        transition={{ duration: 0.6, ease: APEX }}
                        className="font-mono text-base"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({
  number,
  label,
  hint,
}: {
  number: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
      <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
        {number}
      </div>
      <div className="col-span-12 flex items-end justify-between md:col-span-11">
        <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2">
          {label}
        </h2>
        {hint && (
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:inline">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}
