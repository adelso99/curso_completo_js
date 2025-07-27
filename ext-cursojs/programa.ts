class Programa{
    public nombre!: string;
    public version!: number;

    
    getNombre(){
         return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
   }

    setVersion(version:number){
        this.version = version;
    }

}

class EditorVideo extends Programa{
    public timeline!:number;

    setTimeline(timeline:number){
        this.timeline = timeline;
    }

    getTimeline(){
        return this.timeline;
   }

   getAllData():string{
        return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
   }
}

var editor = new EditorVideo();
editor.setNombre("Hola estudio");
editor.setVersion(8);
editor.setTimeline(4000);


console.log(editor.getAllData());


/*
Progrees .....1
*/
