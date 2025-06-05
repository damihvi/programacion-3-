var empleado = {
    nombre: "bob",
    apellido: "marley",
    edad: 0,
    saludar: function () {
        throw new Error("Function not implemented.");
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
