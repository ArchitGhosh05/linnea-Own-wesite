import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import App from './App.jsx';

gsap.registerPlugin(ScrollTrigger);
gsap.ticker.lagSmoothing(0);

// Force browsers to drop a cached Vite favicon for this origin
function forceBrandFavicon() {
  const href = `/nn-icon.png?v=${Date.now()}`;
  document
    .querySelectorAll('link[rel*="icon"], link[rel="shortcut icon"]')
    .forEach((el) => el.parentNode?.removeChild(el));
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = href;
  document.head.appendChild(link);
  const shortcut = document.createElement('link');
  shortcut.rel = 'shortcut icon';
  shortcut.href = href;
  document.head.appendChild(shortcut);
}

forceBrandFavicon();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
