import React, { createContext } from "react";

import ProjectsAPI from "./api/ProjectsAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    projectsAPI: ProjectsAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
