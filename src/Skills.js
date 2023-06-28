import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import marketingImg from "./images/marketing.png";
import prouctManagerImg from "./images/product-manager.png";
import analysisImg from "./images/data-analytics.png";

function Skills() {
  return (
    <section className="skill-section" id="skill">
      <div className="title">
        <h2>What can I do</h2>
        <div className="underline-white"></div>
      </div>
      <div className="skills">
        <SkillCard
          title="Product Manager"
          text="Solve challenging product problems and improve products with data decision making."
          img={prouctManagerImg}
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
    </section>
  );
}

export default Skills;
