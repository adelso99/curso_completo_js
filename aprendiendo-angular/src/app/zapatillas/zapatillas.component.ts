//Deifincion de la Importacion del modulo del paquete
import { Component, OnInit} from "@angular/core";
// Importacion de la clase Zapatilla.ts 
// .. Porque estoy en otra carpeta
import { Zapatilla } from "../models/zapatilla";

//Definicion de metadatos del componente
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Vans News', 'Vans', 'Rojas', 90, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Nike Panda', 'Nike', 'Negras', 60, true),
            new Zapatilla('Nike AF1', 'Nike', 'Blanco', 150, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);        
    }
}