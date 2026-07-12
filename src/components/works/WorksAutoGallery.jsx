import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './WorksAutoGallery.css';

function buildTrackItems(items) {
  const min = 6;
  const out = [...items];
  while (out.length < min) out.push(...items);
  return [...out, ...out];
}

function GalleryCard({ item, index, category, isLandscape }) {
  return (
    <Link
      to="/contact"
      className={`works-gallery__card works-gallery__card--${(index % 6) + 1}${
        isLandscape ? ' works-gallery__card--landscape' : ''
      }`}
    >
      <div className="works-gallery__card-frame">
        <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
        <span className="works-gallery__card-btn" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H9M17 7v8" />
          </svg>
        </span>
      </div>
      <div className="works-gallery__card-info">
        <span className="works-gallery__card-tag">{item.tag || category.label}</span>
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
}

export default function WorksAutoGallery({ category, items }) {
  const isLandscape = category.id === 'digital-marketing' || category.id === 'creative';
  const trackItems = useMemo(() => buildTrackItems(items), [items]);

  return (
    <section className="works-gallery">
      <div className="works-gallery__inner">
        <header className="works-gallery__header">
          <h2 className="works-gallery__title">Explore Our {category.label} Work</h2>
          <p className="works-gallery__desc">
            A continuous showcase of projects — moving automatically so you can browse every piece.
          </p>
        </header>

        <div className="works-gallery__viewport">
          <div className="works-gallery__marquee">
            <div className="works-gallery__track">
              {trackItems.map((item, i) => (
                <GalleryCard
                  key={`a-${item.title}-${i}`}
                  item={item}
                  index={i}
                  category={category}
                  isLandscape={isLandscape}
                />
              ))}
            </div>
            <div className="works-gallery__track" aria-hidden="true">
              {trackItems.map((item, i) => (
                <GalleryCard
                  key={`b-${item.title}-${i}`}
                  item={item}
                  index={i}
                  category={category}
                  isLandscape={isLandscape}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
