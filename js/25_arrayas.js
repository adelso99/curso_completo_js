'use strict'

//Arrays, Areglos, Matrices
// Es una coleccion de varios datos o valores

var nombre = "Adelso";
var nombres = ["Adelso", "Adel", "Kick", "Budotski", 52, true];

var lenguajes = new Array ("PHP", "JS", "Go", "Java", "Pyton", "C++");


/*
var elemento = parseInt(prompt("Que elemento del Array quieres", 0));
if(elemento >= nombres.length){
    alert("Introduce el Numero correcto menor que: " +nombres.length);
}else{
    alert("El usuario selccionado es: "+nombres[elemento]);
}
*/

//console.log(nombres.length);
//console.log(lenguajes);

document.write("<h1>Lenguajes de Programacion de 2025</h1>")
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
    document.write("</ul>");




//document.write(lenguajes[1]);
//document.write(lenguajes[2]);