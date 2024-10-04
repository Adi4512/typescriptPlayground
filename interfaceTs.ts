interface computer {
    name : string;
    RAM : number;
    hdd : number
}

class Macboook implements computer{
    name: string;
    RAM: number;
    hdd: number;

    constructor(name:string, RAM:number, hdd:number){
        this.name=name;
        this.RAM=RAM;
        this.hdd=hdd;
    }
}

const macbook1=new Macboook('m1',16,512);

console.log(macbook1); 
console.log(macbook1.RAM); 
console.log(macbook1.name); 
