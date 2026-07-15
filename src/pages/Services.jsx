import { Link } from 'react-router-dom';
import ServicesHero from '../components/ServicesHero';
import ServicesStack from '../components/ServicesStack';

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesStack />

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
