import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, getNextProject } from "@/lib/projects";
import { ProjectDetail } from "@/components/project-detail";
import { t } from "@/lib/i18n";

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
  return {
    title: project.name,
    description: t(project.description, "en"),
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

  return <ProjectDetail project={project} next={next} />;
}
