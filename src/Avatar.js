import React from "react";
import "./Avatar.css";
import { FaQuoteRight } from "react-icons/fa";
import shyang2 from "./images/shyang2.png";

function Avatar() {
  return (
    <section className="avatar-section">
      <div className="avatar-container">
        <div className="profile-img-container">
          <img src={shyang2} alt="profile-img" className="profile-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4>
          A data analyst by experience and coder by passion. Currently working
          as a data analytics consultant and pursuing knowledge to be a software
          developer.
        </h4>
      </div>
    </section>
  );
}

export default Avatar;
