//Regularmente la clase debe de llamarse igual que el fichero

//export: para exportar a otro fichero ts una clase para usarla
//export class Camiseta{

//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Clase (Molde del Objeto, donde se crean un moton de objetos con caratersiticas similares)
class Camiseta implements CamisetaBase{

    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (Funciones o accione del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color
    }

}

//Clase Hija: se usa "extends"
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

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


/*
proges ... 1
*/




