import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Rutas from './routes/Rutas';

function App() {
    return (
        <div className="App"> 
        <Navbar />
        <Rutas /> 
        <Menu />
        </div>
    );
}

export default App;