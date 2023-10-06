import React from "react";

function Form() {
    return (
        <div className="card">
            <div className="card-header">
                Crea tu nota
            </div>
            <div className="card-body">
                <form action="">
                    <div className="form-group mb-3">
                        <input name="title" type="text" placeholder="Titulo" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="content" className="form-control"placeholder="Escribe aqui el contenido de tu nota"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm btn-block">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default Form;