'use strict'
$(document).ready(function(){

        var caja = $("#caja");
        //alert("Efectos");

        //EFectos hide y show

        $("#mostrar").hide();
              
        $("#mostrar").click(function(){
            $(this).hide();  // Oculta el mismo botón
            $("#ocultar").show();  // Muestra el botón "ocultar"

            //slideDown: muestra con deslizamiento
            caja.slideDown('slow'); // Muestra la caja con una animación deslizante lenta
        });

        $("#ocultar").click(function(){
            $(this).hide(); // Oculta el mismo botón
            $("#mostrar").show(); // Muestra el botón "mostrar"

            //slideUp: oculta con deslizamiento.
            caja.slideUp('slow', function(){ // Oculta la caja con una animación deslizante lenta
                console.log("Cartel Ocultado");
            }); 
            
        });

        $("#todoenuno").click(function(){

            //slideToggle: cambia entre mostrar y ocultar automáticamente.
            caja.slideToggle('fast'); // Alterna entre mostrar y ocultar la caja con animación rápida
        });

        $("#animame").click(function(){
            caja.animate({
                        marginLeft: '500px', // Mueve la caja 500px a la derecha
                        fontSize: '40px',  // Aumenta el tamaño del texto
                        height: '110px'  // Aumenta la altura de la caja
                        }, 'slow')
                    .animate({
                        borderRadius: '900px', // Redondea totalmente la caja (como un círculo)
                        marginTop: '80px' // La empuja 80px hacia abajo
                    }, 'slow')
                    .animate({
                        borderRadius: '0px', // Vuelve a dejar las esquinas cuadradas
                        marginLeft: '0px' // Regresa la caja a la izquierda
                    }, 'slow')
                    .animate({
                        borderRadius: '100px',  // Vuelve a redondear un poco
                        marginTop: '0px' // Sube la caja a su posición original
                    }, 'slow')
                    .animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                        }, 'slow')
                ;
        });


});