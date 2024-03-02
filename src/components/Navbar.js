import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../style/Navbar.css";

function Navbar() {
const {menuOpen, setmenuOpen} = useState(false);
return (
<nav className='nav' >
<NavLink to={"/home-adm"} className={"tittle"}>Certificados</NavLink>
<div className='menu' onClick={()=>{setmenuOpen(!menuOpen);}}>
<span></span>
<span></span>
<span></span>
</div>
<ul className={menuOpen? "open": ""}>
<li >
<NavLink to={"/lista-unidad"}>Unidad</NavLink>
</li>
<li >
<NavLink to={"/lista-documento"}>Documento</NavLink>
</li>
<li >
<NavLink to={"/lista-usuario"}>Usuario</NavLink>
</li>
</ul>
</nav>
)
}

export default Navbar

