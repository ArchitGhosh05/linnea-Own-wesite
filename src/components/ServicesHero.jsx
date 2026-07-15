import servicesHeroVideo from '../assets/videos/services-hero.mp4';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70dvh] w-full overflow-hidden md:min-h-[100dvh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={servicesHeroVideo}
        preload="metadata"
      />
    </section>
  );
}
