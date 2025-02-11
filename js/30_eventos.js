'use strict'
//Evento load: para que no exita conflicto en el llamdo del script de html
window.addEventListener('load', () => {

            // Eventos del Raton
        function cambiarColor(){
            console.log("Me Has dado Click");

            var bg = boton.style.background;

            if(bg == "green"){
                boton.style.background = "red";
                
            }else{
                boton.style.background = "green";
            }

            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";

            return true;
        }

        var boton = document.querySelector("#boton");


        //Click
        boton.addEventListener('click', function(){
            cambiarColor();
        });

        //Mouse Over: pasar por encima de un boton cambia de color
        boton.addEventListener('mouseover', function(){
            boton.style.background = ("yellow");
        });

        //Mouse Out: Similar al Mouse Over, pero cuando sales
        boton.addEventListener('mouseout', function(){
            boton.style.background = ("#ccc");
        });


        // Evento Focus
        var input = document.querySelector("#campo_nombre");

        input.addEventListener('focus', function(){
            console.log("[focus]Estas dentro del Input");
        });


        // Evento Blur
        input.addEventListener('blur', function(){
            console.log("[blur]Estas Fuera del Input");
        });


        // Evento Keydown
        input.addEventListener('keydown', function(event){
            console.log("[keydown]Estas Pulsando una Tecla", String.fromCharCode(event.keyCode));
            
        });

        // Evento Keypress
        input.addEventListener('keypress', function(event){
            console.log("[keypress]Tecla Precionada", String.fromCharCode(event.keyCode));
            
        });

        // Evento Keyup
        input.addEventListener('keyup', function(event){
            console.log("[keyup]Tecla Soltada", String.fromCharCode(event.keyCode));
            
        });

});// Final del evento load

