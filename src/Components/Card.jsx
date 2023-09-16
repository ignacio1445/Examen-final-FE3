import { Link, useLocation } from "react-router-dom";
import doctorImg from "../images/doctor.jpg";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

    const { state, handleFavs } = useContext(ContextGlobal);
    const { pathname } = useLocation();
    
    const addFav = () => {
        if (!state.favs.some((fav) => fav.id === id)) {
            const fav = {
                name,
                username,
                id,
            };
            const arr = [...state.favs, fav];
            handleFavs(arr);
        }
    };

    return (
        <div>
            <div className="info">

                <Link to={`/dentist/${id}`}>
                    <div className="divImgDoctor">
                        <img
                            className="imgDoctor"
                            src={doctorImg}
                            alt="imagen de un doctor"
                        />
                    </div>
                    <p>{name}</p>
                    <p>{username}</p>
                    <p>{id}</p>
                </Link>


                {pathname !== "/favs" && (
                    <button onClick={addFav} className="botonFav">
                        Add fav
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
