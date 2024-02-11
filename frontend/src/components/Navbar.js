
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar_Top() {
  return (
    <nav className='nav-top' >
        <Link to={"/home-admi"}>Certificados</Link>
      <ul >
        <li >
          <Link to={"/lista-unidad"}>Unidad</Link>
          </li>
        <li >
          <Link to={"/lista-documento"}>Documento</Link>
          </li>
        <li >
          <Link to={"/lista-usuario"}>Usuario</Link>
          </li>
        <li >
          <Link to={"/lista-temporada"}>Calendario</Link>
          </li>
        <li >
          <Link to={"/lista-evento"}>Evento</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar_Top
