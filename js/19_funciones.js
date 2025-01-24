'use strict'

// Funciones
/*
Conjunto de ordenes que se ejecutan cuando realizamos 
la funcion
Se cree con la palabra recervada. function
*/

//Definicion de la funcion
function calculadora(numero1, numero2){

    //Conjunto de Instrucciones a ejecutar
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************************");
   
   
    // console.log("Si soy yo");

    //return "Hola soy la calculadora!!";
}

// Invocar o llamar a la funcion
//var resultado = calculadora();
//console.log(resultado);
calculadora(12, 8);
calculadora(98, 2);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}