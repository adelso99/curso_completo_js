'use strict'
// bucle WHILE: while significa mientras
// Iterador de incrmento ++
// Iterador de decrmento --
var year = 2024;

while(year != 1991){
    //Ejecuta esto
    console.log("Estamos en el año: "+year);

    if(year == 2000){
        break;
    }
    year--;
}



// DO WHILE
var years = 30;
do{
    alert("Solo cuando sea diferente a 20");
    years--;
}while(years > 25);
