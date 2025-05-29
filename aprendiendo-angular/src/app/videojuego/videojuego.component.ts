import { Component } from '@angular/core';

// No se cierra con ";" porque es un decorador para una clase
@Component({
     selector: 'videojuego',
     // Cargando el Html de videojuego desde url
     templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent {
    public titulo: string;
    public listado: string;

    constructor(){
        // Assignado valor al titulo
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";

        console.log("Se ha cargado el componente: Videojuego.component.ts");
    }

}