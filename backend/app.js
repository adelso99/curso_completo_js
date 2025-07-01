'use strict'

var express = require('express');
var bodyParser = require('body-parser');

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



//Configuracion de Rutas
app.use('/api', project_routes);

//Exportacion de archivos
module.exports = app;
