import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Table from '../pages/Table'

function Rutas() {
return (
<Routes>
<Route path="/home-adm" element={<Home />}/>
<Route path="/lista-unidad" element={<List />}/>
<Route path="/lista-usuario" element={<List />}/>
<Route path="/lista-documento" element={<List />}/>
<Route path="/lista-temporada" element={<List />}/>
<Route path="/lista-evento" element={<List />}/>
<Route path="/tabla-temporada" element={<Table />} />
</Routes>
)
}

export default Rutas