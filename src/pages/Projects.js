import { useState } from "react";

function Projects() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="projects">
      <h1>My Projects</h1> 
      <div className="cards-container">

        {/* Project 1 */}
        <div className="card">
          <h2>Project 1</h2>
          <img src="/assets/pro2.jpg" alt="Project 1" className="card-image" />
          <p style={{ textAlign: "left", lineHeight: "1.6" }}>
            <strong>Project:</strong> Comfy Madeleine<br />
            <strong>Type:</strong> Front-end Web Project<br />
            <strong>Description:</strong>{" "}
            {show1 
              ? "A responsive website with a dropdown menu, interactive sections (Home, About, Projects, Contact), and social media icons. Designed for a smooth and engaging user experience." 
              : "A responsive website with dropdown menu..."}<br />
            <strong>Tech:</strong> HTML, CSS, JavaScript, Netlify
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://comfy-madeleine-69318e.netlify.app/" className="card-link">View Project</a>
            <button onClick={() => setShow1(!show1)}>
              {show1 ? "Read Less" : "See More"}
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <h2>Project 2</h2>
          <img src="/assets/pro1.jpg" alt="Project 2" className="card-image" />
          <p style={{ textAlign: "left", lineHeight: "1.6" }}>
            <strong>Project:</strong> Random Drink<br />
            <strong>Type:</strong> Front-end Web App<br />
            <strong>Description:</strong>{" "}
            {show2 
              ? "A simple, responsive app that suggests a random drink every time you visit. Designed for fun and easy user experience." 
              : "A simple app that suggests a random drink..."}<br />
            <strong>Tech:</strong> HTML, CSS, JavaScript, Netlify
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://randomdrin-k.netlify.app/" className="card-link">View Project</a>
            <button onClick={() => setShow2(!show2)}>
              {show2 ? "Read Less" : "See More"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;