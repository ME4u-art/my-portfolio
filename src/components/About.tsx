import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './about.css';

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a junior full-stack developer with hands-on experience building web applications. I enjoy solving real-world
            problems, writing clean and efficient code, and continuously learning new technologies to improve my skills and
            deliver high-quality solutions.

          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
            or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="about-stats">
        </div>
      </div>
    </section>
  );
}