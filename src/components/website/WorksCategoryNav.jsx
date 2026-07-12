import { NavLink } from 'react-router-dom';
import { workCategories } from '../../data';

export default function WorksCategoryNav() {
  return (
    <section className="border-b border-white/5 bg-[#0C0C0C]">
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
  );
}
