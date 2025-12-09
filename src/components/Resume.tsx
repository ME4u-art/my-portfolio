import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './resume.css';

export default function Resume() {
  const sectionRef = useScrollAnimation();
  
  return (
    <section id="resume" className="resume" ref={sectionRef}>
      <div className="resume-container">
        <h2>Resume</h2>
        <p className="resume-intro">Download my resume to learn more about my experience and qualifications.</p>
        
        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-icon">📄</div>
            <h3>My Resume</h3>
            <p>Complete overview of my professional experience, skills, and education.</p>
            <a href="/my-portfolio/Resume.pdf" download="Resume.pdf" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
