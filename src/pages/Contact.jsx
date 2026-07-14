import { useState } from 'react';
import ContactHero from '../components/ContactHero';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <ContactHero />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s build something great
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[
              { label: 'Email', value: 'contact@linneamedia.in' },
              { label: 'Phone', value: '+9196 7430 7430' },
              { label: 'Studio', value: 'Chatterjee International Center, Park Street, Kolkata 700071' },
            ].map((info) => (
              <div
                key={info.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-red-500">
                  {info.label}
                </div>
                <div className="mt-2 text-lg text-white">{info.value}</div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <input
              type="text"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project"
              className="resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-[1.02] hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)]"
            >
              {sent ? 'Message sent!' : 'Send message'}
            </button>
            {sent && (
              <p className="text-center text-sm text-red-400">
                Thanks for reaching out — we&apos;ll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
