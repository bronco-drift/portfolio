"use client";

import { useI18n } from "./i18n-provider";

export function About() {
  const { d } = useI18n();

  return (
    <section id="about" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          {d.about.label}
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-[1.65] text-ink-2 md:text-xl md:leading-[1.6]">
          <p className="text-ink">{d.about.p1}</p>
          <p>{d.about.p2}</p>
        </div>
      </div>
    </section>
  );
}
