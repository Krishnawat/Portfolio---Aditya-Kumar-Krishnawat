import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="About" className="about-section">
      <span className="about-label">About Me</span>
      <div className="about-grid">
        <div className="about-left">
          <h2 className="about-heading">
            Hi, I'm <br /><span className="about-highlight">Aditya Kumar <br /> Krishnawat</span>
          </h2>
          <div className="about-meta">
            <div className="about-item">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Jamshedpur, Jharkhand</span>
            </div>
            <div className="about-item">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span>19 Years Old</span>
            </div>
            <div className="about-item">
              <svg className="about-icon" viewBox="0 0 24 24" fill="none">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span>Frontend Developer</span>
            </div>
          </div>
          <p className="about-description">
            As a committed developer operating straight from my caffeine-powered command center (aka my desk), I blend the logic of a programmer with the curiosity of someone who just broke their own code... again.
        <br /> 
I specialize in building web apps that are fast, functional, and occasionally impress my mom. My mission? To create sleek, scalable interfaces that don’t crash under pressure—unless you open 37 tabs.
<br /> 
Let’s turn ideas into pixels (and hopefully fewer bugs)!


          </p>
          <div className="about-buttons">
            <a href="#Contact" className="btn-primary">Get in Touch</a>
            <a href="#Work" className="btn-secondary">View Projects</a>
          </div>
        </div>

        <div className="about-right">
          <div className="about-skills">
            <h3>Key Skills</h3>
            <div className="skill-tags">
              {["React", "JavaScript", "HTML", "CSS", "UI/UX", "Python", "Figma"].map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
