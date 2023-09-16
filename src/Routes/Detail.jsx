import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";



const Detail = () => {
    const [loading, setLoading] = useState(true);
    
    const { getUserById, handleDenstist, state } = useContext(ContextGlobal);

    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then((datos) => {
            handleDenstist(datos);
            setLoading(false);
        });
    }, []);
    
    console.log(state);
    return (
        <div className="detalles">
            <h1>Detail Dentist</h1>

            {!loading && (
                    <div className="info">
                        <div>
                            <p className="Titulos">Nombre</p>
                            <p>{state.denstist.name}</p>
                            <p className="Titulos">Email</p>
                            <p>{state.denstist.email}</p>
                            <p className="Titulos">Phone</p>
                            <p>{state.denstist.phone}</p>
                            <p className="Titulos">Web Site</p>
                            <p>{state.denstist.website}</p>
                        </div>
                    </div>
            )}
        </div>
    );
};

export default Detail;
