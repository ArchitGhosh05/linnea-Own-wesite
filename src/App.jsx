import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const SplashCursor = lazy(() => import('./components/SplashCursor'));
const Mascot = lazy(() => import('./components/Mascot'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));
const Team = lazy(() => import('./pages/Team'));
const Career = lazy(() => import('./pages/Career'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-sm text-neutral-500">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#0a0a0a] text-white">
      <Suspense fallback={null}>
        <SplashCursor
          RAINBOW_MODE={true}
          TRANSPARENT={true}
          DYE_RESOLUTION={512}
          SIM_RESOLUTION={96}
          PRESSURE_ITERATIONS={12}
          SHADING={false}
          SPLAT_FORCE={4000}
        />
      </Suspense>

      <ScrollToTop />
      <Navbar />

      <main>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:category" element={<Navigate to="/works" replace />} />
            <Route path="/team" element={<Team />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        <Mascot />
      </Suspense>
    </div>
  );
}
