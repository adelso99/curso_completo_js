import { Component } from "@angular/core";

// No se cierra con ";" porque es un decorador para una clase
@Component({
     selector: 'videojuego',
     template: `
        <h2>Componente de Videojuego</h2>
        <ul>
            <li>GTA 6</li>
            <li>FC25</li>
            <li>DLS25</li>
            <li>Mainecraft</li>
        </ul>
     `
})