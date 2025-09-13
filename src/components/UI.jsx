import React, { useState } from "react";
import "../styles/UI.css";
import { UI as uiProjects } from "../data/projects";
import { FaDribbble } from "react-icons/fa";

const UI = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="ui-projects-wrapper">
      <div className="ui-projects-container">
        {uiProjects.map((project, index) => (
          <div className="ui-project-card" key={project.id}>
            <div className="ui-project-content">
              <div className="ui-project-info">
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
                    className="ui-view-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Design Concept
                  </a>
                  {project.source && (
                    <a
                      href={project.source}
                      className="ui-source-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Files
                    </a>
                  )}
                </div>
              </div>

              <div className="ui-project-image">
                <div className="ui-image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="design-profile">
        <a
          href="https://dribbble.com/jose-dino-abaya"
          className="figma-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>More Designs on Dribble</span>
          <FaDribbble size={24} color="pink" />
        </a>
      </div>
    </div>
  );
};

export default UI;
