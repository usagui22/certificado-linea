import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsCalendar3, BsFillBellFill} from "react-icons/bs";
import "../style/Menu.css";

function Menu() {
  return (
    <React.Fragment>
      <section>
        <ul className='sidebar' >    
          <li className='sidebar-item' >
            <NavLink to={"/lista-evento"} className='text-decoration-none text-white'>                
              <BsFillBellFill />&nbsp;                            
              <span>Eventos</span>                                                          
            </NavLink>  
          </li>      
          <li className='sidebar-item' >
            <NavLink to={"/tabla-temporada"} className='text-decoration-none text-white'>                
              <BsCalendar3 />&nbsp;               
              <span>Temporadas</span>                                                              
            </NavLink>
          </li>
        </ul>
      </section>                                
    </React.Fragment>        
  )
}

export default Menu
