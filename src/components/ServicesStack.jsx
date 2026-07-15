import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import cardVideo from '../assets/card-video.png';
import dm01 from '../assets/digital-marketing/mockup-01.png';
import cardWebsite from '../assets/card-website.png';
import './ServicesStack.css';

const SERVICE_SECTIONS = [
  {
    id: 'creative-visual',
    category: 'The Creative & Visual Stuff (Design & Motion)',
    title: 'Eye Candy',
    subtitle: 'Because nobody ever bought anything from an ugly website.',
    body:
      "We make sure your brand doesn't look like it was designed in 2005. Whether it's static graphics that make people stop scrolling or motion videos that actually hold an attention span longer than a goldfish's, we package your identity into pure visual bait.",
    deliverables: [
      {
        title: 'Graphic Design',
        desc: 'Slick leaflets, brochures, and brand creatives that people actually want to keep, not throw in the trash.',
      },
      {
        title: 'Motion Graphics',
        desc: 'Smooth animations that explain complex ideas in seconds.',
      },
      {
        title: 'Video Editing',
        desc: 'Raw footage turned into high-retention, scroll-stopping video content.',
      },
    ],
    image: cardVideo,
    link: '/works#motion',
  },
  {
    id: 'digital-marketing',
    category: 'The Money-Makers (Digital Marketing & SEO)',
    title: 'Digital Screaming',
    subtitle: 'Louder and smarter than your competitors.',
    body:
      "Having a pretty brand is useless if you're shouting into an empty room. We handle the digital megaphone. We don't chase \"likes\" or vanity metrics; we build aggressive marketing funnels that put your brand right in front of people who actually have their credit cards out.",
    deliverables: [
      {
        title: 'SEO (Search Engine Optimization)',
        desc: "Dragging your website up Google's rankings so you don't have to pay for every single click.",
      },
      {
        title: 'Performance Marketing',
        desc: 'High-converting ad campaigns where every single dollar spent actually brings back friends.',
      },
      {
        title: 'Digital Marketing',
        desc: 'All-round digital strategy that turns casual lurkers into paying customers.',
      },
    ],
    image: dm01,
    link: '/works#digital-marketing',
  },
  {
    id: 'web-app-software',
    category: 'The Heavy Code (Web, App & Software)',
    title: 'Under The Hood',
    subtitle: 'We write the code. You get the seamless experience.',
    body:
      'We build digital products that actually work—no broken buttons, no endless loading screens, and zero headaches. From simple, lightning-fast websites to complex custom software, we build the digital backbone your business needs to scale without crashing.',
    deliverables: [
      {
        title: 'Website Development',
        desc: 'Fast, responsive, and gorgeous websites built for high conversion.',
      },
      {
        title: 'App Development',
        desc: 'iOS and Android apps that people actually enjoy keeping on their home screens.',
      },
      {
        title: 'Software Development',
        desc: 'Custom coding and backend systems tailored to solve your specific business chaos.',
      },
    ],
    image: cardWebsite,
    link: '/works#website',
  },
];

export default function ServicesStack() {
  return (
    <section className="services-stack">
      <div className="services-stack__intro">
        <span className="services-stack__eyebrow">What we offer</span>
        <h2 className="services-stack__heading">Our Services</h2>
        <p className="services-stack__lede">
          Three ways we make your brand impossible to ignore — from scroll-stopping visuals to
          revenue-ready code.
        </p>
      </div>

      <div className="services-stack__list">
        {SERVICE_SECTIONS.map((section, index) => (
          <article
            key={section.id}
            className="services-stack__section"
            style={{ '--i': index }}
          >
            <div className="services-stack__section-glow" aria-hidden="true" />

            <div className="services-stack__section-grid">
              <div className="services-stack__media">
                <img src={section.image} alt="" />
                <div className="services-stack__media-shade" />
              </div>

              <div className="services-stack__content">
                <span className="services-stack__category">{section.category}</span>
                <h3 className="services-stack__title">{section.title}</h3>
                <p className="services-stack__subtitle">{section.subtitle}</p>
                <p className="services-stack__body">{section.body}</p>

                <h4 className="services-stack__deliverables-label">What we actually deliver:</h4>
                <ul className="services-stack__deliverables">
                  {section.deliverables.map((item) => (
                    <li key={item.title} className="services-stack__deliverable">
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>

                <Link to={section.link} className="services-stack__link">
                  View related work
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
