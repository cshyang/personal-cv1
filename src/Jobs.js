import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from './data'
import './Jobs.css'
// import KUTE from 'kute.js'

function Jobs() {
  // const tween = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob1' },
  //   { path: '#blob2' },
  //   { repeat: 999, duration: 3000, yoyo: true },
  // )
  const jobs = data
  const [value, setValue] = useState(1)

  // const tween = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob1' },
  //   { path: '#blob2' },
  //   { repeat: 999, duration: 3000, yoyo: true },
  // )
  // useEffect(() => {
  //   tween.start()
  // })

  return (
    <section className="job-section" id="job">
      <div className="title">
        <h2>Journey</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              className={`job-btn ${index === value && 'active-btn'}`}
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
            )
          })}
        </div>
      </div>
      {/* <svg
        id="visual"
        viewBox="0 0 1000 150"
        width="1000"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(503.32874868251184 75.8671263713173)">
          <path
            id="blob1"
            d="M47.2 -28.1C53.9 -15.5 47.3 4 37.2 18.8C27.1 33.6 13.5 43.8 -1.9 44.9C-17.3 46 -34.6 38 -45.5 22.8C-56.3 7.5 -60.6 -15 -52 -28.7C-43.3 -42.3 -21.7 -47.2 -0.7 -46.7C20.2 -46.3 40.4 -40.7 47.2 -28.1"
            fill="#b5cde8"
          ></path>
        </g>
        <g transform="translate(495.30198238981166 80.78144787072289)">
          <path
            id="blob2"
            d="M49.1 -30.2C58.3 -12.3 56.9 9.8 46.9 25.6C37 41.3 18.5 50.7 2.5 49.2C-13.5 47.8 -27.1 35.6 -36 20.5C-45 5.3 -49.3 -12.9 -42.6 -29.3C-35.8 -45.7 -17.9 -60.3 1 -60.9C19.9 -61.5 39.8 -48 49.1 -30.2"
            fill="#b5cde8"
          ></path>
        </g>
      </svg> */}
    </section>
  )
}

export default Jobs
