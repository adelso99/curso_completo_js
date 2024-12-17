'use strict'
// PRUEBAS DE LET Y VAR

//VAR
var  numero = 40;
console.log(numero); // VALOR SERA 40


if(true){
    var numero = 50;
    console.log(numero); // VALOR SERA 50
}

console.log(numero); // VALOR SERA 50

// LET

var texto = "Curso Completo de JS";
console.log(texto); //Curso Completo de JS

if(true){
    let texto = "Procesando Curso de Master en JS";
    console.log(texto); // VALOR SERA Procesando Curos de Master en JS
    
}

console.log(texto); //Curso Completo de JS

// La variable LET Actua pero unicamente en el Bloque
// de codigo no en todo en general como lo es var
