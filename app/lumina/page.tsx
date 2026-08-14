import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LuminaPageContent } from "@/components/lumina-page";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const SITE_URL = getSiteUrl();

const LUMINA_DESCRIPTION =
  "Lumina — the design language behind several projects in this portfolio. Not a palette, but a way of resolving the interface: white, near-black ink, one accent, generous air.";

const articleLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Lumina",
  name: "Lumina — a design language",
  description: LUMINA_DESCRIPTION,
  url: `${SITE_URL}/lumina`,
  inLanguage: ["en", "es"],
  author: {
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
  },
  keywords: [
    "design system",
    "minimalism",
    "oklch",
    "Geist",
    "Apple",
    "Anthropic",
    "Lumina",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: SITE_NAME,
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Lumina",
      item: `${SITE_URL}/lumina`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Lumina",
  description: LUMINA_DESCRIPTION,
  alternates: { canonical: "/lumina" },
  openGraph: {
    type: "article",
    title: `Lumina — ${SITE_NAME}`,
    description: LUMINA_DESCRIPTION,
    url: `${SITE_URL}/lumina`,
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: ["es_AR"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Lumina — ${SITE_NAME}`,
    description: LUMINA_DESCRIPTION,
  },
};

export default function LuminaPage() {
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <main id="top">
        <LuminaPageContent />
      </main>
    </>
  );
}
