import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import marketingImg from "./images/marketing.svg";
import webDevelopmentImg from "./images/web_development.svg";
import analysisImg from "./images/analysis.svg";

function Skills() {
  return (
    <section className="skill-section" id="skill">
      <div className="fade-top"></div>
      <div className="title">
        <h2>What can I do</h2>
        <div className="underline-white"></div>
      </div>
      <div className="skills">
        <SkillCard
          title="web development"
          text="Proficient in React.js and can help you to build beautiful websites and apps."
          img={webDevelopmentImg}
        />
        <SkillCard
          title="Data Analytics"
          text="Skilled in SQL, Python, and more. Can help you to turn data into meaningful insights."
          img={analysisImg}
        />
        <SkillCard
          title="Audience Growth"
          text="Help you to grow your products and services with digital marketing strategies."
          img={marketingImg}
        />
      </div>
      <div className="fade-btm"></div>
    </section>
  );
}

export default Skills;
