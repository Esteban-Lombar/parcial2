import './App.css';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Admin from './components/UsuarioAdmin';
import VistaUsuario from './components/vistaUsuario'; // Asegúrate de que el nombre del archivo y la importación coincidan
import CambiarContrasena from './components/CambiarContrasena';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/usuario' element={<VistaUsuario />} />
        <Route path='/cambiar-contrasena' element={<CambiarContrasena />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
