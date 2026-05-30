"use client";

import { useI18n } from "./i18n-provider";
import { locales } from "@/lib/i18n";

export function LangToggle() {
  const { locale, setLocale, d } = useI18n();

  return (
    <div
      role="group"
      aria-label={d.a11y.toggleLanguage}
      className="flex items-center gap-1 rounded-full border border-border bg-elevated p-0.5 font-mono text-[11px] uppercase tracking-[0.06em]"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            className={`rounded-full px-2 py-0.5 transition-colors duration-300 ${
              active
                ? "bg-ink text-bg"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
