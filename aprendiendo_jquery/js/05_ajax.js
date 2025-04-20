'use strict'
$(document).ready(function(){
   // alert("Ajax Hola");

   //1. Metodo Load
   //$("#datos").load("https://reqres.in/");

   //Metodos GET y POST
   //1. GET
   $.get("https://reqres.in/api/users", {page: 2}, function(response){
    response.data.forEach((element, index) => {
        $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
    });
   });
    
    //Ejemplo 2 de GET
   //$.get("https://reqres.in/api/users", { page: 1 }, function(response){
    // Recorrer cada usuario y agregarlo al div
    //response.data.forEach(function(usuario){
      //$('#datos').append(
       // "<p>" + usuario.first_name + " " + usuario.last_name + "</p>"
    //  );
   // });
 // });


     // 2. Eventos de POST
  //Trabajando sobre el formulario
 $("#formulario").submit(function(e){
    e.preventDefault();
    
        var usuario = {
          name: $('input[name="name"]').val(),
          web: $('input[name="web"]').val()
      };
      
      /*
      $.post($(this).attr("action"), usuario, function(response){
        console.log(response);
      }).done(function(){
        alert("Usuario Añadido Correctamente");
     });
     */

     // 2.1 Tamnbien esta usar AJAX asi como POST:

     $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        //METODO BeforeSend: Antes que se envie haga una opcion
        beforeSend: function(){
            console.log("Enviando Usuario...");
        },
        success: function(response){
          console.log(response);
        },
        error: function(){
          console.log("A ocurrido un Error.... :( ");
        },
        timeout: 1000
        //dataType: 'json',
        //contentType: 'aplication/json'
     });

      return false;

 });

});