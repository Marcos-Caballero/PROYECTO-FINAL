import React, { useState } from "react";

function Form() {
    const [nota, setNota] = useState({
        title: "",
        content: ""
    })
    const handleChange = (e) => {
        let newNota = {
            [e.target.name] : e.target.value,
            [e.target.content] : e.target.value
        }
        console.log(newNota)
    }

    /* Aqui va la estructura del formulario para crear notas */
    return (
        <div className="card">
            <div className="card-header">
                Crea tu nota
            </div>
            <div className="card-body">
                <form action="">
                    <div className="form-group mb-3">
                        <input name="title" onChange={handleChange} type="text" placeholder="Titulo" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="content" onChange={handleChange} className="form-control"placeholder="Escribe aqui el contenido de tu nota"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm btn-block">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default Form;