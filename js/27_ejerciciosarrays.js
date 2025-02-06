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

var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Ingrese un numero: ", 0));

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

