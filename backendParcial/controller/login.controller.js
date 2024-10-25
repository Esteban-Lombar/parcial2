// login.controller.js
const Usuario = require('../models/Usuario'); // Asegúrate de tener el modelo de Usuario correctamente importado

const login = async (req, res) => {
  const { nombre, contrasena } = req.body;

  try {
    // Validar usuario
    const usuario = await Usuario.findOne({ nombre, contrasena });
    if (usuario) {
      res.json({ success: true }); // O envía cualquier otra información relevante
    } else {
      res.json({ success: false, mensaje: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error("Error al verificar usuario:", error);
    res.status(500).json({ success: false, mensaje: 'Error en el servidor' });
  }
};

module.exports = { login };
