import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

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
          img="/images/web_development.svg"
        />
        <SkillCard
          title="Data Analytics"
          text="Skilled in SQL, Python, and more. Can help you to turn data into meaningful insights."
          img="/images/analysis.svg"
        />
        <SkillCard
          title="Audience Growth"
          text="Help you to grow your products and services with digital marketing strategies."
          img="/images/marketing.svg"
        />
      </div>
      <div className="fade-btm"></div>
    </section>
  );
}

export default Skills;
