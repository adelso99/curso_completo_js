class Carro{
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor(){
        return this.color;

    }

    public setColor(color: string){
        this.color = color;
    }

} 


var carro = new Carro();

carro.setColor("ROJO");

console.log("El color del Carro es de "+carro.getColor());