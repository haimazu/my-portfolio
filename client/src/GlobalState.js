import React, { createContext } from "react";

import ProjectsAPI from "./api/ProjectsAPI";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    projectsAPI: ProjectsAPI(),
    userAPI: UserAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
