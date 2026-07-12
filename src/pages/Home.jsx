import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero';
import CardSwap, { Card } from '../components/CardSwap';
import ImageTrail from '../components/ImageTrail';
import { features } from '../data';
import collageCreatives from '../assets/collage-creatives.png';
import cardCreatives from '../assets/card-creatives.png';
import cardWebsite from '../assets/card-website.png';
import cardVideo from '../assets/card-video.png';
import impactCardiac from '../assets/impact/cardiac-health.png';
import impactDentique from '../assets/impact/dentique.png';
import impactUnipon from '../assets/impact/unipon-hospital.png';
import impactMaxillofacial from '../assets/impact/maxillofacial-awareness.png';

const homeCards = features.map((f) =>
  f.title === 'Creatives' ? { ...f, image: collageCreatives } : f,
);

const trailImages = [
  cardCreatives,
  cardWebsite,
  cardVideo,
  impactCardiac,
  impactDentique,
  impactUnipon,
  impactMaxillofacial,
  'https://picsum.photos/id/287/300/300',
  'https://picsum.photos/id/1001/300/300',
  'https://picsum.photos/id/1025/300/300',
  'https://picsum.photos/id/1026/300/300',
  'https://picsum.photos/id/1027/300/300',
];

function CardBody({ image, title }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[12px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* SERVICES with CardSwap */}
      <section
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between"
        style={{ minHeight: '750px' }}
      >
        <div className="max-w-md">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            From Imagination to Interaction
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-400">
            Creative solutions that combine stunning visuals with meaningful digital
            experiences.
          </p>
          <Link
            to="/works"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
          >
            Explore our works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="relative w-full md:w-1/2" style={{ minHeight: '500px' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={3000}
            pauseOnHover={true}
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

      <section className="relative w-full px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
              Our Work in Motion
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Move your cursor to explore
            </h2>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <ImageTrail items={trailImages} variant={1} />
          </div>
        </div>
      </section>
    </>
  );
}
