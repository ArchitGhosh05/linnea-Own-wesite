import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import CardSwap, { Card } from '../components/CardSwap';
import ImageTrail from '../components/ImageTrail';
import collageCreatives from '../assets/collage-creatives.png';
import cardCreatives from '../assets/card-creatives.png';
import cardWebsite from '../assets/card-website.png';
import cardVideo from '../assets/card-video.png';
import dm01 from '../assets/digital-marketing/mockup-01.png';
import dm03 from '../assets/digital-marketing/mockup-03.png';
import impactCardiac from '../assets/impact/cardiac-health.png';
import impactDentique from '../assets/impact/dentique.png';
import impactUnipon from '../assets/impact/unipon-hospital.png';
import impactMaxillofacial from '../assets/impact/maxillofacial-awareness.png';

const homeCards = [
  { image: collageCreatives, title: 'Creatives' },
  { image: cardWebsite, title: 'Web Design', fit: 'contain' },
  { image: cardVideo, title: 'Video' },
  { image: dm01, title: 'Digital Marketing' },
  { image: dm03, title: 'Branding' },
];

const trailImages = [
  cardCreatives,
  cardWebsite,
  cardVideo,
  impactCardiac,
  impactDentique,
  impactUnipon,
  impactMaxillofacial,
];

const values = [
  {
    title: 'Our Mission',
    desc: 'We exist to rescue brilliant brands from boring advertising. The world doesn’t need another generic stock photo or a billboard that makes people yawn. Our mission is simple: build campaigns so good that even your competitors secretly screenshot them for "inspiration." We turn background noise into the main event.',
  },
  {
    title: 'Our Vision',
    desc: 'We envision a future where ads don’t feel like spam. We’re aiming for a world where your target audience actually stops scrolling, smiles, and remembers your name—not just because your budget was massive, but because your ideas were impossible to ignore. We\'re playing the long game, and we intend to win it with you.',
  },
  {
    title: 'What We Do',
    desc: 'We look at your brand, strip away the corporate jargon, and figure out what makes people actually care about you. Then, we turn that into high-converting copy, scroll-stopping visuals, and campaigns that make an impact. In short: we do the overthinking so you don’t have to, making sure your brand stays unforgettable.',
  },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return mobile;
}

const valueGlowPositions = [
  '-left-14 -top-14',
  'left-1/2 -top-16 -translate-x-1/2',
  '-right-14 -bottom-14',
];

function ValueCard({ title, desc, glowClass }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/55 hover:shadow-[0_0_50px_-14px_rgba(239,68,68,0.7)] sm:p-8">
      <div
        className={`pointer-events-none absolute h-40 w-40 rounded-full bg-red-500/20 blur-3xl transition-all duration-700 group-hover:bg-red-500/35 ${glowClass}`}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <h3 className="relative text-lg font-semibold text-white transition-colors duration-300 group-hover:text-red-50 sm:text-xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
        {desc}
      </p>
    </div>
  );
}

function CardBody({ image, title, fit = 'cover' }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-black">
      <img
        src={image}
        alt={title}
        className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        draggable="false"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      </div>
    </div>
  );
}

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <HomeHero />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 py-16 sm:gap-12 sm:px-6 sm:py-20 md:min-h-[600px] md:flex-row md:items-center md:justify-between md:py-24">
        <div className="w-full max-w-md text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            From Imagination to Interaction
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:mt-6">
            Creative solutions that combine stunning visuals with meaningful digital
            experiences.
          </p>
          <Link
            to="/works"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300 sm:mt-8"
          >
            Explore our works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="relative flex h-[380px] w-full max-w-[420px] items-center justify-center overflow-visible sm:h-[460px] sm:max-w-[500px] md:h-[540px] md:w-1/2 md:max-w-none">
          <CardSwap
            width={isMobile ? 300 : 460}
            height={isMobile ? 360 : 420}
            cardDistance={isMobile ? 36 : 60}
            verticalDistance={isMobile ? 42 : 70}
            delay={3000}
            pauseOnHover={!isMobile}
            easing="elastic"
          >
            {homeCards.map((f) => (
              <Card key={f.title}>
                <CardBody {...f} />
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-5 sm:pb-20 sm:pt-14 md:pt-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,68,68,0.1)_0%,transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} glowClass={valueGlowPositions[i]} />
          ))}
        </div>
      </section>

      <section className="relative w-full px-5 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center sm:mb-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
              Our Work in Motion
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {isMobile ? 'Swipe through our work' : 'Move your cursor to explore'}
            </h2>
          </div>

          {isMobile ? (
            <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {trailImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-44 w-36 shrink-0 rounded-xl object-cover sm:h-52 sm:w-40"
                  loading="lazy"
                  draggable="false"
                />
              ))}
            </div>
          ) : (
            <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <ImageTrail items={trailImages} variant={1} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
