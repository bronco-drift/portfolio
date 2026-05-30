export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type LocalizedString = string | { en: string; es: string };

export function t(value: LocalizedString, locale: Locale = defaultLocale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export type Dict = {
  nav: { work: string; about: string; contact: string };
  hero: { title: string; body: string };
  work: { label: string; live: string };
  about: { label: string; p1: string; p2: string };
  contact: { label: string; title: string; email: string; github: string };
  faq: { label: string; nav: string; intro: string };
  footer: { backToTop: string };
  detail: {
    allWork: string;
    visitLive: string;
    viewSource: string;
    nextProject: string;
    sections: Record<string, string>;
  };
  notFound: { label: string; title: string; body: string; back: string };
  status: { live: string; "in-progress": string; archived: string };
  a11y: { toggleTheme: string; toggleLanguage: string };
};

export const dict: Record<Locale, Dict> = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    hero: {
      title: "Bronco Drift.",
      body: "Independent web work — interfaces, systems, and the occasional side project. A small collection of what I've shipped, below.",
    },
    work: {
      label: "Selected work",
      live: "Live",
    },
    about: {
      label: "About",
      p1: "Bronco Drift is the working name for an independent design and engineering practice. The output: refined interfaces, systems built to be lived in, and the occasional cartographic detour.",
      p2: "Comfortable across the stack — React, Next.js, Supabase, Firebase — and partial to projects that prefer clarity over cleverness. Open to commissions and collaborations.",
    },
    contact: {
      label: "Contact",
      title: "Open to commissions, collaborations, and well-posed problems.",
      email: "Email",
      github: "GitHub",
    },
    faq: {
      label: "Frequently asked",
      nav: "FAQ",
      intro:
        "What I work with, how the process tends to go, and the answers people usually need before reaching out.",
    },
    footer: {
      backToTop: "Back to top",
    },
    detail: {
      allWork: "All work",
      visitLive: "Visit live",
      viewSource: "Source",
      nextProject: "Next project",
      sections: {
        Brief: "Brief",
        Approach: "Approach",
        Outcome: "Outcome",
        Status: "Status",
        Notes: "Notes",
      },
    },
    notFound: {
      label: "404",
      title: "Page not found.",
      body: "The page you're looking for doesn't exist or has been moved.",
      back: "Back home",
    },
    status: {
      live: "Live",
      "in-progress": "In progress",
      archived: "Archived",
    },
    a11y: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "Toggle language",
    },
  },
  es: {
    nav: { work: "Trabajos", about: "Sobre", contact: "Contacto" },
    hero: {
      title: "Bronco Drift.",
      body: "Trabajo web independiente — interfaces, sistemas y algún proyecto paralelo. Abajo, una selección de lo que llevé a producción.",
    },
    work: {
      label: "Trabajos seleccionados",
      live: "En vivo",
    },
    about: {
      label: "Sobre",
      p1: "Bronco Drift es el nombre bajo el que diseño y programo, por mi cuenta. Lo que sale: interfaces que prefieren la claridad, sistemas pensados para habitar, y algún experimento con mapas cada tanto.",
      p2: "Trabajo con todo el stack — React, Next.js, Supabase, Firebase — y me llevo mejor con los proyectos que eligen ser claros antes que ingeniosos. Abierto a encargos y colaboraciones.",
    },
    contact: {
      label: "Contacto",
      title: "Abierto a encargos, colaboraciones y problemas bien planteados.",
      email: "Email",
      github: "GitHub",
    },
    faq: {
      label: "Preguntas frecuentes",
      nav: "FAQ",
      intro:
        "Con qué trabajo, cómo suele ser el proceso, y las respuestas que la mayoría necesita antes de escribirme.",
    },
    footer: {
      backToTop: "Volver arriba",
    },
    detail: {
      allWork: "Volver al índice",
      visitLive: "Ir al sitio",
      viewSource: "Código",
      nextProject: "Siguiente proyecto",
      sections: {
        Brief: "Resumen",
        Approach: "Enfoque",
        Outcome: "Resultado",
        Status: "Estado",
        Notes: "Notas",
      },
    },
    notFound: {
      label: "404",
      title: "Página no encontrada.",
      body: "La página que buscás no existe o fue movida.",
      back: "Volver al inicio",
    },
    status: {
      live: "En vivo",
      "in-progress": "En progreso",
      archived: "Archivado",
    },
    a11y: {
      toggleTheme: "Cambiar tema",
      toggleLanguage: "Cambiar idioma",
    },
  },
};
