import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/login" element={<Login />} exact />
    </Routes>
  );
};

export default App;
