import { Link } from 'react-router-dom';
import { navItems } from '../nav';
import logo from '../assets/linnea-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:gap-6 md:flex-row md:justify-between md:text-left">
        <Link to="/" className="flex items-center" aria-label="Linnea Media home">
          <img src={logo} alt="Linnea Media" className="h-6 w-auto sm:h-7" />
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-neutral-400 transition-colors hover:text-red-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Linnea Media.
        </p>
      </div>
    </footer>
  );
}
