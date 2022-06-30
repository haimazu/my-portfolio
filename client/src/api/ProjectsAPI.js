import { useState, useEffect } from "react";

import axios from "axios";

const ProjectsAPI = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await axios.get("/api/projects");
    setProjects(res.data.projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return {
    projects: [projects, setProjects],
  };
};

export default ProjectsAPI;
