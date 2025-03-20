'use strict'

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_miguel = document.querySelector('#Miguel');


// fecth aceese a un servicio remoto y despues lo convierte JSON
    getUsuarios()
    .then(data => data.json())
    .then(users => {
    listadoUsuarios(users.data);
    //console.log(usuarios);
    return getInfo();
    
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getMiguel();
    })
    .then(data => data.json())
    .then(user => {
        mostrarMiguel(user.data);

    })
    
function getUsuarios(){
    // esto es una promesa
    return fetch('https://reqres.in/api/users');
}

function getMiguel(){
    // esto es una promesa
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: 'Adelso',
        apellidos: 'Hernandez',
        url: 'https://github.com/adelso99?tab=overview&from=2025-03-01&to=2025-03-20'
    };

    //Nueva Promesa desde 0
    return new Promise((resolve, reject) => {
    var profesor_string = "";
     setTimeout(function(){
        profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

        return resolve(profesor_string);
     }, 300);
   
    });
    
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name;
        
            div_usuarios.appendChild(nombre);

            document.querySelector(" .loading").style.display = 'none';
        });
    
}

function mostrarMiguel(user){
        console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_miguel.appendChild(nombre);
        div_miguel.appendChild(avatar);

        document.querySelector("#Miguel .loading").style.display = 'none';
        
}