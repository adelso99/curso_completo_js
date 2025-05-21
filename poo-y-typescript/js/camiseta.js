//Regularmente la clase debe de llamarse igual que el fichero
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase (Molde del Objeto, donde se crean un moton de objetos con caratersiticas similares)
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
//Clase Hija: se usa "extends"
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("fdsa", "fdsa", "fdsa", "fdsa", 12);
console.log(camiseta);
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "S", 20);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Verde");
console.log(sudadera_nike);
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
