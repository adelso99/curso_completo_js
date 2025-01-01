'use strict'
/*
PROGRAMA QUE PIDA 2 NUMEROS
y que nos diga cual es el mayor y cual es el
menor y si son iguales
PLUS: que si no los numeros no son numeros
o que son iguales a cero, que lo vuelva a pedir
los numeros
*/

var numero1 = parseInt(prompt("Introduce el Primer numero", 0));
var numero2 = parseInt(prompt("Introduce el Segundo numero", 0));

// isNaN: esta es una funcion 
// si no fuera un numero devuelve
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
         numero1 = parseInt(prompt("Introduce el Primer numero", 0));
         numero2 = parseInt(prompt("Introduce el Segundo numero", 0));

}

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