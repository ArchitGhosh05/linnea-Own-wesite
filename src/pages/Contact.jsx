import { useState } from 'react';
import ContactHero from '../components/ContactHero';
import { studioAddress } from '../data';

const DISPLAY_EMAIL = 'contact@linneamedia.in';
// FormSubmit destination (not shown in the UI)
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/pb@linneamedia.in';

const initialForm = {
  name: '',
  email: '',
  message: '',
  company: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (form.company.trim()) {
      setStatus('sent');
      setForm(initialForm);
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `New enquiry from ${form.name.trim()} — Linnea Media`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Could not send your message. Please try again.');
      }

      setStatus('sent');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please email us directly.');
    }
  };

  const sent = status === 'sent';
  const sending = status === 'sending';

  return (
    <>
      <ContactHero />

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
            Contact Us
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let&apos;s build something great
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[
              { label: 'Email', value: DISPLAY_EMAIL },
              { label: 'Phone', value: '+9196 7430 7430' },
              { label: 'Studio', value: studioAddress },
            ].map((info) => (
              <div
                key={info.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-red-500">
                  {info.label}
                </div>
                <div
                  className={`mt-2 break-words text-white ${
                    info.label === 'Studio'
                      ? 'text-sm leading-relaxed sm:text-base'
                      : 'text-base sm:text-lg'
                  }`}
                >
                  {info.value}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8"
          >
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={updateField('company')}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={updateField('name')}
              disabled={sending || sent}
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60 disabled:opacity-60 sm:text-sm"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={updateField('email')}
              disabled={sending || sent}
              placeholder="Your email"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60 disabled:opacity-60 sm:text-sm"
            />
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={updateField('message')}
              disabled={sending || sent}
              placeholder="Tell us about your project"
              className="resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500/60 disabled:opacity-60 sm:text-sm"
            />
            <button
              type="submit"
              disabled={sending || sent}
              className="mt-2 rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_-2px_rgba(239,68,68,0.7)] transition-all duration-200 hover:scale-[1.02] hover:bg-red-400 hover:shadow-[0_0_35px_0px_rgba(239,68,68,0.9)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              {sending ? 'Sending…' : sent ? 'Message sent!' : 'Send message'}
            </button>

            {sent && (
              <p className="text-center text-sm text-red-400">
                Thanks for reaching out — we&apos;ll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">
                {errorMsg} Or email us at{' '}
                <a href={`mailto:${DISPLAY_EMAIL}`} className="underline hover:text-red-300">
                  {DISPLAY_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
