class vehiculo {
  public marca: string;
  constructor(marca: string) {
    this.marca = marca;
  }
  moverse(): void {
    console.log(`El vehiculo ${this.marca} se mueve`);
  }
}

class Moto extends vehiculo {
  hacerCaballito(): void {
    console.log(`La moto ${this.marca} hace caballito`);
  }
}

const miVehiculo = new vehiculo("Toyota");
miVehiculo.moverse();
const miMoto = new Moto("Yamaha");
miMoto.moverse();
miMoto.hacerCaballito();
