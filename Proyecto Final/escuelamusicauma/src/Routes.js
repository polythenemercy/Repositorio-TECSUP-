import React from 'react'
import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoView from "./views/LoggeoView"
import RegistroView from "./views/RegistroView"
import CalendarioAlumno from "./views/CalendarioAlumnoView"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/listarAlumnos" exact component={ListarAlumnos} />
            <Route path="/usuario" exact component={LoggeoAlumno} />
            <Route path="/calendario" exact component={CalendarioAlumno} />

        </div>
    )
}

export default Routes
