import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutHero from '../components/AboutHero';
import ClientsMarquee from '../components/ClientsMarquee';
import linneaAboutVideo from '../assets/videos/linnea-about.mp4';

const values = [
  {
    title: 'Brand CPR',
    desc: "We take tired, boring messaging and inject actual personality into it until it's alive, kicking, and making you money.",
  },
  {
    title: 'Scroll-Stopping Execution',
    desc: 'We create the kind of advertising that makes people pause, look twice, and completely forget what they were originally scrolling for.',
  },
  {
    title: 'Growth Agitation',
    desc: 'We don\'t just help you "grow your brand" in a gentle, passive way. We obsessively push, optimize, and scale your presence until your competitors start asking their teams, "Why didn\'t we think of that?"',
  },
];

function AboutVideo() {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setSoundOn(true);
    try {
      await video.play();
    } catch {
      // playback may already be running
    }
  };

  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_40px_-12px_rgba(239,68,68,0.35)] sm:min-h-[340px]">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        src={linneaAboutVideo}
        autoPlay
        muted={!soundOn}
        loop
        playsInline
        controls
        preload="auto"
        aria-label="Linnea Media showreel"
      />
      {!soundOn && (
        <button
          type="button"
          onClick={enableSound}
          className="absolute bottom-14 right-4 z-10 rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_-2px_rgba(239,68,68,0.8)] transition-all hover:scale-105 hover:bg-red-400 sm:bottom-16 sm:text-sm"
        >
          Turn on sound
        </button>
      )}
    </div>
  );
}

export default function About() {
  return (
    <>
      <AboutHero />

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:mt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-12">
          <AboutVideo />

          <div className="flex flex-col justify-center text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
              Who We Are
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
              We’re the behind-the-scenes obsession you didn&apos;t know you needed
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Let’s be real—every agency claims they’re a &ldquo;team of passionate storytellers
              pushing boundaries.&rdquo; We’re not going to hit you with that copy-pasted corporate
              script.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Who are we? We are a collective of hyper-focused creators, strategic matchmakers, and
              absolute perfectionists who lose sleep over fonts, hook lines, and conversion rates.
              We don&apos;t just &ldquo;manage accounts&rdquo;; we get borderline obsessed with
              making your brand look like the smartest, coolest entity in the room.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl sm:mt-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(239,68,68,0.12)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative px-4 text-center sm:px-6">
            <div
              className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-red-500/80 to-transparent sm:mb-8 sm:w-28"
              aria-hidden="true"
            />
            <p className="font-playfair text-lg font-normal italic leading-relaxed tracking-[-0.01em] text-white/95 sm:text-xl md:text-2xl md:leading-relaxed">
              In short, we are the creative powerhouse that handles the overthinking, the heavy
              lifting, and the midnight coffee runs—all so your brand can walk out into the market
              looking{' '}
              <span className="not-italic text-red-400 drop-shadow-[0_0_12px_rgba(239,68,68,0.45)]">
                completely effortless
              </span>
              .
            </p>
            <div
              className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-red-500/80 to-transparent sm:mt-8 sm:w-28"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-14">
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
