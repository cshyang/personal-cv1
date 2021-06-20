import React from "react";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/chaushyang/"
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/cshyang"
          className="footer-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <p>@2021 Shyang</p>
    </section>
  );
}

export default Footer;
