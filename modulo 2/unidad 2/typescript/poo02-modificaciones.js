var libro = /** @class */ (function () {
    function libro(nombre, paginas) {
        this.dni = "123456789";
        this.nombre = nombre;
        this.paginas = paginas;
    }
    libro.prototype.cantidadPaginas = function () {
        console.log("cantidad de paginas ".concat(this.paginas));
    };
    return libro;
}());
