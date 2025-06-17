//Deifincion de la Importacion del modulo del paquete
import { Component, OnInit} from "@angular/core";
// Importacion de la clase Zapatilla.ts 
// .. Porque estoy en otra carpeta
import { Zapatilla } from "../models/zapatilla";

import { ZapatillaService } from "../service/zapatilla.service";

//Definicion de metadatos del componente
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService : ZapatillaService
    ){
        this.mi_marca = "Fila";
        this.color = 'blue';
        this.marcas = new Array();

    }

    ngOnInit(){
       this.zapatillas = this._zapatillaService.getZapatillas(); 
        alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
           
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
              
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index){
        //delete this.marcas[index];
        //splice: elimina valores de un array
        // con el 1 indico que solo 1 elemento se borra
        this.marcas.splice(index, 1);
    }
    onBlur(){
        console.log("Has salido del Input");
    }
    mostrarPalabra(){
        alert(this.mi_marca);
    }

}

/*
pogress ......................... 1
*/

/*
pogress ......................... 2
*/

