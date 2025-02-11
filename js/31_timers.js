'use strict'
window.addEventListener('load', function(){

function intervalo(){
    //Timers--- setTimeout: solo se ejecuta una vez
    //          setInterval: se ejecuta como uhn bucle
    var tiempo = setInterval (function(){
        console.log("Set Interval ejecutando");
        
        var encabezado =  document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px"
        }

    }, 1000);

        return tiempo;
}

var tiempo = intervalo();

    // Boton de Inicio (START)
    var start = document.querySelector("#start");
    
    start.addEventListener("click", function(){
        alert("Has Iniciado el intervalo del Bucle");
        intervalo();
    });

 // Boton de Finalizacion (STOP)
    var stop = document.querySelector("#stop");

        stop.addEventListener("click", function(){
            alert("Has parado el intervalo del Bucle");
            clearInterval(tiempo);
        });


});