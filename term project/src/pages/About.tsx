import React from "react";
import "../css/About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="bio-content">
        <img
          src="/img/photo.jpg"
          alt="Akanksha Sharma"
          width="150"
          height="150"
          className="bio-photo"
        />
        <div className="bio-text">
          <p>
            Hello! My name is <strong>Akanksha Sharma</strong>, and I'm a web developer
            with a passion for creating interactive and visually appealing web applications. 
            I specialize in modern web technologies like HTML5, CSS3, JavaScript, TypeScript, 
            and React. 
          </p>
          <p>
            With a background in <strong>Computer Science</strong>, I have honed my skills 
            in frontend and backend development. I love working on projects that challenge me 
            to think creatively and solve problems effectively.
          </p>
          <p>
            Outside of work, I enjoy <strong>photography</strong>, <strong>hiking</strong>, 
            and exploring <strong>emerging technologies</strong>. I’m always eager to learn new 
            technologies and explore innovative ideas. Feel free to check out my portfolio and 
            get in touch if you’d like to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
