import { Link } from 'react-router-dom';
import ScrollStack, { ScrollStackItem } from '../ScrollStack';
import './WorksScrollStack.css';

export default function WorksScrollStack({ category, items }) {
  const stackItems = items.slice(0, 6);
  const isLandscape = category.id === 'digital-marketing' || category.id === 'creative';

  return (
    <section className="works-scroll-stack">
      <header className="works-scroll-stack__header">
        <span className="works-scroll-stack__tag">Stack</span>
        <h2 className="works-scroll-stack__title">Scroll Through Our {category.label} Work</h2>
        <p className="works-scroll-stack__desc">
          Each project stacks and scales as you scroll — dive into the details one card at a time.
        </p>
      </header>

      <ScrollStack
        useWindowScroll
        smoothFactor={category.id === 'creative' ? 0.18 : 0.14}
        itemDistance={120}
        itemStackDistance={32}
        baseScale={0.92}
        itemScale={0.028}
        stackPosition="20%"
        scaleEndPosition="10%"
        blurAmount={0.5}
        className="works-scroll-stack__stack"
      >
        {stackItems.map((item, i) => (
          <ScrollStackItem key={`${item.title}-${i}`} itemClassName="works-scroll-stack__card">
            <Link
              to="/contact"
              className={`works-scroll-stack__card-link${
                isLandscape ? ' works-scroll-stack__card-link--landscape' : ''
              }`}
              aria-label={item.title}
            >
              <img
                src={item.stackImage ?? item.image}
                alt={item.title}
                loading="lazy"
                draggable="false"
              />
              <span className="works-scroll-stack__card-arrow" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </Link>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
