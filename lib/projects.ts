import type { LocalizedString } from "./i18n";

export type ProjectStatus = "live" | "in-progress" | "archived";

export type ProjectSection = {
  heading: string;
  body: LocalizedString;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption?: LocalizedString;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  year: string;
  role: LocalizedString;
  stack: string[];
  status: ProjectStatus;
  url?: string;
  repo?: string;
  screenshots?: Screenshot[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "prode-mundial-2026",
    number: "01",
    name: "Prode Mundial 2026",
    tagline: {
      en: "A collaborative ritual for the world's most-watched tournament.",
      es: "Un ritual colaborativo para el torneo más visto del mundo.",
    },
    description: {
      en: "Predictor app for the 2026 FIFA World Cup — multi-feature, collaborative, with parallel simulator and live standings.",
      es: "App de predicciones para la Copa del Mundo 2026 — multi-feature, colaborativa, con simulador paralelo y posiciones en vivo.",
    },
    year: "2026",
    role: { en: "Design — Build", es: "Diseño — Desarrollo" },
    stack: ["HTML", "Firebase", "Vanilla JS"],
    status: "live",
    url: undefined,
    repo: undefined,
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Build a Prode for the 2026 FIFA World Cup that survives a group chat of friends arguing about whether Mexico will make the round of 16. Low-friction, collaborative, fast to load on a phone in a stadium.",
          es: "Construir un Prode para el Mundial 2026 que sobreviva a un grupo de amigos discutiendo si México pasa de octavos. Baja fricción, colaborativo, rápido para abrir desde el teléfono en un estadio.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "HTML-first, Firebase for sync, no SPA framework overhead. The simulator was added as a parallel feature — not a destructive pivot — to keep the core ritual intact while letting people play out scenarios.",
          es: "HTML primero, Firebase para sincronizar, sin overhead de framework SPA. El simulador se sumó como feature paralela — no como pivot destructivo — para mantener el ritual central intacto y dejar jugar escenarios.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Active during the tournament window. Designed to disappear into the background of a long evening.",
          es: "Activo durante la ventana del torneo. Diseñado para desaparecer en el fondo de una noche larga.",
        },
      },
    ],
  },
  {
    slug: "lumina",
    number: "02",
    name: "Lumina",
    tagline: {
      en: "Appointment booking, distilled.",
      es: "Reserva de citas, destilada.",
    },
    description: {
      en: "A SaaS for appointment booking — phase-by-phase build on Next 16, Supabase, and shadcn/ui v4.",
      es: "Un SaaS de reserva de citas — construido fase a fase sobre Next 16, Supabase y shadcn/ui v4.",
    },
    year: "2026",
    role: { en: "Full-stack", es: "Full-stack" },
    stack: ["Next.js 16", "Supabase", "shadcn/ui", "Tailwind v4"],
    status: "in-progress",
    url: undefined,
    repo: undefined,
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "An appointment booking SaaS that removes friction from scheduling without inventing five new concepts for users to learn.",
          es: "Un SaaS de reserva de citas que saca la fricción de agendar sin inventar cinco conceptos nuevos para aprender.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Spec-driven, phase-by-phase implementation. Deploy via Vercel Git integration; manual SQL migrations for full control over schema evolution. Auth, calendar, availability, and notifications composed from first principles.",
          es: "Implementación por fases guiada por spec. Deploy vía integración Git de Vercel; migraciones SQL manuales para control total sobre la evolución del schema. Auth, calendario, disponibilidad y notificaciones compuestos desde primeros principios.",
        },
      },
      {
        heading: "Status",
        body: {
          en: "In active development. Shipping in vertical slices that work end-to-end before broadening.",
          es: "En desarrollo activo. Lanzando en rebanadas verticales que funcionan punta a punta antes de ensanchar.",
        },
      },
    ],
  },
  {
    slug: "optimal-routine-builder",
    number: "03",
    name: "Optimal Routine Builder",
    tagline: {
      en: "AI-tailored training, end-to-end.",
      es: "Entrenamiento personalizado por IA, punta a punta.",
    },
    description: {
      en: "A workout generator that pairs Gemini with a structured movement library. Vite + React 19 + Supabase.",
      es: "Un generador de rutinas que combina Gemini con una librería estructurada de movimientos. Vite + React 19 + Supabase.",
    },
    year: "2026",
    role: { en: "Design — Build", es: "Diseño — Desarrollo" },
    stack: ["Vite", "React 19", "Gemini API", "Supabase"],
    status: "live",
    url: undefined,
    repo: undefined,
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Generate workout routines that are actually personalized — not the same six exercises rebranded by goal label.",
          es: "Generar rutinas de ejercicio que estén realmente personalizadas — no los mismos seis ejercicios rebautizados según el objetivo.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Gemini for plan synthesis, Supabase for persistence, a structured movement library to keep the model honest about volume, frequency, and recovery windows. A theme sandbox runs in parallel for skin experiments without touching production.",
          es: "Gemini para sintetizar el plan, Supabase para persistir, una librería estructurada de movimientos para mantener honesto al modelo sobre volumen, frecuencia y ventanas de recuperación. Un sandbox de temas corre en paralelo para experimentar skins sin tocar producción.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Shipped and iterating. The most-used surface is the weekly view; routines export cleanly.",
          es: "Lanzado e iterando. La superficie más usada es la vista semanal; las rutinas exportan limpias.",
        },
      },
    ],
  },
  {
    slug: "mapitas",
    number: "04",
    name: "Mapitas",
    tagline: {
      en: "Venezuela's territory, made legible.",
      es: "El territorio de Venezuela, hecho legible.",
    },
    description: {
      en: "Maps and CSVs of Venezuela's municipalities. Static-first, no backend, Apple/Anthropic-leaning UI.",
      es: "Mapas y CSV de los municipios de Venezuela. Estático primero, sin backend, UI cercana a Apple/Anthropic.",
    },
    year: "2026",
    role: { en: "Design — Build", es: "Diseño — Desarrollo" },
    stack: ["Vite", "React 19", "Leaflet", "Zustand"],
    status: "live",
    url: undefined,
    repo: undefined,
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Make the territorial structure of Venezuela legible — municipalities, demographics, populations — without burying the data in a CMS or a paywall.",
          es: "Hacer legible la estructura territorial de Venezuela — municipios, demografía, poblaciones — sin enterrar los datos en un CMS ni detrás de un paywall.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Static-first. CSVs as the source of truth, parsed at build time. Leaflet for the map layer, Zustand for filter state. No backend, no auth, no friction.",
          es: "Estático primero. CSV como fuente de verdad, parseados al build. Leaflet para la capa de mapa, Zustand para el estado de filtros. Sin backend, sin auth, sin fricción.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Live and embeddable. Designed to be quoted from, not curated through.",
          es: "En vivo y embebible. Diseñado para citarse, no para curarse.",
        },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
