import { useState } from "react";

const VistaUsuario = () => {
  const [codigo, setCodigo] = useState("");
  const [codigosRegistrados, setCodigosRegistrados] = useState([]);
  const [mensajeResultado, setMensajeResultado] = useState("");

  const handleRegistrarCodigo = () => {
    const premioAleatorio = obtenerPremio();
    const nuevoCodigo = {
      codigo,
      premio: premioAleatorio,
    };

    if (codigosRegistrados.some(c => c.codigo === codigo)) {
      setMensajeResultado("Este código ya está registrado.");
      return;
    }

    setCodigosRegistrados([...codigosRegistrados, nuevoCodigo]);
    setMensajeResultado(premioAleatorio);
    setCodigo(""); // Limpiar el campo de código
  };

  const obtenerPremio = () => {
    const random = Math.floor(Math.random() * 400);
    if (random < 200) {
      return "No ganaste.";
    } else if (random < 250) {
      return "Ganaste 10.000!";
    } else if (random < 300) {
      return "Ganaste 50.000!";
    } else if (random < 350) {
      return "Ganaste 1.000.000!";
    } else {
      return "Código inválido.";
    }
  };

  return (
    <div className="container">
      <h2>Vista de Usuario</h2>
      <div>
        <label>Registrar Código:</label>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ingresa un código (000 - 999)"
        />
        <button onClick={handleRegistrarCodigo}>Registrar</button>
      </div>
      
      <div>
        <h3>Códigos Registrados</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha/Hora</th>
              <th>Código</th>
              <th>Premio</th>
            </tr>
          </thead>
          <tbody>
            {codigosRegistrados.map((item, index) => (
              <tr key={index}>
                <td>{new Date().toLocaleString()}</td>
                <td>{item.codigo}</td>
                <td>{item.premio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mensajeResultado && <p>{mensajeResultado}</p>}
    </div>
  );
};

export default VistaUsuario; // Asegúrate de que el nombre del archivo y la importación coincidan
