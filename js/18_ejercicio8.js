'use strict'
/*
Hacer una calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos lo vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola
el resultado de Sumar, Restar, Multplicar y dividir esas
dos cifras
*/

var numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
var numero2 = parseInt(prompt('Introduce el Segundo Numero', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el Primer Numero Valido', 0));
    numero2 = parseInt(prompt('Introduce el Segundo Numero Valido', 0));

}

/*
var suma = numero1+numero2;
var resta = numero1-numero2;
var multplicacion = numero1*numero2;
var division = numero1/numero2;

if(numero1+numero2){
    console.log("Este es el resultado de la suma es "+suma);
} 

if(numero1-numero2){
    console.log("Este es el resultado de la resta es "+resta);
}

if(numero1*numero2){
    console.log("Este es el resultado de la multplicacion es "+multplicacion);
}

if(numero1/numero2){
    console.log("Este es el resultado de la division es "+division);
}
*/

var resultado = "La Suma es: "+(numero1+numero2)+" <br/>"+
                "La Resta es: "+(numero1-numero2)+" <br/>"+
                "La Multiplicacion es: "+(numero1*numero2)+" <br/>"+
                "La Division es: "+(numero1/numero2)+" <br/>";


var resultado1 = "La Suma es: "+(numero1+numero2)+" \n"+
                "La Resta es: "+(numero1-numero2)+" \n"+
                "La Multiplicacion es: "+(numero1*numero2)+" \n"+
                "La Division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultado1);
console.log(resultado1);
