'use strict'

//Arrays Multidimecional

var  categorias = ['Accion', 'Terror', 'comedia'];
var  Peliculas = ['IT eso', 'Tron el Legado', 'Saw X'];

var cine = [categorias, Peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
/*
var elemento = "";

do{
    elemento = prompt("Introduce la Pelicula: ");
    Peliculas.push(elemento);

}while(elemento != "ACABAR");
*/
//pop: sirve para eliminar el ultimo elemento de un array 
//Peliculas.pop();
//Peliculas.pop();
//Peliculas.pop();
//Peliculas[0] = undefined;
   

//push: sirve para añadir mas elementos al array

// para eliminar un elemento del array tambien se puede asi
var indice = Peliculas.indexOf("Saw X");
if(indice > -1){
    Peliculas.splice(indice, 1);
}

//join: para convertir un array a texto
var Peliculas_string = Peliculas.join();

console.log(Peliculas_string);

//console.log(indice);

//console.log(Peliculas);
