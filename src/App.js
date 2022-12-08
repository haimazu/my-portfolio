import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Companies />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default App;
