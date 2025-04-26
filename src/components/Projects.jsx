import React, { forwardRef } from "react";
import "../styles/Projects.css";
import projects from "../data/projects"; // Assuming you have a projects.js file in data folder

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
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
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
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
            <div className="project-image">
              <a href={project.image} target="_blank">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="github-link">
        For more projects, check out my GitHub profile.
        <a
          href="https://github.com/oniids13"
          className="social-link"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
});

export default Projects;
