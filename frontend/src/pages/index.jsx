import React, { useEffect, useState } from "react";
import ListGroups from "../components/listGroups";
import Form from "../components/forms";
import Notas from "../components/notas";

function Index() {
/* Aqui va la función para agregar las notas */
    const [notas, setNotas] = useState([])
    /* Esta es la peticion a la db para recuperar data */
    const getNotas = async() => {
        const response = await fetch('http://localhost:5000/api/notas')
        const result = await response.json()
        setNotas(result)
    }
    useEffect(() => {
        getNotas();
    },[notas])
/* Esta es la función para eliminar las notas */
    const deleteNota = async(id) => {
        await fetch('http://localhost:5000/api/notas/'+id, {
            method: 'DELETE',
            mode: 'cors'
        })
    }

/* Esto son el formulario de notas y el listado de notas */
    return (
        <div className="content-app">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Form />
                </div>
                <div className="col-sm-12 col-md-8">
                    <ListGroups>
                        {notas.map((nota, index) => (
                            <Notas key={index} deleteNota={deleteNota} id={nota._id} title={nota.title} content={nota.content} />
                            ))}
                    </ListGroups>
                </div>
            </div>
        </div>
    )
}
export default Index;