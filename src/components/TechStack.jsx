import React from "react";
import "../styles/TechStack.css";

const TechStack = () => {
  const technologies = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"],
    backend: ["Node.js", "Express.js", "Flask", "Python"],
    databases: ["PostgreSQL", "SQLite", "MongoDB"],
    others: [
      "Git",
      "Postman",
      "PrismaORM",
      "VS Code",
      "Cursor AI",
      "AI Prompting",
      "LLM Interaction",
    ],
  };

  return (
    <section id="tech-stack">
      <h2 className="section-title">Technology Stack</h2>
      <div className="tech-stack-container">
        <div className="tech-category">
          <h3>Front-end</h3>
          <ul>
            {technologies.frontend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="tech-category">
          <h3>Back-end</h3>
          <ul>
            {technologies.backend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="tech-category">
          <h3>Databases</h3>
          <ul>
            {technologies.databases.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="tech-category">
          <h3>Others</h3>
          <ul>
            {technologies.others.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
