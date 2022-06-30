import React from "react";

import { DataProvider } from "./GlobalState";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Footer />
    </DataProvider>
  );
}

export default App;
