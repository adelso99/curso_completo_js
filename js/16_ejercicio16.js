'use strict'
/*
hacer un programa que diga si el
numero es par o impar

ventana que pida el numero, que compruebe que si el
numero no es valido que nos pida denuevo el numero

*/

var number = parseInt(prompt("Introduce el numero Valido"), 0);

while(isNaN(number)){
    number = parseInt(prompt("Introduce un numero Valido"), 0);
}

if(number % 2 === 0){
    document.write("El numero Ingresados es Par </br>");
}else{
    document.write("El numero Ingresados No es Par </br>");
}