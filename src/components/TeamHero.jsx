import prasantaFront from '../assets/team/prasanta-1.png';
import prasantaBack from '../assets/team/prasanta-2.png';
import Lanyard from './lanyard/Lanyard';
import './TeamHero.css';

export default function TeamHero() {
  return (
    <section className="team-hero">
      <div className="team-hero__glow team-hero__glow--1" aria-hidden="true" />
      <div className="team-hero__glow team-hero__glow--2" aria-hidden="true" />

      <div className="team-hero__inner">
        <div className="team-hero__copy">
          <span className="team-hero__eyebrow">Our Team</span>
          <h1 className="team-hero__title">The people behind the magic</h1>
          <p className="team-hero__desc">
            Designers, developers, marketers, and storytellers building bold work for brands
            across India. Drag the ID card to explore.
          </p>
        </div>

        <div className="team-hero__lanyard" aria-hidden="true">
          <Lanyard
            position={[0, 0, 13]}
            gravity={[0, -40, 0]}
            fov={25}
            frontImage={prasantaFront}
            backImage={prasantaBack}
            imageFit="cover"
            lanyardWidth={1.15}
            cardScale={4.4}
            cardName="Prasanta Bose"
            cardRole="Managing Director"
          />
        </div>
      </div>
    </section>
  );
}
