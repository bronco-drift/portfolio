import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, getNextProject } from "@/lib/projects";
import { ProjectDetail } from "@/components/project-detail";
import { JsonLd } from "@/components/json-ld";
import { t } from "@/lib/i18n";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const SITE_URL = getSiteUrl();

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };

  const description = t(project.description, "en");
  const tagline = t(project.tagline, "en");
  const url = `${SITE_URL}/work/${project.slug}`;

  return {
    title: project.name,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — ${SITE_NAME}`,
      description: tagline,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${SITE_NAME}`,
      description: tagline,
    },
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  const projectUrl = `${SITE_URL}/work/${project.slug}`;
  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: t(project.description, "en"),
    dateCreated: project.year,
    inLanguage: ["en", "es"],
    creator: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: projectUrl,
    sameAs: project.url ? [project.url] : undefined,
    keywords: project.stack.join(", "),
    image: `${projectUrl}/opengraph-image`,
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
        name: "Work",
        item: `${SITE_URL}/#work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={creativeWorkLd} />
      <JsonLd data={breadcrumbLd} />
      <ProjectDetail project={project} next={next} />
    </>
  );
}
