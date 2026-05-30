"use client";

import { useEffect, useState } from "react";
import { useI18n } from "./i18n-provider";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const { d } = useI18n();
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ?? "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* noop */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={d.a11y.toggleTheme}
      className="relative inline-flex size-8 items-center justify-center rounded-full border border-border text-ink-3 transition-all duration-300 hover:border-border-strong hover:text-ink"
    >
      {/* Render both icons; show one based on theme via CSS. Avoid hydration mismatch. */}
      <span
        className={`absolute transition-all duration-500 ${
          mounted && theme === "dark"
            ? "rotate-0 opacity-100"
            : "-rotate-90 opacity-0"
        }`}
        aria-hidden
      >
        <SunIcon />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          mounted && theme === "dark"
            ? "rotate-90 opacity-0"
            : "rotate-0 opacity-100"
        }`}
        aria-hidden
      >
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M7 1V2.4" />
        <path d="M7 11.6V13" />
        <path d="M1 7H2.4" />
        <path d="M11.6 7H13" />
        <path d="M2.76 2.76L3.75 3.75" />
        <path d="M10.25 10.25L11.24 11.24" />
        <path d="M2.76 11.24L3.75 10.25" />
        <path d="M10.25 3.75L11.24 2.76" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M11.5 8.2A4.8 4.8 0 015.8 2.5a.4.4 0 00-.55-.45A5.5 5.5 0 1011.95 8.75a.4.4 0 00-.45-.55z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
