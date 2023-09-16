import { createContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    
    function reducer(state, action) {
        switch (action.type) {
            case "setAllDestist":
                return {
                    ...state,
                    allDestist: action.payload,
                };
            case "setDentist":
                return {
                    ...state,
                    denstist: action.payload,
                };
            case "setTheme":
                return {
                    ...state,
                    theme: !state.theme,
                };
            case "setFavs":
                return {
                    ...state,
                    favs: action.payload,
                };

            default:
                return state;
        }
    }


    const initialState = {
        allDestist: {},
        denstist: {},
        theme: false,
        favs: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleSetUsers = (datos) => {
        const action = { type: "setAllDestist", payload: datos };
        dispatch(action);
    };
    const handleDenstist = (datos) => {
        const action ={ type: "setDentist", payload: datos }
        dispatch(action);
    };
    const handleTheme = () => {
        const action = { type: "setTheme" }
        dispatch(action);
    };

    const handleFavs = (datos) => {
        const action = { type: "setFavs", payload: datos }
        dispatch(action);
    };


    const getUser = async () => {
        try {
             const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
             const info = await respuesta.json();
             return info;
           }catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw error;
          }
     };
    

    const getUserById = async (id) => {
        try{
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const info = await respuesta.json();
            return info;
        } catch (error) {
            console.error("Error al obtener usuarios por id", error);
            throw error;
        }
    };

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    return (
        <ContextGlobal.Provider
            value={{
                state,
                handleSetUsers,
                handleDenstist,
                handleTheme,
                handleFavs,
                getUser,
                getUserById,
            }}
        >
            {children}
        </ContextGlobal.Provider>
    );
};
