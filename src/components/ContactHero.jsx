import contactHeroPhoto from '../assets/hero.png';
import { studioAddress } from '../data';
import './ContactHero.css';

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(studioAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__map">
        <iframe
          title="Linnea Media studio location"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="contact-hero__map-label">
          <span className="contact-hero__map-eyebrow">Studio</span>
          <p className="contact-hero__map-text">{studioAddress}</p>
        </div>
      </div>

      <div className="contact-hero__photo">
        <img src={contactHeroPhoto} alt="Linnea Media studio" />
        <div className="contact-hero__photo-shade" aria-hidden="true" />
      </div>
    </section>
  );
}
