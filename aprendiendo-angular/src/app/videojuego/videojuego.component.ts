import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// No se cierra con ";" porque es un decorador para una clase
@Component({
     selector: 'videojuego',
     // Cargando el Html de videojuego desde url
     templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        // Assignado valor al titulo
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";

        console.log("Se ha cargado el componente: Videojuego.component.ts");
    }
    
    ngOnInit(){
        console.log("OnInit Ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck Ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

}