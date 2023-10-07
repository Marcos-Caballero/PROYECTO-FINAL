import React, { useEffect, useState } from "react";
/* Funcionalidad del formulario para guardar y actualizar data */
function Form({oldNota}) {
    const [nota, setNota] = useState({
        title: "",
        content: ""
    })
    const handleChange = (e) => { //Función para almacenar cambios
        let newNota = {
            [e.target.name] : e.target.value, //Almacena el titulo escrito
            [e.target.name] : e.target.value //Almacena el contenido escrito
        }
        setNota({...nota,...newNota})
    }
    const saveNota = async () => { //Función para guardar notas
        await fetch('http://localhost:5000/api/notas', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(nota),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        saveNota() //Guardar la nota
        setNota({ //Vaciar el formulario al guardar la nota
            'title': "",
            'content': ""
        })
    }
/* Aqui detecta si se hace una peticion de edición de notas */
    useEffect(()=>{
        setNota({...nota, ...oldNota})
        console.log(nota)
    },[oldNota])

    /* Aqui va la estructura del formulario para crear notas */
    return (
        <div className="card">
            <div className="card-header">
                Crea tu nota
            </div>
            <div className="card-body">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                        <input name="title" value={nota.title} onChange={handleChange} type="text" placeholder="Titulo" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="content" value={nota.content} onChange={handleChange} className="form-control"placeholder="Escribe aqui el contenido de tu nota"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-sm btn-block">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default Form;