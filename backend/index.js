'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexion a la Base de Datos Exitosa.....");
    
    //Creacion del Servidor
    app.listen(port, () => {
        console.log("Servidor corriendo correctamente en el url: localhost:3700");
    });
    
    })
    .catch(err => console.log(err));

