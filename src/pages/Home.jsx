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
  { image: cardWebsite, title: 'Web Design' },
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

function CardBody({ image, title }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[12px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
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

      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 overflow-x-clip px-5 py-16 sm:gap-12 sm:px-6 sm:py-20 md:min-h-[560px] md:flex-row md:items-center md:justify-between md:py-24">
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

        <div className="relative flex h-[320px] w-full max-w-[360px] items-center justify-center overflow-hidden sm:h-[400px] sm:max-w-[420px] md:h-[480px] md:w-1/2 md:max-w-none">
          <CardSwap
            width={isMobile ? 280 : 420}
            height={isMobile ? 220 : 340}
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
