import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
