// Se puede definir de una vez un tipo de dato
type letrasonumeros = string | number;


//Dato String
let cadena: letrasonumeros = "Adelso Hernandez";

cadena = 15;

//Dato Number
let numero: number = 12;

//Dato Boleano
let verdadero_falso: boolean = true;

//Dato Any: para crear cualquier variable
let cualquiera: any = "Hola";

cualquiera = 72;

//Definicion de Arrays
// Forma 1
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

// Forma 2
let years: number[] = [2, 3, 21, 12];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);