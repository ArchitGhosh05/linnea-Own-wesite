import { useMemo } from 'react';
import { creativeGalleryItems, worksByCategory } from '../../data';
import './WorkFunkyMarquee.css';

function MarqueeRow({ items, direction = 'left', speed = 55 }) {
  const doubled = [...items, ...items];

  return (
    <div className={`work-marquee__row work-marquee__row--${direction}`}>
      <div
        className="work-marquee__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <figure
            key={`${item.title}-${i}`}
            className={`work-marquee__card work-marquee__card--${(i % 5) + 1}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function WorkFunkyMarquee() {
  const { rowOne, rowTwo } = useMemo(() => {
    const graphics = creativeGalleryItems.map((item) => ({
      image: item.image,
      title: item.title,
    }));
    const marketing = (worksByCategory['digital-marketing'] || []).map((item) => ({
      image: item.image,
      title: item.title,
    }));
    const motion = (worksByCategory.motion || []).slice(0, 4).map((item) => ({
      image: item.image,
      title: item.title,
    }));
    const mixed = [...graphics, ...marketing, ...motion];
    const mid = Math.ceil(mixed.length / 2);
    return {
      rowOne: mixed.slice(0, mid),
      rowTwo: mixed.slice(mid).reverse(),
    };
  }, []);

  return (
    <section className="work-marquee" aria-label="Work gallery">
      <div className="work-marquee__header">
        <span className="work-marquee__eyebrow">Selected frames</span>
        <h2 className="work-marquee__title">A continuous reel of craft</h2>
      </div>

      <div className="work-marquee__stage">
        <MarqueeRow items={rowOne} direction="ltr" speed={48} />
        <MarqueeRow items={rowTwo} direction="rtl" speed={56} />
      </div>
    </section>
  );
}
