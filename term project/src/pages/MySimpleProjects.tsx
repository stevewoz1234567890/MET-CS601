import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/MySimpleProjects.css";
import { FaPaintBrush, FaVectorSquare, FaMapMarkedAlt, FaCogs } from "react-icons/fa";

const MySimpleProjects: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    { id: "canvas", label: "Canvas Drawing", icon: <FaPaintBrush /> },
    { id: "svg", label: "SVG Drawing", icon: <FaVectorSquare /> },
    { id: "geolocation", label: "Geolocation Demo", icon: <FaMapMarkedAlt /> },
    { id: "web-worker", label: "Prime Number Calculator", icon: <FaCogs /> },
  ];

  return (
    <div className="projects-container">
      <h1>My Simple Projects</h1>
      <p>Explore my simple projects below by clicking the buttons!</p>
      <div className="projects-buttons">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => navigate(`/${project.id}`)}
            aria-label={`Navigate to ${project.label}`}
          >
            {project.icon}
            <span>{project.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MySimpleProjects;
