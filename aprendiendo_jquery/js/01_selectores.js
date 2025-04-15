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


    //Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    //Selectores de atributo: Se debe usar los []
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    //Otros
    //Agregar margen superior
    //$('p, a').addClass('margen-superior');

    //Buscar elementos espesificos con clase
   var busqueda = $("#elemento2").parent().parent().find('.resaltado');

   console.log(busqueda);

});

// por hoy 1:)
// por hoy 2 :)
// por hoy 3 :)
// por hoy 4 :)
// por hoy 5 :)