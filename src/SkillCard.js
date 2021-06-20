import React from "react";
import "./SkillCard.css";

function SkillCard({ title, text, img }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={img} alt={title} className="job-img" />
        <div className="skill-content">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
