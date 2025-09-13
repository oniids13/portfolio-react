import React, { forwardRef } from "react";
import "../styles/Projects.css";
import { projects } from "../data/projects";

const Projects = forwardRef((props, ref) => {
  const { hideTitle } = props;

  return (
    <div
      className={hideTitle ? "projects-wrapper" : "projects-section"}
      ref={ref}
    >
      {!hideTitle && <h2 className="section-title">Selected Work</h2>}

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <div className="project-image">
                <div className="image-wrapper1">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.link}
                    className={
                      project.link
                        ? "project-view-button"
                        : "project-view-button disabled"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link ? "View Live" : "Coming Soon"}
                  </a>
                  <a
                    href={project.source}
                    className="project-source-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
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
          <i className="fab fa-github"></i>
          <span>More Projects on GitHub</span>
        </a>
      </div>
    </div>
  );
});

export default Projects;
