import prasantaFront from '../assets/team/prasanta-1.png';
import prasantaBack from '../assets/team/prasanta-2.png';
import './TeamHero.css';

export default function TeamHero() {
  return (
    <section className="team-hero">
      <div className="team-hero__glow team-hero__glow--1" aria-hidden="true" />
      <div className="team-hero__glow team-hero__glow--2" aria-hidden="true" />

      <div className="team-hero__inner">
        <div className="team-hero__copy">
          <h1 className="team-hero__title team-hero__title--retro-y2k">
            A note from the mastermind
          </h1>
          <p className="team-hero__desc">
            &ldquo;Great brands are built with bold ideas and lasting partnerships.
            Welcome to our new digital home—where innovation meets impact.&rdquo;
          </p>
        </div>

        <div className="team-hero__featured">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_50px_-16px_rgba(239,68,68,0.75)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={prasantaFront}
                alt="Prasanta Bose"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
                draggable="false"
              />
              <img
                src={prasantaBack}
                alt="Prasanta Bose alternate"
                className="absolute inset-0 h-full w-full scale-[1.08] object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                draggable="false"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-500/25 blur-3xl transition-all duration-700 group-hover:bg-red-500/35" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
