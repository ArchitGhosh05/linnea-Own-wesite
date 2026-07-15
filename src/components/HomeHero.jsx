import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85';
const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85';

const SPOTLIGHT_R = 260;

function RevealLayer({ image, layerRef }) {
  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
        WebkitMaskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at var(--sx, -999px) var(--sy, -999px), #000 0%, #000 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at var(--sx, -999px) var(--sy, -999px), #000 0%, #000 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
      }}
    />
  );
}

export default function HomeHero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      const el = layerRef.current;
      if (el) {
        el.style.setProperty('--sx', `${smooth.current.x}px`);
        el.style.setProperty('--sy', `${smooth.current.y}px`);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="home-hero min-h-[100dvh] bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="relative w-full overflow-hidden bg-black" style={{ height: '100dvh' }}>
        <div
          className="hero-zoom absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        <RevealLayer image={BG_IMAGE_2} layerRef={layerRef} />

        <div className="pointer-events-none absolute left-0 right-0 top-[12%] z-50 flex flex-col items-start px-5 text-left sm:top-[14%] sm:px-12 md:px-16 lg:px-20">
          <h1 className="leading-[0.95] text-white">
            <span
              className="hero-anim hero-reveal font-playfair block text-[1.65rem] font-normal italic xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Ideas That Connect,
            </span>
            <span
              className="hero-anim hero-reveal -mt-1 block text-[1.65rem] font-normal xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              Strategies That Grow
            </span>
          </h1>
        </div>

        <div
          className="hero-anim hero-fade absolute bottom-14 left-10 z-50 hidden max-w-[280px] md:block md:left-14 md:max-w-[320px]"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="text-sm leading-relaxed text-white/80">
            At{' '}
            <em className="font-semibold not-italic text-white">Linnea Media</em>, we build
            impactful brands through creativity, strategy, and innovation—delivering digital
            solutions that drive growth.
          </p>
        </div>

        <div
          className="hero-anim hero-fade absolute bottom-8 left-5 right-5 z-50 flex max-w-full flex-col items-start gap-3 pb-[env(safe-area-inset-bottom)] sm:bottom-24 sm:left-auto sm:right-10 sm:max-w-[300px] sm:gap-5 md:right-14 md:max-w-[360px]"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs leading-relaxed text-white/80 sm:hidden">
            <span className="mb-2 block font-semibold text-white">Why Us?</span>
            We skip the fluff, focus on what actually works, and deliver creative work that hits
            right in the metrics. Your call.
          </p>
          <p className="hidden text-xs leading-relaxed text-white/80 sm:block sm:text-sm">
            <span className="mb-2 block font-semibold text-white">Why Us?</span>
            Look, you could hire an agency that promises &ldquo;synergistic paradigm shifts&rdquo; and
            hands you a 40-page report of zero action items. Or, you could work with us. We skip
            the fluff, focus on what actually works, and deliver creative work that hits right in
            the metrics. Your call.
          </p>
          <Link
            to="/works"
            className="pointer-events-auto rounded-full bg-[#e8702a] px-6 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:bg-[#d2611f] hover:shadow-lg hover:shadow-[#e8702a]/30 active:scale-95 sm:px-7 sm:py-3"
          >
            Start Digging
          </Link>
        </div>
      </section>
    </div>
  );
}
