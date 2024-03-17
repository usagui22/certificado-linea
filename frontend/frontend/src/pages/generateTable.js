/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { cargarUnidad, cargarUsuario, cargarDocumento, cargarEvento, cargarPlantilla } from '../connections/loads';
import { BotonAsignar, BotonEditar, BotonEliminar } from '../components/Boton';

function generateTable(props) {
  const {entidad, listTitulos} = props;

  const [contenido, setContenido]=useState([]);
  
  useEffect(() => {
    const cargarContenidoLista = () => {
    let ent_min = entidad.toLowerCase();
    switch (ent_min) { 
      case ent_min = 'unidad':
          setContenido(cargarUnidad());
        break;
      case ent_min = 'usuario':
          setContenido(cargarUsuario());
        break;
      case ent_min = 'documento':
          setContenido(cargarDocumento());
        break;
      case ent_min = 'plantilla':
          setContenido(cargarPlantilla());
        break;
      case ent_min = 'evento':
          setContenido(cargarEvento());
        break;
      default:
        console.log("la entidad buscada no es la adecuada, revise las listas");
        break;
    }
  };
    cargarContenidoLista();
  }, [entidad]);

  return (
    <div>
      <h3> Tabla de {entidad}</h3>        
      <Table>
        <thead>
          <tr>
            {
              listTitulos.map((titulo) => (                  
                <th>{titulo}</th>                  
              ))
            }              
          </tr>
        </thead>
        <tbody>            
          {
            contenido.map(
              (dato, i) => (
                <tr key={i}>
                  {dato.map((at)=>
                      <td>
                        {at.attributes}
                      </td>
                    )}
                  <td>
                    <BotonEditar direccionEditar={"/editarUnidad"}/>                                
                  </td>              
                  <td>
                    <BotonEliminar direccionEliminar={"/eliminarUnidad"}/>                
                  </td> 
                  <td>
                    <BotonAsignar direccionAsignar={"/ListaCheck/"} id_resp={dato.id}/>                
                  </td> 
                </tr>
              ))                
          }            
        </tbody>
        </Table>  
    </div>
  )
}

export default generateTable;
