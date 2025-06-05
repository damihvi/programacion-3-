var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad", cantidad);
console.log("nombre", nombre);
console.log("opcion", opcion);
var opcional = "comodin any";
opcional = 100;
var equipos = ["Barcelona", "Real Madrid", "ecuador", "vino tinto", "la liga"];
console.log("equipos", equipos);
var edades = [10, 12, 23, 456];
console.log("edades", edades);
//tuplas
var persona = ["ute", 616161];
console.log("persona", persona);
//enums
var estados;
(function (estados) {
    estados[estados["pendiente"] = 0] = "pendiente";
    estados[estados["enviado"] = 1] = "enviado";
    estados[estados["entregado"] = 2] = "entregado";
})(estados || (estados = {}));
