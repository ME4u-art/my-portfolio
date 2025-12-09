import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './skills.css';

export default function Skills() {
  const sectionRef = useScrollAnimation();
  
  const skillCategories: Skill[] = [
    {
      id: 1,
      category: "Frontend",
      items: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 2,
      category: "Backend",
      items: ["Node.js", "Express", "Python", "REST APIs", "MongoDB", "PostgreSQL"]
    },
    {
      id: 3,
      category: "Tools & DevOps",
      items: ["Git", "Docker", "GitHub", "Vite", "Linux", ]
    },
    {
      id: 4,
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Team Collaboration", "Project Management",]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.id}>
            <h3>{category.category}</h3>
            <div className="skill-grid">
              {category.items.map((skill, idx) => (
                <span className="skill-badge" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}