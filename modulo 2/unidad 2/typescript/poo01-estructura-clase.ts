class Persona1 {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona1("Ana", 30);
persona1.saludar();


//trabajo  
class Usuario {
    nombre: string;
    id: number;
    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y mi id es ${this.id}.`);
    }
}

const maria = new Usuario("maria", 12545450);
maria.saludar();