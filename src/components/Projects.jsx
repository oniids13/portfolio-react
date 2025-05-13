import React, { forwardRef, useState } from "react";
import "../styles/Projects.css";
import projects from "../data/projects"; // Assuming you have a projects.js file in data folder

const Projects = forwardRef((props, ref) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" ref={ref}>
      <h2 className="section-title">Selected Work</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image">
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <div
                  className={`project-overlay ${
                    hoveredProject === project.id ? "active" : ""
                  }`}
                >
                  <div className="project-links">
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      href={project.source}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="github-profile">
        <a
          href="https://github.com/oniids13"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span>More Projects on GitHub</span>
        </a>
      </div>
    </section>
  );
});

export default Projects;
