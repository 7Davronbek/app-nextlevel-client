import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";
import AboutUsPage from "./pages/AboutUsPage";
import Main from "./pages/Main";
import ProductionId from "./pages/ProductionId";
import Productions from "./pages/Productions";
import Vacancies from "./pages/Vacancies";

const App = () => {
    const [modal, setModal] = useState(false)
    // const [loader, setLoader] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoader(false);
    //     }, 3000);
    // }, []);
    // window.addEventListener("load", () => {
    //   setLoader(false)
    // })
    return (
        <>
            <Router>
                <Menu />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/productions" element={<Productions />} />
                    <Route path="/contacts" element={<Forms />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/productions/id" element={<ProductionId modal={modal} setModal={setModal}  />} />
                </Routes>
                <Footer modal={modal} setModal={setModal}  />
            </Router>
        </>
    );
};

export default App;
