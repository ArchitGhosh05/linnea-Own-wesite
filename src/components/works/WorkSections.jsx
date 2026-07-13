import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  creativeGalleryItems,
  worksByCategory,
} from '../../data';
import motionHeroVideo from '../../assets/motion/motion-hero.mp4';
import './WorkSections.css';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  {
    id: 'graphics',
    index: '01',
    title: 'Graphics',
    description: 'Campaign visuals, social creatives, and print that stop the scroll.',
    tone: 'graphics',
    items: () => [
      ...creativeGalleryItems,
      ...(worksByCategory.creative || []).slice(0, 4),
    ],
  },
  {
    id: 'motion',
    index: '02',
    title: 'Motion',
    description: 'Reels, edits, and motion graphics that keep brands in motion.',
    tone: 'motion',
    featuredVideo: motionHeroVideo,
    items: () => worksByCategory.motion || [],
  },
  {
    id: 'website',
    index: '03',
    title: 'Website & System Design',
    description: 'Crisp product surfaces, web experiences, and scalable design systems.',
    tone: 'website',
    items: () => [
      ...(worksByCategory.website || []),
      ...(worksByCategory['system-design'] || []).slice(0, 4),
    ],
  },
  {
    id: 'digital-marketing',
    index: '04',
    title: 'Digital Marketing',
    description: 'Campaign assets, growth creatives, and channel-ready storytelling.',
    tone: 'marketing',
    items: () => worksByCategory['digital-marketing'] || [],
  },
];

function WorkCard({ item, variant = 'default' }) {
  return (
    <article className={`work-card work-card--${variant}`}>
      <div className="work-card__media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="work-card__meta">
        {item.tag && <span className="work-card__tag">{item.tag}</span>}
        <h3 className="work-card__title">{item.title}</h3>
        {item.blurb && <p className="work-card__blurb">{item.blurb}</p>}
      </div>
    </article>
  );
}

export default function WorkSections() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.work-section').forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.work-section__reveal'),
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          },
        );

        gsap.fromTo(
          section.querySelectorAll('.work-card'),
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section.querySelector('.work-section__grid'),
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="work-sections">
      <nav className="work-sections__jump" aria-label="Work categories">
        {SECTIONS.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="work-sections__jump-link">
            <span>{section.index}</span>
            {section.title}
          </a>
        ))}
      </nav>

      {SECTIONS.map((section) => {
        const items = section.items().slice(0, section.id === 'graphics' ? 10 : 8);

        return (
          <section
            key={section.id}
            id={section.id}
            className={`work-section work-section--${section.tone}`}
          >
            <header className="work-section__header">
              <div className="work-section__reveal">
                <span className="work-section__index">{section.index}</span>
                <h2 className="work-section__title">{section.title}</h2>
              </div>
              <p className="work-section__desc work-section__reveal">{section.description}</p>
            </header>

            {section.featuredVideo && (
              <div className="work-section__feature work-section__reveal">
                <video
                  src={section.featuredVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="work-section__feature-shade" />
                <span className="work-section__feature-label">Featured motion</span>
              </div>
            )}

            <div
              className={`work-section__grid work-section__grid--${section.tone}`}
            >
              {items.map((item, i) => (
                <WorkCard
                  key={`${section.id}-${item.title}-${i}`}
                  item={item}
                  variant={
                    section.tone === 'website' && i === 0
                      ? 'wide'
                      : section.tone === 'graphics' && i % 5 === 0
                        ? 'tall'
                        : 'default'
                  }
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="work-cta">
        <h2 className="work-cta__title">Ready to start your next piece?</h2>
        <p className="work-cta__desc">Let&apos;s build something bold together.</p>
        <Link to="/contact" className="work-cta__btn">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
