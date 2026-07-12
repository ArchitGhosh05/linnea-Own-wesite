import { useEffect } from 'react';
import { NavLink, Outlet, Navigate, useParams, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorksShowcase from '../components/works/WorksShowcase';
import WebsitePortfolio from '../components/website/WebsitePortfolio';
import { workCategories, worksByCategory } from '../data';

function WorksGrid() {
  const { category } = useParams();
  const active = workCategories.find((c) => c.id === category);
  const items = worksByCategory[category];

  if (!active || !items) {
    return <Navigate to="/works/creative" replace />;
  }

  if (category === 'website') {
    return <WebsitePortfolio />;
  }

  return <WorksShowcase category={active} items={items} />;
}

export default function Works() {
  const location = useLocation();
  const isWebsite = location.pathname.endsWith('/website');

  useEffect(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname]);

  return (
    <div className={isWebsite ? 'works-page' : 'works-page pt-24'}>
      {!isWebsite && (
        <section className="sticky top-[72px] z-40 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex flex-wrap items-center justify-center gap-2">
              {workCategories.map((cat) => (
                <NavLink
                  key={cat.id}
                  to={`/works/${cat.id}`}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                      isActive
                        ? 'bg-red-500 text-white shadow-[0_0_20px_-2px_rgba(239,68,68,0.8)]'
                        : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {cat.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </section>
      )}

      <Outlet />
    </div>
  );
}

export { WorksGrid };
