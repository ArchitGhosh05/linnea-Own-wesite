import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mascot from './components/Mascot';
import Home from './pages/Home';
import About from './pages/About';
import Works, { WorksGrid } from './pages/Works';
import Team from './pages/Team';
import Career from './pages/Career';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white">
      {/* Site-wide fluid cursor trail */}
      <SplashCursor RAINBOW_MODE={true} TRANSPARENT={true} />

      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />}>
            <Route index element={<Navigate to="creative" replace />} />
            <Route path=":category" element={<WorksGrid />} />
          </Route>
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Linnea fox mascot — greet / excited / thinking via window.Linnea */}
      <Mascot />
    </div>
  );
}
