import { Link } from 'react-router-dom';
import AboutHero from '../components/AboutHero';
import ClientsMarquee from '../components/ClientsMarquee';

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

      {/* Values */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-16">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)]"
          >
            Work with us
          </Link>
        </div>
      </section>

      <ClientsMarquee />
    </>
  );
}
