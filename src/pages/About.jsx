import { Link } from 'react-router-dom';
import AboutHero from '../components/AboutHero';

const stats = [
  { value: '50+', label: 'Brands launched' },
  { value: '120+', label: 'Projects delivered' },
  { value: '8', label: 'Years of craft' },
  { value: '99%', label: 'Client retention' },
];

const values = [
  {
    title: 'Creativity First',
    desc: 'Every project starts with a bold idea and an obsession with detail.',
  },
  {
    title: 'Strategy-Driven',
    desc: 'Design that looks great and performs even better, backed by data.',
  },
  {
    title: 'Built to Last',
    desc: 'Future-proof brands and products engineered to scale with you.',
  },
];

export default function About() {
  return (
    <>
      <AboutHero />

      {/* Stats */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition-colors hover:border-red-500/40"
            >
              <div className="text-4xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <h3 className="text-xl font-semibold text-white">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)]"
          >
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}
