/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import List from '../pages/generateList';
import generateTable from '../pages/generateTable';
import TablaUsuarios from '../pages/TablaUsuarios';

function Trails() {
return (
<Routes>
<Route path="/home-adm" element={<Home />}/>
<Route path="/lista-unidad" element={<List entidad='unidad' />}/>
<Route path="/lista-usuario" element={<TablaUsuarios />}/>
<Route path="/lista-documento" element={<List entidad='documento' />}/>
<Route path="/lista-temporada" element={<List entidad='temporada' />}/>
<Route path="/lista-evento" element={<List entidad='evento' />}/>
<Route path="/tabla-temporada" element={<generateTable entidad='temporadas' />} />
</Routes>
)
}

export default Trails;