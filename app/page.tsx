import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { JsonLd } from "@/components/json-ld";
import { projects } from "@/lib/projects";
import { faqs } from "@/lib/faq";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { t } from "@/lib/i18n";

const SITE_URL = getSiteUrl();

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} — Selected work`,
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${SITE_URL}/work/${p.slug}`,
    description: t(p.tagline, "en"),
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: t(f.q, "en"),
    acceptedAnswer: {
      "@type": "Answer",
      text: t(f.a, "en"),
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={itemListLd} />
      <JsonLd data={faqLd} />
      <main id="top">
        <Hero />
        <WorkGrid />
        <About />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
