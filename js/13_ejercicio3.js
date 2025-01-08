'use strict'
/*
HACER UN PROGRAMA
Que muestre todos los numeros entre 2 numeros
introducidos por el usuario
*/

var numero1 = parseInt(prompt('introduce el Primer numero', 0));
var numero2 = parseInt(prompt('introduce el Segundo numero', 0));

// document.write: Escribe contenido HTML directamente en la página.
document.write("<h1>De "+numero1+" a"+numero2+" estan estos numeros:</h1>")
for( var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");

}