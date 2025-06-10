import React, { useState } from "react"; // Ensure useState is imported
import "./Work.css";
import img from "./PORTFOLIO.png";
import img2 from "./Nirvana.png";
import img3 from "./sushi.png";

// Define your 7 filter buttons explicitly
const filterButtons = [
  "All Projects",
  "Web Applications",
  "Static Websites",
  "Frontend Focus",
  "Backend / APIs",
  "Interactive",
  "Fun/Side Projects",
];

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "My digital hub, featuring a selection of my best work and detailing my expertise.",
    image: img,
    tags: ["Web Applications", "Frontend Focus"], // Updated tags
    link: "#",
  },
  {
    id: 2,
    title: "Sake Sushi",
    description: "The online home of Sake Sushi, presenting their exquisite dishes and restaurant information in an elegant, user-friendly interface. ",
    image: img3,
    tags: ["Static Websites", "Frontend Focus"], // Updated tags
    link: "https://krishnawat.github.io/SakeSushi/",
  },
  {
    id: 3,
    title: "NIRVANA - Tribute Website",
    description: "A dedicated online tribute to Nirvana, meticulously crafted to celebrate their music and legacy.",
    image: img2,
    tags: ["Static Websites", "Frontend Focus"], // Updated tags
    link: "https://krishnawat.github.io/Nirvana/",
  },
  // Placeholder for a future Backend / APIs project
  // {
  //   id: 4,
  //   title: "My API Service",
  //   description: "A robust backend API for managing user data.",
  //   image: "path/to/backend-image.png",
  //   tags: ["Backend / APIs", "Web Applications"],
  //   link: "#",
  // },
  // Placeholder for a future Interactive project
  // {
  //   id: 5,
  //   title: "Interactive Game Demo",
  //   description: "A small browser-based game demonstrating interactive elements.",
  //   image: "path/to/game-image.png",
  //   tags: ["Interactive", "Web Applications", "Fun/Side Projects"],
  //   link: "#",
  // },
  // Placeholder for a future Fun/Side Project
  // {
  //   id: 6,
  //   title: "Daily Affirmation Generator",
  //   description: "A simple app to generate positive affirmations.",
  //   image: "path/to/affirmation-image.png",
  //   tags: ["Fun/Side Projects", "Frontend Focus"],
  //   link: "#",
  // },
];

function Work() {
  // State to keep track of the active filter tag
  const [activeFilter, setActiveFilter] = useState("All Projects"); // Changed initial state to "All Projects"

  // Use the predefined filterButtons array directly
  const allTags = filterButtons;

  // Filter projects based on the activeFilter state
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All Projects") { // Check against "All Projects"
      return true; // Show all projects if "All Projects" is selected
    }
    // Check if the project's tags include the active filter tag
    return project.tags.includes(activeFilter);
  });

  return (
    <div id="Work" className="work-container">
      <h2>My Projects</h2>

      {/* --- Filter Buttons Section --- */}
      <div className="filter-buttons">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`filter-button ${activeFilter === tag ? "active" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* --- End Filter Buttons Section --- */}

      <div className="project-grid">
        {filteredProjects.map((project) => (
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