abstract class trabajador {
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    calculoSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es de 0`);
    }
}

class obrero extends trabajador {
    constructor(nombre: string) {
        super(nombre);
    }
    calculoSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es de 1000`);
    }
}

class medico extends trabajador {
    constructor(nombre: string) {
        super(nombre);
    }
    calculoSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es de 2000`);
    }
}

const elMedico = new medico("Juan");
elMedico.calculoSueldo();
const carpintero = new obrero("Pedro");
carpintero.calculoSueldo();

