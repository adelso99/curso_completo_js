'use strict'

// Funciones
/*
Conjunto de ordenes que se ejecutan cuando realizamos 
la funcion
Se cree con la palabra recervada. function
*/

//Definicion de la funcion

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta: "+(numero1-numero2)+"<br/>");
    document.write("Multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("Division: "+(numero1/numero2)+"<br/>");
    document.write("************************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }


    /*
    //Conjunto de Instrucciones a ejecutar
    
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************************");
    }else{
    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta: "+(numero1-numero2)+"<br/>");
    document.write("Multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("Division: "+(numero1/numero2)+"<br/>");
    document.write("************************"+"<br/>");
    }
    
   */
   
    // console.log("Si soy yo");

    return true;
}

// Invocar o llamar a la funcion
//var resultado = calculadora();
//console.log(resultado);
//calculadora(12, 8);
//calculadora(98, 2);

calculadora(1, 4);
calculadora(2, 5, true);
calculadora(3,8, true);


/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
    */