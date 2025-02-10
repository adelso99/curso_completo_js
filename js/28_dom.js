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
    seccion.append(parrafo);
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
//3.-- Conseguir elementos por su clase

var divRojos = document.getElementsByClassName('rojo');
var divAmarrillos = document.getElementsByClassName('amarillo');
console.log(divAmarrillos[0].style.background = "Yellow");

var div;
for(var div in divRojos){
    if(divRojos[div].className == "rojo"){
    divRojos[div].style.background = "red";
    }
}

//4. Query Selector. sirve para seleccionar un elemento
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);


//console.log(divRojos);

//console.log(caja);

// Holi