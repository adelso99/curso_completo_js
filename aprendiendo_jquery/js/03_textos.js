'use strict'
$(document).ready(function(){

    reloadlinks();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');
        
        $("#add_link").val('');
        reloadlinks();
         });

    //alert("Hola");
    //console.log($('a').length);

   
});

function reloadlinks(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        
        //para que el enlace sea en otra nueva pestaña
        that.attr('target', '_blank');
        

        that.text(enlace);
    });

}

