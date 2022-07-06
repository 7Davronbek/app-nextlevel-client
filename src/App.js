import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
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
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/productions" element={<Productions />} />
                    <Route path="/productions/id" element={<ProductionId modal={modal} setModal={setModal}  />} />
                </Routes>
                <Footer modal={modal} setModal={setModal}  />
            </Router>
        </>
    );
};

export default App;
