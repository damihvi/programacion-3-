// manipulacion de objeto

let alumno = {
    nombre : "juan",
    apellido : "ampies",
    direccion : "Av.amazonas",
    telefono : "0987654321",

}

console.log(alumno);
console.log("apellido del alumno: ", alumno.apellido);
console.log("nombre del alumno: ", alumno["nombre"]);

//modificar propiedades
alumno.apellido = "lopez";
alumno["direccion"] = "Av.Bolivar";

console.log(alumno);

//incluir nueva propiedad
alumno.promedio = 9;

console.log(alumno);

delete alumno.promedio;
console.log(alumno);

alumnoclonado = {...alumno};
alumnoclonado.nombre = "antonio";
alumnoclonado.apellido = "Apellido";
console.log(alumnoclonado);

//multiplicar precio unitario * cantidad y sumarle el iva 
item = {
    precioUnitario : 23,
    cantidad : 3,
    iva : 3.4,
    nombre : "laptop",
    subtotal : 0
}

item.subtotal = item.precioUnitario * item.cantidad + item.iva;
console.log(item);
for (let clave in item){
    console.log(clave + " : " + item[clave]);
}
console.log(Object.keys(item));

console.log(Object.values(item));

//metodos o funciones de un objeto

usuario = {
    nombre : "luis",
    saludar : function(){

        console.log("Hola soy " + this.nombre);
    }
}
console.log(usuario.saludar());

//objetos animados

categoria = {
    nombre : "electronica",
    productos : ["laptop", "monitor", "teclado", {cantidad : 12, marca : "sony"}],
    descripcion : {
        capacidad : "16hz",
        tamaño : "12 pulgadas"
    }
}

console.log(categoria);



