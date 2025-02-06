'use strict'
/*
1. Pida 6 numeros por pantalla y que los meta en un ARRAY
2. tiene que mostrar el array entero (todos los elementos)
    en el cuerpo de la pagina y la consola.
3. Ordenarlo y Mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el ARRAY 
6. Hacer una Busqueda de un valor introduccido por el usuario
    que diga si lo encuentra y su indice
*/

//Funcion para mostrar el array y hacer llamado de la funcion
//cuando se desee mostrar
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Estos son los Numeros de los Arrays"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//1. Pedir los 6 numeros
//tambieen se puede asi
//var numeros = new Array(6);
var numeros = [];

for(var i = 0; i <= 5; i++){

    //tambien se puede pedir asi los numeros
    //numeros[i] = parseInt(prompt("Ingrese un numero: ", 0));
    numeros.push(parseInt(prompt("Ingrese un numero: ", 0)));

}

// 2. Mostrar el Array por la consola y Pagina
//2.1 Por Consola
console.log(numeros);

//2.2 Por la Pagina
mostrarArray(numeros);

//document.write("<ul>");
//document.write("<li>"+numeros+"</li>");
//document.write("</ul>");

//3. ordenar y Mostrar
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, ' ordenado');


//4. Inveritr y Mostrar
numeros.reverse();
mostrarArray(numeros, ' revertir');

//5. Cuantos elementos tiene un Array
document.write("<h1>El Array tiene: "+numeros.length+" elementos");

//6. Busqueda de un valor Introducido por el usuario
//busqueda
var busqueda = parseInt(prompt("BUSCA UN NUMERO----- :) : ", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la Busqueda: "+posicion+"<hr/></h1>");

}else{
    document.write("<hr/><h1>NO ENCONTRADO :( </h1>");
}




/*

document.write("<h1>"+"Los Elementos del Array son los Siguintes"+"</h1>");
document.write("<ul>");

var elementos = [];

do{
    elementos = parseInt(prompt("Introduce los Numeros del Array: "));
    elementos.push(elementos);

}while(elementos != 6)
*/
/*
for(var i = 0; i < elementos.length; i++){
        elementos = parseInt(prompt("Introduce los Numeros del Array: "));
        document.write("<li>"+elementos[i]+"</li>");
        
}
document.write(elementos);


document.write("</ul>");
/*

/*
lenguajes.forEach((elemento, indice)=>{
    //console.log(arreglo);
    document.write("<li>"+indice+" "+elemento+"</li>");
});
/*

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

