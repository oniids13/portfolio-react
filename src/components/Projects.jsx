import React, { forwardRef } from "react";
import "../styles/Projects.css";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects. Includes features like task categorization, due date tracking, and team collaboration.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current conditions and forecasts using data from a weather API. Includes location search and temperature unit conversion.",
      technologies: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
      image: "https://via.placeholder.com/600x400",
    },
  ];

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
                <a href="#" className="project-link">
                  View Project
                </a>
                <a href="#" className="project-link">
                  Source Code
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
