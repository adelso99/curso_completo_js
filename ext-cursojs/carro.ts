class Carro{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo:any = null){ 
        this.color = "Blanco";
        this.velocidad = 0;
        if(modelo == null){
            this.modelo = "BMW generico";
        }else{
            this.modelo = modelo;
        }
    }

    public getModelo(){
        return this.modelo;

    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getColor(){
        return this.color;

    }

    public setColor(color: string){
        this.color = color;
    }

    public acelear(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this,this.velocidad;
    }

} 


var carro = new Carro("Honda Civic");
var carro1 = new Carro();
var carro2 = new Carro();

carro.setColor("ROJO");
carro.acelear();
carro.acelear();
carro.acelear();

console.log("El modelo del Carro es de "+carro.getModelo());
console.log("El color del Carro es de "+carro.getColor());
console.log("La velocidad del Carro es de "+carro.getVelocidad());

carro.frenar();
console.log("La velocidad depues de frenar es "+carro.getVelocidad());



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

/*
Progrees ....3
*/

