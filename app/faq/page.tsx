import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { FaqList, FaqPageHeader } from "@/components/faq";
import { faqs } from "@/lib/faq";
import { t } from "@/lib/i18n";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const SITE_URL = getSiteUrl();

const FAQ_DESCRIPTION =
  "Frequently asked questions about my tech stack, process, client work, and pricing.";

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
      name: "FAQ",
      item: `${SITE_URL}/faq`,
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ",
  description: FAQ_DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "article",
    title: `FAQ — ${SITE_NAME}`,
    description: FAQ_DESCRIPTION,
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    locale: "en_US",
    alternateLocale: ["es_AR"],
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ — ${SITE_NAME}`,
    description: FAQ_DESCRIPTION,
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <main id="top">
        <FaqPageHeader />
        <section className="safe-px-6 pb-32 md:pb-40">
          <div className="mx-auto max-w-3xl">
            <FaqList />
          </div>
        </section>
      </main>
    </>
  );
}
