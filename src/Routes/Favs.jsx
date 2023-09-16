//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import Card from "../Components/Card";

const Favs = () => {
    const favorites = JSON.parse(localStorage.getItem("favs"));

    console.log(favorites);
    return (
        <div>
            <main>
                <h1>Home</h1>
                <div className="odontologos">
                    {favorites.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Favs;
