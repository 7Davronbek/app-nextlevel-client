import React from "react";
import AboutUs from "./components/AboutUs";
import AgencyEvent from "./components/AgencyEvent";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import GridLayout from "./components/GridLayout";
import Header from "./components/Header";
// import LookingFor from "./components/LookingFor";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import NextLevel from "./components/NextLevel";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import SumbitAgency from "./components/SumbitAgency";
import WorksGalary from "./components/WorksGalary";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Menu />
      <Header />
      <AboutUs />
      <GridLayout />
      <Benefits />
      <NextLevel />
      <WorksGalary />
      <SumbitAgency />
      {/* <LookingFor /> */}
      <AgencyEvent />
      <Portfolio />
      <Partners/>
      <Footer/>
    </>
  );
};

export default App;
