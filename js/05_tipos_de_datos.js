'use strict'
//Operadores
var numero1 = 99;
var numero2 = 1;
var operacion = numero1 * numero2;

alert("El resultado de la operacion es: "+operacion);


//Tipos de Datos
var numero_entero = 10;
var cadena_texto = "Hola que tal";
var verdadero_o_falso = false;

var numero_falso = "54.5";


Number();

// Con Number lo convierte a numero para hacer la suma
// lo saca de la cadena de texto que se encuntra
//console.log(Number(numero_falso)+7);

// Con parseInt lo convierte a numero para hacer la suma
// lo saca de la cadena de texto que se encuentra para 
// Convertirlo en un entero
//console.log(parseInt(numero_falso)+7);

// Con parseFloat lo convierte a numero para hacer la suma
// lo saca de la cadena de texto que se encuentra para 
// pero este deja convertirlo o sumarlo con decimal
// console.log(numero_entero+4);


// Uso de STRING para convertir cualquier variable a texto
//console.log(String(numero_entero)+4);


//typeof
// para detectar es una variable
console.log(typeof numero_entero);
console.log(typeof numero_falso);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);