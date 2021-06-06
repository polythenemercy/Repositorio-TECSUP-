import React, {useState} from 'react'
import {Link} from "react-router-dom" 

function NavTop() {
    const [estaColapsado, setEstaColapsado] = useState(true)
    const manejarNavbar = () => setEstaColapsado(!estaColapsado)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!estaColapsado ? true : false} onClick={manejarNavbar} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">Ir a Carrito</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavTop