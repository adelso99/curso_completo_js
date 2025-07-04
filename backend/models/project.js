'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

//Exportacion
module.exports = mongoose.model('Project', ProjectSchema);
//Projects --> guarda los documentos en la coleccion 