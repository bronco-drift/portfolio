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
    <main id="top" className="pt-20">
      <article>
        {/* Header */}
        <header className="border-b border-ink-3">
          <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 md:pb-20 md:pt-32">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
                {project.number}
              </div>
              <div className="col-span-12 md:col-span-11">
                <Link
                  href="/#work"
                  className="mb-10 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 transition-colors duration-500 hover:text-smoke md:mb-14"
                >
                  <span>←</span> Index
                </Link>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2">
                  <span>{project.year}</span>
                  <span className="text-smoke-4">/</span>
                  <span>{project.role}</span>
                  <span className="text-smoke-4">/</span>
                  <span className="flex items-center gap-2">
                    {project.status === "live" && (
                      <span className="live-dot inline-block size-1.5 rounded-full bg-ember" />
                    )}
                    {project.status}
                  </span>
                </div>
                <h1 className="mt-8 font-display text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-[-0.025em] text-smoke">
                  {project.name}
                </h1>
                <p className="mt-8 max-w-2xl font-display text-xl italic leading-snug text-smoke-2 md:text-3xl">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Body — sticky sidebar + sections */}
        <section className="border-b border-ink-3">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-32">
            <div className="grid grid-cols-12 gap-6">
              <aside className="col-span-12 mb-12 space-y-10 md:col-span-3 md:col-start-2 md:mb-0 md:self-start md:sticky md:top-28">
                <Stat label="Status" value={project.status} live={project.status === "live"} />
                <Stat label="Year" value={project.year} />
                <Stat label="Role" value={project.role} />
                <div>
                  <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
                    Stack
                  </div>
                  <ul className="space-y-1.5 font-mono text-sm text-smoke">
                    {project.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-smoke pb-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke transition-colors duration-500 hover:text-ember"
                  >
                    Visit live <span>↗</span>
                  </a>
                )}
              </aside>

              <div className="col-span-12 space-y-14 md:col-span-7 md:col-start-6">
                {project.sections.map((s) => (
                  <div key={s.heading}>
                    <h3 className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
                      {s.heading}
                    </h3>
                    <p className="font-display text-2xl leading-[1.28] tracking-[-0.01em] text-smoke md:text-3xl">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="border-b border-ink-3">
          <Link
            href={`/work/${next.slug}`}
            className="group block transition-colors duration-700 hover:bg-ink-2"
          >
            <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
              <div className="grid grid-cols-12 items-baseline gap-6">
                <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
                  Next →
                </div>
                <div className="col-span-12 md:col-span-11">
                  <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
                    {next.number} / 04
                  </div>
                  <h3 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.022em] text-smoke transition-transform duration-700 ease-out group-hover:translate-x-3">
                    {next.name}
                  </h3>
                  <p className="mt-4 font-display text-lg italic text-smoke-2 md:text-xl">
                    {next.tagline}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </article>
    </main>
  );
}

function Stat({
  label,
  value,
  live,
}: {
  label: string;
  value: string;
  live?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
        {label}
      </div>
      <div className="flex items-center gap-2 text-smoke">
        {live && (
          <span className="live-dot inline-block size-1.5 rounded-full bg-ember" />
        )}
        <span className="font-mono text-sm uppercase tracking-tight">
          {value}
        </span>
      </div>
    </div>
  );
}
