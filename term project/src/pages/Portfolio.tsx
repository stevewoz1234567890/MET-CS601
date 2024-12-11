import React from "react";
import "../css/Portfolio.css";

const projects = [
  {
    title: "Responsive Web App",
    description: "A mobile-first web application using React and TypeScript.",
    image: "/img/project1.webp", 
    // link: "https://example.com/project1",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform with a seamless user interface.",
    image: "/img/project2.webp", 
    // link: "https://example.com/project2",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    image: "/img/project3.webp", 
    // link: "https://example.com/project3",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p>Explore some of my recent projects below:</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h2 className="portfolio-title">{project.title}</h2>
            <p className="portfolio-description">{project.description}</p>
            <a
              // href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
