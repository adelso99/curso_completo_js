'use strict'

var express = require('express');
var bodyParser = require('body-parser');

    const cors = require('cors'); // ✅ Importar cors

var app = express();

//Cargar Archivos de Rutas
var project_routes = require('./routes/project');


//Configuracion de middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuracion de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

        // ✅ Configuración automática de CORS
        app.use(cors()); // O puedes personalizar: cors({ origin: 'http://localhost:4200' })




//Configuracion de Rutas
app.use('/api', project_routes);

//Exportacion de archivos
module.exports = app;
