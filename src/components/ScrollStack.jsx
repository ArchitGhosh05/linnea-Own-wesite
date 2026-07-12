import { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  smoothFactor = 0.14,
  lenis: lenisRef = null,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef([]);
  const targetsRef = useRef(new Map());
  const currentsRef = useRef(new Map());
  const isVisibleRef = useRef(true);
  const loopIdRef = useRef(0);

  const getLenis = useCallback(() => lenisRef?.current ?? null, [lenisRef]);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollTop = useCallback(() => {
    if (useWindowScroll) {
      const lenis = getLenis();
      return lenis ? lenis.animatedScroll : window.scrollY;
    }
    return scrollerRef.current?.scrollTop ?? 0;
  }, [useWindowScroll, getLenis]);

  const getElementOffset = useCallback(
    (element) => {
      const scrollTop = getScrollTop();
      const rect = element.getBoundingClientRect();
      return rect.top + scrollTop;
    },
    [getScrollTop]
  );

  const updateTargets = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = getScrollTop();
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight ?? window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = (topCardIndex - i) * blurAmount;
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      targetsRef.current.set(i, { translateY, scale, blur, rotation });

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollTop,
    getElementOffset,
  ]);

  const renderSmoothFrame = useCallback(() => {
    const factor = smoothFactor;

    cardsRef.current.forEach((card, i) => {
      const target = targetsRef.current.get(i);
      if (!card || !target) return;

      const prev = currentsRef.current.get(i) ?? target;
      const translateY = lerp(prev.translateY, target.translateY, factor);
      const scale = lerp(prev.scale, target.scale, factor);
      const blur = lerp(prev.blur, target.blur, factor);
      const rotation = lerp(prev.rotation, target.rotation, factor);

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = blur > 0.05 ? `blur(${blur}px)` : '';

      currentsRef.current.set(i, { translateY, scale, blur, rotation });
    });
  }, [smoothFactor]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;
    targetsRef.current.clear();
    currentsRef.current.clear();

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    const runLoop = () => {
      if (!isVisibleRef.current) {
        loopIdRef.current = 0;
        return;
      }
      renderSmoothFrame();
      loopIdRef.current = requestAnimationFrame(runLoop);
    };

    const startLoop = () => {
      if (!loopIdRef.current) {
        loopIdRef.current = requestAnimationFrame(runLoop);
      }
    };

    const stopLoop = () => {
      if (loopIdRef.current) {
        cancelAnimationFrame(loopIdRef.current);
        loopIdRef.current = 0;
      }
    };

    const onScroll = () => {
      updateTargets();
    };

    const observer =
      useWindowScroll &&
      typeof IntersectionObserver !== 'undefined' &&
      new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting;
          if (isVisibleRef.current) {
            updateTargets();
            startLoop();
          } else {
            stopLoop();
          }
        },
        { rootMargin: '120px 0px' }
      );

    observer?.observe(scroller);

    if (useWindowScroll) {
      window.addEventListener('scroll', onScroll, { passive: true });
    } else {
      scroller.addEventListener('scroll', onScroll, { passive: true });
    }
    window.addEventListener('resize', onScroll);

    updateTargets();
    startLoop();

    return () => {
      observer?.disconnect();
      stopLoop();
      if (useWindowScroll) {
        window.removeEventListener('scroll', onScroll);
      } else {
        scroller.removeEventListener('scroll', onScroll);
      }
      window.removeEventListener('resize', onScroll);
      cardsRef.current = [];
      targetsRef.current.clear();
      currentsRef.current.clear();
      stackCompletedRef.current = false;
      isVisibleRef.current = false;
    };
  }, [itemDistance, updateTargets, renderSmoothFrame, useWindowScroll]);

  return (
    <div
      className={`scroll-stack-scroller${useWindowScroll ? ' scroll-stack-scroller--window' : ''} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
