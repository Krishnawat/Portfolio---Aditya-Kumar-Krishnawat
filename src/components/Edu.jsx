import React, { useEffect } from "react";
import "./Edu.css";

const learningItems = [
  {
    title: "BACHELOR OF COMPUTER APPLICATIONS",
    badge: "[Undergraduate]",
    date: "2023 - 2026",
    description:
      "Pursuing my BCA with a strong focus on web development, programming, and computer fundamentals. Throughout the program, I’ve developed hands-on experience in building projects using technologies like React.js and JavaScript, and gained a solid foundation in computer science, software development, and data structures.",
  },
  {
    title: "Intermediate",
    badge: "[12th Grade]",
    date: "2022",
    description:
      "Pursued Commerce with a strong interest in technology. While focusing on business studies, I independently explored web development fundamentals, laying the groundwork for my transition into tech.",
  },
  {
    title: "Matriculation",
    badge: "[10th Grade]",
    date: "2020",
    description:
      "Completed my high school education with a focus on science and computer basics, laying the groundwork for my interest in programming.",
  },
];

function Edu() {
  useEffect(() => {
    const items = document.querySelectorAll(".learning-item");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Animating:", entry.target);
            entry.target.classList.add("animate-fadeInUp");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="learning-wrapper" id="learning">
      <div className="learning-label">✦ My learning curves</div>
      <div className="learning-list">
        {learningItems.map((item, idx) => (
          <div key={idx} className="learning-item">
            <div className="learning-header">
              <p>
                {item.title} <span className="learning-badge">{item.badge}</span>
              </p>
              <span className="learning-date">{item.date}</span>
            </div>
            <div className="learning-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edu;
