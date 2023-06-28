import React from "react";
import "./Avatar.css";
import { FaQuoteRight } from "react-icons/fa";
import linkedinDP from "./images/linkedin-dp.jpeg";

function Avatar() {
  return (
    <section className="avatar-section">
      <div className="avatar-container">
        <div className="profile-img-container">
          <img src={linkedinDP} alt="profile-img" className="profile-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4>
          Accomplished Data Product Manager, adept at data science, data
          integration, and product decision-making. Aspire to lead the creation
          of data-driven products and find solutions to business challenges for
          a forward- thinking company.
        </h4>
      </div>
    </section>
  );
}

export default Avatar;
