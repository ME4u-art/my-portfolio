import './hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero section">
      <div className="floating-orb" aria-hidden="true"></div>
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Hicham Gnouni</span></h1>
        <p>I build modern web applications </p>
      </div>
    </section>
  );
}