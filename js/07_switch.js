'use strict'

// Switch: Permite hacer muchas condiciones
// de manera ordenada

var edad = 80;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la Mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los Cuarenta";
    break;
    case 75:
        imprime = "Eres ya un Anciano";
    break;
    default:
        imprime = "Tu edad es Neutra";
        break;
}

console.log(imprime);
