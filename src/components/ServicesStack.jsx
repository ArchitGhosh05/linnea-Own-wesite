import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data';
import './ServicesStack.css';

export default function ServicesStack() {
  return (
    <section className="services-stack">
      <div className="services-stack__intro">
        <span className="services-stack__eyebrow">What we offer</span>
        <h2 className="services-stack__heading">Our Services</h2>
        <p className="services-stack__lede">
          Hover over a service to explore what we deliver — from first concept to final launch.
        </p>
      </div>

      <div className="services-stack__list">
        {services.map((service, index) => (
          <article
            key={service.id}
            className="services-stack__card"
            style={{ '--i': index }}
          >
            <div className="services-stack__card-shell">
              <div className="services-stack__summary">
                <span className="services-stack__index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="services-stack__title-wrap">
                  <h3 className="services-stack__title">{service.title}</h3>
                  <p className="services-stack__tagline">{service.tagline}</p>
                </div>

                <div className="services-stack__thumb" aria-hidden="true">
                  <img src={service.image} alt="" />
                </div>

                <span className="services-stack__hint">Hover to explore</span>
              </div>

              <div className="services-stack__details">
                <div className="services-stack__details-inner">
                  <div
                    className={`services-stack__media ${
                      index % 2 === 0 ? 'services-stack__media--left' : 'services-stack__media--right'
                    }`}
                  >
                    <img src={service.image} alt={service.title} />
                    <div className="services-stack__media-shade" />
                  </div>

                  <div className="services-stack__copy">
                    <p className="services-stack__description">{service.description}</p>

                    <ul className="services-stack__highlights">
                      {service.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <Link to={service.link} className="services-stack__link">
                      View related work
                      <ArrowUpRight size={16} strokeWidth={2.25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
