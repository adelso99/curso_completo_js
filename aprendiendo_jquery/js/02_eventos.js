'use strict'
$(document).ready(function(){
    //alert("Eventos Js Cargados");

    //Eventos MouseOver y MouseOut
    var caja = $("#caja");
    
    /*
    caja.mouseover(function(){
       $(this).css("background", "red"); 
    });

    caja.mouseout(function(){
        $(this).css("background", "green"); 
     });
     */

     //metodo "Hover"

     function cambiaRojo(){
        $(this).css("background", "red"); 
     };

     function cambiaVerde(){
        $(this).css("background", "green"); 
     };

     //metodo "Hover"

     caja.hover(cambiaRojo, cambiaVerde);

     //Evento Click, Doble Click
     caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white");
     });

     caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow");
     });

});