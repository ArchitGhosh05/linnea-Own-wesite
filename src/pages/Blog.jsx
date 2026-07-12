import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Why brand storytelling matters in 2026',
    date: 'Jun 12, 2026',
    excerpt:
      'How narrative-driven design helps businesses stand out and build trust with their audience.',
  },
  {
    title: '5 web design trends shaping digital experiences',
    date: 'May 28, 2026',
    excerpt:
      'From immersive motion to minimalist interfaces — what we are seeing across client projects.',
  },
  {
    title: 'Social creatives that actually convert',
    date: 'May 10, 2026',
    excerpt:
      'Practical tips for campaigns that look great and drive measurable results.',
  },
];

export default function Blog() {
  return (
    <div className="pt-32">
      <section className="mx-auto w-full max-w-4xl px-6 pb-24">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
            Blog
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Insights &amp; ideas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
            Thoughts on design, branding, and digital growth from the Linnea Media team.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-red-500/40"
            >
              <time className="text-xs font-medium uppercase tracking-wider text-red-400">
                {post.date}
              </time>
              <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
          >
            Want to collaborate? Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
