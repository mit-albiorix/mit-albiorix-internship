class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        console.log("i have a",this.brand);
    }
}

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }

    show(){
        console.log(this.present() +" of "+this.model);
    }
}

let mycar = new Model("verna","hyundai");
mycar.show()
mycar.present()