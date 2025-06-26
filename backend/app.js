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

    //ruta de prueba 1
app.post('/test/:id', (req, res) => {
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message: "Hola Mundo desde la API nodejs"
    });
});

    //ruta de prueba 2
    app.get('/', (req, res) => {
        res.status(200).send(
            "<h1>Esta es la Pagina de Incio</h1>"
        );
    });

//Exportacion de archivos
module.exports = app;
