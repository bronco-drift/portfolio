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
    slug: "lumina",
    number: "01",
    name: "Lumina",
    tagline: {
      en: "Appointment booking, distilled.",
      es: "Reservar turnos, sin vueltas.",
    },
    description: {
      en: "A SaaS for appointment booking — phase-by-phase build on Next 16, Supabase, and shadcn/ui v4.",
      es: "Un SaaS para reservar turnos — armado fase a fase sobre Next 16, Supabase y shadcn/ui v4.",
    },
    year: "2026",
    role: { en: "Full-stack", es: "Full-stack" },
    stack: ["Next.js 16", "Supabase", "shadcn/ui", "Tailwind v4"],
    status: "in-progress",
    url: "https://luminaagenda.click/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "An appointment booking SaaS that removes friction from scheduling without inventing five new concepts for users to learn.",
          es: "Un SaaS para reservar turnos que no obliga al usuario a aprender cinco conceptos nuevos antes de agendar.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Spec-driven, phase-by-phase implementation. Deploy via Vercel Git integration; manual SQL migrations for full control over schema evolution. Auth, calendar, availability, and notifications composed from first principles.",
          es: "Implementación por fases guiada por spec. Deploy automático con la integración Git de Vercel; migraciones SQL a mano para tener control total del schema. Auth, calendario, disponibilidad y notificaciones armados desde cero.",
        },
      },
      {
        heading: "Status",
        body: {
          en: "In active development. Shipping in vertical slices that work end-to-end before broadening.",
          es: "En desarrollo activo. Saco features completas que funcionan punta a punta antes de seguir agregando.",
        },
      },
    ],
  },
  {
    slug: "mapitas",
    number: "02",
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
    url: "https://mapitas-omega.vercel.app/",
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
          es: "Estático primero. Los CSV son la fuente de verdad, se parsean al build. Leaflet para la capa de mapa, Zustand para el estado de filtros. Sin backend, sin auth, sin fricción.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Live and embeddable. Designed to be quoted from, not curated through.",
          es: "En vivo y embebible. Pensado para citar los datos, no para perderse adentro.",
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
    url: "https://optimal-routine-builder.vercel.app/",
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
          es: "Gemini sintetiza el plan, Supabase guarda, y una librería estructurada de movimientos mantiene al modelo a raya con volumen, frecuencia y descansos. En paralelo corre un sandbox de temas para experimentar skins sin tocar producción.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Shipped and iterating. The most-used surface is the weekly view; routines export cleanly.",
          es: "Lanzado y en iteración. Lo más usado es la vista semanal; las rutinas exportan limpias.",
        },
      },
    ],
  },
  {
    slug: "misclientes",
    number: "04",
    name: "misclientes",
    tagline: {
      en: "A two-in-one PWA: LATAM dollar rates + a personal tools stack.",
      es: "Una PWA dos-en-uno: cotización del dólar en LATAM + un stack propio de herramientas.",
    },
    description: {
      en: "Landing for LATAM dollar rates (AR + VE) with a growing bench of personal tools: CRM, expenses, subscriptions, PTO planner, habits, kanban, and games.",
      es: "Landing de cotizaciones del dólar en LATAM (AR + VE) con un banco creciente de herramientas personales: CRM, gastos, suscripciones, planner de PTO, hábitos, kanban y juegos.",
    },
    year: "2026",
    role: designBuild,
    stack: ["Vite", "React 19", "TypeScript", "PWA"],
    status: "live",
    url: "https://misclientes.vercel.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A practice project for backend and frontend chops that ended up as a daily driver — dollar rates on top, a growing bench of personal tools underneath.",
          es: "Un proyecto de práctica para backend y frontend que terminó siendo de uso diario — cotizaciones del dólar arriba, un banco creciente de herramientas personales abajo.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Vite + React 19 + TypeScript, PWA with safe areas and offline. All state in localStorage; module-frontier files (storage.ts, cotizaciones.ts) let the future backend swap in without touching views. Structured by domain, not tech.",
          es: "Vite + React 19 + TypeScript, PWA con safe areas y offline. Todo el estado en localStorage; archivos frontera (storage.ts, cotizaciones.ts) dejan que el backend futuro entre sin tocar las vistas. Estructurado por dominio, no por tecnología.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "In production. Eight tools shipped and in daily use.",
          es: "En producción. Ocho herramientas lanzadas y en uso diario.",
        },
      },
    ],
  },
  {
    slug: "prode-mundial-2026",
    number: "05",
    name: "Prode Mundial 2026",
    tagline: {
      en: "A collaborative ritual for the world's most-watched tournament.",
      es: "Un ritual colaborativo para el torneo más visto del mundo.",
    },
    description: {
      en: "Predictor app for the 2026 FIFA World Cup — multi-feature, collaborative, with parallel simulator and live standings.",
      es: "App de Prode para el Mundial 2026 — colaborativa, con simulador paralelo y posiciones en vivo.",
    },
    year: "2026",
    role: designBuild,
    stack: ["HTML", "Firebase", "Vanilla JS"],
    status: "live",
    url: "https://martroal.github.io/prode-mundial-2026/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Build a Prode for the 2026 FIFA World Cup that survives a group chat of friends arguing about whether Mexico will make the round of 16. Low-friction, collaborative, fast to load on a phone in a stadium.",
          es: "Hacer un Prode para el Mundial 2026 que aguante a un grupo de amigos discutiendo si México pasa de octavos. Sin fricción, colaborativo, rápido de abrir desde el teléfono en un estadio.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "HTML-first, Firebase for sync, no SPA framework overhead. The simulator was added as a parallel feature — not a destructive pivot — to keep the core ritual intact while letting people play out scenarios.",
          es: "HTML primero, Firebase para sincronizar, sin overhead de framework SPA. El simulador entró como feature paralela — no como pivot destructivo — para no romper el ritual original y dejar jugar escenarios igual.",
        },
      },
      {
        heading: "Outcome",
        body: {
          en: "Active during the tournament window. Designed to disappear into the background of a long evening.",
          es: "Activo durante toda la ventana del torneo. Pensado para desaparecer en el fondo de una noche larga.",
        },
      },
    ],
  },
  {
    slug: "mauro-barbershop",
    number: "06",
    name: "MAURO Barbershop",
    tagline: {
      en: "Brand and booking site for a premium Buenos Aires barbershop.",
      es: "Sitio y reservas para una barbería premium de Buenos Aires.",
    },
    description: {
      en: "Web presence for MAURO — a Buenos Aires barbershop with two decades of cuts behind it.",
      es: "Sitio para MAURO — una barbería de Buenos Aires con veinte años de cortes encima.",
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
          es: "Un sitio a la altura del sillón: refinado, firme, sin relleno.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Clean type, strong portrait photography, simple booking flow. Built for a barbershop with two decades of cuts behind it.",
          es: "Tipografía limpia, fotografía de retrato fuerte y reserva en pocos pasos. Para una barbería con veinte años de cortes encima.",
        },
      },
    ],
  },
  {
    slug: "laztana-bistro",
    number: "07",
    name: "Laztana Bistró",
    tagline: {
      en: "An intimate fine-dining bistro in Buenos Aires.",
      es: "Bistró íntimo de cocina de autor en Buenos Aires.",
    },
    description: {
      en: "Restaurant site for Laztana — author-driven cuisine and reservations.",
      es: "Sitio para Laztana — cocina de autor con reserva en línea.",
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
          es: "Un sitio de restaurante que no se mete entre vos y la reserva.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Plate photography front and center, copy that gets out of the way, reservation a tap away.",
          es: "Fotografía de platos al frente, copy que se hace a un lado y la reserva a un tap de distancia.",
        },
      },
    ],
  },
  {
    slug: "verduras-ar",
    number: "08",
    name: "verduras.ar",
    tagline: {
      en: "Fresh produce and pantry, delivered.",
      es: "Frutas, verduras y almacén a domicilio.",
    },
    description: {
      en: "Online grocery for a neighborhood greengrocer — home delivery or local pickup, with admin and order tracking.",
      es: "Almacén online para una verdulería de barrio — envío a domicilio o retiro en local, con panel admin y tracking de pedidos.",
    },
    year: "2025",
    role: designBuild,
    stack: ["HTML", "JavaScript"],
    status: "live",
    url: "https://verduleria-virid.vercel.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Online grocery delivery for fresh produce and pantry — designed for a corner shop, not a chain.",
          es: "Delivery online de frutas, verduras y almacén — pensado para un local de barrio, no para una cadena.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Admin panel, order tracking, map for delivery zones, mobile-first ordering. Modal-driven flows to keep navigation shallow.",
          es: "Panel admin, tracking de pedidos, mapa de zonas de delivery y pedido mobile-first. Los flujos van por modales para que la navegación quede simple, sin pantallas anidadas.",
        },
      },
    ],
  },
  {
    slug: "izifud",
    number: "09",
    name: "IZIFUD",
    tagline: {
      en: "A B2B food-ordering platform — for the platform, not the restaurant.",
      es: "Plataforma B2B de pedidos de restaurantes — para la plataforma, no para el local.",
    },
    description: {
      en: "Multi-tenant food ordering with four roles (customer, partner, admin, rider), multi-country (AR + VE), non-fiscal receipts, and no payment gateway — cash and Pago Móvil / transfer verified by the partner.",
      es: "Pedidos multi-tenant con cuatro roles (cliente, socio, admin, rider), multi-país (AR + VE), comprobantes no fiscales y sin pasarela de pago — efectivo y Pago Móvil / transferencia verificados por el socio.",
    },
    year: "2026",
    role: designBuild,
    stack: ["HTML", "JavaScript", "PWA", "Leaflet"],
    status: "in-progress",
    url: "https://verduleria-git-comida-bronco-drift.vercel.app/",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "The platform is the product — restaurants are B2B customers. Design for a market where card payments are rare and cash or Pago Móvil dominate.",
          es: "La plataforma es el producto — los restaurantes son clientes B2B. Diseñado para un mercado donde la tarjeta es rara y manda el efectivo o el Pago Móvil.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "HTML-first, single-file frontend continuing the verduras.ar codebase. Role bar with impersonation for dev, live map deliveries with Leaflet + Nominatim, per-partner exchange rates frozen at order time.",
          es: "HTML-first, frontend en un solo archivo continuando el código de verduras.ar. Barra de rol con impersonación para dev, entregas con mapa vivo (Leaflet + Nominatim), tasas de cambio por socio congeladas al momento del pedido.",
        },
      },
    ],
  },
  {
    slug: "greekyogurt-ar",
    number: "10",
    name: "GreekYogurt.ar",
    tagline: {
      en: "Landing for a small-batch Greek yogurt brand in Buenos Aires.",
      es: "Landing para una marca de yogur griego artesanal hecho en Buenos Aires.",
    },
    description: {
      en: "Brand landing — handmade in Buenos Aires, 100% natural, no preservatives.",
      es: "Landing de marca — hecho a mano en Buenos Aires, 100% natural y sin conservantes.",
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
          es: "Landing para una marca chica de yogur griego artesanal. Hecho a mano en Buenos Aires, 100% natural y sin conservantes.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Product story above the fold. Clean type, warm photography, direct purchase path.",
          es: "La historia del producto arriba de todo. Tipografía limpia, fotografía cálida y la compra a un par de clics.",
        },
      },
    ],
  },
  {
    slug: "bronco-drift",
    number: "11",
    name: "Bronco Drift",
    tagline: {
      en: "Free, working apps under one roof.",
      es: "Apps gratis y funcionales bajo un mismo techo.",
    },
    description: {
      en: "Landing/hub for the small apps published under the Bronco Drift handle.",
      es: "Landing/hub de las apps que publico bajo el nombre Bronco Drift.",
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
          es: "Un directorio + vidriera para las apps que voy publicando bajo Bronco Drift.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Vite + React, deployed on Vercel. Lean, self-contained, easy to extend as new apps ship.",
          es: "Vite + React, deploy en Vercel. Liviano, autocontenido, fácil de extender cuando salen nuevas apps.",
        },
      },
    ],
  },
  {
    slug: "la-guia",
    number: "12",
    name: "La Guía",
    tagline: {
      en: "A working guide to building webapps with Claude.",
      es: "Una guía viva para construir webapps con Claude.",
    },
    description: {
      en: "Method guides with two views over the same content and progress — Steps (revealed as you complete) and Document (full read with anchored index).",
      es: "Guías del método con dos vistas sobre el mismo contenido y progreso — Pasos (se van revelando al completar) y Documento (lectura completa con índice anclado).",
    },
    year: "2026",
    role: designBuild,
    stack: ["Vite", "React 19", "PWA"],
    status: "in-progress",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Turn the method I use to build small webapps with Claude into a set of guides someone else can follow.",
          es: "Convertir el método que uso para construir webapps chicas con Claude en un set de guías que otra persona pueda seguir.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Single source of truth in guias.js — the same steps feed both the Steps and Document views. PWA with local progress, toggle between editorial and system typography. AssistiveTouch and Dynamic Island easter eggs for iPhone.",
          es: "Fuente única de verdad en guias.js — los mismos pasos alimentan las vistas Pasos y Documento. PWA con progreso local, toggle entre tipografía editorial y sistema. Easter eggs de AssistiveTouch y Dynamic Island para iPhone.",
        },
      },
    ],
  },
  {
    slug: "banco-api",
    number: "13",
    name: "Banco API",
    tagline: {
      en: "A visual sandbox for API integrations — to learn and to teach.",
      es: "Un sandbox visual de integraciones API — para aprender y para enseñar.",
    },
    description: {
      en: "Interactive canvas with two configurable systems and a signal traveling between them. Two modes: a single request, or hourly sync with delta and matching key.",
      es: "Canvas interactivo con dos sistemas configurables y una señal que viaja entre ellos. Dos modos: un pedido suelto, o sincronización por hora con delta y clave de coincidencia.",
    },
    year: "2026",
    role: designBuild,
    stack: ["HTML", "JavaScript"],
    status: "in-progress",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Explain API integrations visually — HTTP methods, timeouts, credentials, upserts, and the two aha moments (timeout with a duplicate saved on the other side; matching by name instead of id).",
          es: "Explicar integraciones API de forma visual — métodos HTTP, timeouts, credenciales, upserts, y los dos aha (timeout con duplicado guardado del otro lado; coincidir por nombre en vez de por id).",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Simple by default, deep if you open it. Single HTML file, no dependencies. Scenarios one click away, fine controls tucked into <details>. Optional middleware as a third box, off by default.",
          es: "Simple por default, profundo si lo abrís. Un solo archivo HTML, sin dependencias. Escenarios a un clic, controles finos en <details>. Middleware opcional como tercera caja, apagado por default.",
        },
      },
    ],
  },
  {
    slug: "fuerzapp",
    number: "14",
    name: "FuerzAPP",
    tagline: {
      en: "A no-friction workout logger.",
      es: "Anotar entrenamientos sin trabarse.",
    },
    description: {
      en: "Training log focused on speed of entry and clear progress views.",
      es: "Registro de entrenamientos enfocado en cargar rápido y mostrar el progreso claro.",
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
          es: "Anotar una serie en lo que tardás en tomar un trago de agua entre repeticiones.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "One-thumb logging, big tap targets, minimal navigation. Designed for use mid-set, not between sessions.",
          es: "Manejable con un solo pulgar, botones grandes, navegación mínima. Pensado para usar en plena serie, no entre sesiones.",
        },
      },
    ],
  },
  {
    slug: "bookmark-studio",
    number: "15",
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
          es: "PWA client-side. Tirás las imágenes adentro, escribís los textos, imprimís. Funciona offline; nada sale del dispositivo.",
        },
      },
    ],
  },
  {
    slug: "tog-tandem-reader",
    number: "16",
    name: "Throne of Glass — Tandem Reader",
    tagline: {
      en: "Reading-order tracker for the Throne of Glass tandem read.",
      es: "Orden de lectura en tandem de Throne of Glass, marcado capítulo a capítulo.",
    },
    description: {
      en: "Progress tracker for reading the Throne of Glass series in tandem — interleaving chapters across books in the right order.",
      es: "Tracker para leer la saga Throne of Glass en tandem — intercalando capítulos de varios libros en el orden correcto.",
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
          es: "Hacer claro y trackeable el orden tandem de lectura de Throne of Glass, sin tener que imprimirse un cuadro.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Static reading list with progress state. One tap per chapter. Saves locally; no account, no sync.",
          es: "Lista estática de lectura con estado de progreso. Un tap por capítulo. Guarda local; sin cuenta y sin sync.",
        },
      },
    ],
  },
  {
    slug: "mi-server",
    number: "17",
    name: "mi-server",
    tagline: {
      en: "A home server for moving files between phone and PC.",
      es: "Un server casero para mover archivos entre teléfono y PC.",
    },
    description: {
      en: "Zero-dependency Node server with PIN login, session persistence, LAN + ssh tunnel access, PWA, and a chat channel for cross-device messages.",
      es: "Server Node cero-deps con login PIN, sesiones persistentes, acceso LAN + túnel ssh, PWA y canal de chat para mensajes entre dispositivos.",
    },
    year: "2026",
    role: designBuild,
    stack: ["Node", "PWA"],
    status: "live",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "My first server — files between phone and PC, no third-party app, no cloud, my rules.",
          es: "Mi primer server — archivos entre teléfono y PC, sin app de terceros, sin nube, mis reglas.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Node with zero dependencies, port 4200 on LAN. The ssh that ships with Windows handles the tunnel to localhost.run — no need for Tailscale. PIN in a text file, sessions in JSON to survive reloads, PWA installable on the phone.",
          es: "Node sin dependencias, puerto 4200 en LAN. El ssh que viene con Windows maneja el túnel a localhost.run — no hace falta Tailscale. PIN en un archivo de texto, sesiones en JSON para sobrevivir a los reloads, PWA instalable en el teléfono.",
        },
      },
    ],
  },
  {
    slug: "arcade-coop",
    number: "18",
    name: "Arcade Coop",
    tagline: {
      en: "A 2-player arcade portal on the way to 100 games.",
      es: "Un portal arcade 2 jugadores rumbo a 100 juegos.",
    },
    description: {
      en: "Growing catalog of 2-player arcade games — coop and 1v1, gamepad or keyboard, retro CRT aesthetic. Currently 49/100.",
      es: "Catálogo creciente de juegos arcade para 2 — coop y 1v1, con gamepad o teclado, estética CRT retro. Van 49/100.",
    },
    year: "2026",
    role: designBuild,
    stack: ["HTML", "Canvas", "Three.js", "Gamepad API"],
    status: "in-progress",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "A living arcade for the couch — one shared TV, two players, dozens of quick games. Playable with Bluetooth gamepads or keyboard.",
          es: "Un arcade vivo para el sillón — una TV compartida, dos jugadores, decenas de juegos cortos. Se juega con gamepads Bluetooth o teclado.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "HTML static, no build. catalogo.js as the single source of truth. A shared lib/arcade.js handles pad slot assignment (by button press, not index — Windows exposes phantom pads at low indices), zoom for 4K TVs, pause menu, and a stats + audit toolchain that watches all 49 games without touching them.",
          es: "HTML estático, sin build. catalogo.js como única fuente de verdad. Una lib/arcade.js compartida hace la asignación de pads (por botonazo, no por índice — Windows expone pads fantasma en índices bajos), zoom para TVs 4K, menú de pausa, y un toolchain de stats + auditoría que mira los 49 juegos sin tocarlos.",
        },
      },
    ],
  },
  {
    slug: "xavo-kobrax",
    number: "19",
    name: "Xavo y Kobrax",
    tagline: {
      en: "A soccer-flavored platformer, Mario-style, from potrero to Europe.",
      es: "Un plataformas futbolero estilo Mario clásico, del potrero a Europa.",
    },
    description: {
      en: "Data-driven platformer with 1P, 2P turns, and 2P coop modes. Signature power: the ball-boomerang.",
      es: "Plataformas data-driven con modos 1P, 2P turnos y 2P coop. Poder estrella: la pelota-boomerang.",
    },
    year: "2026",
    role: designBuild,
    stack: ["Vanilla JS", "Canvas", "PWA"],
    status: "in-progress",
    screenshots: [],
    sections: [
      {
        heading: "Brief",
        body: {
          en: "Two friends from Lanús chase a career from the potrero to Europe. Small canvas game — Vanilla JS + Canvas 320×192, no dependencies, PWA installable.",
          es: "Dos amigos de Lanús persiguen la carrera del potrero a Europa. Juego chico — Vanilla JS + Canvas 320×192, sin dependencias, PWA instalable.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Data-driven: config.js for physics, powers, characters, and worlds; levels.js as 12-row ASCII maps with a legend. Level design rules verified empirically with a JS bot doing lookahead. World bank starts with Argentina (4 levels) and Italy (2).",
          es: "Data-driven: config.js para física, poderes, personajes y mundos; levels.js como mapas ASCII de 12 filas con leyenda. Reglas de diseño de niveles verificadas empíricamente con un bot en JS haciendo lookahead. El banco de mundos arranca con Argentina (4 niveles) e Italia (2).",
        },
      },
    ],
  },
  {
    slug: "vikings-txt",
    number: "20",
    name: "Vikings.TXT",
    tagline: {
      en: "A retro TXT mini-game, brought back from Python.",
      es: "Un mini-juego TXT viejo, llevado de Python al navegador con estética retro.",
    },
    description: {
      en: "Text-based adventure originally built in Python, recreated for the browser with retro TXT visuals.",
      es: "Mini-juego de aventura en modo texto que hice en Python, reescrito para el navegador con estética TXT retro.",
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
          es: "Revivir un mini-juego en Python que hice hace años — ahora en el navegador, con la estética retro intacta.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Pure HTML/CSS/JS recreating the TXT feel. Monospace type, terminal-style frames, intentional period aesthetic. Mechanics ported directly from the original.",
          es: "HTML/CSS/JS puro recreando la onda TXT. Tipografía monospace, marcos estilo terminal, estética de época buscada a propósito. Las mecánicas se portaron directo del original.",
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
    slug: "rally-aesthetic",
    number: "21",
    name: "Rally Aesthetic",
    tagline: {
      en: "A rally-inspired aesthetic experiment, still in beta.",
      es: "Un experimento estético inspirado en el rally, todavía en beta.",
    },
    description: {
      en: "HTML playground exploring rally racing aesthetics — type, color, motion.",
      es: "Playground HTML explorando estética de rally — tipografía, color y movimiento.",
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
          es: "Un experimento visual alrededor de los códigos del rally — tipografía, color, movimiento — sin compromiso con un producto.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Pure HTML/CSS, no framework. Iterating on the right balance between authentic and overwrought. Still in beta.",
          es: "HTML/CSS puro, sin framework. Iterando el balance entre auténtico y sobrecargado. Todavía en beta.",
        },
      },
    ],
  },
  {
    slug: "webstudio-argentina",
    number: "22",
    name: "WebStudio Argentina",
    tagline: {
      en: "A small studio shipping modern, fast websites.",
      es: "Estudio chico haciendo sitios web modernos y rápidos.",
    },
    description: {
      en: "Studio landing offering modern, fast web development for Argentine SMBs.",
      es: "Landing del estudio. Desarrollo web moderno y rápido para PyMEs argentinas.",
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
          es: "Landing para un estudio chico que hace sitios modernos y rápidos.",
        },
      },
      {
        heading: "Approach",
        body: {
          en: "Copy-led, clear tiers, built to convert. Lightweight by design.",
          es: "Copy al frente, planes claros, pensado para convertir. Liviano a propósito.",
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
