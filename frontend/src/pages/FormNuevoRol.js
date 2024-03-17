import { Form } from 'formik'
import React, { useState } from 'react'
import FieldContent from '../components/FieldContent'

function FormNuevoRol() {
    const [nomRol, setNomRol] = useState({campo:'', valido:null});
    const [desRol, setDesRol] = useState({campo:'', valido:null});

  return (
    <>
     <h2>Crear Nuevo Rol</h2> 
     <Form>
        <FieldContent
            etiqueta="Nombre" 
            tipo="text" 
            name="nom_rol"        
            estado={nomRol}
            setEstado={setNomRol}
        />
        <FieldContent
            etiqueta="Descripcion" 
            tipo="text" 
            name="des_rol"        
            estado={desRol}
            setEstado={setDesRol}
        />
     </Form>
    </>
  )
}

export default FormNuevoRol
