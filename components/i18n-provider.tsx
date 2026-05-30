"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  dict,
  defaultLocale,
  locales,
  type Dict,
  type Locale,
} from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  d: Dict;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Hydrate from localStorage after mount (inline script already set <html lang>)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null;
      if (stored && locales.includes(stored) && stored !== locale) {
        setLocaleState(stored);
      }
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      /* noop */
    }
  };

  return (
    <I18nContext.Provider value={{ locale, d: dict[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
