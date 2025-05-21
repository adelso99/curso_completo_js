"use strict";
// Clase (Molde del Objeto, donde se crean un moton de objetos con caratersiticas similares)
//Regularmente la clase debe de llamarse igual que el fichero
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiseta = void 0;
//export: para exportar a otro fichero ts una clase para usarla
var Camiseta = /** @class */ (function () {
    // Metodos (Funciones o accione del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
/*
var camiseta = new Camiseta("rojo", "manga larga", "nike", "s", 14);
camiseta.setColor("Rojo");
//camiseta.getColor();


camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;


///var playera = new Camiseta();
//playera.setColor("Azul");



playera.color = "Azul";
playera.modelo = "manga corta";
playera.marca = "Adidas";
playera.talla = "S";
playera.precio = 35;


console.log(camiseta);

*/ 
