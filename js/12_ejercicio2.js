'use strict'
/*
Utilizando un BUCLE, Mostrar la suma y la media de los
numeros introducidos hasta introducir un numero
negativo y ahi mostrar el resultado 

*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('introduce el Primer numero', 0));
    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        suma = suma + numero;
        //suma += numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);

}while(numero >= 0)

    alert("La suma de todos los numeros es: "+suma);
    alert("La media de todos los numeros es: "+(suma/contador));