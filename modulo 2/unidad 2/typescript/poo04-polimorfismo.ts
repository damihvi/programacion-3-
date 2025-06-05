class Animal {
    nombre: string;
    constructor(nombre: string) {
      this.nombre = nombre;
    }
    hacerSonido(): void {
      console.log(`${this.nombre} hace un sonido`);
    }
  }
  
  class gato extends Animal {
    hacerSonido(): void {
      console.log(`${this.nombre} maulla`);
    }
  }
  
  class vaca extends Animal {
    hacerSonido(): void {
      console.log(`${this.nombre} muge`);
    }
  }
  
  const miGato = new gato("Miau");
  miGato.hacerSonido();
  
  const miVaca = new vaca("Muu");
  miVaca.hacerSonido();