'use strict'
$(document).ready(function(){
    //console.log("hola");

    //draggable: Mover elemento por la pagina
    $('.elemento').draggable();

    //redimensionar elementos
    $('.elemento').resizable();

    //Selecionar Elemntos de la lsita
    $(".lista_seleccionable").selectable();

});