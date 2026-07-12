import { Link } from 'react-router-dom';
import { worksByCategory } from '../data';
import './DigitalMarketingGrid.css';

const items = worksByCategory['digital-marketing'];

export default function DigitalMarketingGrid() {
  return (
    <>
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
          Digital Marketing
        </span>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Campaigns that convert
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
          Social creatives, healthcare awareness, brand growth, and product launches —
          crafted for Instagram and beyond.
        </p>
      </div>

      <div className="dm-card-grid">
        {items.map((item) => (
          <article key={item.title} className="dm-work-card">
            <div className="dm-work-card__media">
              <img src={item.image} alt={item.title} loading="lazy" draggable="false" />
            </div>
            <div className="dm-work-card__body">
              <span className="dm-work-card__tag">{item.tag}</span>
              <h3 className="dm-work-card__title">{item.title}</h3>
              <p className="dm-work-card__blurb">{item.blurb}</p>
              <Link to="/contact" className="dm-work-card__link">
                View campaign
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-105 hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)]"
        >
          Start your campaign
        </Link>
      </div>
    </>
  );
}
