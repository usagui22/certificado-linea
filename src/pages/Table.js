import React, { useEffect } from 'react'
import { cargarUnidad, cargarUsuario, cargarDocumento, cargarEvento, cargarPlantilla } from '../connections/loads';

function Table(props) {
  const {entidad, listTitulos, listDatos} = props;
  //const [contenido, setContenido]=useState([]);
  
  // const cargarContenido = async () => {
  //   let path= `/${entidad}/`;
  // }
  useEffect(() => {
    let ent_min = entidad.toLowerCase();
    switch (ent_min) {
      case ent_min = 'unidad':
          cargarUnidad();
        break;
      case ent_min = 'usuario':
          cargarUsuario();
        break;
      case ent_min = 'documento':
          cargarDocumento();
        break;
      case ent_min = 'plantilla':
          cargarPlantilla();
        break;
      case ent_min = 'evento':
          cargarEvento();
        break;
      default:
        console.log("la entidad buscada no es la adecuada, revise las listas");
        break;
    }
  });


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
                listDatos.map((dato, i) => 
                (
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                ))
              }            
          </tbody>
        </Table>  
    </div>
  )
}

export default Table;
