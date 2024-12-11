import React from "react";
import "../css/Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>My Resume</h1>
        <p>
          Below is an overview of my education, experience, and skills.
        </p>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-card">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>XYZ University, 2018 - 2022</p>
          <p>GPA: 3.8/4.0</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-card">
          <h3>Frontend Developer</h3>
          <p>ABC Tech Solutions, 2022 - Present</p>
          <ul>
            <li>Developed responsive web applications using React and TypeScript.</li>
            <li>Collaborated with designers to ensure seamless UI/UX experiences.</li>
            <li>Optimized performance and accessibility of client websites.</li>
          </ul>
        </div>
        <div className="resume-card">
          <h3>Web Development Intern</h3>
          <p>DEF Digital Agency, Summer 2021</p>
          <ul>
            <li>Assisted in building e-commerce websites using HTML, CSS, and JavaScript.</li>
            <li>Performed cross-browser testing and debugging.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5, CSS3, JavaScript, TypeScript</li>
          <li>React, Redux, Node.js</li>
          <li>Responsive Design, Cross-Browser Compatibility</li>
          <li>Git, GitHub, Agile Development</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
