import { useState } from "react";
import '../components/styles/cambiarcontrasena.css'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
      body: JSON.stringify({ nombre, contrasena, cedula, celular, ciudad, correo }),
    });

    const data = await response.json();

    if (data.success) setMessage("Contraseña cambiada exitosamente");
    else setMessage(data.message);
  };

  return (
    <div className="container">
      <h2>Registrar</h2>
  
      <form className="space-y-6 w-full max-w-md">
        <div className="space-y-2">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
            required
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="contrasena">Contraseña</label>
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
          <label htmlFor="cedula">Cédula</label>
          <input
            id="cedula"
            type="text"
            placeholder="Ingresa tu cédula"
            value={cedula}
            onChange={(e) => setcedula(e.target.value)}
            required
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="celular">Celular</label>
          <input
            id="celular"
            type="text"
            placeholder="Ingresa tu número de celular"
            value={celular}
            onChange={(e) => setcelular(e.target.value)}
            required
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            id="ciudad"
            type="text"
            placeholder="Ingresa tu ciudad"
            value={ciudad}
            onChange={(e) => setciudad(e.target.value)}
            required
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={(e) => setcorreo(e.target.value)}
            required
          />
        </div>
  
        <div className="space-y-2">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input
            id="fechaNacimiento"
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setfechaNacimiento(e.target.value)}
          />
        </div>
  
        <button onClick={handleCreate}>Registro</button>
      </form>
  
      {message && <p>{message}</p>}
    </div>
  );
  
};

export default CambiarContrasena;
