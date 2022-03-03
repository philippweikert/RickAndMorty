import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <h1>Rick und Morty Charaktere</h1>
      </div>
      <div><Link to="gallery">Galerie</Link> </div>
        <div><Outlet /></div>
        <div>Footer</div>
      <div>
        <p>Für Fragen und/oder Anregungen wendet euch gerne an ichantworte@nichtaufmails.de</p>
      </div>
    </div>
  );
}

export default App;
