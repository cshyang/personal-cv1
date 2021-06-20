import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-container">
        <img
          src="/images/land.svg"
          alt="background-img"
          className="hero-backgroud-img"
        />
        <div className="intro">
          <h1>Hi, I am Shyang.</h1>
          <p class="data-analyst">
            a <u>coder</u> / <u>data analyst</u>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
