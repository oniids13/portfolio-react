import React from "react";
import "../styles/Projects.css";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="webdev-projects" className="projects-section">
      <h2 className="section-title">Web Development</h2>
      <p className="section-subtitle">
        Full-stack applications built with modern technologies
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-content">
              <div className="project-image">
                <div className="image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay">
                    <div className="overlay-links">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-link"
                          title="View Live"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-link"
                          title="View Source"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.link || "#"}
                    className={`project-button primary ${!project.link ? "disabled" : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>{project.link ? "Live Demo" : "Coming Soon"}</span>
                  </a>
                  {project.source && (
                    <a
                      href={project.source}
                      className="project-button secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
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
          <FaGithub />
          <span>More Projects on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
