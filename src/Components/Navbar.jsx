import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Navbar = () => {
    const { handleTheme } = useContext(ContextGlobal);

    return (
        <>
            <div className="barraNavegacion">
                <h2>DH ODONTO</h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="contacto">Contact</Link>
                        </li>
                        <li>
                            <Link to="favs">Favs</Link>
                        </li>
                    </ul>
                    
                    <button onClick={handleTheme}>Change Theme</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

