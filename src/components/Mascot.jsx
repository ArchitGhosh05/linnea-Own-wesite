import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import foxImg from '../assets/mascot/linnea-fox.png';
import './Mascot.css';

const GREET_MESSAGES = [
  "Hi there! 👋 I'm Linnea!",
  "Welcome! Glad you're here 🎉",
  "Hello! Need a hand today?",
];
const THINK_MESSAGES = [
  'Let me take a look... 🤔',
  'Good question, one sec...',
  'Hmm, checking that for you...',
];
const EXCITED_MESSAGES = [
  "Ooh nice, let's go! 🚀",
  'Awesome! On it! ⚡',
  'Yes! Making it happen!',
];
const WORKING_MESSAGES = ['Working on it...', 'Just a moment...', 'Putting it together...'];
const IDLE_MESSAGES = [
  'Need help? Just ask! 💬',
  "Poke me if you're curious 👀",
  "I'm here if you need me!",
];

const DOTS = ' <span class="mascot-dots"><span></span><span></span><span></span></span>';
const ACTIVITY_LABEL = {
  idle: '✨',
  wave: '👋',
  excited: '🚀',
  think: '🤔',
  work: '🛠️',
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Mascot() {
  const location = useLocation();
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const bubbleRef = useRef(null);
  const figureRef = useRef(null);
  const shadowRef = useRef(null);
  const activityRef = useRef(null);
  const fxRef = useRef(null);
  const apiRef = useRef(null);
  const timersRef = useRef({ bubble: null, revert: null, fidget: null });
  const motionRef = useRef({ tl: null, mood: 'idle' });

  useEffect(() => {
    const stage = stageRef.current;
    const bubble = bubbleRef.current;
    const wrap = wrapRef.current;
    const figure = figureRef.current;
    const shadow = shadowRef.current;
    const activity = activityRef.current;
    const fx = fxRef.current;
    if (!stage || !bubble || !wrap || !figure || !shadow || !activity || !fx) return undefined;

    const clearTimers = () => {
      if (timersRef.current.bubble) clearTimeout(timersRef.current.bubble);
      if (timersRef.current.revert) clearTimeout(timersRef.current.revert);
      if (timersRef.current.fidget) clearTimeout(timersRef.current.fidget);
      timersRef.current.bubble = null;
      timersRef.current.revert = null;
      timersRef.current.fidget = null;
    };

    const killMotion = () => {
      if (motionRef.current.tl) {
        motionRef.current.tl.kill();
        motionRef.current.tl = null;
      }
      gsap.killTweensOf([figure, shadow, activity, fx]);
    };

    const burstFx = (kind) => {
      fx.dataset.fx = kind;
      fx.classList.remove('mascot-fx--burst');
      // reflow so animation restarts
      void fx.offsetWidth;
      fx.classList.add('mascot-fx--burst');
    };

    const playMood = (mood) => {
      motionRef.current.mood = mood;
      stage.dataset.mood = mood;
      activity.textContent = ACTIVITY_LABEL[mood] || '✨';
      killMotion();

      gsap.set(figure, { x: 0, y: 0, rotate: 0, scale: 1, scaleX: 1, scaleY: 1, transformOrigin: '50% 100%' });
      gsap.set(shadow, { scaleX: 1, opacity: 0.35 });
      gsap.set(activity, { y: 0, scale: 1, opacity: 1 });

      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ repeat: -1 });
      motionRef.current.tl = tl;

      if (mood === 'idle') {
        tl.to(figure, { y: -8, rotate: -2, duration: 1.6, ease: 'sine.inOut' })
          .to(shadow, { scaleX: 0.86, opacity: 0.28, duration: 1.6, ease: 'sine.inOut' }, 0)
          .to(figure, { y: 0, rotate: 2, duration: 1.6, ease: 'sine.inOut' })
          .to(shadow, { scaleX: 1, opacity: 0.35, duration: 1.6, ease: 'sine.inOut' }, '-=1.6')
          .to(figure, { y: -5, rotate: 0, duration: 1.4, ease: 'sine.inOut' })
          .to(shadow, { scaleX: 0.9, opacity: 0.3, duration: 1.4, ease: 'sine.inOut' }, '-=1.4')
          .to(figure, { y: 0, rotate: -1, duration: 1.4, ease: 'sine.inOut' })
          .to(shadow, { scaleX: 1, opacity: 0.35, duration: 1.4, ease: 'sine.inOut' }, '-=1.4');
        gsap.to(activity, { y: -4, duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      } else if (mood === 'wave') {
        burstFx('wave');
        tl.to(figure, { rotate: 10, y: -6, scale: 1.04, duration: 0.28, ease: 'power2.out' })
          .to(figure, { rotate: -12, y: -2, duration: 0.32, ease: 'power1.inOut' })
          .to(figure, { rotate: 14, y: -10, duration: 0.32, ease: 'power1.inOut' })
          .to(figure, { rotate: -8, y: -3, duration: 0.3, ease: 'power1.inOut' })
          .to(figure, { rotate: 0, y: 0, scale: 1, duration: 0.34, ease: 'power2.inOut' });
        tl.to(shadow, { scaleX: 0.8, duration: 0.28, ease: 'power2.out' }, 0)
          .to(shadow, { scaleX: 1, duration: 0.34, ease: 'power2.inOut' }, '-=0.34');
        gsap.to(activity, {
          keyframes: [
            { rotate: -18, scale: 1.15, duration: 0.25 },
            { rotate: 18, scale: 1.05, duration: 0.25 },
            { rotate: 0, scale: 1, duration: 0.25 },
          ],
          repeat: -1,
        });
      } else if (mood === 'excited') {
        burstFx('excited');
        tl.to(figure, {
          y: -28,
          rotate: -8,
          scaleX: 0.94,
          scaleY: 1.08,
          duration: 0.28,
          ease: 'power2.out',
        })
          .to(shadow, { scaleX: 0.55, opacity: 0.18, duration: 0.28, ease: 'power2.out' }, 0)
          .to(figure, {
            y: 0,
            rotate: 6,
            scaleX: 1.06,
            scaleY: 0.92,
            duration: 0.24,
            ease: 'power2.in',
          })
          .to(shadow, { scaleX: 1.15, opacity: 0.4, duration: 0.24, ease: 'power2.in' }, '-=0.24')
          .to(figure, {
            y: -16,
            rotate: 4,
            scaleX: 0.97,
            scaleY: 1.04,
            duration: 0.22,
            ease: 'power2.out',
          })
          .to(shadow, { scaleX: 0.7, opacity: 0.22, duration: 0.22, ease: 'power2.out' }, '-=0.22')
          .to(figure, {
            y: 0,
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 0.22,
            ease: 'power2.in',
          })
          .to(shadow, { scaleX: 1, opacity: 0.35, duration: 0.22, ease: 'power2.in' }, '-=0.22');
        gsap.to(activity, {
          y: -10,
          rotate: 20,
          scale: 1.25,
          duration: 0.35,
          yoyo: true,
          repeat: -1,
          ease: 'power1.inOut',
        });
      } else if (mood === 'think') {
        burstFx('think');
        tl.to(figure, { rotate: -8, y: -4, x: -4, duration: 1.1, ease: 'sine.inOut' })
          .to(figure, { rotate: -4, y: -8, x: -2, duration: 1.1, ease: 'sine.inOut' })
          .to(figure, { rotate: -10, y: -3, x: -6, duration: 1.1, ease: 'sine.inOut' })
          .to(figure, { rotate: -5, y: -6, x: -3, duration: 1.1, ease: 'sine.inOut' });
        gsap.to(shadow, { scaleX: 0.88, opacity: 0.28, duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to(activity, { y: -6, duration: 0.9, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      } else if (mood === 'work') {
        burstFx('work');
        // jogging / working pace
        tl.to(figure, { x: -10, y: -6, rotate: -4, duration: 0.22, ease: 'power1.out' })
          .to(shadow, { x: -6, scaleX: 0.85, duration: 0.22, ease: 'power1.out' }, 0)
          .to(figure, { x: 0, y: 0, rotate: 0, scaleY: 0.94, duration: 0.16, ease: 'power1.in' })
          .to(shadow, { x: 0, scaleX: 1.05, duration: 0.16, ease: 'power1.in' }, '-=0.16')
          .to(figure, { x: 10, y: -6, rotate: 4, scaleY: 1, duration: 0.22, ease: 'power1.out' })
          .to(shadow, { x: 6, scaleX: 0.85, duration: 0.22, ease: 'power1.out' }, '-=0.22')
          .to(figure, { x: 0, y: 0, rotate: 0, scaleY: 0.94, duration: 0.16, ease: 'power1.in' })
          .to(shadow, { x: 0, scaleX: 1.05, duration: 0.16, ease: 'power1.in' }, '-=0.16')
          .to(figure, { scaleY: 1, duration: 0.08 });
        gsap.to(activity, { rotate: 12, duration: 0.28, yoyo: true, repeat: -1, ease: 'power1.inOut' });
      }
    };

    const scheduleFidget = () => {
      if (timersRef.current.fidget) clearTimeout(timersRef.current.fidget);
      timersRef.current.fidget = setTimeout(() => {
        if (motionRef.current.mood !== 'idle') {
          scheduleFidget();
          return;
        }
        const fidget = pick(['peek', 'hop', 'spin']);
        const figureEl = figureRef.current;
        if (!figureEl || prefersReducedMotion()) {
          scheduleFidget();
          return;
        }
        const one = gsap.timeline({
          onComplete: scheduleFidget,
        });
        if (fidget === 'peek') {
          one.to(figureEl, { rotate: 12, x: 6, duration: 0.35, ease: 'power2.out' })
            .to(figureEl, { rotate: 12, duration: 0.45 })
            .to(figureEl, { rotate: 0, x: 0, duration: 0.4, ease: 'power2.inOut' });
        } else if (fidget === 'hop') {
          one.to(figureEl, { y: -18, scaleY: 1.06, duration: 0.25, ease: 'power2.out' })
            .to(figureEl, { y: 0, scaleY: 1, duration: 0.28, ease: 'bounce.out' });
        } else {
          one.to(figureEl, { rotate: 360, duration: 0.7, ease: 'power2.inOut' }).set(figureEl, { rotate: 0 });
        }
      }, 4200 + Math.random() * 3200);
    };

    const say = (text, opts = {}) => {
      if (timersRef.current.bubble) clearTimeout(timersRef.current.bubble);
      bubble.innerHTML = text;
      bubble.classList.add('mascot-bubble--show');
      if (opts.autoHide !== false) {
        timersRef.current.bubble = setTimeout(() => {
          bubble.classList.remove('mascot-bubble--show');
        }, opts.duration || 3600);
      }
    };

    const attention = (on) => {
      stage.classList.toggle('mascot-stage--attn', Boolean(on));
    };

    const Linnea = {
      greet(text) {
        clearTimers();
        playMood('wave');
        say(text || pick(GREET_MESSAGES), { duration: 4200 });
        timersRef.current.revert = setTimeout(() => Linnea.idle(), 5200);
        scheduleFidget();
      },
      excited(text) {
        clearTimers();
        playMood('excited');
        say(text || pick(EXCITED_MESSAGES), { duration: 3200 });
        timersRef.current.revert = setTimeout(() => Linnea.idle(), 4200);
        scheduleFidget();
      },
      thinking(text) {
        clearTimers();
        playMood('think');
        say((text || pick(THINK_MESSAGES)) + DOTS, { autoHide: false });
      },
      working(text) {
        clearTimers();
        playMood('work');
        say((text || pick(WORKING_MESSAGES)) + DOTS, { autoHide: false });
      },
      say(text, opts) {
        say(text, opts);
      },
      idle() {
        clearTimers();
        playMood('idle');
        bubble.classList.remove('mascot-bubble--show');
        scheduleFidget();
      },
      attention,
      hide() {
        wrap.classList.add('mascot-widget--hidden');
        killMotion();
      },
      show() {
        wrap.classList.remove('mascot-widget--hidden');
        playMood(motionRef.current.mood || 'idle');
      },
    };

    apiRef.current = Linnea;
    window.Linnea = Linnea;

    const drag = {
      active: false,
      moved: false,
      offX: 0,
      offY: 0,
      startX: 0,
      startY: 0,
      pointerId: null,
    };

    const onPointerDown = (e) => {
      if (e.target.closest('.mascot-close')) return;
      const rect = wrap.getBoundingClientRect();
      drag.active = true;
      drag.moved = false;
      drag.offX = e.clientX - rect.left;
      drag.offY = e.clientY - rect.top;
      drag.startX = e.clientX;
      drag.startY = e.clientY;
      drag.pointerId = e.pointerId;
      stage.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!drag.active) return;
      if (!drag.moved) {
        if (Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) < 5) return;
        drag.moved = true;
        wrap.classList.add('mascot-widget--dragging');
      }
      const w = wrap.offsetWidth;
      const h = wrap.offsetHeight;
      const left = Math.min(Math.max(0, e.clientX - drag.offX), window.innerWidth - w);
      const top = Math.min(Math.max(0, e.clientY - drag.offY), window.innerHeight - h);
      wrap.style.left = `${left}px`;
      wrap.style.top = `${top}px`;
      wrap.style.right = 'auto';
      wrap.style.bottom = 'auto';
    };

    const onPointerUp = (e) => {
      if (!drag.active) return;
      stage.releasePointerCapture?.(e.pointerId);
      drag.active = false;
      wrap.classList.remove('mascot-widget--dragging');
    };

    const onStageClick = (e) => {
      if (e.target.closest('.mascot-close') || e.target.closest('.mascot-badge')) return;
      if (drag.moved) return;
      attention(false);
      // quick click reaction: hop then think then greet
      if (!prefersReducedMotion()) {
        gsap
          .timeline()
          .to(figure, { y: -24, scaleY: 1.08, duration: 0.22, ease: 'power2.out' })
          .to(figure, { y: 0, scaleY: 1, duration: 0.3, ease: 'bounce.out' });
      }
      Linnea.thinking();
      timersRef.current.revert = setTimeout(() => Linnea.greet(pick(IDLE_MESSAGES)), 1600);
    };

    const onClose = (e) => {
      e.stopPropagation();
      Linnea.hide();
    };

    stage.addEventListener('click', onStageClick);
    stage.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    wrap.querySelector('.mascot-close')?.addEventListener('click', onClose);

    requestAnimationFrame(() => stage.classList.add('mascot-stage--in'));
    playMood('idle');
    const greetTimer = setTimeout(() => Linnea.greet(), 700);

    return () => {
      clearTimers();
      clearTimeout(greetTimer);
      killMotion();
      stage.removeEventListener('click', onStageClick);
      stage.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (window.Linnea === Linnea) delete window.Linnea;
    };
  }, []);

  useEffect(() => {
    const api = apiRef.current || window.Linnea;
    if (!api) return undefined;

    const path = location.pathname;
    const timer = setTimeout(() => {
      if (path.startsWith('/works')) {
        api.excited('Yay, our work! ✦');
      } else if (path.startsWith('/contact')) {
        api.thinking("Let's get in touch...");
      } else if (path.startsWith('/services') || path.startsWith('/team')) {
        api.working('Looking around...');
        setTimeout(() => api.greet(), 2400);
      } else if (path === '/') {
        api.greet();
      } else {
        api.idle();
        api.say(pick(IDLE_MESSAGES));
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div ref={wrapRef} className="mascot-widget" aria-live="polite">
      <div ref={bubbleRef} className="mascot-bubble" id="linneaBubble" />
      <div ref={stageRef} className="mascot-stage mascot-stage--idle" id="linneaStage" data-mood="idle">
        <button type="button" className="mascot-close" aria-label="Hide mascot">
          ✕
        </button>
        <div ref={activityRef} className="mascot-activity" aria-hidden="true">
          ✨
        </div>
        <div ref={fxRef} className="mascot-fx" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div ref={figureRef} className="mascot-figure">
          <img className="mascot-img" src={foxImg} alt="Linnea mascot" draggable={false} />
        </div>
        <div ref={shadowRef} className="mascot-shadow" aria-hidden="true" />
        <div className="mascot-badge" aria-hidden="true" />
      </div>
    </div>
  );
}
