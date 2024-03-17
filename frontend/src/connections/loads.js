import axios from "axios";

export const API = axios.create({
    baseURL:'http://localhost:8080/',
})

export const cargarUnidad = (params) => {
  let path = "unidad/listar-unidad";
  try {
    const res = API.get(path);
    return res.data
  } catch (error) {
    console.log("No se encuentran unidades registradas");
  }
}

export const cargarUsuario = async => {
    let path="usuario/listar-usuario";
    try {
      const res = API.get(path);        
        return res.data;
    } catch (error) {
      console.log("No se encuentran usuarios registrados");
    }
}

export const cargarEvento = (params) => {
  let path = "evento/listar-evento";
  try {
    const res = API.get(path);
      return res.data;
  } catch (error) {
    console.log("No se encuentran eventos registrados");
  }
}

export const cargarDocumento = (params) => {
  let path = "documento/listar-documento";
  try {
    const res = API.get(path);
      return res.data;
  } catch (error) {
    console.log("No se encuentran documentos registrados");
  }
}

export const cargarPlantillaLista = (params) => {
  let path = "plantilla/listar-plantilla";
  try {
    const res = API.get(path);
      return res.data;
  } catch (error) {
    console.log("No se encuentran plantillas registradas");
  }
}

export const cargarResponsable = () => {
  let path="usuario/listar-responsables";
    try {
      const resp= API.get(path)
      return resp.data;
    } catch (error) {
      console.log("No se encuentran registrados responsables de unidad")
    }
}

export const cargarParticipantes = () =>{
  let pat = "usuario/listar-participantes";
  try {
    const r = API.get(pat)
    return r.data;
  } catch (error) {
    console.log("Lista no encontrada de usuarios")
  }
}

export const subirArchivoPlantilla = () =>{
  let p = "plantilla/crear-plantilla";
  try {
    API.post(p).then(
      console.log("subiendo nueva plantilla")
    )
  } catch (error) {
    console.log("Error al subir elemento")
  }
}

export const crearUnidad = () =>{
  let p = "unidad/crear-unidad";
  try {
    API.post(p).then(
      console.log("generando crear unidad")
    )
  } catch (error) {
    console.log("Error al crear unidad")
  }
}

export const cambiarResponsable = (id_asic,uni_res) => {
  let p =`unidad/cambiar-responsable/?id_rep=${id_asic}&id_uni=${uni_res}`;
  try {
    API.get(p).then(console.log("Unidad cambio de responsable"))
  }catch(error){
      console.log("Error al crear unidad")    
  }      
}

export const cargarCargos = () =>{
  let path = "usuario/listar-cargos";
  try {
    const r = API.get(path);
    return r.data;
  } catch (error) {
    console.log("Los cargos no se han encontrado")
  }
}

export const subirUsuario = (data) =>{
  let p = "usuario/registrar-usuario";
  try {
    API.post(p, data)
  } catch (error) {
    
  }
}
