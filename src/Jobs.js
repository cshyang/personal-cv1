import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import data from "./data";
import "./Jobs.css";

function Jobs() {
  const [jobs, setJob] = useState(data);
  const [value, setValue] = useState(1);

  return (
    <section className="section" id="job">
      <div className="title">
        <h2>Journey</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              className={`job-btn ${index == value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* job info */}
        <div className="job-info">
          <h3>{jobs[value].title}</h3>
          <h4>{jobs[value].company}</h4>
          <p className="job-date">{jobs[value].dates}</p>
          {jobs[value].duties.map((duty, index) => {
            return (
              <div key="index" className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
