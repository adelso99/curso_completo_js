'use strict'
//Docuement objet model

function cambiarColor(color){
    caja.style.background = color;
}

//getElementById: sirve para selecionar los elementos
//var caja = document.getElementById("mi caja");
//tambien se puede de esta forma con la almohadila y jala el ID
var caja = document.querySelector("#mi caja");

caja.innerHTML = "Hola Si soy Una caja con contexto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

console.log(caja);