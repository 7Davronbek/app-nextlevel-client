import React from "react";
import AboutUs from "./components/AboutUs";
import AgencyEvent from "./components/AgencyEvent";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import LookingFor from "./components/LookingFor";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SumbitAgency from "./components/SumbitAgency";
import WorksGalary from "./components/WorksGalary";

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Header />
      <AboutUs />
      <Benefits />
      <WorksGalary />
      <SumbitAgency />
      <LookingFor />
      <AgencyEvent />
      <Portfolio />
      <div className="vh-100"></div>
    </>
  );
};

export default App;
