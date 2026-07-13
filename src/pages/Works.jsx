import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkHero from '../components/works/WorkHero';
import WorkFunkyMarquee from '../components/works/WorkFunkyMarquee';
import WorkSections from '../components/works/WorkSections';

export default function Works() {
  const location = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const timer = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="works-page">
      <WorkHero />
      <WorkFunkyMarquee />
      <WorkSections />
    </div>
  );
}
