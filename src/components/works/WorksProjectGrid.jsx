import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorksProjectGrid.css';

gsap.registerPlugin(ScrollTrigger);

const BENTO_SLOTS = [
  'works-project-grid__card--slot-1',
  'works-project-grid__card--slot-2',
  'works-project-grid__card--slot-3',
  'works-project-grid__card--slot-4',
  'works-project-grid__card--slot-5',
  'works-project-grid__card--slot-6',
  'works-project-grid__card--slot-7',
];

function buildBentoItems(items) {
  const out = [...items];
  while (out.length < 7) out.push(...items);
  return out.slice(0, 7);
}

export default function WorksProjectGrid({ category, items }) {
  const sectionRef = useRef(null);
  const bentoItems = buildBentoItems(items);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.works-project-grid__header > *',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.works-project-grid__header',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.works-project-grid__bento .works-project-grid__card',
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.works-project-grid__bento',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [category.id, items.length]);

  return (
    <section ref={sectionRef} className="works-project-grid">
      <div className="works-project-grid__shell">
        <header className="works-project-grid__header">
          <span className="works-project-grid__tag">Portfolio</span>
          <h2 className="works-project-grid__title">Featured Projects.</h2>
          <p className="works-project-grid__desc">
            Hand-picked {category.label.toLowerCase()} work — crafted with the same speed and quality
            that sets us apart.
          </p>
        </header>

        <div className="works-project-grid__bento">
          {bentoItems.map((item, i) => (
            <Link
              key={`${item.title}-${i}`}
              to="/contact"
              className={`works-project-grid__card ${BENTO_SLOTS[i]}`}
              aria-label={item.title}
            >
              <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
              <span className="works-project-grid__card-shade" aria-hidden="true" />
              <span className="works-project-grid__card-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="works-project-grid__mobile">
          {items.slice(0, 6).map((item, i) => (
            <Link
              key={`mobile-${item.title}-${i}`}
              to="/contact"
              className="works-project-grid__card works-project-grid__card--mobile"
              aria-label={item.title}
            >
              <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
              <span className="works-project-grid__card-shade" aria-hidden="true" />
              <span className="works-project-grid__card-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
