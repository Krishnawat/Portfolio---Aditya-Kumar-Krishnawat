import React from "react";
import './Home.css';

function Home() {

  window.addEventListener('scroll', () => {
  const scrollLines = document.querySelectorAll('.scroll-line');

  // Calculate a scroll factor - tweak this multiplier for speed
  const scrollX = window.scrollY * 0.5; 

  scrollLines.forEach((line, index) => {
    // Alternate direction for layering effect
    const direction = (index % 2 === 0) ? 1 : -1;

    // Calculate translation based on scroll
    const translateX = direction * scrollX;

    // Apply transform with skew preserved
    line.style.transform = `skew(-12deg) translateX(${translateX}px)`;
  });
});


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f9f9f9]">

      {/* 🔵 Scrolling Text Background */}
      <div className="scroll-background">
        <div className="scroll-line scroll-delay-0">
          Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • 
        </div>
        <div className="scroll-line scroll-delay-1">
          HTML • CSS • React • JavaScript • HTML • CSS • React • JavaScript •
        </div>
        <div className="scroll-line scroll-delay-2">
          Designer • Developer • UI/UX • Designer • Developer • UI/UX •
        </div>
      </div>

      {/* 🔵 Foreground Content */}
      <div className="container relative z-10">
        <div className="sub-heading">
          <p>FRONTEND DEVELOPER</p>
        </div>
        <div className="heading">
          <p>
            Clean Code. <br /> Intuitive Design. <br /> Real Impact.
          </p>
        </div>
        <div className="sub-heading2">
          Building immersive web experiences that push <br />
          the boundaries of what's possible
        </div>
        <div className="btn-group">
          <button
  className="vw"
  onClick={() => {
    const workSection = document.getElementById("Work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  View Work
</button>
        <button
  className="git"
  onClick={() => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Get In Touch
</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
