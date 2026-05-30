export type ProjectStatus = "live" | "in-progress" | "archived";

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  status: ProjectStatus;
  url?: string;
  repo?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "prode-mundial-2026",
    number: "01",
    name: "Prode Mundial 2026",
    tagline:
      "A collaborative ritual for the world's most-watched tournament.",
    description:
      "Predictor app for the 2026 FIFA World Cup — multi-feature, collaborative, with parallel simulator and live standings.",
    year: "2026",
    role: "Design — Build",
    stack: ["HTML", "Firebase", "Vanilla JS"],
    status: "live",
    sections: [
      {
        heading: "Brief",
        body: "Build a Prode for the 2026 FIFA World Cup that survives a group chat of friends arguing about whether Mexico will make the round of 16. Low-friction, collaborative, fast to load on a phone in a stadium.",
      },
      {
        heading: "Approach",
        body: "HTML-first, Firebase for sync, no SPA framework overhead. The simulator was added as a parallel feature — not a destructive pivot — to keep the core ritual intact while letting people play out scenarios.",
      },
      {
        heading: "Outcome",
        body: "Active during the tournament window. Designed to disappear into the background of a long evening.",
      },
    ],
  },
  {
    slug: "lumina",
    number: "02",
    name: "Lumina",
    tagline: "Appointment booking, distilled.",
    description:
      "A SaaS for appointment booking — phase-by-phase build on Next 16, Supabase, and shadcn/ui v4.",
    year: "2026",
    role: "Full-stack",
    stack: ["Next.js 16", "Supabase", "shadcn/ui", "Tailwind v4"],
    status: "in-progress",
    sections: [
      {
        heading: "Brief",
        body: "An appointment booking SaaS that removes friction from scheduling without inventing five new concepts for users to learn.",
      },
      {
        heading: "Approach",
        body: "Spec-driven, phase-by-phase implementation. Deploy via Vercel Git integration; manual SQL migrations for full control over schema evolution. Auth, calendar, availability, and notifications composed from first principles.",
      },
      {
        heading: "Status",
        body: "In active development. Shipping in vertical slices that work end-to-end before broadening.",
      },
    ],
  },
  {
    slug: "optimal-routine-builder",
    number: "03",
    name: "Optimal Routine Builder",
    tagline: "AI-tailored training, end-to-end.",
    description:
      "A workout generator that pairs Gemini with a structured movement library. Vite + React 19 + Supabase.",
    year: "2026",
    role: "Design — Build",
    stack: ["Vite", "React 19", "Gemini API", "Supabase"],
    status: "live",
    sections: [
      {
        heading: "Brief",
        body: "Generate workout routines that are actually personalized — not the same six exercises rebranded by goal label.",
      },
      {
        heading: "Approach",
        body: "Gemini for plan synthesis, Supabase for persistence, a structured movement library to keep the model honest about volume, frequency, and recovery windows. A theme sandbox runs in parallel for skin experiments without touching production.",
      },
      {
        heading: "Outcome",
        body: "Shipped and iterating. The most-used surface is the weekly view; routines export cleanly.",
      },
    ],
  },
  {
    slug: "mapitas",
    number: "04",
    name: "Mapitas",
    tagline: "Venezuela's territory, made legible.",
    description:
      "Maps and CSVs of Venezuela's municipalities. Static-first, no backend, Apple/Anthropic-leaning UI.",
    year: "2026",
    role: "Design — Build",
    stack: ["Vite", "React 19", "Leaflet", "Zustand"],
    status: "live",
    sections: [
      {
        heading: "Brief",
        body: "Make the territorial structure of Venezuela legible — municipalities, demographics, populations — without burying the data in a CMS or a paywall.",
      },
      {
        heading: "Approach",
        body: "Static-first. CSVs as the source of truth, parsed at build time. Leaflet for the map layer, Zustand for filter state. No backend, no auth, no friction.",
      },
      {
        heading: "Outcome",
        body: "Live and embeddable. Designed to be quoted from, not curated through.",
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
