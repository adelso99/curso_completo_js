'use strict'
/*
Mostrar todos los numeros
impares que hay entre dos numeros indroducidos por
el usuario
*/

var numero1 = parseInt(prompt("Introduce el Primer nuemro", 0));
var numero2 = parseInt(prompt("Introduce el Segundo nuemro", 0));

document.write("<h1>Los Numeros Impares de "+numero1+" hasta "+numero2+" son los siguientes: </h1>")

/*
for (var i = numero1; i <= numero2; i++) {
    // Verificar si el número es impar
    if (i % 2 !== 0) {
        document.write(i + "<br/>");
    }
}
    */


while(numero1 < numero2){
    numero1++
    if(numero1%2 != 0){
        document.write("El "+numero1+" Es Impar </br>");
    }
}
