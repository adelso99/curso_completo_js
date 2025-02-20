'use strict'
window.addEventListener('load', function(){
    console.log("DOM, Cargado")

    //2.Boton de enviar el formulario: eventos submit
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento Submit Capturado")

        // 3. Mostrar datos en pantalla
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        /*
        var datos_usuarios = [nombre, apellidos, edad];
        var indice;

        for(indice in datos_usuarios){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);

        }
        */
        //parrafo.append(nombre);
        //parrafo.append(apellidos);
        //parrafo.append(edad);
        
    });



});