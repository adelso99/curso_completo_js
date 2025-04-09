'use strict'
// $ o jQuery: hace referencia a jQuery
//Selector: es lo siguiente despues del signo $ o jQuery


$(document).ready(function(){
    //Selectores de ID
    $("#rojo").css("background","red")
                .css("color", "white");

    $("#amarillo").css("background", "yellow")
                  .css("color", "green");

    $("#verde").css("background", "green")
                  .css("color", "white");
    
    //Selector de Clases
    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_borde').click(function(){
        console.log("click dado!!");
        $(this).addClass('zebra');
    });


});

// por hoy :)