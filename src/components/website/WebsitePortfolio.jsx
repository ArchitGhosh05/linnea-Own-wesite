import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import WorksCategoryNav from './WorksCategoryNav';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import './WebsitePortfolio.css';

export default function WebsitePortfolio() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Jack -- 3D Creator';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="website-portfolio">
      <HeroSection />
      <WorksCategoryNav />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
