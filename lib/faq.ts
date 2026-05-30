import type { LocalizedString } from "./i18n";

export type FaqItem = {
  q: LocalizedString;
  a: LocalizedString;
};

export const faqs: FaqItem[] = [
  {
    q: {
      en: "What's your tech stack?",
      es: "¿Con qué stack trabajás?",
    },
    a: {
      en: "React and Next.js (App Router) for production sites, Vite for SPAs and quick experiments, Tailwind v4 for styling, Supabase or Firebase as backend depending on the brief. TypeScript by default. Motion for animation when needed.",
      es: "React y Next.js (App Router) para sitios en producción, Vite para SPAs y experimentos rápidos, Tailwind v4 para estilos, Supabase o Firebase como backend según el brief. TypeScript por default. Motion cuando hay animación.",
    },
  },
  {
    q: {
      en: "When do you pick Next.js over Vite?",
      es: "¿Cuándo elegís Next.js sobre Vite?",
    },
    a: {
      en: "Next.js when SEO, OG images, or per-route metadata matter — anything content-led or shared via link. Vite when it's a true SPA, internal tool, or rapid prototype where SSR is overhead.",
      es: "Next.js cuando importa SEO, OG images o metadata por ruta — todo lo content-led o que se comparte por link. Vite cuando es SPA pura, herramienta interna o prototipo rápido donde el SSR sobra.",
    },
  },
  {
    q: {
      en: "Do you take on client work?",
      es: "¿Hacés trabajos para clientes?",
    },
    a: {
      en: "Yes — restaurants, barbershops, local businesses, and small SaaS teams. MAURO Barbershop, Laztana Bistró, and verduras.ar are recent ones in the work index above.",
      es: "Sí — restaurantes, barberías, comercios locales y equipos chicos de SaaS. MAURO Barbershop, Laztana Bistró y verduras.ar son ejemplos recientes en el índice de arriba.",
    },
  },
  {
    q: {
      en: "What kind of projects do you take?",
      es: "¿Qué tipo de proyectos tomás?",
    },
    a: {
      en: "Landings with a clear conversion goal, SaaS MVPs, internal tools, custom sites without a CMS, and the occasional brand-new product. Less interested in pure marketing pages without a working component.",
      es: "Landings con objetivo claro de conversión, MVPs de SaaS, herramientas internas, sitios a medida sin CMS, y algún producto nuevo de tanto en tanto. Menos interés en páginas de marketing puras sin componente funcional.",
    },
  },
  {
    q: {
      en: "What's the process like?",
      es: "¿Cómo es el proceso?",
    },
    a: {
      en: "Spec-driven and in phases. Each slice ships end-to-end before broadening. Deploy is continuous from the first vertical, so you see progress live — not at a final reveal.",
      es: "Spec-driven y por fases. Cada rebanada sale punta a punta antes de ensanchar. El deploy es continuo desde la primera vertical, así ves el progreso en vivo — no recién al final.",
    },
  },
  {
    q: {
      en: "Do you work in English or Spanish?",
      es: "¿Trabajás en inglés o en español?",
    },
    a: {
      en: "Both. Documentation, copy, and code comments in the language you prefer.",
      es: "Los dos. Documentación, copy y comentarios de código en el idioma que prefieras.",
    },
  },
  {
    q: {
      en: "Do you have fixed pricing?",
      es: "¿Tenés precios fijos?",
    },
    a: {
      en: "No — pricing follows scope. Send me the brief and I send back a quote.",
      es: "No — el precio sigue al scope. Mandame el brief y te paso una cotización.",
    },
  },
];
