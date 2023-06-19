class Car {
    constructor(name) {
      this.brand = name;
    }
    
    present() {
      console.log( 'I have a ' + this.brand);
    }
  }
  
  const mycar = new Car("Ford");
  mycar.present();