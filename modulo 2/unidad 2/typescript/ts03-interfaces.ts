interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
    saludar: () => void;
}

let empleado: Persona = {
    nombre: "bob",
    apellido: "marley",
    edad: 36,
    saludar: function (): void {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
}
console.log("empleado", empleado);

interface credenciales {
    usuario: string;
    clave: string;
}

function login(credencial: credenciales): void {
    console.log("bienvenido", credencial.usuario);
}
let miUsuario: credenciales = {
    usuario: "bob",
    clave: "123456"
}

// Llamar la función login con el usuario creado
login(miUsuario);

// Llamar la función saludar del empleado
empleado.saludar();