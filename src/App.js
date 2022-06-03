import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Header />

      <div className="vh-100"></div>
    </>
  );
};

export default App;
