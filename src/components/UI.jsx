import React from "react";
import "../styles/UI.css";
import { UI as uiProjects } from "../data/projects";
import { FaDribbble, FaExternalLinkAlt, FaFigma } from "react-icons/fa";

const UI = () => {
  return (
    <section id="uiux-projects" className="ui-section">
      <h2 className="section-title ui-title">UI/UX Design</h2>
      <p className="section-subtitle ui-subtitle">
        User-centered design solutions and creative concepts
      </p>

      <div className="ui-projects-container">
        {uiProjects.map((project, index) => (
          <div 
            className="ui-project-card" 
            key={project.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="ui-project-content">
              <div className="ui-project-info">
                <div className="ui-badge">
                  <FaFigma />
                  <span>Design Project</span>
                </div>
                <h3 className="ui-project-title">{project.title}</h3>
                <p className="ui-project-description">{project.description}</p>
                <div className="ui-project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="ui-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="ui-project-actions">
                  <a
                    href={project.link}
                    className="ui-button primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>View Design</span>
                  </a>
                  {project.source && (
                    <a
                      href={project.source}
                      className="ui-button secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFigma />
                      <span>Figma File</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="ui-project-image">
                <div className="ui-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="ui-image-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ui-overlay-link"
                    >
                      <FaExternalLinkAlt />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="design-profile">
        <a
          href="https://dribbble.com/jose-dino-abaya"
          className="dribbble-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble />
          <span>More Designs on Dribbble</span>
        </a>
      </div>
    </section>
  );
};

export default UI;
