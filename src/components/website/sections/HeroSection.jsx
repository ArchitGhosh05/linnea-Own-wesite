import websiteHeroVideo from '../../../assets/videos/website-hero.mp4';

export default function HeroSection() {
  return (
    <section className="velorah-hero relative h-screen min-h-[100dvh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={websiteHeroVideo}
      />
    </section>
  );
}
