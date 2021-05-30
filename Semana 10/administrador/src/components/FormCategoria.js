import React from 'react'
// import {CrearCategoriaView} from "../views/CrearCategoriaView"

function FormCategoria({value, setValue, manejarSubmit}) {
    return (
        <div>
            <form onSubmit={(e) => {manejarSubmit(e)}}>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre Categoria
                        </label>
                    <input
                     type="text" 
                     className="form-control" 
                     value={value}
                     onChange={(e)=>{setValue(e.target.value)}}
                     />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormCategoria
