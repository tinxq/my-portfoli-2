import { useState } from "react";

function Projects() {
const [show, setShow] = useState({});

const toggleShow = (id) => {
setShow((prev) => ({ ...prev, [id]: !prev[id] }));
};

const projects = [
{
id: 1,
title: "Comfy Madeleine",
type: "Front-end Web Project",
description:
"A responsive website with a dropdown menu, interactive sections (Home, About, Projects, Contact), and social media icons. Designed for a smooth and engaging user experience.",
shortDesc: "A responsive website with dropdown menu...",
tech: "HTML, CSS, JavaScript, Netlify",
image: "/assets/pro2.jpg",
live: "[https://comfy-madeleine-69318e.netlify.app/](https://comfy-madeleine-69318e.netlify.app/)",
},
{
id: 2,
title: "Random Drink Generator",
type: "Front-end Web App",
description:
"A simple, responsive app that suggests a random drink every time you visit. Designed for fun and easy user experience.",
shortDesc: "A simple app that suggests a random drink...",
tech: "HTML, CSS, JavaScript, Netlify",
image: "/assets/pro1.jpg",
live: "[https://randomdrin-k.netlify.app/](https://randomdrin-k.netlify.app/)",
},
{
id: 3,
title: "Portfolio Website",
type: "Personal Portfolio",
description: "Personal portfolio to showcase projects.",
shortDesc: "Personal portfolio website...",
tech: "React, CSS, Netlify",
image: "/assets/pro3.jpg",
live: "[https://tafakurtarig-portfolio.netlify.app/](https://tafakurtarig-portfolio.netlify.app/)",
},
{
id: 4,
title: "Dar Al Khebra – Company Website",
type: "Company Website",
description: "Company website with interactive UI.",
shortDesc: "Company website with interactive UI...",
tech: "React, CSS, Netlify",
image: "/assets/pro4.jpg",
live: "[https://daralkhebra.netlify.app/](https://daralkhebra.netlify.app/)",
},
{
id: 5,
title: "Todo App",
type: "Task Management App",
description: "Task management application.",
shortDesc: "A simple task management app...",
tech: "React, CSS, Netlify",
image: "/assets/pro5.jpg",
live: "[https://todo-sit.netlify.app/](https://todo-sit.netlify.app/)",
},
{
id: 6,
title: "JumpTeen Game",
type: "Web Game",
description:
"Simple interactive game, similar to the Chrome Dinosaur game.",
shortDesc: "A simple interactive jump game...",
tech: "HTML, CSS, JavaScript, Netlify",
image: "/assets/pro6.jpg",
live: "[https://jumpteen.netlify.app/](https://jumpteen.netlify.app/)",
},
{
id: 7,
title: "Emo-Tion – English Learning App",
type: "Educational Website",
description:
"Website to help learn English with explanations about a dog.",
shortDesc: "A website to learn English with a dog story...",
tech: "HTML, CSS, JavaScript, Netlify",
image: "/assets/pro7.jpg",
live: "[https://emo-tion.netlify.app/](https://emo-tion.netlify.app/)",
},
];

return ( <div className="projects"> <h1>My Projects</h1> <div className="cards-container">
{projects.map((project) => ( <div className="card" key={project.id}> <h2>{project.title}</h2> <img
           src={project.image}
           alt={project.title}
           className="card-image"
         />
<p style={{ textAlign: "left", lineHeight: "1.6" }}> <strong>Project:</strong> {project.title} <br /> <strong>Type:</strong> {project.type} <br /> <strong>Description:</strong>{" "}
{show[project.id] ? project.description : project.shortDesc} <br /> <strong>Tech:</strong> {project.tech} </p>
<div style={{ display: "flex", gap: "10px" }}> <a href={project.live} className="card-link">
View Project </a>
<button  className="see" onClick={() => toggleShow(project.id)}>
{show[project.id] ? "Read Less" : "See More"} </button> </div> </div>
))} </div> </div> 
);
}

export default Projects;
