import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import education from '../../assets/marquee/education.png';
import designRoadLearning from '../../assets/marquee/design-road-learning.png';
import srmbBeyond from '../../assets/marquee/srmb-beyond-boundaries.png';
import bloomsbury from '../../assets/marquee/bloomsbury-future-bloom.png';
import proEditBag from '../../assets/marquee/pro-edit-bag.png';
import srijan from '../../assets/marquee/srijan-extraordinary.png';
import classroomCareer from '../../assets/marquee/classroom-to-career.png';
import doctorsDay from '../../assets/marquee/doctors-day.png';
import shehChef from '../../assets/marquee/sheh-chef.png';
import shehSeeFuture from '../../assets/marquee/sheh-see-future.png';
import discoverExcel from '../../assets/marquee/discover-develop-excel.png';
import sweatJoinNow from '../../assets/marquee/sweat-join-now.png';
import sweatTrainHarder from '../../assets/marquee/sweat-train-harder.png';
import sweatEliteWhey from '../../assets/marquee/sweat-elite-whey.png';
import petCommunication from '../../assets/marquee/pet-communication.png';
import sweatMbWhey from '../../assets/marquee/sweat-mb-whey.png';
import creatives04 from '../../assets/marquee/creatives-04.png';
import creatives02 from '../../assets/marquee/creatives-02.png';
import './WorkFunkyMarquee.css';

const MARQUEE_ITEMS = [
  { image: education, title: 'Education Campaign', blurb: 'From classroom to career storytelling.', tag: 'Creative' },
  { image: designRoadLearning, title: 'The Road of Learning', blurb: 'School admissions creative with 3D character storytelling.', tag: 'Creative' },
  { image: srmbBeyond, title: 'Built Beyond Boundaries', blurb: 'SRMB construction brand campaign.', tag: 'Creative' },
  { image: bloomsbury, title: 'Let the Future Bloom', blurb: 'Bloomsbury curiosity-to-creation campaign.', tag: 'Creative' },
  { image: proEditBag, title: 'The Bag That Builds', blurb: 'Pro Edit construction product creative.', tag: 'Creative' },
  { image: srijan, title: 'Feels Extraordinary', blurb: 'Srijan lifestyle and luxury living creative.', tag: 'Creative' },
  { image: classroomCareer, title: 'Classroom to Career', blurb: 'Learn, innovate, succeed education campaign.', tag: 'Creative' },
  { image: doctorsDay, title: "National Doctors' Day", blurb: 'Doctors hold the keys to hope.', tag: 'Creative' },
  { image: shehChef, title: 'More Than a Chef', blurb: 'Hospitality and culinary opportunities campaign.', tag: 'Creative' },
  { image: shehSeeFuture, title: 'See Your Future', blurb: 'Real-estate vision campaign — exclusive, elegant, extraordinary.', tag: 'Creative' },
  { image: discoverExcel, title: 'Discover Develop Excel', blurb: 'School talent and strengths admissions creative.', tag: 'Creative' },
  { image: sweatJoinNow, title: 'Sweat Fitness — Join Now', blurb: 'Fitness transformation social creative.', tag: 'Creative' },
  { image: sweatTrainHarder, title: 'Train Harder', blurb: 'Sweat Fitness motivational campaign.', tag: 'Creative' },
  { image: sweatEliteWhey, title: 'Unlock Your Strongest Self', blurb: 'Sweat Nutrition Elite Whey product creative.', tag: 'Creative' },
  { image: petCommunication, title: 'Pet Communication', blurb: 'Neko & Jimmy sugar-level awareness creative.', tag: 'Creative' },
  { image: sweatMbWhey, title: 'Fuel the Grind', blurb: 'MuscleBlaze whey nutrition campaign.', tag: 'Creative' },
  { image: creatives04, title: 'Creative Campaign 04', blurb: 'Bold social creative from the Linnea studio.', tag: 'Creative' },
  { image: creatives02, title: 'Creative Campaign 02', blurb: 'High-impact brand visual for social platforms.', tag: 'Creative' },
];

function MarqueeRow({ items, direction = 'left', speed = 55, onSelect }) {
  const doubled = [...items, ...items];

  return (
    <div className={`work-marquee__row work-marquee__row--${direction}`}>
      <div className="work-marquee__track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <button
            key={`${item.title}-${i}`}
            type="button"
            className={`work-marquee__card work-marquee__card--${(i % 5) + 1}`}
            onClick={() => onSelect(item)}
            aria-label={`View ${item.title}`}
          >
            <img src={item.image} alt="" loading="lazy" draggable={false} />
            <span className="work-marquee__card-caption">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

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
    <div className="work-popup" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" className="work-popup__backdrop" aria-label="Close" onClick={onClose} />
      <div className="work-popup__panel">
        <button type="button" className="work-popup__close" onClick={onClose} aria-label="Close popup">
          ✕
        </button>
        <div className="work-popup__media">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="work-popup__meta">
          {item.tag && <span className="work-popup__tag">{item.tag}</span>}
          <h3 className="work-popup__title">{item.title}</h3>
          {item.blurb && <p className="work-popup__blurb">{item.blurb}</p>}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function WorkFunkyMarquee() {
  const [active, setActive] = useState(null);

  const { rowOne, rowTwo } = useMemo(() => {
    const mid = Math.ceil(MARQUEE_ITEMS.length / 2);
    return {
      rowOne: MARQUEE_ITEMS.slice(0, mid),
      rowTwo: MARQUEE_ITEMS.slice(mid),
    };
  }, []);

  return (
    <section className="work-marquee" aria-label="Work gallery">
      <div className="work-marquee__header">
        <span className="work-marquee__eyebrow">Selected frames</span>
        <h2 className="work-marquee__title">A continuous reel of craft</h2>
      </div>

      <div className="work-marquee__stage">
        <MarqueeRow items={rowOne} direction="ltr" speed={48} onSelect={setActive} />
        <MarqueeRow items={rowTwo} direction="rtl" speed={56} onSelect={setActive} />
      </div>

      {active && <WorkPopup item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
