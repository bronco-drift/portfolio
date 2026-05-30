import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-[1400px] px-6 pb-40 pt-32 md:pb-56 md:pt-48">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-3 md:col-span-1">
            404
          </div>
          <div className="col-span-12 md:col-span-11">
            <span className="mb-12 block font-mono text-[10.5px] uppercase tracking-[0.22em] text-smoke-2">
              Off-circuit
            </span>
            <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-[-0.025em]">
              <span className="block">Took the line</span>
              <span className="block italic">a bit too wide.</span>
            </h1>
            <p className="mt-10 max-w-md text-base leading-relaxed text-smoke-2 md:text-lg">
              The page you were looking for isn't on this circuit. The pit
              entry is below.
            </p>
            <Link
              href="/"
              className="mt-12 inline-block border-b border-smoke pb-1 font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-500 hover:text-ember"
            >
              ← Back to studio log
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
