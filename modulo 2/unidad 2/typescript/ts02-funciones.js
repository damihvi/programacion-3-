function saludarPersona(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludarPersona("betty Marmol"));
function obtenerapellidos(apellido) {
    return "mi apellido, ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerapellidos("picapiedra"));
console.log(obtenerapellidos());
function obteneredad(edad) {
    if (edad === void 0) { edad = 18; }
    return "mi edad es ".concat(edad);
}
console.log(obteneredad(25));
console.log(obteneredad());
var sumar = function (a, b) {
    return a + b;
};
console.log("la suma es", sumar(5, 4));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("suceso en el norte de quito");
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log(operacion(5, 4));
// Función simplificada que recibe un arreglo y saluda
function saludarGrupo(personas) {
    for (var i = 0; i < personas.length; i++) {
        console.log("Hola " + personas[i]);
    }
}
// Ejemplo de uso
var grupo = ["Pedro", "Juan", "María"];
saludarGrupo(grupo);
