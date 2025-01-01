'use strict'
/*
PROGRAMA QUE PIDA 2 NUMEROS
y que nos diga cual es el mayor y cual es el
menor y si son iguales
*/

var numero1 = parseInt(prompt("Introduce el Primer numero", 0));
var numero2 = parseInt(prompt("Introduce el Segundo numero", 0));

console.log(numero1);
console.log(numero2);

if(numero1 == numero2){
    alert("Numeros iguales");

}else if(numero1 > numero2){
    alert("El mayor es: "+numero1);
    alert("El menor es: "+numero2);

}else if(numero1 < numero2){
    alert("El mayor es: "+numero2);
    alert("El menor es: "+numero1);
}else{
    alert("Introduce numeros correctos");
}