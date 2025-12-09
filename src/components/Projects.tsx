import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './projects.css';

export default function Projects() {
  const sectionRef = useScrollAnimation();
  
  const projectList: Project[] = [
    {
      id: 1,
      title: "E-Commerce API",
      description: "Full-featured REST API with authentication, product management, and order processing",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com"
    },
    {
      id: 2,
      title: "React Dashboard",
      description: "Admin dashboard with real-time analytics, charts, user management, and authentication",
      technologies: ["React", "TypeScript", "Redux", "Chart.js"],
      link: "https://example.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with React, TypeScript, and Vite for optimal performance",
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef} aria-label="Featured projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projectList.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech" role="list" aria-label="Technologies used">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge" role="listitem">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  aria-label={`View ${project.title} live demo`}
                >
                  View Live
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}