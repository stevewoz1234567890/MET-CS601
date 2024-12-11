import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="highlights">
        <h2>What I Offer</h2>
        <div className="highlight-grid">
          <div className="highlight-item">
            <h3>Frontend Development</h3>
            <p>
              Building responsive and user-friendly interfaces using React, TypeScript, and modern CSS techniques.
            </p>
          </div>
          <div className="highlight-item">
            <h3>Backend Integration</h3>
            <p>
              Connecting APIs and managing data to ensure seamless functionality and performance.
            </p>
          </div>
          <div className="highlight-item">
            <h3>Collaborative Projects</h3>
            <p>
              I enjoy working with teams to build impactful applications and solve challenging problems.
            </p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Want to Work Together?</h2>
        <p>
          Feel free to explore my portfolio or contact me directly for any inquiries or collaborations.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Me
        </Link>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Akanksha Sharma. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/home" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/home" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
