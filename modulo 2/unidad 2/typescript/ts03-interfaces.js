var empleado = {
    nombre: "bob",
    apellido: "marley",
    edad: 36,
    saludar: function () {
        console.log("Hola, soy ".concat(this.nombre, " ").concat(this.apellido));
    }
};
console.log("empleado", empleado);
function login(credencial) {
    console.log("bienvenido", credencial.usuario);
}
var miUsuario = {
    usuario: "bob",
    clave: "123456"
};
// Llamar la función login con el usuario creado
login(miUsuario);
// Llamar la función saludar del empleado
empleado.saludar();
