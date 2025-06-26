'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexion a la Base de Datos Exitosa.....");
    })
    .catch(err => console.log(err));