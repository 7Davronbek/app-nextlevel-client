import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Vacancies from "./pages/Vacancies";

const App = () => {
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
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
