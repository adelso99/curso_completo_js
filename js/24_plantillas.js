'use strict'
// Plantillas de Texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tu apellido");

//var texto = "Mi nombr es: "+nombre+" <br/> Mi apellido es: "+apellidos;
var texto = `
    <h1>Hola que tal<h1/>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellidos}</h3>

`;
//  ${nombre}: sirve para imprimir la variable dentro de la plantilla

document.write(texto);
