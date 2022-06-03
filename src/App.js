import React from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Header />
      <AboutUs />
      <div className="vh-100"></div>
    </>
  );
};

export default App;
