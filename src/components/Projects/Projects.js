import React from "react";

import "./projects.css";

const Projects = () => {
  return (
    <section className="projects_section" id="HTB - Walkthrough">
      <div className="projects_container">
        <div className="projects_title">
          <h1 style={{ color: "#9fef00" }}>My HackTheBox Walkthrough</h1>
          <h5>Publishing my complete solutions for machines</h5>
          <h7>
            (According to HackTheBox policy, for an active machine a password
            must be entered)
          </h7>
        </div>

        <hr />

        <a
          className="socials_icon"
          href="https://haimazu-htb.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dzmau9ijh/image/upload/v1670493175/HackTheBox/2022_12_08_11_48_02_HTB_Walkthrough_and_5_more_pages_Work_Microsoft_Edge_ohugu7.png"
            style={{ width: "100%" }}
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
