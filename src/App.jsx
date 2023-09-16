import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Layout from "./Routes/Layout";


function App() {
    const { state } = useContext(ContextGlobal);
    return (
        <div className={state.theme ? "dark" : null}>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="dentist/:id" element={<Detail />} />
                <Route path="contacto" element={<Contact />} />
                <Route path="favs" element={<Favs />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    );
}

export default App;
