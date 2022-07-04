import React from "react";

import "./projects.css";
// import { GlobalState } from "../../GlobalState";

import { projectsData } from "../../data";

import Project from "./Project";

const Projects = () => {
  // const state = useContext(GlobalState);
  // const [projectsData] = state.projectsAPI.projects;

  return (
    <section className="projects_section" id="projects">
      <div className="projects_container">
        <div className="projects_title">
          <h1>My latest works</h1>
          <h5>Some of my recent works / still working on</h5>
        </div>

        <hr />

        {projectsData.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>There are no projects to show</h2>
        ) : (
          <div className="projects_list">
            {projectsData.map((project) => {
              return <Project project={project} key={project._id} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
