'use strict'
$(document).ready(function(){
        //alert("Efectos");

        //EFectos hide y show

        $("#mostrar").hide();
              
        $("#mostrar").click(function(){
            $(this).hide();  // Oculta el mismo botón
            $("#ocultar").show();  // Muestra el botón "ocultar"

            //slideDown: muestra con deslizamiento
            $("#caja").slideDown('slow'); // Muestra la caja con una animación deslizante lenta
        });

        $("#ocultar").click(function(){
            $(this).hide(); // Oculta el mismo botón
            $("#mostrar").show(); // Muestra el botón "mostrar"

            //slideUp: oculta con deslizamiento.
            $("#caja").slideUp('slow'); // Oculta la caja con una animación deslizante lenta
        });

        $("#todoenuno").click(function(){

            //slideToggle: cambia entre mostrar y ocultar automáticamente.
            $("#caja").slideToggle('fast'); // Alterna entre mostrar y ocultar la caja con animación rápida
        });


});