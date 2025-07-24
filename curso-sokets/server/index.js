//carga de paquete con modulo require
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Peticion para cargar una vista estitica por default
app.use(express.static('client'));

//Peticion de get
app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde una ruta');

});

var messages = [{
    id: 1,
    text: 'Bievnedio al chat privado de Socket.io y NodeJS de Adelso Hernandez',
    nickname: 'Bot - https://github.com/adelso99'
}];

io.on('connection', function(socket){
    console.log("Se ha Conectado una persona con la IP: "+socket.handshake.address+"se ha conectado...");

    socket.emit('messages', messages);

});

//creacion del Servidor con exprees
server.listen(6677, function(){
    console.log('Servidor esta Funcionando en http://localhost:6677');
});

