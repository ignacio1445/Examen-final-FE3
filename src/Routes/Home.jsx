import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";


const Home = () => {
    const [loading, setLoading] = useState(true);
    
    const { getUser, handleSetUsers, state } = useContext(ContextGlobal);

    useEffect(() => {
        getUser().then((datos) => {
            handleSetUsers(datos);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <main className="inicio">
                <h1>Home</h1>
                <div className="odontologos">
                    {!loading &&
                        state.allDestist.map((item) => (
                            <Card key={item.id} {...item} />
                        ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
