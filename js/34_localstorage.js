'use strict'

//Localstorage


// Comprobar disponibilidad de Localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage NO disponible");
}

//Guardar datos en localstorage
localStorage.setItem("Titulo", "Curso de Symfony de Adelso Hernandez");

// Rcuperar Elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("Titulo");


//Guardar Objetos JSON
var usuario = {
    nombre: "Adelso Hernandez",
    email: "adelso99@gmail.com",
    web: "www.adelso.com.gt"
};

//Convrtir objeto JSON: ejemplo un string JSON.stringify
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto JSON de Localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+" - "+userjs.nombre);

//localStorage.removeItem("usuario");
localStorage.clear();
