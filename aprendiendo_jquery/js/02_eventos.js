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

     //Eventos Focus y Blur 
     var nombre = $("#nombre");
     var datos = $("#datos");

     nombre.focus(function(){
         $(this).css("border", "2px solid green");
     });

     nombre.blur(function(){
      $(this).css("border", "1px solid #ccc");

      datos.text($(this).val()).show();
  });


  //Eventos de Mousedown y Mouseup
  // var datos = $("#datos"); esta agregada la variable arriba
  // pero le dare mas uso en este apartado  
   datos.mousedown(function(){
      $(this).css("border-color", "gray");
   });

   datos.mouseup(function(){
      $(this).css("border-color", "black");
   });
  

   //Evneto Mousemove
   $(document).mousemove(function(){
      //console.log("en X: "+event.clientX);
      //console.log("en Y: "+event.clientY);

      //Ocultar el curso del mouse con la siguiente linea
      $('body').css("cursor","none");

     $("#sigueme").css("left",event.clientX)      
                  .css("top",event.clientY);      
   });
});