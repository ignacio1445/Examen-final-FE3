import React, { useState } from "react";

const Form = () => {

    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
    });

    const { name, email } = dataForm;

    const handleChange = (event) => {
        setError(false);
        const name = event.target.name;
        const value = event.target.value;
        const updatedDataForm = { 
            ...dataForm, 
            [name]: value };
        setDataForm(updatedDataForm);
      }

      
    
    const regexEmail = /@/;
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length > 5 && regexEmail.test(email)) {
            setError(false);
            setMessage(true);
        } else {
            setError(true);
            setMessage(false);
        }
    };

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                    type="text"
                    name="name"
                    value={dataForm.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                />
                <button type="input">Enviar</button>
            </form>
            
            {message && (
                <p className="mensaje">
                    {`Gracias ${name}, te contactaremos cuanto antes via Email`}
                </p>
            )}

            {error && <p>Por favor verifica tu informacion nuevamente</p>}
        </div>
    );
};

export default Form;
