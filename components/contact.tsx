"use client";

import { useI18n } from "./i18n-provider";

export function Contact() {
  const { d } = useI18n();

  return (
    <section
      id="contact"
      className="safe-px-6 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[13px] font-medium tracking-[-0.01em] text-ink-3">
          {d.contact.label}
        </h2>
        <p className="mt-8 max-w-2xl text-[2rem] font-medium leading-[1.15] tracking-[-0.022em] text-ink md:text-[2.6rem]">
          {d.contact.title}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ContactItem
            label={d.contact.email}
            value="bronco.drift@outlook.com"
            href="mailto:bronco.drift@outlook.com"
          />
          <ContactItem
            label={d.contact.github}
            value="github.com/bronco-drift"
            href="https://github.com/bronco-drift"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const isExternal = href?.startsWith("http");
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="mt-2 inline-block text-[15px] text-ink underline decoration-ink-4 decoration-1 underline-offset-[5px] transition-colors duration-300 hover:decoration-ink"
        >
          {value}
        </a>
      ) : (
        <span className="mt-2 inline-block text-[15px] text-ink-2">{value}</span>
      )}
    </div>
  );
}
