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

const designBuild: LocalizedString = {
  en: "Design — Build",
  es: "Diseño — Desarrollo",
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
    role: designBuild,
    stack: ["HTML", "Firebase", "Vanilla JS"],
    status: "live",
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
    role: designBuild,
    stack: ["Vite", "React 19", "Gemini API", "Supabase"],
    status: "live",
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
    role: designBuild,
    stack: ["Vite", "React 19", "Leaflet", "Zustand"],
    status: "live",
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
  {
    slug: "bronco-drift",
    number: "05",
    name: "Bronco Drift",
    tagline: {
      en: "Free, working apps under one roof.",
      es: "Apps gratis y funcionales bajo un mismo techo.",
    },
    description: {
      en: "Landing/hub for the small apps published under the Bronco Drift handle.",
      es: "Landing/hub para las pequeñas apps publicadas bajo el handle Bronco Drift.",
    },
    year: "2025",
    role: designBuild,
    stack: ["Vite", "React", "Vercel"],
    status: "live",
    url: "https://bronco-drift.vercel.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A directory + showcase for the working name's growing collection of small apps.",
          es: "Un directorio + vidriera para la colección creciente de pequeñas apps bajo el handle.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Vite + React, deployed on Vercel. Lean, self-contained, easy to extend as new apps ship.",
          es: "Vite + React, desplegado en Vercel. Liviano, autocontenido, fácil de extender a medida que salen nuevas apps.",
        },
      },
    ],
  },
  {
    slug: "vikings-txt",
    number: "06",
    name: "Vikings.TXT",
    tagline: {
      en: "A retro TXT mini-game, brought back from Python.",
      es: "Un mini-juego TXT retro, traído de vuelta desde Python.",
    },
    description: {
      en: "Text-based adventure originally built in Python, recreated for the browser with retro TXT visuals.",
      es: "Aventura basada en texto originalmente hecha en Python, recreada en el navegador con visuales TXT retro.",
    },
    year: "2024",
    role: designBuild,
    stack: ["HTML", "CSS", "JavaScript"],
    status: "live",
    url: "https://vikings-jade.vercel.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Bring an old Python mini-game I made years ago back to life — in the browser, with the retro look intact.",
          es: "Resucitar un mini-juego en Python que hice hace años — ahora en el navegador, con la estética retro intacta.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Pure HTML/CSS/JS recreating the TXT feel. Monospace type, terminal-style frames, intentional period aesthetic. Mechanics ported directly from the original.",
          es: "HTML/CSS/JS puro recreando el feel TXT. Type monospace, marcos estilo terminal, estética de época intencional. Mecánicas portadas directo del original.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Playable in any browser.",
          es: "Jugable en cualquier navegador.",
        },
      },
    ],
  },
  {
    slug: "fuerzapp",
    number: "07",
    name: "FuerzAPP",
    tagline: {
      en: "A no-friction workout logger.",
      es: "Un registro de entrenamientos sin fricción.",
    },
    description: {
      en: "Training log focused on speed of entry and clear progress views.",
      es: "Registro de entrenamientos enfocado en velocidad de carga y vistas de progreso claras.",
    },
    year: "2024",
    role: designBuild,
    stack: ["HTML", "JavaScript", "PWA"],
    status: "live",
    url: "https://fuerzapp3c.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Log a workout in the time it takes to drink a sip of water between sets.",
          es: "Registrar un entrenamiento en lo que tardás en tomar un trago de agua entre series.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "One-thumb logging, big tap targets, minimal navigation. Designed for use mid-set, not between sessions.",
          es: "Registro a un solo pulgar, áreas de tap grandes, navegación mínima. Diseñado para usar en plena serie, no entre sesiones.",
        },
      },
    ],
  },
  {
    slug: "bookmark-studio",
    number: "08",
    name: "Bookmark Studio",
    tagline: {
      en: "Design and print custom double-sided bookmarks.",
      es: "Diseñá e imprimí marcapáginas a doble cara, listos para cortar.",
    },
    description: {
      en: "PWA for designing and printing double-sided bookmarks with precise alignment and cut guides.",
      es: "PWA para diseñar e imprimir marcapáginas a doble cara con alineación precisa y guías de corte.",
    },
    year: "2025",
    role: designBuild,
    stack: ["HTML", "JavaScript", "PWA"],
    status: "live",
    url: "https://bookmarkstudio.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A tool to design, lay out, and print custom double-sided bookmarks — with cut guides and impeccable front-back alignment.",
          es: "Una herramienta para diseñar, maquetar e imprimir marcapáginas a doble cara — con guías de corte y alineación impecable entre frente y dorso.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Browser-side PWA. Drop in images, type captions, hit print. Works offline; nothing leaves the device.",
          es: "PWA client-side. Arrastrás imágenes, escribís captions, imprimís. Funciona offline; nada sale del dispositivo.",
        },
      },
    ],
  },
  {
    slug: "tog-tandem-reader",
    number: "09",
    name: "Throne of Glass — Tandem Reader",
    tagline: {
      en: "Reading-order tracker for the Throne of Glass tandem read.",
      es: "Tracker del orden de lectura tandem de Throne of Glass.",
    },
    description: {
      en: "Progress tracker for reading the Throne of Glass series in tandem — interleaving chapters across books in the right order.",
      es: "Tracker de progreso para leer la saga Throne of Glass en tandem — intercalando capítulos entre libros en el orden correcto.",
    },
    year: "2024",
    role: designBuild,
    stack: ["HTML", "JavaScript"],
    status: "live",
    url: "https://zingy-eclair-ec9466.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Make the tandem reading order of the Throne of Glass series legible and trackable — without printing a chart.",
          es: "Hacer legible y trackeable el orden tandem de lectura de la saga Throne of Glass — sin imprimir un cuadro.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Static reading list with progress state. One tap per chapter. Saves locally; no account, no sync.",
          es: "Lista estática de lectura con estado de progreso. Un tap por capítulo. Guarda local; sin cuenta, sin sync.",
        },
      },
    ],
  },
  {
    slug: "rally-aesthetic",
    number: "10",
    name: "Rally Aesthetic",
    tagline: {
      en: "A rally-inspired aesthetic experiment, still in beta.",
      es: "Un experimento estético inspirado en rally, todavía en beta.",
    },
    description: {
      en: "HTML playground exploring rally racing aesthetics — type, color, motion.",
      es: "Playground HTML explorando estética de rally — type, color, motion.",
    },
    year: "2026",
    role: designBuild,
    stack: ["HTML", "CSS"],
    status: "in-progress",
    url: "https://jolly-stardust-0d4ce7.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A visual experiment around rally racing tropes — type, color, motion — without committing to a product.",
          es: "Un experimento visual alrededor de los tropos del rally — type, color, motion — sin comprometerse con un producto.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Pure HTML/CSS, no framework. Iterating on the right balance between authentic and overwrought. Still in beta.",
          es: "HTML/CSS puro, sin framework. Iterando el balance entre auténtico y excesivo. Todavía en beta.",
        },
      },
    ],
  },
  {
    slug: "greekyogurt-ar",
    number: "11",
    name: "GreekYogurt.ar",
    tagline: {
      en: "Landing for a small-batch Greek yogurt brand in Buenos Aires.",
      es: "Landing para una marca artesanal de yogur griego en Buenos Aires.",
    },
    description: {
      en: "Brand landing — handmade in Buenos Aires, 100% natural, no preservatives.",
      es: "Landing de marca — hecho a mano en Buenos Aires, 100% natural, sin conservantes.",
    },
    year: "2025",
    role: designBuild,
    stack: ["HTML", "CSS"],
    status: "live",
    url: "https://radiant-souffle-3ad212.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A landing page for a small-batch Greek yogurt brand. Handmade in Buenos Aires, 100% natural, no preservatives.",
          es: "Una landing para una marca de yogur griego artesanal. Hecho a mano en Buenos Aires, 100% natural, sin conservantes.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Product story above the fold. Clean type, warm photography, direct purchase path.",
          es: "Historia de producto sobre el fold. Type limpia, fotografía cálida, camino directo a la compra.",
        },
      },
    ],
  },
  {
    slug: "webstudio-argentina",
    number: "12",
    name: "WebStudio Argentina",
    tagline: {
      en: "A small studio shipping modern, fast websites.",
      es: "Un estudio pequeño entregando sitios web modernos y rápidos.",
    },
    description: {
      en: "Studio landing offering modern, fast web development for Argentine SMBs.",
      es: "Landing del estudio ofreciendo desarrollo web moderno y rápido para PyMEs argentinas.",
    },
    year: "2024",
    role: designBuild,
    stack: ["HTML", "CSS"],
    status: "live",
    url: "https://webstudioargentina.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A landing for a small web studio shipping fast, modern sites.",
          es: "Una landing para un pequeño estudio web que entrega sitios modernos y rápidos.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Copy-led, clear tiers, built to convert. Lightweight by design.",
          es: "Copy al frente, tiers claros, hecho para convertir. Liviano por diseño.",
        },
      },
    ],
  },
  {
    slug: "mauro-barbershop",
    number: "13",
    name: "MAURO Barbershop",
    tagline: {
      en: "Brand and booking site for a premium Buenos Aires barbershop.",
      es: "Branding y reservas para una barbería premium en Buenos Aires.",
    },
    description: {
      en: "Web presence for MAURO — a Buenos Aires barbershop with two decades of cuts behind it.",
      es: "Presencia web para MAURO — una barbería de Buenos Aires con dos décadas de cortes a cuestas.",
    },
    year: "2025",
    role: designBuild,
    stack: ["Next.js", "React"],
    status: "live",
    url: "https://statuesque-kulfi-e272b8.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A site that matches the chair: refined, confident, no fluff.",
          es: "Un sitio a la altura del sillón: refinado, seguro, sin relleno.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Clean type, strong portrait photography, simple booking flow. Built for a barbershop with two decades of cuts behind it.",
          es: "Type limpia, fotografía de retrato fuerte, flujo de reserva simple. Hecho para una barbería con dos décadas de cortes a cuestas.",
        },
      },
    ],
  },
  {
    slug: "laztana-bistro",
    number: "14",
    name: "Laztana Bistró",
    tagline: {
      en: "An intimate fine-dining bistro in Buenos Aires.",
      es: "Un bistró íntimo de cocina de autor en Buenos Aires.",
    },
    description: {
      en: "Restaurant site for Laztana — author-driven cuisine and reservations.",
      es: "Sitio para Laztana — cocina de autor y reservas.",
    },
    year: "2025",
    role: designBuild,
    stack: ["HTML", "CSS", "JavaScript"],
    status: "live",
    url: "https://vocal-shortbread-6e441d.netlify.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A restaurant site that doesn't get in the way of 'book a table.'",
          es: "Un sitio de restaurante que no se mete entre vos y 'reservar mesa'.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Plate photography front and center, copy that gets out of the way, reservation a tap away.",
          es: "Fotografía de platos al frente, copy que se hace a un lado, reserva a un tap de distancia.",
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
