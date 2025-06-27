'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar Archivos de Rutas

//Configuracion de middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuracion de CORS


//Configuracion de Rutas



//Exportacion de archivos
module.exports = app;
