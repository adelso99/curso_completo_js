//Dato String
var cadena = "Adelso Hernandez";
cadena = 15;
//Dato Number
var numero = 12;
//Dato Boleano
var verdadero_falso = true;
//Dato Any: para crear cualquier variable
var cualquiera = "Hola";
cualquiera = 72;
//Definicion de Arrays
// Forma 1
var lenguajes = ["PHP", "JS", "CSS"];
// Forma 2
var years = [2, 3, 21, 12];
//Let vs var
// var funciona a nivel global
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    // let funciona a nivel de bloque
    var numero1_1 = 44;
    var numero2_1 = 55;
    console.log(numero1_1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
