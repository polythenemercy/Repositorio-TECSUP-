import React from 'react'

const asyncForEach = async (array, callback) => {
    for(let i = 0; i <array.length; i++){
        await callback(array[i]) //se detiene la ejecución hasta que termina 
    }
}

function RegistroAlumno({value, actualizarInput, setValue, manejarSubmit}) {

    
    return (
        <div className="container">
             <h1 className="text-center">Formulario de Registro<i className="fas fa-music"></i> </h1>
            <div>
                <form onClick={(e) =>{manejarSubmit(e)}} className="container d-flex justify-content-between">
                <div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombres:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Diego Eugenio"
                        name="nombre"
                        value={value.nombre}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Apellido Paterno:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Sotomayor"
                        name="apellidoPaterno"
                        value={value.apellidoPaterno}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Apellido Materno:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. Reyes"
                        name="nombre"
                        value={value.nombre}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">email:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ej. dsotomayor@gmail.com"
                        name="email"
                        value={value.email}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Fecha Nacimiento:</label>
                    <input
                        type="date"
                        className="form-control"
                        name="fechaNacimiento"
                        value={value.fechaNacimiento}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Padre o Apoderado:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ej. fernando Francisco Sotomayor Garcia"
                        name="nombrePadre"
                        value={value.nombrePadre}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                </div>

                <div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Usuario:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="usuario"
                        value={value.usuario}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        name="contrasea"
                        value={value.contrasea}
                        onChange={(e)=>{actualizarInput(e)}}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Confirmar contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        />
                </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </div>
                </form>
        </div>
        </div>
    )
}

export default RegistroAlumno
