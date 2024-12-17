'use strict'

// CONDICIONAL IF
// Son intrucciones para comparar algo
// Ejemplo: Si A es igual a B enrtonces haz algo

/*
var edad1 = 10;
var edad2 = 12;

// IF significa si

// Si pasa esto ejecuta esto
if(edad1 > edad2){
    // Ejecuta esto
    console.log("Edad uno es mayor a la edad dos");

// para hacer el no es con el Else
}else{
    console.log("La edad uno es inferior")
}
*/

var edad = 19;
var nombre = "Adelso Hernandez";


/*
//OPERADORES RELACIONALES
MAYOR: >
MENOR: <
MAYOR O IGUAL: >=
MENOR O IGUAL: <=
IGUAL: ==
DISTINTO: !=

*/
if(edad >= 18){
    //Mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
if(edad <= 33){
    console.log('Todavia eres Milenial');

    // else if es como hacer otro if pero en lugar de
    // agregarlo lo colocamos a un lado
}else if(edad >= 70){
    console.log('Eres Anciano');
}else{
    console.log('Ya no eres Milenial');
}


}else{
    //Menor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
