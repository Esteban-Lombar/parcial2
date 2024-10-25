const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/login.routes.js');
const cors = require('cors');
const app = express();
const db = require('./db/mongo');

// Habilita CORS con configuraciones específicas
app.use(cors({ 
    origin: '*',  // Permitir cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos (fíjate en la corrección aquí)
    allowedHeaders: ['Content-Type', 'Authorization']  // Encabezados permitidos
}));
app.use(urlencoded({ extended: true }));
app.use(json());

// Inicializa la base de datos
db.dbInit()
    .then(() => {
        console.log('Conexión realizada');
        app.use('/auth', router); // Mueve esto dentro de la promesa
        app.listen(4000, () => {
            console.log('Servidor corriendo en puerto 4000');
        });
    })
    .catch(err => {
        console.error('Error de conexión a la base de datos:', err);
    });
