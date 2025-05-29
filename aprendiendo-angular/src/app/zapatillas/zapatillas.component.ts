//Deifincion de la Importacion del modulo del paquete
import { Component } from "@angular/core";

//Definicion de metadatos del componente
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
    public titulo: string = "Componente de Zapatillas";
}