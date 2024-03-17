import React, { useEffect, useState } from 'react'
import { cargarUsuario } from '../connections/loads';
import { Table } from 'react-bootstrap';

function TablaUsuarios() {
    const [listaUsuario, setListaUsuario] = useState([]);

useEffect(()=>{
    setListaUsuario(cargarUsuario)
},[])

  return (
    <>
     <h1>Lista de Usuarios Registrados</h1> 
     <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Nombres:</th>
                <th>Apellidos: </th>
                <th>Correo Electronico: </th>
                <th>Cargo: </th>
                <th>CI:</th>
            </tr>            
        </thead>
        <tbody>
            {/* <tr>
                {
                    listaUsuario.map(()=>{
                        
                    })
                }
            </tr> */}
            {
                listaUsuario.map((dato_usu,j)=>(
                    <tr key={j}>
                        {dato_usu.map((dato)=>
                            (
                                <td>
                                    dato.attibute
                                </td>
                            )
                        )}
                    </tr>
                ))
            }
        </tbody>
     </Table>
    </>
  )
}

export default TablaUsuarios
