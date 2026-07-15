import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../nav';
import logo from '../assets/linnea-logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-10">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Linnea Media home">
          <img src={logo} alt="Linnea Media" className="h-6 w-auto max-w-[140px] object-contain sm:h-7 sm:max-w-none md:h-8" />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 backdrop-blur-md lg:flex lg:gap-1 lg:px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="group relative rounded-full px-3 py-2 text-xs font-medium lg:px-4 lg:text-sm"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.7)]" />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`mx-3 overflow-y-auto rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 sm:mx-5 lg:hidden ${
          open ? 'max-h-[min(70vh,32rem)] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="flex flex-col p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-red-500/90 text-white' : 'text-neutral-200 hover:bg-white/5 hover:text-red-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
