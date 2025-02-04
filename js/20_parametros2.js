'use strict'

// Parmetros de REST(resto) Y SPREAD 

//PARAMETRSO DE TIPO REST (...)
function listadofrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log(resto_de_frutas);

}

listadofrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//PARAMETRO SPRENT

var frutas = ["Naranja", "Manzana"]
listadofrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");