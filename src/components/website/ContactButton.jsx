import { Link } from 'react-router-dom';

export default function ContactButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`contact-btn inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.03] active:scale-95 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      Contact Me
    </Link>
  );
}
