import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject, getNextProject } from "@/lib/projects";

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
    description: project.description,
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

  return (
    <main id="top">
      <article>
        <header className="border-b border-border px-6 pb-16 pt-16 md:pb-24 md:pt-28">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[13.5px] text-ink-3 transition-colors hover:text-ink"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] text-ink-3">
              <span>{project.year}</span>
              <span className="text-ink-4">·</span>
              <span>{project.role}</span>
              <span className="text-ink-4">·</span>
              <span className="capitalize">{project.status}</span>
            </div>
            <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.04] tracking-[-0.028em] text-ink md:text-[4rem]">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
              {project.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-elevated px-2.5 py-1 font-mono text-[11px] text-ink-3"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="border-b border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl space-y-14">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
                  {s.heading}
                </h3>
                <p className="mt-4 text-lg leading-[1.6] text-ink md:text-xl">
                  {s.body}
                </p>
              </div>
            ))}
            {project.url && (
              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-5 py-2.5 text-[14px] font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-bg"
                >
                  Visit live <span aria-hidden>↗</span>
                </a>
              </div>
            )}
          </div>
        </section>

        <section>
          <Link
            href={`/work/${next.slug}`}
            className="group block border-b border-border px-6 py-16 transition-colors duration-500 hover:bg-elevated md:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <div className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
                Next project
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-6">
                <div>
                  <h3 className="text-[1.8rem] font-medium leading-tight tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1 md:text-[2.4rem]">
                    {next.name}
                  </h3>
                  <p className="mt-2 text-base text-ink-2 md:text-lg">
                    {next.tagline}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="text-2xl text-ink-3 transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}
