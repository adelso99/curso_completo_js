
//carga de paquete con modulo require
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//creacion del Servidor con exprees
server.listen(6677, function(){
    console.log('Servidor esta Funcionando en http://localhost:6677');
});

