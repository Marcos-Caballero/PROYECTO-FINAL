import React, { useEffect, useState } from "react";
import ListGroups from "../components/listGroups";
import Form from "../components/forms";

function Index() {
/* Aqui va la función para agregar las notas */
    const [notas, setNotas] = useState([])
    /* Esta es la peticion a la db para recuperar data */
    const getData = async() => {
        const response = await fetch('http://localhost:5000/api/notas')
        const result = await response.json()
        console.log(result)
    }
    useEffect(() => {
        
    },[])
/* Esto son el formulario de notas y el listado de notas */
    return (
        <div className="content-app">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Form />
                </div>
                <div className="col-sm-12 col-md-8">
                    <ListGroups />
                </div>
            </div>
        </div>
    )
}
export default Index;