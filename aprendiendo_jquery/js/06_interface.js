'use strict'
$(document).ready(function(){
    //console.log("hola");

    //1. draggable: Mover elemento por la pagina
    $('.elemento').draggable();

    //2. redimensionar elementos
    $('.elemento').resizable();

    //3 Selecionar Elemntos de la lsita
    //$(".lista_seleccionable").selectable();

      // 3.1 Metodo ordenar
      $(".lista_seleccionable").sortable({
        update: function(event, ui){
            console.log("A cambiado la lista");
        }
      });

});