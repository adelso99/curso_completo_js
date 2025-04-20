'use strict'
$(document).ready(function(){
   // alert("Ajax Hola");

   //1. Metodo Load
   //$("#datos").load("https://reqres.in/");

   //Metodos GET y POST
   //GET
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


 // Eventos de POST
 $.post();

});