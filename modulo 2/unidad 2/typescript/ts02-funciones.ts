function saludarPersona(nombre: string): string {
    return `Hola ${nombre}`;
}

console.log(saludarPersona("betty Marmol"));

function obtenerapellidos(apellido?: string){
    return `mi apellido, ${apellido ?? "invitado"}`;
}
console.log(obtenerapellidos("picapiedra"));
console.log(obtenerapellidos());

function obteneredad(edad: number=18){
    return `mi edad es ${edad}`;
}
console.log(obteneredad(25));
console.log(obteneredad());

const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("la suma es", sumar(5, 4));

function mostrarInformacion(informacion: string): void {
    console.log(informacion);
}
mostrarInformacion("suceso en el norte de quito");

let operacion: (x: number, y: number) => number;
operacion = function(a,b) {
    return a + b;
}
console.log(operacion(5, 4));


function saludarGrupo(personas: string[]): void {
    for(let i = 0; i < personas.length; i++) {
        console.log("Hola " + personas[i]);
    }
}


const grupo = ["Pedro", "Juan", "María"];
saludarGrupo(grupo);

