import { team } from '../data';
import TeamHero from '../components/TeamHero';

export default function Team() {
  return (
    <>
      <TeamHero />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_50px_-16px_rgba(239,68,68,0.75)]"
            >
              {member.image ? (
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-all duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.03] [@media(hover:hover)]:group-hover:opacity-0"
                    draggable="false"
                  />
                  <img
                    src={member.hoverImage}
                    alt=""
                    className="pointer-events-none absolute inset-0 hidden h-full w-full scale-[1.08] object-cover opacity-0 transition-all duration-700 ease-out [@media(hover:hover)]:block [@media(hover:hover)]:group-hover:scale-100 [@media(hover:hover)]:group-hover:opacity-100"
                    draggable="false"
                    aria-hidden="true"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-4 pt-16 text-left">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{member.name}</h3>
                    <p className="mt-0.5 text-xs text-red-300 sm:text-sm">{member.role}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center p-8">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-2xl font-bold text-white shadow-[0_0_25px_-4px_rgba(239,68,68,0.7)] transition-transform duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-red-400">{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
