import { useState } from "react";
import './styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: username, contrasena: password }),
      });

      const data = await response.json();

      // Verifica que la respuesta sea exitosa
      if (response.ok && data.success) {
        navigate('/usuario'); // Redirigir a la vista de usuario si el login es exitoso
      } else {
        setErrorMessage(data.mensaje || 'Credenciales incorrectas');
      }

      console.log(data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setErrorMessage('Error en el servidor, intenta más tarde.');
    }
  };

  const handleChangePassword = () => {
    navigate('/cambiar-contrasena'); 
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div>
          <button type="submit">Login</button>
        </div>
        <button 
          type="button"
          onClick={handleChangePassword}
          className="ml-4"
        >
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
};

export default Login;
