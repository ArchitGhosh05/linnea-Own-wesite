import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85';
const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85';

const SPOTLIGHT_R = 260;

function RevealLayer({ image, cursorX, cursorY }) {
  const canvasRef = useRef(null);
  const [maskUrl, setMaskUrl] = useState('');

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(
      cursorX,
      cursorY,
      0,
      cursorX,
      cursorY,
      SPOTLIGHT_R,
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
    gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    setMaskUrl(canvas.toDataURL());
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{ display: 'none' }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          WebkitMaskImage: maskUrl ? `url(${maskUrl})` : 'none',
          maskImage: maskUrl ? `url(${maskUrl})` : 'none',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
        }}
      />
    </>
  );
}

export default function HomeHero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="home-hero min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <section
        className="relative h-screen w-full overflow-hidden bg-black"
        style={{ height: '100dvh' }}
      >
        <div
          className="hero-zoom absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        <RevealLayer
          image={BG_IMAGE_2}
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
        />

        <div className="pointer-events-none absolute left-0 right-0 top-[14%] z-50 flex flex-col items-start px-8 text-left sm:px-12 md:px-16 lg:px-20">
          <h1 className="leading-[0.95] text-white">
            <span
              className="hero-anim hero-reveal font-playfair block text-2xl font-normal italic sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Ideas That Connect,
            </span>
            <span
              className="hero-anim hero-reveal -mt-1 block text-2xl font-normal sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              Strategies That Grow
            </span>
          </h1>
        </div>

        <div
          className="hero-anim hero-fade absolute bottom-14 left-10 z-50 hidden max-w-[280px] sm:block md:left-14 md:max-w-[320px]"
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
          className="hero-anim hero-fade absolute bottom-10 left-5 right-5 z-50 flex max-w-full flex-col items-start gap-4 sm:bottom-24 sm:left-auto sm:right-10 sm:max-w-[300px] md:right-14 md:max-w-[360px] sm:gap-5"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
            At{' '}
            <em className="font-semibold not-italic text-white">Linnea Media</em>, we transform
            ideas into brands, brands into experiences, and experiences into lasting business
            growth. We combine strategy, creativity, technology, and storytelling to build
            meaningful connections between businesses and the people they serve.
          </p>
          <Link
            to="/works"
            className="rounded-full bg-[#e8702a] px-7 py-3 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:bg-[#d2611f] hover:shadow-lg hover:shadow-[#e8702a]/30 active:scale-95"
          >
            Start Digging
          </Link>
        </div>
      </section>
    </div>
  );
}
