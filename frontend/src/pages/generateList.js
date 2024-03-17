import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { titulos } from '../data/titulo';
import { cargarResponsable } from '../connections/loads';

function List(props) {
  const {entidad} = props;
  const [lista, setLista] = useState([]);
  

  useEffect(() => {
    setLista(cargarResponsable)
  },[])

  return (
    <div>
      <h1 >Lista de {entidad}</h1> 
      <Table>
        <thead>
          {
            titulos.entidad.map(
              (titulo, i) => (
                <tr key={i}>
                  <th>{i}</th>
                  <th>{titulo}</th>
                </tr>
              )
            )
          }
        </thead>
        <tbody>
            {
              lista.map((r, i) => {
                return(
                  <tr key={i}>
                    {
                      r.attibutes.map(
                        (a)=>(
                          <td>
                            {a.attibute}
                          </td>
                        )
                      )
                    }
                  </tr>
                )
              })
            }
        </tbody>
      </Table>      
    </div>
  )
}

export default List