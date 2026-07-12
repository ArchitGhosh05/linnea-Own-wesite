import contactHeroPhoto from '../assets/hero.png';
import './ContactHero.css';

const STUDIO_ADDRESS =
  'Linnea Media, 5th Floor, Room No: A10, Chatterjee International Center, Jawaharlal Nehru Rd, Kankaria Estates, Park Street area, Kolkata, West Bengal 700071';
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(STUDIO_ADDRESS)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

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
          <p className="contact-hero__map-text">{STUDIO_ADDRESS}</p>
        </div>
      </div>

      <div className="contact-hero__photo">
        <img src={contactHeroPhoto} alt="Linnea Media studio" />
        <div className="contact-hero__photo-shade" aria-hidden="true" />
      </div>
    </section>
  );
}
