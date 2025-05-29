import React from "react";
import "./Work.css";

const projects = [
  {
    id: 1,
    title: "Invoice Generator",
    description: "Description of project one",
    image:
      "https://i.pinimg.com/736x/35/82/19/3582195e0090b73e08733f59784c717a.jpg",
    tags: ["React", "CSS", "2025"],
    link: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Description of project two",
    image:
      "https://i.pinimg.com/736x/e7/45/5e/e7455eaad12fe34e4d42aac1f055e459.jpg",
    tags: ["NextJS", "TypeScript", "2025"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Description of project three",
    image:
      "https://i.pinimg.com/736x/d0/7f/ef/d07fef1523b74e95a5a5306ef7c77c6f.jpg",
    tags: ["NodeJS", "Express", "2025"],
    link: "#",
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "Description of project four",
    image:
      "https://i.pinimg.com/736x/42/08/19/42081982b4a1f17776f263b256ddf3a4.jpg",
    tags: ["React Native", "Mobile", "2025"],
    link: "#",
  },
  {
    id: 5,
    title: "TaskIt",
    description: "Description of project five",
    image:
      "https://i.pinimg.com/736x/2d/d8/c3/2dd8c33477bc3448f125fef33578bb35.jpg",
    tags: ["GraphQL", "Apollo", "2024"],
    link: "#",
  },
  {
    id: 6,
    title: "Starbucks Clone",
    description: "Description of project six",
    image:
      "https://i.pinimg.com/736x/93/59/59/9359592190b23939378dbf62221db5e9.jpg",
    tags: ["React", "2025"],
    link: "#",
  },
 
];

function Work() {
  return (
    <div id="Work" className="work-container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            tabIndex={0}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Work;
