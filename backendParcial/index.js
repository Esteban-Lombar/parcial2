const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/login.routes.js');
const cors = require('cors');
const app = express();

const db = require('./db/mongo');
app.use(urlencoded({extended: true}))
app.use(json())
app.use(cors());

db.dbInit().then(() => console.log('Conexion realizada'))

app.use(cors({
    origin: '*',  // Permitir cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Permitir solo ciertos métodos si es necesario
    allowedHeaders: ['Content-Type', 'Authorization']  // Permitir solo ciertos encabezados
}));

app.use('/auth', router);

app.listen(4000, ()=>{
    console.log('listening at port 4000');
})