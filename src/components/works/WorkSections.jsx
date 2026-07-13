import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  worksByCategory,
} from '../../data';
import motionHeroVideo from '../../assets/motion/motion-hero.mp4';
import websiteHeroImage from '../../assets/website/website-mockup-03.png';
import './WorkSections.css';

gsap.registerPlugin(ScrollTrigger);

const MOTION_VIDEOS = [
  {
    id: 'e-17-2VjG5M',
    title: 'Motion Short 01',
    url: 'https://youtube.com/shorts/e-17-2VjG5M',
  },
  {
    id: 'iDJnq5xq9wc',
    title: 'Motion Film 02',
    url: 'https://youtu.be/iDJnq5xq9wc',
  },
  {
    id: 'TEsD0LZhohw',
    title: 'Motion Film 03',
    url: 'https://youtu.be/TEsD0LZhohw',
  },
];

const SECTIONS = [
  {
    id: 'motion',
    index: '01',
    title: 'Motion',
    description: 'Reels, edits, and motion graphics that keep brands in motion.',
    tone: 'motion',
    featuredVideo: motionHeroVideo,
    youtubeVideos: MOTION_VIDEOS,
    items: () => [],
  },
  {
    id: 'website',
    index: '02',
    title: 'Website & System Design',
    description: 'Crisp product surfaces, web experiences, and scalable design systems.',
    tone: 'website',
    featuredImage: {
      image: websiteHeroImage,
      title: 'Multi-Brand Web Experiences',
      blurb:
        'Travel and healthcare website systems — Adamas Holidays, emergency care, and clinic networks.',
      tag: 'Website',
    },
    items: () => [],
  },
  {
    id: 'digital-marketing',
    index: '03',
    title: 'Digital Marketing',
    description: 'Campaign assets, growth creatives, and channel-ready storytelling.',
    tone: 'marketing',
    items: () => worksByCategory['digital-marketing'] || [],
  },
];

function WorkPopup({ item, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="work-section-popup" role="dialog" aria-modal="true" aria-label={item.title}>
      <button
        type="button"
        className="work-section-popup__backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="work-section-popup__panel">
        <button
          type="button"
          className="work-section-popup__close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ✕
        </button>
        <div className="work-section-popup__media">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="work-section-popup__meta">
          {item.tag && <span className="work-section-popup__tag">{item.tag}</span>}
          <h3 className="work-section-popup__title">{item.title}</h3>
          {item.blurb && <p className="work-section-popup__blurb">{item.blurb}</p>}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function WorkCard({ item, variant = 'default', onOpen }) {
  return (
    <button
      type="button"
      className={`work-card work-card--${variant}`}
      onClick={() => onOpen(item)}
      aria-label={`View ${item.title}`}
    >
      <div className="work-card__media">
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <div className="work-card__meta">
        {item.tag && <span className="work-card__tag">{item.tag}</span>}
        <h3 className="work-card__title">{item.title}</h3>
        {item.blurb && <p className="work-card__blurb">{item.blurb}</p>}
      </div>
    </button>
  );
}

export default function WorkSections() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(null);

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

        const grid = section.querySelector('.work-section__grid');
        if (grid) {
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
                trigger: grid,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
            },
          );
        }

        const fullframe = section.querySelector('.work-section__fullframe');
        if (fullframe) {
          gsap.fromTo(
            fullframe,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: fullframe,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            },
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="work-sections">
      {SECTIONS.map((section) => {
        const items = section.items().slice(0, 8);

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

            {section.featuredImage && (
              <button
                type="button"
                className="work-section__fullframe work-section__reveal"
                onClick={() => setActive(section.featuredImage)}
                aria-label={`View ${section.featuredImage.title}`}
              >
                <img
                  src={section.featuredImage.image}
                  alt={section.featuredImage.title}
                  loading="eager"
                  decoding="async"
                />
              </button>
            )}

            {section.youtubeVideos?.length > 0 && (
              <div className="work-section__videos work-section__reveal">
                {section.youtubeVideos.map((video) => (
                  <div key={video.id} className="work-section__video-card">
                    <div className="work-section__video-frame">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <div className={`work-section__grid work-section__grid--${section.tone}`}>
                {items.map((item, i) => (
                  <WorkCard
                    key={`${section.id}-${item.title}-${i}`}
                    item={item}
                    onOpen={setActive}
                    variant="default"
                  />
                ))}
              </div>
            )}
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

      {active && <WorkPopup item={active} onClose={() => setActive(null)} />}
    </div>
  );
}
