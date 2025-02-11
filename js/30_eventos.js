'use strict'

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
