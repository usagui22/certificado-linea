import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Table from '../pages/Table'

function Rutas() {
return (
<Routes>
<Route path="/home-adm" element={<Home />}/>
<Route path="/lista-unidad" element={<List entidad='unidad' />}/>
<Route path="/lista-usuario" element={<List entidad='usuario' />}/>
<Route path="/lista-documento" element={<List entidad='documento' />}/>
<Route path="/lista-temporada" element={<List entidad='temporada' />}/>
<Route path="/lista-evento" element={<List entidad='evento' />}/>
<Route path="/tabla-temporada" element={<Table entidad='temporadas' />} />
</Routes>
)
}

export default Rutas