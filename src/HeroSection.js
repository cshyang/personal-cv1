import React from "react";
import "./HeroSection.css";
import landImg from "./images/land.svg";

function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-container">
        <img
          src={landImg}
          alt="background-img"
          className="hero-backgroud-img"
        />
        <div className="intro">
          <h1>Hi, I am Shyang.</h1>
          <p class="data-analyst">
            a <u>data product manager</u>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
