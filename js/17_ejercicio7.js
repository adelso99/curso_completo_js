'use strict'

/*
Tabla de Multplicar de un numero
introducido por pantalla
*/

var numero = parseInt(prompt('De que numero quieres la tabla', 1));

document.write("<h1>Tabla de "+numero+" completa:</h1>");

for(var i = 1; i <= 10; i++){
    document.write(numero+"x"+i+"="+(numero*i)+"<br/>");

}

// todas la tablas de multplicar
for(var c = 1; c <= 10; c++){

    document.write("<h1>Tabla de "+c+" completa:</h1>");

    for(var i = 1; i <= 10; i++){
        document.write(i+"x"+c+"="+(i*c)+"<br/>");

    }
}


