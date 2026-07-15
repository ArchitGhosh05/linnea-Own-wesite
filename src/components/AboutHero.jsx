import { Link } from 'react-router-dom';
import aboutHeroVideo from '../assets/videos/about-hero.mp4';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero relative flex min-h-[100dvh] w-full flex-col overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={aboutHeroVideo}
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col pt-20 sm:pt-24 md:pt-28">
        <div className="flex flex-1 items-start justify-center pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-3xl px-5 text-center sm:px-6">
            <h1 className="text-3xl leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Rescuing brilliant
              <br />
              brands from{' '}
              <span className="text-white/60">boring</span>
              <br />
              <span className="text-white/60">advertising.</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-white/90 sm:px-6 sm:py-3"
              >
                Begin your journey
              </Link>
              <Link
                to="/works"
                className="liquid-glass rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 sm:px-6 sm:py-3"
              >
                See it live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
