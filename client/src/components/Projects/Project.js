import React from "react";

import { BiLinkExternal } from "react-icons/bi";

const Project = ({ project }) => {
  return (
    <div className="project_container" key={project._id}>
      <div className="project_image_div">
        <img className="project_image" src={project.image.url} alt="" />
      </div>
      <h3 className="project_item_name">{project.title}</h3>
      <p className="project_item_descriptions">{project.description}</p>
      <div className="project_item_buttons">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button className="btn_links">{<BiLinkExternal />}&nbsp;View Github</button>
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          <button className="btn_links">{<BiLinkExternal />}&nbsp;Live Demo</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
