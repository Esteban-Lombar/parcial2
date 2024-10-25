import { useState } from "react";
import '../components/styles/cambiarcontrasena.css';

const CambiarContrasena = () => {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [nombre, setnombre] = useState("");
  const [contrasena, setcontrasena] = useState("");
  const [cedula, setcedula] = useState("");
  const [celular, setcelular] = useState("");
  const [ciudad, setciudad] = useState("");
  const [correo, setcorreo] = useState("");
  const [fechaDeNacimiento, setfechaDeNacimiento] = useState("");

  const [message, setMessage] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/auth/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, contrasena, cedula, celular, ciudad, correo, fechaDeNacimiento }),
    });

    const data = await response.json();

    if (data.success) setMessage("Registro completado exitosamente");
    else setMessage(data.message);
  };

  return (
    <div className="container">
      <h2>Registrar</h2>

      <form className="space-y-6 w-full max-w-md">
        <div className="space-y-2">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ej: Juan Pérez"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            id="contrasena"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setcontrasena(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cedula">Cédula:</label>
          <input
            id="cedula"
            type="text"
            placeholder="Ej: 123456789"
            value={cedula}
            onChange={(e) => setcedula(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="celular">Celular:</label>
          <input
            id="celular"
            type="text"
            placeholder="Ej: 3001234567"
            value={celular}
            onChange={(e) => setcelular(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            id="ciudad"
            type="text"
            placeholder="Ej: Bogotá"
            value={ciudad}
            onChange={(e) => setciudad(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            id="correo"
            type="email"
            placeholder="Ej: juan.perez@mail.com"
            value={correo}
            onChange={(e) => setcorreo(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input
            id="fechaNacimiento"
            type="date"
            value={fechaDeNacimiento}
            onChange={(e) => setfechaDeNacimiento(e.target.value)}
          />
        </div>

        <button onClick={handleCreate}>Registro</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CambiarContrasena;
