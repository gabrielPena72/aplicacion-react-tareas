import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import TareaFormulario from './components/TareaFormulario';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
