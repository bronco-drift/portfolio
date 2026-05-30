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
      body: "Trabajo web independiente — interfaces, sistemas y algún proyecto paralelo. Una pequeña selección de lo enviado, abajo.",
    },
    work: {
      label: "Trabajos seleccionados",
      live: "En vivo",
    },
    about: {
      label: "Sobre",
      p1: "Bronco Drift es el nombre de una práctica independiente de diseño e ingeniería. El resultado: interfaces refinadas, sistemas pensados para habitar, y algún desvío cartográfico ocasional.",
      p2: "Cómodo a lo largo del stack — React, Next.js, Supabase, Firebase — y parcial a proyectos que prefieren la claridad sobre la astucia. Abierto a encargos y colaboraciones.",
    },
    contact: {
      label: "Contacto",
      title: "Disponible para encargos, colaboraciones y problemas bien planteados.",
      email: "Email",
      github: "GitHub",
    },
    footer: {
      backToTop: "Volver arriba",
    },
    detail: {
      allWork: "Todos los trabajos",
      visitLive: "Visitar sitio",
      viewSource: "Código",
      nextProject: "Próximo proyecto",
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
