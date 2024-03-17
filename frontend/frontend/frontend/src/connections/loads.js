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

export const cargarPlantilla = (params) => {
  let path = "plantilla/listar-plantilla";
  try {
    const res = API.get(path);
      return res.data;
  } catch (error) {
    console.log("No se encuentran plantillas registradas");
  }
}


