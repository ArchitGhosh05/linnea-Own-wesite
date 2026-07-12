import servicesHeroVideo from '../assets/videos/services-hero.mp4';

export default function ServicesHero() {
  return (
    <section className="relative h-screen min-h-[100dvh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={servicesHeroVideo}
      />
    </section>
  );
}
