'use strict'

// Funciones anonimas
// Funcion que no tiene nombre

/*var pelicula = function(nombre){
    return "La Pelicula Es: "+nombre;
}
*/
// COOLBACK funcion dentro de una funcion 

function sumame(numero1, numero2, sumaymuestra, sumapordos){
    var sumar = numero1 + numero2;

    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
} 

sumame(5, 7, (dato) =>{
    console.log("La suma es:", dato);
},

//Tambien se puede en lugar de poner function se pone asi =>
//dato =>{
function(dato){
    console.log("La suma por dos es: "+(dato*2))
});


/*console.log(
    sumame(4, 5)
);
*/
