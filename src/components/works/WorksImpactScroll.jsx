import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorksImpactScroll.css';

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = 140;
const CARD_COUNT = 8;
const HERO_CARD_INDEX = 3;
const HOLD_VH = 0.38;

function loadImages(el) {
  return Promise.all(
    [...el.querySelectorAll('img')].map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          }
        })
    )
  );
}

function getGap(wrapper) {
  const gap = parseFloat(getComputedStyle(wrapper).gap);
  return Number.isFinite(gap) ? gap : 28;
}

function syncHeroLayout(wrapper, leftSpacer, rightSpacer) {
  const cards = [...wrapper.querySelectorAll('.works-impact__card')];
  const hero = cards[HERO_CARD_INDEX];
  const last = cards[cards.length - 1];
  if (!hero || !last || !leftSpacer || !rightSpacer) return;

  const vw = window.innerWidth;
  const gap = getGap(wrapper);
  let offsetBefore = 0;
  for (let i = 0; i < HERO_CARD_INDEX; i += 1) {
    offsetBefore += cards[i].offsetWidth + gap;
  }

  leftSpacer.style.width = `${Math.max(vw / 2 - hero.offsetWidth / 2 - offsetBefore, 16)}px`;
  rightSpacer.style.width = `${Math.max(vw / 2 - last.offsetWidth / 2, 24)}px`;
}

function getScrollMetrics(wrapper) {
  const cards = [...wrapper.querySelectorAll('.works-impact__card')];
  const hero = cards[HERO_CARD_INDEX];
  const last = cards[cards.length - 1];
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  if (!hero || !last) {
    const hold = vh * HOLD_VH;
    return { hold, travel: vw * 0.5, holdRatio: 0.35 };
  }

  const heroCenter = hero.offsetLeft + hero.offsetWidth / 2;
  const lastCenter = last.offsetLeft + last.offsetWidth / 2;
  const lastRight = last.offsetLeft + last.offsetWidth;

  const travel = Math.max(
    lastCenter - heroCenter + 64,
    lastRight - vw + 96,
    lastCenter - vw / 2 + 32
  );
  const hold = vh * HOLD_VH;
  const total = hold + travel;

  return { hold, travel, holdRatio: hold / total };
}

function updateDots(dotsEl, dot) {
  if (!dotsEl) return;
  [...dotsEl.children].forEach((el, i) => {
    el.classList.toggle('works-impact__dot--active', i === dot);
  });
}

export default function WorksImpactScroll({ category, items }) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const wrapperRef = useRef(null);
  const leftSpacerRef = useRef(null);
  const rightSpacerRef = useRef(null);
  const dotsRef = useRef(null);
  const activeDotRef = useRef(HERO_CARD_INDEX);
  const isLandscape = category.id === 'digital-marketing' || category.id === 'creative';
  const impactItems = items.slice(0, CARD_COUNT);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const wrapper = wrapperRef.current;
    const leftSpacer = leftSpacerRef.current;
    const rightSpacer = rightSpacerRef.current;
    const dotsEl = dotsRef.current;
    if (!section || !pin || !wrapper) return;

    let ctx;
    let cancelled = false;
    let mobileCleanup;
    let resizeTimer;

    const setDot = (dot) => {
      if (dot === activeDotRef.current) return;
      activeDotRef.current = dot;
      updateDots(dotsEl, dot);
    };

    const setup = () => {
      ctx?.revert();
      gsap.set(wrapper, { x: 0, force3D: true });
      syncHeroLayout(wrapper, leftSpacer, rightSpacer);
      updateDots(dotsEl, HERO_CARD_INDEX);
      activeDotRef.current = HERO_CARD_INDEX;

      if (window.innerWidth < 640) {
        const viewport = section.querySelector('.works-impact__viewport');
        const onScroll = () => {
          const cards = [...section.querySelectorAll('.works-impact__card')];
          const center = viewport.scrollLeft + viewport.clientWidth / 2;
          let closest = 0;
          let minDist = Infinity;
          cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(center - cardCenter);
            if (dist < minDist) {
              minDist = dist;
              closest = i;
            }
          });
          setDot(closest);
        };
        viewport?.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => viewport?.removeEventListener('scroll', onScroll);
      }

      const { hold, travel, holdRatio } = getScrollMetrics(wrapper);
      const snapX = gsap.utils.snap(1);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: 'none', force3D: true },
          scrollTrigger: {
            id: `impact-${category.id}`,
            trigger: pin,
            pin: true,
            pinSpacing: true,
            scrub: true,
            start: `top ${NAV_OFFSET}px`,
            end: `+=${hold + travel}`,
            anticipatePin: 0,
            onUpdate: (self) => {
              if (self.progress <= holdRatio) {
                setDot(HERO_CARD_INDEX);
                return;
              }
              const moveProgress = (self.progress - holdRatio) / (1 - holdRatio);
              setDot(Math.min(CARD_COUNT - 1, Math.floor(moveProgress * CARD_COUNT + 0.001)));
            },
          },
        });

        tl.to(wrapper, { x: 0, duration: holdRatio }).to(wrapper, {
          x: -travel,
          duration: 1 - holdRatio,
          modifiers: {
            x: (x) => `${snapX(parseFloat(x))}px`,
          },
        });
      }, section);
    };

    const init = async () => {
      if (cancelled) return;
      await loadImages(section);
      if (cancelled) return;
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      if (cancelled) return;
      mobileCleanup?.();
      mobileCleanup = setup();
      ScrollTrigger.sort();
    };

    init();

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (cancelled) return;
        mobileCleanup?.();
        mobileCleanup = setup();
        ScrollTrigger.sort();
      }, 250);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      mobileCleanup?.();
      ctx?.revert();
      ScrollTrigger.getById(`impact-${category.id}`)?.kill();
      gsap.set(wrapper, { clearProps: 'transform' });
    };
  }, [category.id, impactItems.length]);

  return (
    <section ref={sectionRef} className="works-impact">
      <header className="works-impact__header">
        <span className="works-impact__tag">Impact</span>
        <h2 className="works-impact__title">
          How We Are Doing It Faster
          <br />
          And Better Than Others!
        </h2>
        <p className="works-impact__hint">Scroll down — then cards move sideways</p>
      </header>

      <div ref={pinRef} className="works-impact__track">
        <div className="works-impact__viewport">
          <div ref={wrapperRef} className="works-impact__wrapper">
            <div ref={leftSpacerRef} className="works-impact__spacer" aria-hidden="true" />
            {impactItems.map((item, i) => (
              <Link
                key={`impact-${item.title}-${i}`}
                to="/contact"
                className={`works-impact__card works-impact__card--${i + 1}${
                  isLandscape ? ' works-impact__card--landscape' : ''
                }`}
              >
                <img src={item.image} alt={item.title} loading="eager" draggable="false" />
                <span className="works-impact__card-btn" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </span>
              </Link>
            ))}
            <div ref={rightSpacerRef} className="works-impact__spacer" aria-hidden="true" />
          </div>
        </div>

        <div ref={dotsRef} className="works-impact__dots" aria-hidden="true">
          {impactItems.map((_, i) => (
            <span
              key={i}
              className={`works-impact__dot${i === HERO_CARD_INDEX ? ' works-impact__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
