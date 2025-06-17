import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{

 public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Vans News', 'Vans', 'Rojas', 90, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook new', 'Reebook', 'red', 810, true),
            new Zapatilla('Nike Panda', 'Nike', 'Negras', 60, true),
            new Zapatilla('Nike AF1', 'Nike', 'Blanco', 150, false)
        ];
    }

    getTexto(){
        return "Hola Mundo desde un Servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
