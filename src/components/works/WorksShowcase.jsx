import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorksImpactScroll from './WorksImpactScroll';
import WorksAutoGallery from './WorksAutoGallery';
import WorksScrollStack from './WorksScrollStack';
import WorksProjectGrid from './WorksProjectGrid';
import { creativeGalleryItems } from '../../data';
import creativeHeroVideo from '../../assets/creative/creative-hero.mp4';
import motionHeroVideo from '../../assets/motion/motion-hero.mp4';
import './WorksShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEOS = {
  creative: creativeHeroVideo,
  motion: motionHeroVideo,
};

export default function WorksShowcase({ category, items }) {
  const rootRef = useRef(null);
  const isCreative = category.id === 'creative';
  const heroVideo = HERO_VIDEOS[category.id] || null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.works-hero__title-line span',
        { y: '110%' },
        { y: 0, duration: 1, stagger: 0.12, ease: 'power4.out', delay: 0.15, immediateRender: false }
      );

      gsap.fromTo(
        '.works-hero__desc',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5, immediateRender: false }
      );

      gsap.fromTo(
        '.works-hero__scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.8, immediateRender: false }
      );

      gsap.fromTo(
        '.works-cta',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.works-cta',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, [category.id]);

  const titleWords = category.label.split(' ');
  const galleryItems = isCreative ? creativeGalleryItems : items;

  return (
    <div ref={rootRef} className="works-showcase">
      <section className={`works-hero${heroVideo ? ' works-hero--video' : ''}`}>
        {heroVideo && (
          <div className="works-hero__media" aria-hidden="true">
            <video
              className="works-hero__video"
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="works-hero__video-shade" />
          </div>
        )}
        {!heroVideo && (
          <>
            <div className="works-hero__glow works-hero__glow--1" />
            <div className="works-hero__glow works-hero__glow--2" />
          </>
        )}

        <div className="works-hero__inner">
          <span className="works-hero__eyebrow">{category.label}</span>
          <h1 className="works-hero__title">
            {titleWords.map((word, i) => (
              <span key={i} className="works-hero__title-line">
                <span>{word}</span>
              </span>
            ))}
          </h1>
          <p className="works-hero__desc">{category.description}</p>
          <div className="works-hero__scroll">
            <span>Scroll to explore</span>
            <div className="works-hero__scroll-line" />
          </div>
        </div>
      </section>

      {/* Featured Projects — right after hero (hidden on creative) */}
      {!isCreative && (
        <WorksProjectGrid key={`projects-${category.id}`} category={category} items={items} />
      )}

      <div className="works-marquee" aria-hidden="true">
        <div className="works-marquee__inner">
          <span className="works-marquee__track">
            {Array.from({ length: 12 }).map((_, i) => (
              <em key={i}>{category.label} • </em>
            ))}
          </span>
          <span className="works-marquee__track">
            {Array.from({ length: 12 }).map((_, i) => (
              <em key={`dup-${i}`}>{category.label} • </em>
            ))}
          </span>
        </div>
      </div>

      {/* Section 1 — scroll-pinned Impact */}
      <WorksImpactScroll key={`impact-${category.id}`} category={category} items={items} />

      {/* Section 2 — separate auto-moving gallery */}
      <WorksAutoGallery key={`gallery-${category.id}`} category={category} items={galleryItems} />

      {/* Section 3 — ScrollStack card animation */}
      <WorksScrollStack key={`stack-${category.id}`} category={category} items={items} />

      <div className="works-cta">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to start your {category.label.toLowerCase()} project?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
          Let&apos;s create something bold together.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
