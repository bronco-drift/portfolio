export function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          About
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-[1.65] text-ink-2 md:text-xl md:leading-[1.6]">
          <p className="text-ink">
            Bronco Drift is the working name for an independent design and
            engineering practice based in Latin America. The output: refined
            interfaces, systems built to be lived in, and the occasional
            cartographic detour.
          </p>
          <p>
            Comfortable across the stack — React, Next.js, Supabase, Firebase —
            and partial to projects that prefer clarity over cleverness. Open
            to commissions and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
