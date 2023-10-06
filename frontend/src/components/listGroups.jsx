import React from "react";

function ListGroups() {
    return (
        <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
                </div>
                <div className="d-flex justify-content-between">
                <button className="btn btn-info btn-sm ml-3">Editar</button>
                <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                </div>
            </li>
            </ol>
    )
}
export default ListGroups;