'use strict'
/*
MOSTRAR EN PANTALLA 
todos los numeros divisores de un numero
introduce en prompt
*/

// Solicitud de numero
var numero = parseInt(prompt("Introduce el Numero"));

//Numeros divisores

//Mostrar en pantalla
document.write("<h1>Los numeros divisores de "+numero+" Son los siguientes </h1>"); 
for(var i = 1; i <= numero; i++){
    if(numero % i === 0){
        // ===: "estrictamente igual"
        document.write(i+"</br>");
    }
}

