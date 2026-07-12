import { Link } from 'react-router-dom';
import { openings } from '../data';

export default function Career() {
  return (
    <div className="pt-32">
      <section className="mx-auto w-full max-w-5xl px-6 pb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
          Career
        </span>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Join the Linnea crew
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
          We&apos;re always looking for creative, curious people who love building bold
          brands. Explore our open roles below and grow with us.
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="flex flex-col gap-5">
          {openings.map((job) => (
            <div
              key={job.role}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_40px_-12px_rgba(239,68,68,0.6)] md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <span className="rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_-2px_rgba(239,68,68,0.8)]">
                    {job.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-400">{job.desc}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                  {job.location}
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-red-500/60 px-6 py-3 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)]"
              >
                Apply now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Don&apos;t see the right role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400">
            We&apos;d still love to hear from you. Send us your portfolio and tell us how
            you can make Linnea Media better.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)]"
          >
            Send your portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
