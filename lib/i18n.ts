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
  work: {
    label: string;
    live: string;
    sortLabel: string;
    sortFeatured: string;
    sortLevel: string;
    sortCategory: string;
    categories: {
      apps: string;
      client: string;
      tools: string;
      games: string;
      experiments: string;
    };
  };
  about: { label: string; p1: string; p2: string };
  contact: { label: string; title: string; email: string; github: string };
  faq: { label: string; nav: string; intro: string; backHome: string };
  lumina: {
    title: string;
    subtitle: string;
    nav: string;
    systemLabel: string;
    cardName: string;
    projectsHeading: string;
    projectsIntro: string;
    builtWith: string;
  };
  footer: { backToTop: string };
  detail: {
    allWork: string;
    visitLive: string;
    viewSource: string;
    nextProject: string;
    embedLabel: string;
    embedHint: string;
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
      body: "Systems and pages built with care — made to add value and carry a feeling of their own. A selection below.",
    },
    work: {
      label: "Selected work",
      live: "Live",
      sortLabel: "Sort by",
      sortFeatured: "Featured",
      sortLevel: "Level",
      sortCategory: "Category",
      categories: {
        apps: "Apps & products",
        client: "Client work",
        tools: "Tools & utilities",
        games: "Games",
        experiments: "Experiments",
      },
    },
    about: {
      label: "About",
      p1: "Bronco Drift is the name I design and build under. Systems and pages built to add value, with a feeling of their own in the interface — cleanliness, air, hierarchy drawn by typography rather than color.",
      p2: "I work across the stack — React, Next.js, Supabase, Firebase — and lean toward projects that pick clarity over cleverness. Every one of them ships with the same rule: readable, durable, light.",
    },
    contact: {
      label: "Contact",
      title: "",
      email: "Email",
      github: "GitHub",
    },
    faq: {
      label: "Frequently asked",
      nav: "FAQ",
      intro:
        "What I work with, how the process tends to go, and the answers people usually need before reaching out.",
      backHome: "Back to home",
    },
    lumina: {
      title: "Lumina",
      subtitle:
        "A design language — not a palette, a way of resolving the interface.",
      nav: "Lumina",
      systemLabel: "Design language",
      cardName: "Lumina",
      projectsHeading: "Projects in this style",
      projectsIntro:
        "The Lumina rules show up across these entries. Each one links to its full case.",
      builtWith: "Built with Lumina",
    },
    footer: {
      backToTop: "Back to top",
    },
    detail: {
      allWork: "All work",
      visitLive: "Visit live",
      viewSource: "Source",
      nextProject: "Next project",
      embedLabel: "Live demo",
      embedHint: "Playable here — click into the frame to interact.",
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
      body: "Sistemas y páginas hechos con cuidado — pensados para aportar valor y con un sentimiento propio. Abajo, una selección.",
    },
    work: {
      label: "Trabajos seleccionados",
      live: "En vivo",
      sortLabel: "Ordenar por",
      sortFeatured: "Destacados",
      sortLevel: "Nivel",
      sortCategory: "Categoría",
      categories: {
        apps: "Apps y productos",
        client: "Trabajos para clientes",
        tools: "Herramientas",
        games: "Juegos",
        experiments: "Experimentos",
      },
    },
    about: {
      label: "Sobre",
      p1: "Bronco Drift es el nombre bajo el que diseño y construyo. Sistemas y páginas pensados para aportar valor, con un sentimiento propio en la interfaz — limpieza, aire, jerarquía puesta por la tipografía y no por el color.",
      p2: "Trabajo con todo el stack — React, Next.js, Supabase, Firebase — y me llevo mejor con los proyectos que eligen ser claros antes que ingeniosos. Cada uno sale con el mismo criterio: que se entienda, que dure, que no pese.",
    },
    contact: {
      label: "Contacto",
      title: "",
      email: "Email",
      github: "GitHub",
    },
    faq: {
      label: "Preguntas frecuentes",
      nav: "FAQ",
      intro:
        "Con qué trabajo, cómo suele ser el proceso, y las respuestas que la mayoría necesita antes de escribirme.",
      backHome: "Volver al inicio",
    },
    lumina: {
      title: "Lumina",
      subtitle:
        "Un lenguaje de diseño — no una paleta, una forma de resolver la interfaz.",
      nav: "Lumina",
      systemLabel: "Lenguaje de diseño",
      cardName: "Diseño Lumina",
      projectsHeading: "Proyectos en este estilo",
      projectsIntro:
        "Las reglas de Lumina aparecen en estos proyectos. Cada uno linkea a su caso completo.",
      builtWith: "Hecho con Lumina",
    },
    footer: {
      backToTop: "Volver arriba",
    },
    detail: {
      allWork: "Volver al índice",
      visitLive: "Ir al sitio",
      viewSource: "Código",
      nextProject: "Siguiente proyecto",
      embedLabel: "Demo en vivo",
      embedHint: "Se juega acá — tocá adentro del marco para interactuar.",
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
