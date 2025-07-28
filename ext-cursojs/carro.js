"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getColor = function () {
        return this.color;
    };
    Carro.prototype.setColor = function (color) {
        this.color = color;
    };
    Carro.prototype.acelear = function () {
        this.velocidad++;
    };
    Carro.prototype.frenar = function () {
        this.velocidad--;
    };
    Carro.prototype.getVelocidad = function () {
        return this, this.velocidad;
    };
    return Carro;
}());
var carro = new Carro("Honda Civic");
var carro1 = new Carro();
var carro2 = new Carro();
carro.setColor("ROJO");
carro.acelear();
carro.acelear();
carro.acelear();
console.log("El modelo del Carro es de " + carro.getModelo());
console.log("El color del Carro es de " + carro.getColor());
console.log("La velocidad del Carro es de " + carro.getVelocidad());
carro.frenar();
console.log("La velocidad depues de frenar es " + carro.getVelocidad());
/*
carro1.setColor("AZIL");
carro2.setColor("VERDE");

console.log("El color del Carro es de "+carro.getColor());
console.log("El color del Carro es de "+carro1.getColor());
console.log("El color del Carro es de "+carro2.getColor());
*/

/*
Progrees ....1
*/
/*
Progrees ....2
*/
