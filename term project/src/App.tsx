import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./css/global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Gallery from "./pages/Gallery";
import MySimpleProjects from "./pages/MySimpleProjects"; // New page
import CanvasDrawing from "./pages/CanvasDrawing";
import SvgDrawing from "./pages/SvgDrawing";
import WebWorkerDemo from "./pages/WebWorkerDemo";
import GeolocationDemo from "./pages/GeolocationDemo";

const App: React.FC = () => {
  return (
    <div>
      <div className="welcome-banner">
        <h1>Welcome to My Portfolio</h1>
      </div>
      
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to Home Page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to About Me Page"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to Portfolio Page"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to Resume Page"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to Gallery Page"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                aria-label="Go to My Simple Projects Page"
              >
                My Simple Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<MySimpleProjects />} />
          <Route path="/canvas" element={<CanvasDrawing />} />
          <Route path="/svg" element={<SvgDrawing />} />
          <Route path="/web-worker" element={<WebWorkerDemo />} />
          <Route path="/geolocation" element={<GeolocationDemo />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
