export function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink-3">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
          <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
            03
          </div>
          <div className="col-span-12 md:col-span-11">
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2">
              Contact
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 pb-32 md:pb-56">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <p className="font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.94] tracking-[-0.025em] text-smoke">
              Open to <span className="italic">commissions</span>,
              <br />
              collaborations, and the
              <br />
              occasional well-posed problem.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-10 md:mt-20 md:max-w-3xl md:grid-cols-3">
              <Channel
                label="Email"
                value="bronco.drift@outlook.com"
                href="mailto:bronco.drift@outlook.com"
              />
              <Channel
                label="GitHub"
                value="bronco-drift"
                href="https://github.com/bronco-drift"
              />
              <Channel label="Hours" value="UTC−04 · LATAM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Channel({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const isExternal = href?.startsWith("http");

  if (href) {
    return (
      <div>
        <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
          {label}
        </div>
        <a
          href={href}
          {...(isExternal
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="draw-line block font-display text-xl text-smoke transition-colors duration-500 hover:text-ember md:text-2xl"
        >
          {value}
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3">
        {label}
      </div>
      <span className="block font-display text-xl text-smoke-2 md:text-2xl">
        {value}
      </span>
    </div>
  );
}
