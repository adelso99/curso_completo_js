'use strict'

// JSON: JavaScript Object Notation
// un objeto de define con llavaes {}

var pelicula = {
    titulo: 'Btman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

// ARAY DE PELICULAS
var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

//pelicula.titulo = "Superman Begnis";
//console.log(pelicula);

var caja_peliculas = document.querySelector("#peliculas")
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    caja_peliculas.append(p);
}

 