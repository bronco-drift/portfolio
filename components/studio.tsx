export function Studio() {
  return (
    <section id="studio" className="relative border-t border-ink-3">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
          <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
            02
          </div>
          <div className="col-span-12 md:col-span-11">
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2">
              Studio
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 pb-28 md:pb-44">
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.018em] text-smoke">
              <span className="italic">Bronco Drift</span> is the working name
              for an independent design and engineering practice operating out
              of Latin America.
            </p>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-smoke-2 md:text-lg">
              The output: interfaces that prefer clarity, systems built to be
              lived in, and the occasional cartographic detour. Comfortable
              across the stack — React, Next, Supabase, Firebase, and whatever
              the brief actually needs. The angle is held on purpose.
            </p>
          </div>

          <div className="col-span-12 mt-12 md:col-span-3 md:col-start-10 md:mt-0">
            <dl className="space-y-9 font-mono text-[10.5px] uppercase tracking-[0.22em]">
              <Definition label="Discipline" value="Design — Engineering" />
              <Definition label="Stack" value="React · Next · Supabase" />
              <Definition label="Based" value="Latam · UTC−04" />
              <Definition
                label="Status"
                value={
                  <span className="flex items-center gap-2">
                    <span className="live-dot inline-block size-1.5 rounded-full bg-ember" />
                    Available
                  </span>
                }
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Definition({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <dt className="mb-2 text-smoke-3">{label}</dt>
      <dd className="text-smoke">{value}</dd>
    </div>
  );
}
