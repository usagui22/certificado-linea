import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsCalendar3, BsFillBellFill} from "react-icons/bs";
import "../style/Menu.css";

function Menu() {
  return (
    <div className='sidebar-content' >    
        
            <NavLink to={"/lista-evento"} className={"sidebar-item"} >
                
                    <BsFillBellFill className='sidebar-icon'/>                            
                    <span className='sidebar-tittle'>Eventos</span>                                        
                
                </NavLink>                                                                
            
            <NavLink to={"/tabla-temporada"} className={"sidebar-item"}>
                
                    <BsCalendar3 className='sidebar-icon'/>                        
                    <span className='sidebar-tittle'>Temporadas</span>                                        
                
            </NavLink>                    
                
    </div>
  )
}

export default Menu
