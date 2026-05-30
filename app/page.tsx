import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { JsonLd } from "@/components/json-ld";
import { projects } from "@/lib/projects";
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

export default function Home() {
  return (
    <>
      <JsonLd data={itemListLd} />
      <main id="top">
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
    </>
  );
}
