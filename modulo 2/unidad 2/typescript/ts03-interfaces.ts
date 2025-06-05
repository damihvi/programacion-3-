interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
    saludar: () => void;
}

let empleado: Persona = {
    nombre: "bob",
    apellido: "marley",
    edad: 0,
    saludar: function (): void {
        throw new Error("Function not implemented.");
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