import React from "react";

function Notas(props) {
    const { title, content, id } = props;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">{title}</div>
            {content}
        </div>
        <div className="d-flex justify-content-between">
            <button className="btn btn-info btn-sm ml-3">Editar</button>
            <button className="btn btn-outline-danger btn-sm">Eliminar</button>
        </div>
        </li>
    )
}

export default Notas;