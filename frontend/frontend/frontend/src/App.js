import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Rutas from './routes/Rutas';
import Menu from './components/Menu';

function App() {
    return (
        <React.Fragment > 
        <section>
            <Navbar />
        </section>                         
        <div className='principal grid grid-cols-12'>
            <div className='side-menu col-span-3 bg-blue h-screen pl-2' >
                <Menu />    
            </div>
            <div className='contenido col-span-9 bg-red-500 h-screen pl-2'>
                <Rutas />
            </div>
            
        </div>        
        </React.Fragment>
    );
}

export default App;