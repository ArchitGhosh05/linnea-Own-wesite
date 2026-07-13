import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import hero01 from '../../assets/works-hero/hero-01-creative.mp4';
import hero02 from '../../assets/works-hero/hero-02-cinematic.mp4';
import hero03 from '../../assets/works-hero/hero-03-sales.mp4';
import hero04 from '../../assets/works-hero/hero-04-3d.mp4';
import hero05 from '../../assets/works-hero/hero-05-premium.mp4';
import './WorkHero.css';

const HERO_VIDEOS = [hero01, hero02, hero03, hero04, hero05];

export default function WorkHero() {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.work-hero__title-word',
        { y: '115%', rotate: 4 },
        { y: '0%', rotate: 0, duration: 1.05, stagger: 0.12, ease: 'power4.out', delay: 0.2 },
      );
      gsap.fromTo(
        '.work-hero__sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.7 },
      );
      gsap.fromTo(
        '.work-hero__media',
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let cancelled = false;

    const playCurrent = async () => {
      if (video.getAttribute('src') !== HERO_VIDEOS[activeIndex]) {
        video.src = HERO_VIDEOS[activeIndex];
        video.load();
      }
      try {
        await video.play();
      } catch {
        // Autoplay can fail until user interaction; ignore.
      }
    };

    const onEnded = () => {
      if (cancelled) return;
      setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    };

    video.addEventListener('ended', onEnded);
    playCurrent();

    return () => {
      cancelled = true;
      video.removeEventListener('ended', onEnded);
    };
  }, [activeIndex]);

  return (
    <section ref={rootRef} className="work-hero">
      <div className="work-hero__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="work-hero__video"
          muted
          playsInline
          preload="auto"
        />
      </div>

      <div className="work-hero__shade" />
      <div className="work-hero__vignette" />

      <div className="work-hero__progress" aria-hidden="true">
        {HERO_VIDEOS.map((_, i) => (
          <span
            key={i}
            className={`work-hero__dot${i === activeIndex ? ' is-active' : ''}`}
          />
        ))}
      </div>

      <div className="work-hero__content">
        <p className="work-hero__eyebrow">Linnea Media · Portfolio</p>
        <h1 className="work-hero__title" aria-label="Our Work">
          <span className="work-hero__title-line">
            <span className="work-hero__title-word">OUR</span>
          </span>
          <span className="work-hero__title-line">
            <span className="work-hero__title-word work-hero__title-word--accent">WORK</span>
          </span>
        </h1>
        <p className="work-hero__sub">
          Graphics, motion, websites, and campaigns — one continuous stream of craft.
        </p>
        <div className="work-hero__scroll">
          <span>Scroll</span>
          <div className="work-hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
