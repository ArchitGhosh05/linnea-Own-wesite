import { team } from '../data';
import TeamHero from '../components/TeamHero';

const byName = (name) => team.find((member) => member.name === name);

const TEAM_DEPARTMENTS = [
  {
    id: 'creative-motion',
    title: 'Creative & Motion',
    members: [
      byName('Avishek Gupta'),
      byName('Sree Ghosh'),
      byName('Hrishikesh Sarkar'),
      byName('Sagar Das'),
      byName('Krishnendu Bala'),
      byName('Parvej Khan'),
    ],
  },
  { id: 'hr-admin', title: 'HR & Admin', members: team.slice(14, 15) },
  {
    id: 'web-performance',
    title: 'Website Development & Performance Marketing Team',
    members: [
      byName('Archit Ghosh'),
      byName('Arindam Chakrabarty'),
      byName('Alok Raj'),
      byName('Souhardya Banerjee'),
      byName('Animesh Hazra'),
    ],
  },
  { id: 'client-relationship', title: 'Client Relationship Team', members: team.slice(11, 14) },
];

function TeamMemberCard({ member }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_50px_-16px_rgba(239,68,68,0.75)]">
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
  );
}

export default function Team() {
  return (
    <>
      <TeamHero />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20">
          {TEAM_DEPARTMENTS.map((department) => (
            <div key={department.id}>
              <div className={`mb-6 sm:mb-8 ${department.members.length === 1 ? 'text-center' : ''}`}>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                  Department
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{department.title}</h2>
              </div>

              {department.members.length === 1 ? (
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    <TeamMemberCard member={department.members[0]} />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {department.members.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
