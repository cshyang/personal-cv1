import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#hero-section">
          <h4 className="nav-icon">Cshyang</h4>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#skill">My Skills</a>
          </li>
          <li className="nav-item">
            <a href="#job">My Journey</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
