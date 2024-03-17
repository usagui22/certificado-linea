import { Form } from 'formik'
import React, { useEffect, useState } from 'react'
import FieldContent from '../components/FieldContent'
import { Button, FormText } from 'react-bootstrap'
import FieldSelect from '../components/FieldSelect';
import { cargarCargos, subirUsuario } from '../connections/loads';


function Form_usu() {
    const [nombres, setNombres]= useState({campo:'', valido:null});
    const [apellidos, setApellidos] =useState({campo:'', valido:null});
    const [fecha_nacimiento, setFecha_nacimiento] = useState({campo:'', valido:null});
    const [genero, setGenero]  = useState({campo:'', valido:null});
    const [ciudad, setCiudad] = useState({campo:'', valido:null});
    const [correo, setCorreo] = useState({campo:'', valido:null});
    const [celular, setCelular] = useState({campo:'', valido:null});
    const [ci, setCI] = useState({campo:'', valido:null});
    const [cod_sis, setCod_Sis]= useState({campo:'', valido:null});
    const [password, setPassword] = useState({campo:'', valido:null});    
    
    const [body, setBody] = useState({
        nombres:'',
        apellidos:'',
        fecha_nacimiento:'',
        genero:'',
        ciudad:'',
        email:'',
        celular:'',
        ci:'',
        cod_sis:'',
        password:'',
        rol:'Estudiante',
    });
    
    const [cargo, setCargo] = useState([]);
    const [siValido, setValido] = useState(false);    

    function handleSubmit(e){
      e.preventDefault();            
      if(nombres.valido==="true" &&          
          apellidos.valido==="true" &&
          fecha_nacimiento.valido==="true" &&
          ciudad.valido ==="true"&&          
          correo.valido==="true" &&
          celular.valido==="true" &&
          ci.valido==="true"&&
          cod_sis==="true"&&          
          password.valido==="true" 
          // && password2.valido==="true"          
          )
      {
          setValido(true);
          setBody({
            nombres:nombres.campo,
            apellidos:apellidos.campo,
            fecha_nacimiento:fecha_nacimiento.campo,
            genero:genero.campo,
            ciudad:ciudad.campo,
            correo:correo.campo,
            celular:celular.campo,
            ci:ci.campo,
            cod_sis:cod_sis.campo,
            password:password.campo,
            cargo:'Estudiante',              
          });     
          subirUsuario(body);          
      }
    }
	useEffect(()=>{
		setCargo(cargarCargos);
	}, [])

  return (
    <>
      <h2>Nuevo Usuario</h2>      
        <Form onSubmit={handleSubmit}>            
            <FieldContent 
                etiqueta="Nombres" 
                tipo="text" 
                name="nombres"        
                estado={nombres}
                setEstado={setNombres}                
                />                          
            <FieldContent 
                etiqueta="Apellidos" 
                tipo="text" 
                name="apellidos" 
                estado={apellidos}
                setEstado={setApellidos}
                />
            <FieldContent 
                etiqueta="Fecha de Nacimiento" 
                tipo="text" 
                name="fecha_nacimiento" 
                estado={fecha_nacimiento}
                setEstado={setFecha_nacimiento}
                />
            <FieldContent 
                etiqueta="Genero" 
                tipo="texto" 
                name="genero" 
                estado={genero}
                setEstado={setGenero}
                />
            <FieldContent 
                etiqueta="Ciudad" 
                tipo="texto" 
                name="ciudad" 
                estado={ciudad}
                setEstado={setCiudad}
                />
            <FieldContent 
                etiqueta="Correo Electronico" 
                tipo="email" 
                name="correo" 
                estado={correo}
                setEstado={setCorreo}
                />
            <FieldContent 
                etiqueta="Celular" 
                tipo="text" 
                name="celular" 
                estado={celular}
                setEstado={setCelular}
                />   
            <FieldContent 
                etiqueta="Carnet de Identidad" 
                tipo="text" 
                name="ci" 
                estado={ci}
                setEstado={setCI}
                /> 
            <FieldContent 
                etiqueta="Codigo Siss" 
                tipo="text" 
                name="cod_sis" 
                estado={cod_sis}
                setEstado={setCod_Sis}
                />
                        
            <FieldContent 
                etiqueta="Contraseña" 
                tipo="password" 
                name="password" 
                estado={password}
                setEstado={setPassword}
                />            
            <FieldSelect label="Cargo">
            <option value={""}>Seleccione el cargo </option>
              {
                cargo.map((crg, k) => {
                  return(
                  <option key={k} value={crg.nombre}>{crg.nombre}</option>
                  )
                }
                )
              }              
            </FieldSelect>            
              {
                siValido === 'false' &&
                <FormText>
                  <b>Error: </b>
                  <span>Por Favor revise sus datos ingresados sean los correctos.</span>
                </FormText>
              }
            <div className='row align-items-center p-3'>                
                <Button className='btn btn-primary m-1 col-sm-2' type="submit">Crear</Button>                
                <Button className='btn btn-primary m-1 col-sm-2' type="reset">Reset</Button>                                
            </div>                
        </Form> 
    </>
  )
}

export default Form_usu;
