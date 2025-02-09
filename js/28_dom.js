'use strict'
//Docuement objet model

function cambiarColor(color){
    caja.style.background = color;
}

//1.-- Conseguir elementos con ID completo
//getElementById: sirve para selecionar los elementos
//var caja = document.getElementById("micaja");
//tambien se puede de esta forma con la almohadila y jala el ID
var caja = document.querySelector("#micaja");

caja.innerHTML = "Hola Si soy Una caja con contexto desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";


//2.-- Conseguir elementos por su etiqueta
var todoslosdivs = document.getElementsByTagName('div');
//todoslosdivs((valor, indice) => {
//console.log(todoslosdivs);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
for(valor in todoslosdivs){
    if(typeof todoslosdivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosdivs[valor].textContent);
    //append: significa que añade despues
    parrafo.append(texto);
    seccion.prepend(parrafo);
        //prepend: significa añade antes
    }
}
seccion.append(hr);

//});

//var contenidoentexto = todoslosdivs[2]; 
//contenidoentexto.innerHTML = "Otro Texto para el Segundo Elemento";
//contenidoentexto.style.background = "black";

//console.log(contenidoentexto);


//3.-- Conseguir elementos por su clase

console.log(caja);

// Holi