import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { titulos } from '../data/titulo';

function List(props) {
  const {entidad} = props;
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista()
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
              lista.map(() => {
                
              })
            }
        </tbody>
      </Table>      
    </div>
  )
}

export default List