import { Form } from 'formik'
import React from 'react'
import FieldContent from '../components/FieldContent'

function FormEditarRol() {

  return (
    <>
        <h2>Crear Nuevo Rol</h2> 
     <Form>
        <FieldContent
            etiqueta="Nombre" 
            tipo="text" 
            name="nom_rol"        
            
        />
        <FieldContent
            etiqueta="Descripcion" 
            tipo="text" 
            name="des_rol"        
            
        />
     </Form>
    </>
  )
}

export default FormEditarRol
