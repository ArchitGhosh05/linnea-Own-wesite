import dentique from '../assets/clients/logos/dentique.png';
import drRashid from '../assets/clients/logos/dr-rashid.png';
import tcs from '../assets/clients/logos/tcs.png';
import narayan from '../assets/clients/logos/narayan-memorial.png';
import nims from '../assets/clients/logos/nims.png';
import drRajarshi from '../assets/clients/logos/dr-rajarshi.png';
import italica from '../assets/clients/logos/italica.png';
import adamas from '../assets/clients/logos/adamas.png';
import sweat from '../assets/clients/logos/sweat-nutrition.png';
import suja from '../assets/clients/logos/suja.png';
import ifb from '../assets/clients/logos/ifb-agro.png';
import usashi from '../assets/clients/logos/usashi.png';
import aviana from '../assets/clients/logos/aviana.png';
import './ClientsMarquee.css';

const CLIENTS = [
  { name: 'The Dentique', logo: dentique },
  { name: 'Dr. Md. Rashid Zeya Ayubi', logo: drRashid },
  { name: 'Tata Consultancy Services', logo: tcs },
  { name: 'Narayan Memorial Hospital', logo: narayan },
  { name: 'NIMS Hospital', logo: nims },
  { name: 'Dr. Rajarshi Bandyopadhyay', logo: drRajarshi },
  { name: 'Italica', logo: italica },
  { name: 'Adamas Holidays', logo: adamas },
  { name: 'Sweat Nutrition', logo: sweat },
  { name: 'Suja', logo: suja },
  { name: 'IFB Agro', logo: ifb },
  { name: 'Usashi Realstates', logo: usashi },
  { name: 'Aviana Holidays', logo: aviana },
];

export default function ClientsMarquee() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="clients-marquee" aria-label="Our clients">
      <div className="clients-marquee__header">
        <span className="clients-marquee__eyebrow">Proud Partnership</span>
        <h2 className="clients-marquee__title">Our Clients</h2>
        <p className="clients-marquee__desc">
          Brands and institutions who trust Linnea to shape their story.
        </p>
      </div>

      <div className="clients-marquee__viewport">
        <div className="clients-marquee__track">
          {track.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="clients-marquee__card"
              aria-hidden={index >= CLIENTS.length}
            >
              <img src={client.logo} alt={index < CLIENTS.length ? client.name : ''} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
