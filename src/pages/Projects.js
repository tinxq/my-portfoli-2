import { useState } from "react";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Random Drink Generator",
      type: "Front-end Web App",
      description:
        "A responsive web app that suggests a random drink, built for a simple and enjoyable user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/bag3.jpg",
      live: "https://randomdrin-k.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      type: "Personal Portfolio",
      description:
        "A personal website to introduce me and showcase my web development projects.",
      tech: ["React", "CSS"],
      image: "/assets/bag3.jpg",
      live: "https://tafakurtarig-portfolio.netlify.app/",
    },
    {
      id: 3,
      title: "Dar Al Khebra",
      type: "Company Website",
      description:
        "A company website with an interactive interface and information about its services.",
      tech: ["React", "CSS"],
      image: "/assets/bag3.jpg",
      live: "https://daralkhebra.netlify.app/",
    },
    {
      id: 4,
      title: "Todo App",
      type: "Task Management App",
      description:
        "A task management app for keeping a list of tasks organized.",
      tech: ["React", "CSS"],
      image: "/assets/bag3.jpg",
      live: "https://todo-sit.netlify.app/",
    },
    {
      id: 5,
      title: "JumpTeen",
      type: "Web Game",
      description:
        "A simple browser game where the player jumps to avoid obstacles.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/bag3.jpg",
      live: "https://jumpteen.netlify.app/",
    },
    {
      id: 6,
      title: "Emo-Tion",
      type: "English Learning App",
      description:
        "A website designed to make learning English more fun through a dog-themed story and activities.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/assets/bag3.jpg",
      live: "https://emo-tion.netlify.app",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I’ve built while learning and practicing
        web development.
      </p>

      <div className="cards-container">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.id;

          return (
            <article className="card" key={project.id}>
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="card-image"
              />

              <h2>{project.title}</h2>
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>

              <ul className="project-tech">
                {project.tech.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View Project
                </a>

                <button
                  type="button"
                  className="see"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.id)
                  }
                >
                  {isExpanded ? "Show Less" : "See More"}
                </button>
              </div>

              {isExpanded && (
                <p className="project-extra">
                  Open the live project to explore it.
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;